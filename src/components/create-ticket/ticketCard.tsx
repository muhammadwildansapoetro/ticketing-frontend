import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { ITicket } from "@/types/ticket";

export default function TicketCard({ ticket }: { ticket: ITicket }) {
  return (
    <div>
      <div className="relative flex items-center rounded-lg border border-accent bg-accent/10 p-5">
        <span className="absolute -top-[1.5px] right-28 z-10 h-5 w-10 rounded-bl-full rounded-br-full border-b border-l border-r border-accent border-t-white bg-white lg:right-36"></span>
        <span className="absolute -bottom-[1.5px] right-28 z-10 h-5 w-10 rounded-tl-full rounded-tr-full border-l border-r border-t border-accent border-b-white bg-white lg:right-36"></span>
        <span className="absolute right-[131px] h-full border-l-2 border-dotted border-accent lg:right-[162px]"></span>

        <div className="mr-36 flex flex-col items-start justify-center lg:mr-44">
          <h1 className="text-lg font-bold lg:text-xl">
            {ticket.category} Stand
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: ticket.description }}
            className="mt-1 hidden text-sm tracking-wide lg:mt-2 lg:block"
          />
          <p className="mt-1 text-sm lg:mt-2 lg:text-base">
            Available seat: {ticket.quantity}
          </p>
          <p className="mt-2 text-base font-bold lg:mt-3 lg:text-lg">
            {CurrencyFormatter(Number(ticket.price))}
          </p>
        </div>
      </div>
    </div>
  );
}
