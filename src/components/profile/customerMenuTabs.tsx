"use client";

import { useSession } from "@/context/useSession";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { IEvent } from "@/types/event";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuTabsProps {
  upcomingEvents: IEvent[];
  attendedEvents: IEvent[];
}

export default function CustomerMenuTabs({
  upcomingEvents,
  attendedEvents,
}: MenuTabsProps) {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { customer } = useSession();

  return (
    <div>
      <div className="flex justify-center space-x-10 lg:justify-start lg:space-x-5">
        <button
          className={`rounded-tl-lg rounded-tr-lg px-4 py-2 ${activeTab === "upcoming" ? "bg-accent text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Matches
        </button>

        <button
          className={`rounded-tl-lg rounded-tr-lg px-4 py-2 ${activeTab === "attended" ? "bg-accent text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("attended")}
        >
          Attended Matches
        </button>
      </div>

      <div className="border-t border-accent/50 pt-5">
        {activeTab === "upcoming" &&
          (upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="mb-5 flex flex-col gap-5 rounded-lg lg:flex-row"
              >
                <div className="aspect-video h-full w-full basis-1/3 overflow-hidden rounded-lg">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>

                <div className="flex basis-2/3 flex-col gap-1">
                  <div className="text-xl font-bold">{event.title}</div>
                  <div className="text-lg">{DateFormatter(event.date)}</div>
                  <div className="text-lg">
                    {TimeFormatter(event.startTime)} -{" "}
                    {TimeFormatter(event.endTime)} WIB
                  </div>
                  <div className="text-lg">
                    {event.venue}, {event.location}
                  </div>
                  <Link
                    href={`/${customer?.username}/ticket/${event.id}`}
                    className="mt-2 w-fit rounded-lg bg-accent px-2 py-1 text-white"
                  >
                    My ticket
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No upcoming matches scheduled</div>
          ))}

        {activeTab === "attended" &&
          (attendedEvents.length > 0 ? (
            attendedEvents.map((event, index) => (
              <div
                key={index}
                className="mb-5 flex flex-col gap-5 rounded-lg lg:flex-row"
              >
                <div className="aspect-video h-full w-full basis-2/5 overflow-hidden rounded-lg">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>

                <div className="flex basis-2/5 flex-col gap-1">
                  <div className="text-xl font-bold">{event.title}</div>
                  <div className="text-lg">{DateFormatter(event.date)}</div>
                  <div className="text-lg">
                    {TimeFormatter(event.startTime)} -{" "}
                    {TimeFormatter(event.endTime)} WIB
                  </div>
                  <div className="text-lg">
                    {event.venue}, {event.location}
                  </div>
                </div>

                <div className="flex basis-1/5 flex-col items-start gap-2">
                  <p className="font-bold">Share your experience!</p>
                  <Link
                    href={`/review/${event.id}`}
                    className="rounded-lg bg-accent px-4 py-2 text-white hover:bg-accent/90"
                  >
                    Add review
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>
              The ticket&apos;s match you purchased has not ended or you have
              not purchased a match ticket, start explore matches
              <Link
                href={"/event"}
                className="text-lg font-bold text-accent hover:underline"
              >
                {" "}
                here.
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
