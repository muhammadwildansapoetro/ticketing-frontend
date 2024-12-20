"use client";

import { IEvent } from "@/types/event";
import { ITicket } from "@/types/ticket";
import { useState } from "react";
import TicketCardOrder from "./ticketCardOrder";

interface IProps {
  event: IEvent;
  ticket: ITicket[];
}

export default function Tabs({ event, ticket }: IProps) {
  const [activeTab, setActiveTab] = useState<"description" | "ticket">(
    "description",
  );

  return (
    <div className="rounded-lg border border-gray-200 p-5 lg:mx-0 lg:shadow-lg">
      <div className="mb-5 flex justify-between gap-5 border-b-2">
        <button
          onClick={() => setActiveTab("description")}
          className={`w-1/2 pb-2 tracking-wider ${activeTab === "description" ? "border-b-4 border-accent font-bold" : "text-gray-500"}`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("ticket")}
          className={`w-1/2 pb-2 tracking-wider ${activeTab === "ticket" ? "border-b-4 border-accent font-bold" : "text-gray-500"}`}
        >
          Ticket
        </button>
      </div>

      <div>
        {activeTab === "description" && (
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />
        )}

        {activeTab === "ticket" && (
          <div className="flex w-full flex-col gap-5">
            {ticket.map((ticket, index) => (
              <TicketCardOrder ticket={ticket} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
