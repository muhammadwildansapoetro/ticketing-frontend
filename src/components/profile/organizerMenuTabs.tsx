import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { IEvent } from "@/types/event";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import calculateReviews from "../review/calculateReview";

interface OrganizerMenuTabsProps {
  upcomingEvents: IEvent[];
  endedEvents: IEvent[];
  isLoading: boolean; // Add loading prop
}

const Skeleton = () => (
  <div className="mb-5 flex animate-pulse flex-col gap-5 rounded-lg lg:flex-row">
    <div className="aspect-video h-full w-full basis-1/3 overflow-hidden rounded-lg bg-gray-300"></div>
    <div className="flex basis-2/3 flex-col gap-1">
      <div className="h-6 w-3/4 rounded bg-gray-300"></div>
      <div className="h-4 w-1/2 rounded bg-gray-300"></div>
      <div className="h-4 w-1/3 rounded bg-gray-300"></div>
      <div className="h-4 w-1/2 rounded bg-gray-300"></div>
      <div className="h-8 w-1/4 rounded bg-accent"></div>
    </div>
  </div>
);

export default function OrganizerMenuTabs({
  upcomingEvents,
  endedEvents,
  isLoading, // Use loading prop
}: OrganizerMenuTabsProps) {
  const [activeTab, setActiveTab] = useState("upcoming");

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
          className={`rounded-tl-lg rounded-tr-lg px-4 py-2 ${activeTab === "ended" ? "bg-accent text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("ended")}
        >
          Ended Matches
        </button>
      </div>

      <div className="border-t border-accent/50 pt-5">
        {activeTab === "upcoming" &&
          (isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} />
            )) // Show skeletons while loading
          ) : upcomingEvents.length > 0 ? (
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
                    href={`/create-ticket/${event.id}`}
                    className="w-fit rounded-lg bg-accent px-2 py-1 text-white"
                  >
                    Add ticket
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No upcoming matches scheduled</div>
          ))}

        {activeTab === "ended" &&
          (isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} />
            )) // Show skeletons while loading
          ) : endedEvents.length > 0 ? (
            endedEvents.map((event, index) => {
              const { averageRating, totalReviews } = calculateReviews(
                event.Review,
              );

              return (
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

                  <div className="flex basis-2/5 flex-col">
                    <div className="text-xl font-bold">{event.title}</div>
                    <div className="text-lg">{DateFormatter(event.date)}</div>
                    <div className="text-lg">
                      {TimeFormatter(event.startTime)} -{" "}
                      {TimeFormatter(event.endTime)} WIB
                    </div>
                    <div className="text-lg">
                      {event.venue}, {event.location}
                    </div>
                    <div className="mt-1 w-fit bg-accent px-3 text-lg font-medium tracking-wide text-white">
                      Average rating: {averageRating}/5
                    </div>
                    <div className="mt-1 w-fit bg-accent px-3 text-lg font-medium tracking-wide text-white">
                      Total review: {totalReviews}
                    </div>
                  </div>

                  <div className="flex basis-1/5 flex-col items-start gap-2">
                    <p className="font-medium">See your match reviews</p>
                    <Link
                      href={`/review/${event.id}`}
                      className="rounded-lg bg-accent px-4 py-2 text-white hover:bg-accent/90"
                    >
                      Match Review
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              You don&apos;t have any matches that have ended or you
              haven&apos;t created a match
              <Link
                href={"/create-event"}
                className="font-medium text-accent hover:underline"
              >
                start create matches!
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
