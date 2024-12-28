import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { ITicket } from "@/types/ticket";

export default function TicketCard({ ticket }: { ticket: ITicket }) {
  return (
    <div>
      <div className="relative flex items-center rounded-lg border border-accent bg-accent/10 p-5">
        <span className="absolute -top-[1.5px] right-28 z-10 h-5 w-10 rounded-bl-full rounded-br-full border-b border-l border-r border-accent border-t-white bg-white"></span>
        <span className="absolute -bottom-[1.5px] right-28 z-10 h-5 w-10 rounded-tl-full rounded-tr-full border-l border-r border-t border-accent border-b-white bg-white"></span>
        <span className="absolute right-[131px] h-full border-l-2 border-dotted border-accent"></span>

        <div className="mr-36 flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold">{ticket.category} Stand</h1>
          <p className="mt-2">Available seat: {ticket.quantity}</p>
          <div
            dangerouslySetInnerHTML={{ __html: ticket.description }}
            className="mt-2 text-sm"
          />
          <p className="mt-3 text-lg font-bold">
            {CurrencyFormatter(Number(ticket.price))}
          </p>
        </div>
      </div>
    </div>
  );
}
