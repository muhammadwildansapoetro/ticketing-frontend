"use client";

import OrganizerMenuTabs from "@/components/profile/organizerMenuTabs";
import OrganizerProfile from "@/components/profile/organizerProfile";
import { getOrganizerEvents } from "@/libs/event";
import protectOrganizerPage from "@/page-protection/protectOrganizerPage";
import { IEvent } from "@/types/event";
import { useEffect, useState } from "react";

function OrganizerProfilePage() {
  const [upcomingEvents, setUpcomingEvents] = useState<IEvent[]>([]);
  const [endedEvents, setEndedEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchOrganizerEvents = async () => {
      try {
        const upcomingEvents = await getOrganizerEvents("upcoming");
        const endedEvents = await getOrganizerEvents("ended");

        setUpcomingEvents(upcomingEvents);
        setEndedEvents(endedEvents);
      } catch (error) {
        console.log("Error get customer events:", error);
      }
    };

    fetchOrganizerEvents();
  }, []);

  return (
    <div className="pb-96">
      <div className="container mx-auto lg:px-20 xl:px-28">
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
          <div className="w-fit p-5 lg:mt-5 lg:rounded-lg lg:border lg:shadow-lg">
            <OrganizerProfile />
          </div>
          <div className="w-full p-5 lg:mt-5 lg:rounded-lg lg:border lg:shadow-lg">
            <OrganizerMenuTabs
              upcomingEvents={upcomingEvents}
              endedEvents={endedEvents}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default protectOrganizerPage(OrganizerProfilePage);
