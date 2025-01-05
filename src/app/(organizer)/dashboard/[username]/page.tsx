"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { IoTicketOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import Chartdata from "./Chart/page";
import protectOrganizerPage from "@/page-protection/protectOrganizerPage";
import OrganizerReviewPage from "./review/page";
import { useRouter } from "next/navigation";
import OrganizerMenuTabs from "@/components/profile/organizerMenuTabs";
import { IEvent } from "@/types/event";
import { getOrganizerEvents } from "@/libs/event";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("MyEvent");
  const router = useRouter();
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

  const renderContent = () => {
    switch (currentPage) {
      case "MyEvent":
        return (
          <OrganizerMenuTabs
            upcomingEvents={upcomingEvents}
            endedEvents={endedEvents}
          />
        );
      case "ChartData":
        return <Chartdata />;
      default:
        return <div className="text-center text-gray-500">Page Not Found</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Organizer Dashboard</title>
      </Head>

      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-accent to-green-400 p-6 text-white shadow-lg md:w-80">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Organizer Dashboard
        </h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-all duration-300 ${
                  currentPage === "MyEvent"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => setCurrentPage("MyEvent")}
                aria-current={currentPage === "MyEvent" ? "page" : undefined}
              >
                <IoTicketOutline className="mr-3 text-xl" />
                My Event
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-all duration-300 ${
                  currentPage === "ChartData"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => setCurrentPage("ChartData")}
              >
                <MdOutlinePayments className="mr-3 text-xl" />
                Chart Data
              </button>
            </li>
          </ul>
        </nav>
        <div className="mt-6">
          <button
            className="flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-3 text-left text-white transition-all duration-300 hover:bg-red-500"
            type="button"
            onClick={() => router.push("/")}
          >
            <IoArrowBackCircleOutline className="mr-3 text-xl" />
            Back to Previous Page
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6 md:p-12">{renderContent()}</main>
    </div>
  );
}

export default protectOrganizerPage(Dashboard);
