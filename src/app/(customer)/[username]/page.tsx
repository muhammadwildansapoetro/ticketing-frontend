"use client";

import Loading from "@/app/loading";
import CustomerMenuTabs from "@/components/profile/customerMenuTabs";
import CustomerProfile from "@/components/profile/customerProfile";
import { getCustomerEvents } from "@/libs/event";
import protectCustomerPage from "@/HOC/protectCustomerPage";
import { IEvent } from "@/types/event";
import { useEffect, useState } from "react";

function CustomerProfilePage() {
  const [upcomingEvents, setUpcomingEvents] = useState<IEvent[]>([]);
  const [attendedEvents, setAttendedEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCustomerEvents = async () => {
      try {
        setIsLoading(true);
        const upcoming = await getCustomerEvents("upcoming");
        const attended = await getCustomerEvents("attended");

        setUpcomingEvents(upcoming);
        setAttendedEvents(attended);
      } catch (error) {
        console.log("Error get customer events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomerEvents();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pb-96">
      <div className="container mx-auto lg:px-20 xl:px-28">
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
          <div className="w-fit p-5 lg:mt-5 lg:rounded-lg lg:border lg:shadow-lg">
            <CustomerProfile />
          </div>
          <div className="w-full p-5 lg:mt-5 lg:rounded-lg lg:border lg:shadow-lg">
            <CustomerMenuTabs
              upcomingEvents={upcomingEvents}
              attendedEvents={attendedEvents}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default protectCustomerPage(CustomerProfilePage);
