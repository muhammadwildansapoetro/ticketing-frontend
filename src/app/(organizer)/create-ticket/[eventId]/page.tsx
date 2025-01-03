"use client";

import { ITicket } from "@/types/ticket";
import CreateTicketForm from "@/components/create-ticket/ticketForm";
import { getTickets } from "@/libs/ticket";
import TicketCard from "@/components/create-ticket/ticketCard";
import { IEvent } from "@/types/event";
import { getEventDetail } from "@/libs/event";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default function CreateTicketPage({
  params,
}: {
  params: {
    eventId: string;
  };
}) {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [event, setEvent] = useState<IEvent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTickets: ITicket[] = await getTickets(params.eventId);
        const fetchedEvent: IEvent = await getEventDetail(params.eventId);
        setTickets(fetchedTickets);
        setEvent(fetchedEvent);
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
  if (!event) {
    return <p>Error loading event details.</p>;
  }

  return (
    <div className="container mx-auto flex items-start justify-center gap-10 p-5 lg:my-10 lg:px-10 lg:pb-96 xl:px-20 2xl:px-52">
      <div className="lg:basis-2/3">
        <div className="relative flex items-center justify-between rounded-lg border border-accent bg-accent/10 p-5">
          <span className="absolute -top-[1.5px] right-28 z-10 h-5 w-10 rounded-bl-full rounded-br-full border-b border-l border-r border-accent border-t-white bg-white lg:right-36"></span>
          <span className="absolute -bottom-[1.5px] right-28 z-10 h-5 w-10 rounded-tl-full rounded-tr-full border-l border-r border-t border-accent border-b-white bg-white lg:right-36"></span>
          <span className="absolute right-[132px] h-full border-l-2 border-dotted border-accent lg:right-[162px]"></span>

          <div className="flex flex-col items-start justify-center lg:mr-28">
            <h1 className="text-lg font-bold lg:text-2xl">{event.title}</h1>
            <p className="mt-1 text-sm lg:mt-2 lg:text-base">
              {DateFormatter(event.date)}{" "}
              <span className="hidden lg:inline-block">
                - {TimeFormatter(event.startTime)} -{" "}
                {TimeFormatter(event.endTime)} WIB
              </span>
            </p>

            <p className="mt-1 text-sm lg:mt-2 lg:text-base">
              <span className="hidden lg:inline-block"> {event.venue}, </span>{" "}
              {event.location}
            </p>
          </div>

          <CreateTicketForm eventId={params.eventId} />
        </div>

        <div className="my-5 border-t border-accent" />

        <div className="flex flex-col gap-5">
          {tickets.length != 0 ? (
            <>
              {tickets.map((ticket, index) => (
                <TicketCard ticket={ticket} key={index} />
              ))}
            </>
          ) : (
            <p className="text-center">
              This match does not have tickets yet, click the
              <span className="font-bold"> Add ticket </span> button to create
              tickets
            </p>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 top-0 hidden lg:block lg:basis-1/3">
        <Image
          src={
            "https://res.cloudinary.com/doiygpguv/image/upload/v1735350403/tickets_darks1.png"
          }
          alt="Tickets"
          width={400}
          height={400}
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
