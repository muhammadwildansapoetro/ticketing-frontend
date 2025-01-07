"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import {
  IoTicketOutline,
  IoArrowBackCircleOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import protectOrganizerPage from "@/page-protection/protectOrganizerPage";
import { useRouter } from "next/navigation";
import OrganizerMenuTabs from "@/components/profile/organizerMenuTabs";
import { IEvent } from "@/types/event";
import { getOrganizerEvents } from "@/libs/event";
import Chartdata from "./chart/page";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("MyEvent");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const [upcomingEvents, setUpcomingEvents] = useState<IEvent[]>([]);
  const [endedEvents, setEndedEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrganizerEvents = async () => {
      try {
        setIsLoading(true);

        const upcomingEvents = await getOrganizerEvents("upcoming");
        const endedEvents = await getOrganizerEvents("ended");

        setUpcomingEvents(upcomingEvents);
        setEndedEvents(endedEvents);
      } catch (error) {
        console.log("Error get customer events:", error);
      } finally {
        setIsLoading(false);
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
            isLoading={isLoading}
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
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform bg-gradient-to-br from-accent to-green-400 p-6 text-white shadow-lg transition-transform duration-300 md:relative md:w-64 md:translate-x-0 lg:w-80 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex md:flex-col`}
      >
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
                onClick={() => {
                  setCurrentPage("MyEvent");
                  setIsSidebarOpen(false);
                }}
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
                onClick={() => {
                  setCurrentPage("ChartData");
                  setIsSidebarOpen(false);
                }}
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

      {/* Sidebar Toggle for Mobile */}
      <button
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <IoClose className="text-2xl" />
        ) : (
          <IoMenu className="text-2xl" />
        )}
      </button>
    </div>
  );
}

export default protectOrganizerPage(Dashboard);
