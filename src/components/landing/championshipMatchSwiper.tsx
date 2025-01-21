"use client";

import DateFormatter from "@/helpers/dateFormatter";
import Image from "next/image";
import Link from "next/link";

interface IEvent {
  id: string;
  image: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  location: string;
}

export default function ChampionshipMatchSwiper({
  events,
}: {
  events: IEvent[];
}) {
  const friendlyMatch = Array.isArray(events)
    ? events.filter((event) => event.category === "Championship")
    : [];

  return (
    <div className="flex w-screen flex-col pl-5 lg:max-w-[1120px] lg:pl-0">
      {friendlyMatch.length > 0 && (
        <>
          <div className="pl-5 text-xl font-bold lg:px-0">
            Championship Match
          </div>
          <div className="mt-2 w-screen overflow-x-auto pb-5 lg:w-full">
            <div className="flex gap-5">
              {friendlyMatch.map((event, index) => (
                <div
                  key={index}
                  className="group shrink-0 rounded-xl shadow-lg"
                >
                  <Link href={`/event/${event.id}`}>
                    <div className="aspect-video overflow-hidden rounded-tl-lg rounded-tr-lg">
                      <Image
                        src={`${event.image}`}
                        alt={`${event.title}`}
                        width={200}
                        height={200}
                        priority
                        className="h-36 w-auto object-cover object-center group-hover:scale-105"
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
