"use client";

import Head from "next/head";
import { useState } from "react";
import { IoTicketOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiCoupon4Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import MyTicket from "./my-ticket/page";
import ReferralCode from "./referralcode/page";
// import MyTicket from "./my-ticket";
// import MyProfile from "./MyProfile";
// import ReferralCode from "./ReferralCode";
// import Payment from "./Payment";

function SideBar() {
  const [currentPage, setCurrentPage] = useState("MyTicket");

  const renderContent = () => {
    switch (currentPage) {
      case "MyTicket":
        return <MyTicket />;
      case "MyProfile":
      // return <MyProfile />;
      case "ReferralCode":
      return <ReferralCode />;
      case "Payment":
      // return <Payment />;
      default:
        return <MyTicket />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Responsive Sidebar</title>
      </Head>

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-br from-accent to-green-200 p-6 text-white">
        <h1 className="mb-6 text-2xl font-bold"></h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`flex w-full items-center rounded p-2 text-left ${
                  currentPage === "MyProfile"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => setCurrentPage("MyProfile")}
              >
                <CgProfile className="mr-2 text-lg" />
                My Profile
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded p-2 text-left ${
                  currentPage === "ReferralCode"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => setCurrentPage("ReferralCode")}
              >
                <RiCoupon4Line className="mr-2 text-lg" />
                Referral Code
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded p-2 text-left ${
                  currentPage === "MyTicket"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => setCurrentPage("MyTicket")}
              >
                <IoTicketOutline className="mr-2 text-lg" />
                My Ticket
              </button>
            </li>
            <li>
              <button
                className={`flex w-full items-center rounded p-2 text-left ${
                  currentPage === "Payment"
                    ? "bg-accent/100"
                    : "hover:bg-accent/50"
                }`}
                onClick={() => setCurrentPage("Payment")}
              >
                <MdOutlinePayments className="mr-2 text-lg" />
                Payment
              </button>
            </li>
          </ul>
        </nav>
        <div className="mt-6">
          <button
            className="flex w-full items-center rounded p-2 text-left hover:bg-red-500"
            type="button"
            onClick={() => setCurrentPage("MyTicket")}
          >
            <IoArrowBackCircleOutline className="mr-2 text-lg" />
            Back to Previous Page
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-8">{renderContent()}</div>
    </div>
  );
}

export default SideBar;
