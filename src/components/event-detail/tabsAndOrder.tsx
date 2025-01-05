"use client";

import { IEvent } from "@/types/event";
import { ITicket } from "@/types/ticket";
import { createContext, useEffect, useState } from "react";
import AddTicket from "./addTicket";
import AddOrder from "./addOrder";
import ShareButton from "./shareButton";
import { getTickets } from "@/libs/ticket";

interface IProps {
  event: IEvent;
  params: string;
}

export interface IOrderDetail {
  ticket: ITicket;
  quantity: number;
}

export interface IDiscountInfo {
  discountPercentage: number | null;
  discountStartDate: string | null;
  discountEndDate: string | null;
}

export interface IOrderCart {
  orderCart: IOrderDetail[] | null;
  setOrderCart: (parameter: IOrderDetail[] | null) => void;
  discountInfo: IDiscountInfo | null;
  setDiscountInfo: (info: IDiscountInfo | null) => void;
}

export const OrderContext = createContext<IOrderCart | null>(null);

export default function TabsAndOrder({ event, params }: IProps) {
  const [activeTab, setActiveTab] = useState<"description" | "ticket">(
    "description",
  );
  const [orderCart, setOrderCart] = useState<IOrderDetail[] | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [discountInfo, setDiscountInfo] = useState<IDiscountInfo | null>(null);
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const fetchTickets = async () => {
    const updatedTickets = await getTickets(params);
    setTickets(updatedTickets);
  };

  useEffect(() => {
    if (activeTab === "ticket") {
      fetchTickets();
    }
  }, [activeTab, params]);

  return (
    <OrderContext.Provider
      value={{ orderCart, setOrderCart, discountInfo, setDiscountInfo }}
    >
      <div className="w-full lg:basis-2/3">
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
                {tickets.map((ticket, index) => (
                  <AddTicket ticket={ticket} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-0 lg:basis-1/3">
        <div className="fixed inset-x-0 bottom-0 z-10 w-full rounded-lg border border-gray-200 bg-white p-5 lg:sticky lg:top-0 lg:z-0 lg:flex lg:items-center lg:shadow-xl">
          <AddOrder
            totalPrice={totalPrice}
            finalPrice={finalPrice}
            setTotalPrice={setTotalPrice}
            setFinalPrice={setFinalPrice}
            orderCart={orderCart}
            params={params}
          />
        </div>
        <div className="m-5">
          <ShareButton eventId={event.id} />
        </div>
      </div>
    </OrderContext.Provider>
  );
}
