"use client";

import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { ITicket } from "@/types/ticket";
import { useContext, useState } from "react";
import { IOrderCart, OrderContext } from "./tabsAndOrder";

export default function AddTicket({ ticket }: { ticket: ITicket }) {
  const [quantity, setQuantity] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const orderContext = useContext<IOrderCart | null>(OrderContext);
  if (!orderContext) throw new Error("No context");
  const { orderCart, setOrderCart } = orderContext;

  const handleAddTicket = () => {
    if (quantity < 5) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setErrorMessage(null);

      if (!orderCart) {
        setOrderCart([{ ticket, quantity: 1 }]);
        return;
      }
      const orderCartId = orderCart.findIndex(
        (item) => item.ticket.id === ticket.id,
      );

      if (orderCartId > -1) {
        const updatedOrderCart = orderCart.map((item, index) =>
          index === orderCartId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        setOrderCart(updatedOrderCart);
      } else {
        setOrderCart([...orderCart, { ticket, quantity: 1 }]);
      }
    } else {
      setErrorMessage("Maximum 5 tickets per customers");
    }
  };

  const handleRemoveTicket = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setErrorMessage(null);

      if (!orderCart) return;

      const orderCartId = orderCart.findIndex(
        (item) => item.ticket.id === ticket.id,
      );

      if (orderCartId > -1) {
        const updatedOrderCart = orderCart
          .map((item, index) =>
            index === orderCartId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0);

        setOrderCart(updatedOrderCart);
      }
    }
  };

  return (
    <div className="relative flex items-center rounded-lg border border-accent bg-accent/10 p-5">
      <span className="absolute -top-[1.5px] right-28 z-10 h-5 w-10 rounded-bl-full rounded-br-full border-b border-l border-r border-accent border-t-white bg-white"></span>
      <span className="absolute -bottom-[1.5px] right-28 z-10 h-5 w-10 rounded-tl-full rounded-tr-full border-l border-r border-t border-accent border-b-white bg-white"></span>
      <span className="absolute right-[131px] h-full border-l-2 border-dotted border-accent"></span>

      <div className="mr-36 flex flex-col items-start justify-center">
        <h1 className="text-xl font-bold">{ticket.category} Stand</h1>
        <div
          dangerouslySetInnerHTML={{ __html: ticket.description }}
          className="mt-2"
        />
        <p className="mt-2">Available seat: {ticket.quantity}</p>
        <p className="mt-3 text-lg font-bold">
          {CurrencyFormatter(Number(ticket.price))}
        </p>
      </div>

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

      {errorMessage && (
        <p className="absolute bottom-[-20px] left-0 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
