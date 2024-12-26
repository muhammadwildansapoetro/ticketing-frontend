import axios from "@/helpers/axios";
import DateFormatter from "@/helpers/dateFormatter";
import useToggle from "@/hooks/useToggle";
import { IEvent } from "@/types/event";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDebounce } from "use-debounce";

export default function MobileSearch() {
  const { isOpen, handleToggle } = useToggle();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [value, setValue] = useState<string>(searchParams.get("keyword") || "");
  const [search] = useDebounce(value, 500);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getEvent = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`/events?search=${search}`);
      setEvents(data.events);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
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
    getEvent();
  }, [search]);

  return (
    <div className="flex items-center">
      <button type="button" onClick={handleToggle}>
        <BiSearch className="size-6 text-white" />
      </button>

      <div className={`${isOpen ? "absolute inset-0" : "hidden"} `}>
        <div className="flex h-14 w-full items-center justify-between bg-accent px-5">
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search match here"
            className="custom-outline-accent w-full rounded-md px-2 py-1"
          />
          <button type="button" onClick={handleToggle}>
            <XMarkIcon className="size-8 items-center text-white" />
          </button>
        </div>
      </div>

      {value.length > 0 && (
        <>
          {isLoading ? (
            <div className="absolute inset-x-0 top-14 h-fit w-full bg-white p-5">
              Searching...
            </div>
          ) : events.length === 0 ? (
            <div>Match not found</div>
          ) : (
            <div className="absolute inset-x-0 top-14 z-10 flex h-fit w-full flex-col border border-accent/50 bg-white p-5 shadow-lg">
              {events.map((event, index) => {
                return (
                  <div key={index} data-cy="event-list" className="flex">
                    <Link
                      href={`/event/${event.id}`}
                      className="flex w-full gap-1 border-b border-accent/50 p-2 tracking-wide hover:bg-accent/10"
                    >
                      <p className="font-medium">{event.title} -</p>
                      <p className="text-gray-500">
                        {DateFormatter(event.date)}
                      </p>
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
