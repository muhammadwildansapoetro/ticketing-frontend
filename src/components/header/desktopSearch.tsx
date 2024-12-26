"use client";

import axios from "@/helpers/axios";
import DateFormatter from "@/helpers/dateFormatter";
import { IEvent } from "@/types/event";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function DesktopSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [value, setValue] = useState<string>(searchParams.get("keyword") || "");
  const [search] = useDebounce(value, 500);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchEvents = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/events?search=${search}`);
      setEvents(data.events);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  const queryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    router.push(pathname + "?" + queryString("keyword", search));
    searchEvents();
  }, [search, router, pathname, queryString, searchEvents]);

  return (
    <div className="hidden items-center lg:flex">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search match here"
        className="h-10 w-52 rounded-lg bg-accent px-2 placeholder-white focus:bg-white focus:outline-none focus:-outline-offset-4 focus:outline-accent/50 xl:w-96"
      />

      {value.length > 0 && (
        <>
          {isLoading ? (
            <div className="absolute top-16 flex h-fit w-96 flex-col gap-5 border border-accent/50 bg-white p-5 shadow-lg">
              Searching...
            </div>
          ) : events.length === 0 ? (
            <div>Match not found</div>
          ) : (
            <div className="absolute top-16 flex h-fit w-96 flex-col rounded-lg border border-accent/10 bg-white p-5 shadow-lg">
              {events.map((event, index) => {
                return (
                  <div
                    key={index}
                    data-cy="event list"
                    className="flex flex-col"
                  >
                    <Link
                      href={`/event/${event.id}`}
                      className="flex gap-3 py-3 tracking-wide hover:bg-accent/10"
                    >
                      <Image
                        src={`${event.image}`}
                        alt={`${event.title}`}
                        width={100}
                        height={100}
                      />
                      <div className="flex flex-col">
                        <p className="text-lg">{event.title}</p>
                        <p className="text-gray-500">
                          {DateFormatter(event.date)}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
