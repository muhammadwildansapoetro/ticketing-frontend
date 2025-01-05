"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { IoTicketOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiCoupon4Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import ReferralCode from "./referralcode/page";
import { useRouter } from "next/navigation";
import protectCustomerPage from "@/page-protection/protectCustomerPage";
import CustomerMenuTabs from "@/components/profile/customerMenuTabs";
import { IEvent } from "@/types/event";
import { getCustomerEvents } from "@/libs/event";
import CustomerProfile from "@/components/profile/customerProfile";

function SideBar() {
  const [currentPage, setCurrentPage] = useState("MyTicket");
  const router = useRouter();
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

  const renderContent = () => {
    switch (currentPage) {
      case "MyTicket":
        return (
          <CustomerMenuTabs
            upcomingEvents={upcomingEvents}
            attendedEvents={attendedEvents}
          />
        );
      case "MyProfile":
        return <CustomerProfile/>;
      case "ReferralCode":
        return <ReferralCode />;
      case "Payment":
        return <div className="text-center text-gray-500">Payment Page</div>;
      default:
        return (
          <CustomerMenuTabs
            upcomingEvents={upcomingEvents}
            attendedEvents={attendedEvents}
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
      <aside className="w-64 bg-gradient-to-br from-accent to-green-400 p-6 text-white shadow-lg md:w-80">
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
                onClick={() => setCurrentPage("MyProfile")}
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
                onClick={() => setCurrentPage("ReferralCode")}
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
                onClick={() => setCurrentPage("MyTicket")}
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
                onClick={() => setCurrentPage("Payment")}
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
    </div>
  );
}

export default protectCustomerPage(SideBar);
