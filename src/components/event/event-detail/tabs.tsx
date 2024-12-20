"use client";

import { IEvent } from "@/types/event";
import { useState } from "react";

export default function Tabs({ event }: { event: IEvent }) {
  const [activeTab, setActiveTab] = useState<"description" | "ticket">(
    "description",
  );

  return (
    <div>
      <div className="gap flex-5 mb-5 border-b">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-2 ${activeTab === "description" ? "border-b-2 border-accent font-bold" : "text-gray-500"}`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("ticket")}
          className={`pb-2 ${activeTab === "description" ? "border-b-2 border-accent font-bold" : "text-gray-500"}`}
        >
          Ticket
        </button>

        <div>
          {activeTab === "description" && (
            <div
              className="description basis-2/3"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          )}

          {activeTab === "ticket" && (
            <div>
              {event.Ticket.map((ticket, id) => (
                <div key={id}>
                  <div>{ticket.category}</div>
                  <div>{ticket.price}</div>
                  <div>{ticket.quantity}</div>
                  <div>{ticket.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
