"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import {
  IoTicketOutline,
  IoArrowBackCircleOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiCoupon4Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { useRouter } from "next/navigation";
import protectCustomerPage from "@/page-protection/protectCustomerPage";
import { IEvent } from "@/types/event";
import { getCustomerEvents } from "@/libs/event";
import CustomerProfile from "@/components/profile/customerProfile";
import CustomerDetails from "./referralcode/page";
import CustomerMenuTabs from "@/components/profile/customerMenuTabs";

function SideBar() {
  const [currentPage, setCurrentPage] = useState("MyTicket");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
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

  const renderContent = () => {
    switch (currentPage) {
      case "MyTicket":
        return (
          <CustomerMenuTabs
            upcomingEvents={upcomingEvents}
            attendedEvents={attendedEvents}
            isLoading={isLoading}
          />
        );
      case "MyProfile":
        return <CustomerProfile />;
      case "ReferralCode":
        return <CustomerDetails />;
      case "Payment":
        return <div className="text-center text-gray-500">Payment Page</div>;
      default:
        return (
          <CustomerMenuTabs
            upcomingEvents={upcomingEvents}
            attendedEvents={attendedEvents}
            isLoading={isLoading}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Responsive Sidebar</title>
      </Head>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform bg-gradient-to-br from-accent to-green-400 p-6 text-white shadow-lg transition-transform duration-300 md:relative md:w-64 md:translate-x-0 lg:w-80 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex md:flex-col`}
      >
        <h1 className="mb-6 text-center text-2xl font-bold">Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-all duration-300 ${
                  currentPage === "MyProfile"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => {
                  setCurrentPage("MyProfile");
                  setIsSidebarOpen(false);
                }}
                aria-current={currentPage === "MyProfile" ? "page" : undefined}
              >
                <CgProfile className="mr-3 text-xl" />
                My Profile
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-all duration-300 ${
                  currentPage === "ReferralCode"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => {
                  setCurrentPage("ReferralCode");
                  setIsSidebarOpen(false);
                }}
              >
                <RiCoupon4Line className="mr-3 text-xl" />
                My Coupon
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-all duration-300 ${
                  currentPage === "MyTicket"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => {
                  setCurrentPage("MyTicket");
                  setIsSidebarOpen(false);
                }}
              >
                <IoTicketOutline className="mr-3 text-xl" />
                My Ticket
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-all duration-300 ${
                  currentPage === "Payment"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => {
                  setCurrentPage("Payment");
                  setIsSidebarOpen(false);
                }}
              >
                <MdOutlinePayments className="mr-3 text-xl" />
                Payment
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
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-accent/85 md:hidden"
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

export default protectCustomerPage(SideBar);
