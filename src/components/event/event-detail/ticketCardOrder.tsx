import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { ITicket } from "@/types/ticket";
import { useState } from "react";

export default function TicketCardOrder({ ticket }: { ticket: ITicket }) {
  const [quantity, setQuantity] = useState<number>(0);

  const handleAdd = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="relative flex items-center rounded-lg border border-accent bg-accent/10 p-5">
      <span className="absolute -top-[1.5px] right-28 z-10 h-5 w-10 rounded-bl-full rounded-br-full border-b border-l border-r border-accent border-t-white bg-white"></span>
      <span className="absolute -bottom-[1.5px] right-28 z-10 h-5 w-10 rounded-tl-full rounded-tr-full border-l border-r border-t border-accent border-b-white bg-white"></span>
      <span className="absolute right-[131px] h-full border-l-2 border-dotted border-accent"></span>

      <div className="mr-36 flex flex-col items-start justify-center">
        <h1 className="text-xl font-bold">Ticket type: {ticket.category}</h1>
        <p className="mt-2">Available seat: {ticket.quantity}</p>
        <div
          dangerouslySetInnerHTML={{ __html: ticket.description }}
          className="mt-2 text-sm"
        />
        <p className="mt-3 text-lg font-bold">
          {CurrencyFormatter(Number(ticket.price))}
        </p>
      </div>

      <div className="absolute right-12 flex flex-col items-center justify-center gap-5">
        <button
          onClick={handleAdd}
          className="rounded-xl border-2 border-accent px-3 text-lg font-bold"
        >
          +
        </button>
        <div>{quantity}</div>

        <button
          onClick={handleRemove}
          className="rounded-xl border-2 border-accent px-3 text-xl font-bold"
        >
          -
        </button>
      </div>
    </div>
  );
}
