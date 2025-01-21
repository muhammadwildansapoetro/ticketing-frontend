"use client";

import DateFormatter from "@/helpers/dateFormatter";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

interface IEvent {
  id: string;
  image: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  location: string;
}

export default function FriendlyMatchSwiper({ events }: { events: IEvent[] }) {
  const friendlyMatches = Array.isArray(events)
    ? events.filter((event) => event.category === "Friendly")
    : [];

  const friendlyMatch = friendlyMatches.slice(0, 11);

  return (
    <div className="flex w-screen flex-col lg:max-w-[1120px] lg:pl-0">
      {friendlyMatch.length > 0 && (
        <>
          <div className="flex justify-between">
            <h1 className="pl-5 text-xl font-bold lg:pl-0">Friendly Match</h1>
            <Link
              href={"/event"}
              className="flex items-center justify-center text-accent hover:underline hover:underline-offset-2"
            >
              <p className="font-medium">See all matches</p>
              <MdKeyboardArrowRight className="size-[25px]" />
            </Link>
          </div>
          <div className="relative mt-2 overflow-x-auto pb-5 pl-5 lg:pl-0">
            <div className="flex gap-5">
              {friendlyMatch.map((event, index) => (
                <div
                  key={index}
                  className="group h-56 w-[250px] shrink-0 rounded-xl shadow-lg"
                >
                  <Link href={`/event/${event.id}`}>
                    <div className="aspect-video overflow-hidden rounded-tl-lg rounded-tr-lg">
                      <Image
                        src={`${event.image}`}
                        alt={`${event.title}`}
                        width={1000}
                        height={1000}
                        priority
                        className="h-full w-full object-cover group-hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden p-2">
                      <p>{DateFormatter(event.date)}</p>
                      <p className="text-sm">{event.venue}</p>
                      <p className="text-sm">{event.location}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
