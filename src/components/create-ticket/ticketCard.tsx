import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import DateFormatter from "@/helpers/dateFormatter";
import { ITicket } from "@/types/ticket";

export default function TicketCard({ ticket }: { ticket: ITicket }) {
  const hasDiscount =
    ticket.discountPercentage && ticket.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? ticket.price -
      (ticket.price * (ticket.discountPercentage as number)) / 100
    : ticket.price;

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
            className="mb-3 mt-2 text-sm"
          />
          {hasDiscount && (
            <p className="text-sm font-bold text-green-700 lg:text-base">
              Discount {ticket.discountPercentage}% from{" "}
              <span className="">
                {" "}
                {DateFormatter(ticket.discountStartDate!)}
              </span>{" "}
              until{" "}
              <span className="">
                {" "}
                {DateFormatter(ticket.discountEndDate!)}
              </span>
            </p>
          )}
          <p className="text-lg">
            {hasDiscount ? (
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
      </div>
    </div>
  );
}
