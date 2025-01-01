"use client";

import axios from "@/helpers/axios";
import DateFormatter from "@/helpers/dateFormatter";
import { IEvent } from "@/types/event";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { BiSearch } from "react-icons/bi";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useToggle from "@/hooks/useToggle";

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [value, setValue] = useState<string>(searchParams.get("search") || "");
  const [search] = useDebounce(value, 500);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isOpen, handleToggle } = useToggle();

  const searchEvents = useCallback(async () => {
    if (!search) return;
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
    router.push(pathname + "?" + queryString("search", search));
    searchEvents();
  }, [search, pathname, queryString, router, searchEvents]);

  return (
    <div className="flex items-center">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search match here"
        className="hidden h-10 w-52 rounded-lg border border-white bg-accent px-2 placeholder-white focus:bg-white focus:outline-none focus:-outline-offset-4 focus:outline-accent/50 lg:block xl:w-96"
      />

      <button onClick={handleToggle} className="absolute right-12 lg:hidden">
        <BiSearch className="size-6 text-white" />
      </button>

      <div className={`${isOpen ? "absolute inset-0" : "hidden"} `}>
        <div className="flex h-12 w-full items-center justify-between bg-accent pl-5 pr-11">
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search match here"
            className="h-10 w-full rounded-lg px-2 py-1 focus:outline-none focus:-outline-offset-4 focus:outline-accent/50 lg:hidden"
          />
          <button type="button" onClick={handleToggle}>
            <XMarkIcon className="size-8 items-center text-white" />
          </button>
        </div>
      </div>

      {value.length > 0 && (
        <>
          {isLoading ? (
            <div className="absolute inset-x-0 top-14 z-10 flex h-fit w-full flex-col gap-5 border border-accent/50 bg-white p-5 shadow-lg lg:left-64 lg:top-16 lg:w-96">
              Searching...
            </div>
          ) : events.length === 0 ? (
            <div className="absolute inset-x-0 top-14 z-10 flex h-fit w-full flex-col rounded-lg border border-accent/10 bg-white p-5 shadow-lg lg:left-64 lg:top-16 lg:w-96">
              Match not found
            </div>
          ) : (
            <div className="absolute inset-x-0 top-14 z-10 flex h-fit w-full flex-col rounded-lg border border-accent/10 bg-white p-5 shadow-lg lg:left-64 lg:top-16 lg:w-96">
              {events.map((event, index) => (
                <div key={index} data-cy="event list" className="flex flex-col">
                  <Link
                    href={`/event/${event.id}`}
                    onClick={() => setValue("")}
                    className="flex gap-3 py-3 tracking-wide hover:bg-accent/10"
                  >
                    <Image
                      src={`${event.image}`}
                      alt={`${event.title}`}
                      width={100}
                      height={100}
                      priority
                    />
                    <div className="flex flex-col">
                      <p className="text-lg">{event.title}</p>
                      <p className="text-gray-500">
                        {DateFormatter(event.date)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
