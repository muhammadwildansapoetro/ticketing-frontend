"use client";

import MenuTabs from "@/components/profile/menuTabs";
import Profile from "@/components/profile/profile";
import { getCustomerEvents } from "@/libs/event";
import { IEvent } from "@/types/event";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [upcomingEvents, setUpcomingEvents] = useState<IEvent[]>([]);
  const [attendedEvents, setAttendedEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchCustomerEvents = async () => {
      try {
        const upcoming = await getCustomerEvents("upcoming");
        const attended = await getCustomerEvents("attended");

        setUpcomingEvents(upcoming);
        setAttendedEvents(attended);
      } catch (error) {
        console.log("Error get customer events:", error);
      }
    };

    fetchCustomerEvents();
  }, []);

  return (
    <div className="pb-96">
      <div className="container mx-auto lg:px-20 xl:px-28">
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
          <div className="w-fit p-5 lg:mt-5 lg:rounded-lg lg:border lg:shadow-lg">
            <Profile />
          </div>
          <div className="w-full p-5 lg:mt-5 lg:rounded-lg lg:border lg:shadow-lg">
            <MenuTabs
              upcomingEvents={upcomingEvents}
              attendedEvents={attendedEvents}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
