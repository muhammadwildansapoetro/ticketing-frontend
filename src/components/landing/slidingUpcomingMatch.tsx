"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IEvent {
  id: string;
  image: string;
  title: string;
}

export default function SlidingUpcomingMatch({ events }: { events: IEvent[] }) {
  const eventList = Array.isArray(events) ? events : [];
  const cardWidth = 220;
  const animationSpeed = 50;
  const totalWidth = eventList.length * cardWidth;
  const animationDuration = totalWidth / animationSpeed;
  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <div className="flex flex-col pb-5 pl-5 lg:max-w-[1120px] lg:pl-0">
      {eventList.length > 0 && (
        <>
          <div className="pl-5 text-xl font-bold lg:px-0">Upcoming Match</div>
          <div
            className="relative mt-2 w-screen overflow-hidden lg:w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="animate-slide flex gap-5 whitespace-nowrap"
              style={{
                animation: `slide ${animationDuration}s linear infinite`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {eventList.map((event, index) => (
                <div key={index} className="group shrink-0">
                  <Link href={`/event/${event.id}`}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={`${event.image}`}
                        alt={`${event.title}`}
                        width={200}
                        height={200}
                        priority
                        className="h-36 w-auto rounded-lg object-cover object-center"
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
            transform: translateX(-${totalWidth}px);
          }
        }
      `}</style>
    </div>
  );
}
