"use client";
import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/types/event";

export default function UpcomingMatch({ events }: { events: IEvent[] }) {
  const eventList = Array.isArray(events) ? events : [];

  return (
    <div className="mt-10 hidden w-full flex-col lg:flex">
      {eventList.length > 0 && (
        <>
          <div className="text-xl font-bold">Upcoming Match</div>
          <div className="group relative mt-5 overflow-hidden">
            <div
              className="animate-slide flex gap-5 whitespace-nowrap"
              style={{
                animation: `slide ${eventList.length * 5}s linear infinite`,
              }}
            >
              {eventList.map((event, index) => (
                <div key={index} className="shrink-0">
                  <Link href={`/event/${event.id}`}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={`${event.image}`}
                        alt={`${event.title}`}
                        width={200}
                        height={200}
                        priority
                        className="rounded-lg object-cover object-center"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-slide {
          display: flex;
          animation: slide ${eventList.length > 0 ? eventList.length * 5 : 0}s
            linear infinite;
        }
        .group:hover .animate-slide {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
