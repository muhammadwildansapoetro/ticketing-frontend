"use client";

import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { ITicket } from "@/types/ticket";
import { useContext, useState } from "react";
import { IOrderCart, OrderContext } from "./tabsAndOrder";
import DateFormatter from "@/helpers/dateFormatter";

export default function AddTicket({ ticket }: { ticket: ITicket }) {
  const [quantity, setQuantity] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const orderContext = useContext<IOrderCart | null>(OrderContext);
  if (!orderContext) throw new Error("No context");
  const { orderCart, setOrderCart, setDiscountInfo } = orderContext;

  const handleAddTicket = () => {
    const currentTicketQuantity =
      orderCart?.find((item) => item.ticket.id === ticket.id)?.quantity || 0;
    const availableQuantity = ticket.quantity - currentTicketQuantity;

    if (availableQuantity <= 0) {
      setErrorMessage("No available tickets for order quantity");
      return;
    }

    if (quantity < 5) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setErrorMessage(null);

      if (hasDiscount) {
        setDiscountInfo({
          discountPercentage: ticket.discountPercentage as number,
          discountStartDate: ticket.discountStartDate as string,
          discountEndDate: ticket.discountEndDate as string,
        });
      } else {
        setDiscountInfo(null);
      }

      if (!orderCart) {
        setOrderCart([{ ticket, quantity: 1 }]);
        return;
      }

      const orderCartIndex = orderCart.findIndex(
        (item) => item.ticket.id === ticket.id,
      );

      if (orderCartIndex > -1) {
        const updatedOrderCart = orderCart.map((item, index) =>
          index === orderCartIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        setOrderCart(updatedOrderCart);
      } else {
        setOrderCart([...orderCart, { ticket, quantity: 1 }]);
      }
    } else {
      setErrorMessage("Maximum 5 tickets per order");
    }
  };

  const handleRemoveTicket = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setErrorMessage(null);

      if (!orderCart) return;

      const orderCartIndex = orderCart.findIndex(
        (item) => item.ticket.id === ticket.id,
      );

      if (orderCartIndex > -1) {
        const updatedOrderCart = orderCart
          .map((item, index) =>
            index === orderCartIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0);
        setOrderCart(updatedOrderCart);
      }
    }
  };

  const hasDiscount =
    ticket.discountPercentage && ticket.discountPercentage > 0;

  const currentDate = new Date();
  const discountStartDate = new Date(ticket.discountStartDate as string);
  const discountEndDate = new Date(ticket.discountEndDate as string);

  const isDiscountActive =
    currentDate >= discountStartDate && currentDate <= discountEndDate;

  const discountedPrice = hasDiscount
    ? ticket.price -
      (ticket.price * (ticket.discountPercentage as number)) / 100
    : ticket.price;

  return (
    <div
      className={`relative flex items-center rounded-lg border border-accent p-5 ${ticket.quantity > 0 ? "bg-accent/10" : "bg-gray-100"}`}
    >
      <span className="absolute -top-[1.5px] right-28 z-10 h-5 w-10 rounded-bl-full rounded-br-full border-b border-l border-r border-accent border-t-white bg-white lg:right-32"></span>
      <span className="absolute -bottom-[1.5px] right-28 z-10 h-5 w-10 rounded-tl-full rounded-tr-full border-l border-r border-t border-accent border-b-white bg-white lg:right-32"></span>
      <span className="absolute right-[131px] h-full border-l-2 border-dotted border-accent lg:right-[146px]"></span>

      <div className="mr-36 flex flex-col items-start justify-center">
        <h1 className="text-xl font-bold">{ticket.category} Stand</h1>
        <div dangerouslySetInnerHTML={{ __html: ticket.description }} />
        <p className="mb-3 mt-2">Available seat: {ticket.quantity}</p>
        {hasDiscount && (
          <p className="text-sm font-bold text-green-700 lg:text-base">
            Discount {ticket.discountPercentage}% from{" "}
            <span className="">
              {" "}
              {DateFormatter(ticket.discountStartDate!)}
            </span>{" "}
            until{" "}
            <span className=""> {DateFormatter(ticket.discountEndDate!)}</span>
          </p>
        )}
        <p className="text-lg">
          {ticket.price === 0 ? (
            <span className="font-bold text-accent">Free</span>
          ) : hasDiscount && isDiscountActive ? (
            <>
              <span className="font-bold">
                {CurrencyFormatter(Number(discountedPrice))}
              </span>
              <span className="ml-3 text-gray-500 line-through">
                {CurrencyFormatter(Number(ticket.price))}
              </span>
            </>
          ) : (
            <span className="font-bold">
              {CurrencyFormatter(Number(ticket.price))}
            </span>
          )}
        </p>
      </div>

      {ticket.quantity > 0 ? (
        <div className="absolute right-12 flex flex-col items-center justify-center gap-5">
          <button
            onClick={handleAddTicket}
            className="rounded-xl border-2 border-accent px-3 text-lg font-bold"
          >
            +
          </button>
          <div>{quantity}</div>
          <button
            onClick={handleRemoveTicket}
            className="rounded-xl border-2 border-accent px-3 text-xl font-bold"
          >
            -
          </button>
        </div>
      ) : (
        <div className="absolute right-8 flex flex-col items-center justify-center gap-5">
          <div className="font-bold text-red-600">Sold Out</div>
        </div>
      )}

      {errorMessage && (
        <p className="absolute bottom-[-20px] left-0 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
