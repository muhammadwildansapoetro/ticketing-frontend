"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface IEvent {
  id: string;
  image: string;
  title: string;
}

export default function SlidingUpcomingMatch({ events }: { events: IEvent[] }) {
  const upcomingMatches = Array.isArray(events) ? events : [];
  const cardWidth = 220;
  const animationSpeed = 50;
  const totalWidth = upcomingMatches.length * cardWidth;
  const animationDuration = totalWidth / animationSpeed;
  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <div className="flex w-screen flex-col pb-5 lg:max-w-[1120px] lg:pl-0">
      {upcomingMatches.length > 0 && (
        <>
          <div className="flex justify-between">
            <h1 className="pl-5 text-xl font-bold lg:pl-0">Upcoming Match</h1>
            <Link
              href={"/event"}
              className="flex items-center justify-center text-accent hover:underline hover:underline-offset-2"
            >
              <p className="font-medium">See all matches</p>
              <MdKeyboardArrowRight className="size-[25px]" />
            </Link>
          </div>
          <div
            className="relative mt-3 w-screen overflow-hidden lg:w-full"
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
              {upcomingMatches.map((event, index) => (
                <div key={index} className="group h-36 w-64 shrink-0">
                  <Link href={`/event/${event.id}`}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={`${event.image}`}
                        alt={`${event.title}`}
                        width={1000}
                        height={1000}
                        priority
                        className="h-full w-full rounded-lg object-cover object-center"
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
