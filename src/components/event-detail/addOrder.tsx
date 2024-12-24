"use client";

import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IOrderDetail } from "./tabsAndOrder";
import { IoTicket } from "react-icons/io5";
import axios from "@/helpers/axios";

interface IProps {
  totalPrice: number;
  setTotalPrice: (parameter: number) => void;
  orderCart: IOrderDetail[] | null;
  params: string;
}

export default function AddOrder({
  totalPrice,
  setTotalPrice,
  orderCart,
  params,
}: IProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const totalTickets = orderCart
    ? orderCart.reduce((a, b) => a + b.quantity, 0)
    : 0;

  useEffect(() => {
    if (totalTickets > 5) {
      setErrorMessage("Maximum 5 tickets per customers");
    } else {
      setErrorMessage(null);
    }
  }, [totalTickets]);

  const base_url_be = process.env.NEXT_PUBLIC_BASE_URL_BE;

  const handleAddOrder = async () => {
    try {
      setIsLoading(true);

      if (totalTickets > 5) {
        toast.warn("Maximum 5 tickets per customer");
        return;
      }

      const { data } = await axios.post("/orders", {
        totalPrice: totalPrice,
        finalPrice: totalPrice,
        orderCart,
      });

      router.push(`/event/${params}/order/${data.orderId}`);
      toast.success(data.message);
    } catch (error) {
      console.error("Error adding order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (orderCart) {
      setTotalPrice(
        orderCart.reduce((a, b) => a + b.ticket.price * b.quantity, 0),
      );
    }
  }, [orderCart, setTotalPrice]);

  return (
    <div className="flex items-center justify-center gap-5 lg:w-full lg:flex-col">
      <div className="w-1/2 lg:w-full">
        <div className="mb-2 hidden gap-5 lg:flex lg:w-full lg:flex-col lg:pb-3">
          {orderCart && orderCart.length > 0 ? (
            orderCart.map((order, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full flex-col border-b border-b-gray-300 pb-2"
                >
                  <div className="flex items-end justify-start gap-3">
                    <IoTicket className="text-3xl text-accent" />
                    <div className="text-xl">{order.ticket.category} Stand</div>
                  </div>
                  <div className="flex justify-between gap-20">
                    <div className="ml-10">{order.quantity} ticket</div>
                    <div className="font-bold">
                      {CurrencyFormatter(order.quantity * order.ticket.price)}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>
              You haven&apos;t selected a ticket yet. Please select it first in
              the
              <span className="font-bold"> Ticket </span> menu tab.
            </p>
          )}
        </div>

        {orderCart && orderCart?.length > 0 ? (
          <>
            <div className="items-center justify-between lg:flex lg:pt-2">
              <p>
                Total {orderCart.reduce((a, b) => a + b.quantity, 0)} ticket
              </p>
              <p className="text-lg font-bold">
                {CurrencyFormatter(totalPrice)}
              </p>
            </div>
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </>
        ) : (
          <div className="items-center justify-between lg:flex lg:border-t lg:border-t-gray-300 lg:pt-3">
            <p>Total 0 ticket</p>
            <p className="text-xl font-bold">Rp 0</p>
          </div>
        )}
      </div>

      <button
        onClick={handleAddOrder}
        disabled={isLoading || totalTickets > 5}
        className={`${(isLoading || totalTickets > 5) && `disabled:cursor-not-allowed disabled:bg-accent/80 disabled:bg-opacity-50`}w-1/2 rounded-lg bg-accent px-6 py-2 text-center tracking-widest text-white hover:bg-accent/90 lg:w-full`}
      >
        {isLoading ? "Ordering ticket..." : "Order ticket"}
      </button>
    </div>
  );
}
