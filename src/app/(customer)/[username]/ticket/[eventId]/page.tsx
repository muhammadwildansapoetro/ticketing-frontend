"use client";

import Loading from "@/app/loading";
import { useSession } from "@/context/useSession";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { getCustomerTickets } from "@/libs/ticket";
import protectCustomerPage from "@/page-protection/protectCustomerPage";
import { ITicket } from "@/types/ticket";
import { useEffect, useState } from "react";
import { FaBarcode } from "react-icons/fa";

function MyTicketPage({
  params,
}: {
  params: { eventId: string };
}): JSX.Element {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [loading, setLoading] = useState(true);
  const { customer } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTickets: ITicket[] = await getCustomerTickets(
          params.eventId,
        );
        setTickets(fetchedTickets);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.eventId]);

  if (loading) {
    return <Loading />;
  }

  console.log("tickets:", tickets);

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-start gap-5 px-5 py-10 sm:px-10 md:px-20 lg:px-40 xl:px-80 2xl:px-96">
      {tickets.map((ticket, index) => {
        return (
          <div
            key={index}
            className="relative flex w-full items-center rounded-lg border border-accent bg-accent/10 p-5"
          >
            <span className="absolute -top-[1.5px] right-40 z-10 h-5 w-10 rounded-bl-full rounded-br-full border-b border-l border-r border-accent border-t-white bg-white lg:right-72"></span>
            <span className="absolute -bottom-[1.5px] right-40 z-10 h-5 w-10 rounded-tl-full rounded-tr-full border-l border-r border-t border-accent border-b-white bg-white lg:right-72"></span>
            <span className="absolute right-[179px] h-full border-l-2 border-dotted border-accent lg:right-[307px]"></span>

            <div className="flex w-full justify-between gap-5">
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-xl font-bold lg:text-3xl">
                  {ticket.category} Stand
                </h1>
                <p className="text-lg font-bold lg:text-2xl">
                  {ticket.event.title}
                </p>
                <p className="text-sm font-medium lg:text-base">
                  {ticket.event.venue}, {ticket.event.location}
                </p>
                <p className="mt-1 text-xs font-medium lg:text-base">
                  {DateFormatter(ticket.event.date)} | Kick Off:{" "}
                  {TimeFormatter(ticket.event.startTime)} WIB
                </p>
                <p className="mt-1 text-sm font-medium lg:text-base">
                  Ticket ID: {ticket.id} - {customer?.fullname}
                </p>
              </div>

              <FaBarcode className="size-32 lg:mr-10 lg:size-44" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default protectCustomerPage(MyTicketPage);
