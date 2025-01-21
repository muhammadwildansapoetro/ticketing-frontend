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

export default function TrainingMatchSwiper({ events }: { events: IEvent[] }) {
  const friendlyMatch = Array.isArray(events)
    ? events.filter((event) => event.category === "Training")
    : [];

  return (
    <div className="hidden max-w-[1120px] flex-col lg:flex">
      {friendlyMatch.length > 0 && (
        <>
          <div className="text-xl font-bold">Training Match</div>
          <div className="relative mt-2 overflow-x-auto pb-5">
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
