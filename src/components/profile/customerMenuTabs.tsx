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
  isLoading: boolean;
}

const SkeletonLoader = () => (
  <div className="mb-5 flex animate-pulse flex-col gap-5 rounded-lg">
    <div className="aspect-video h-full w-full rounded-lg bg-gray-300" />
    <div className="flex flex-col gap-1">
      <div className="h-6 w-3/4 rounded bg-gray-300" />
      <div className="h-6 w-1/2 rounded bg-gray-300" />
      <div className="h-6 w-1/3 rounded bg-gray-300" />
    </div>
  </div>
);

export default function CustomerMenuTabs({
  upcomingEvents,
  attendedEvents,
  isLoading,
}: MenuTabsProps) {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { customer } = useSession();

  const renderEvents = (events: IEvent[], isAttended: boolean) => {
    if (events.length === 0) {
      return isAttended ? (
        <div>No attended matches found.</div>
      ) : (
        <div>No upcoming matches scheduled.</div>
      );
    }

    return events.map((event, index) => (
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
            {TimeFormatter(event.startTime)} - {TimeFormatter(event.endTime)}{" "}
            WIB
          </div>
          <div className="text-lg">
            {event.venue}, {event.location}
          </div>
        </div>
        <div className="flex basis-1/5 flex-col items-start gap-2">
          <p className="font-bold">
            {isAttended ? "Share your experience!" : "See your ticket here"}
          </p>
          <Link
            href={
              isAttended
                ? `/review/${event.id}`
                : `/${customer?.username}/ticket/${event.id}`
            }
            className="rounded-lg bg-accent px-4 py-2 tracking-wider text-white hover:bg-accent/90"
          >
            {isAttended ? "Add review" : "My ticket"}
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="flex justify-center space-x-10 lg:justify-start lg:space-x-5">
        {["upcoming", "attended"].map((tab) => (
          <button
            key={tab}
            className={`rounded-tl-lg rounded-tr-lg px-4 py-2 ${activeTab === tab ? "bg-accent text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "upcoming" ? "Upcoming Matches" : "Attended Matches"}
          </button>
        ))}
      </div>

      <div className="border-t border-accent/50 pt-5">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))
          : activeTab === "upcoming"
            ? renderEvents(upcomingEvents, false)
            : renderEvents(attendedEvents, true)}
      </div>
    </div>
  );
}
