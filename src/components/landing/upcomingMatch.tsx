"use client";
import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/types/event";

export default function UpcomingMatch({ events }: { events: IEvent[] }) {
  // Duplicate events for infinite loop
  const slidingEvents = [...events, ...events];

  return (
    <div className="mt-10 hidden w-full flex-col lg:flex">
      <div className="text-xl font-bold">Upcoming Match</div>
      <div className="group relative mt-5 overflow-hidden">
        {/* Flex container with animation */}
        <div
          className="animate-slide flex gap-5 whitespace-nowrap"
          style={{ animation: `slide 20s linear infinite` }}
        >
          {slidingEvents.map((event, index) => (
            <div key={index} className="shrink-0">
              <Link href={`/event/${event.id}`}>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={`${event.image}`}
                    alt={`${event.title}`}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover object-center"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

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
          animation: slide 20s linear infinite;
          animation-play-state: running; /* Ensure animation runs by default */
        }
        .group:hover .animate-slide {
          animation-play-state: paused; /* Pause animation when hovered */
        }
      `}</style>
    </div>
  );
}
