import { ITicket } from "@/types/ticket";
import CreateTicketForm from "@/components/create-ticket/ticketForm";
import { getTickets } from "@/libs/ticket";
import TicketCard from "@/components/create-ticket/ticketCard";
import { IEvent } from "@/types/event";
import { getEventDetail } from "@/libs/event";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";

export default async function CreateTicketPage({
  params,
}: {
  params: { eventId: string };
}) {
  const tickets: ITicket[] = await getTickets(params.eventId);
  const event: IEvent = await getEventDetail(params.eventId);

  return (
    <div className="">
      <div className="mx-5 mt-10 flex flex-col items-center justify-center rounded-xl border border-accent/30 bg-accent/10 p-5 lg:mx-40 xl:mx-96">
        <h1 className="text-xl font-bold">{event.title}</h1>
        <p>
          {DateFormatter(event.date)} - {TimeFormatter(event.startTime)} -{" "}
          {TimeFormatter(event.endTime)} WIB
        </p>
        <p>
          {event.venue}, {event.location}
        </p>
        <CreateTicketForm eventId={params.eventId} />
      </div>

      <div className="mx-5 my-10 flex flex-col gap-5 lg:mx-40 xl:mx-96">
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
  );
}
