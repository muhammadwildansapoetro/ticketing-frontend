import Tabs from "@/components/event-detail/tabsAndOrder";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { getEventDetail } from "@/libs/event";
import { IEvent } from "@/types/event";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { ITicket } from "@/types/ticket";
import { getTickets } from "@/libs/ticket";
import TabsAndOrder from "@/components/event-detail/tabsAndOrder";

export default async function EventDetailPage({
  params,
}: {
  params: { eventId: string };
}) {
  const eventData: { event: IEvent } = await getEventDetail(params.eventId);
  const ticketData: { tickets: ITicket[] } = await getTickets(params.eventId);

  return (
    <div className="flex flex-col lg:mx-20 lg:my-10 xl:mx-56">
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:justify-start">
        <div className="w-full lg:basis-2/3 lg:px-0">
          <Image
            src={`${eventData.event.image}`}
            alt={eventData.event.title}
            width={1000}
            height={1000}
            className="w-full object-center lg:rounded-xl lg:shadow-xl"
          />
        </div>

        <div className="w-full px-5 lg:basis-1/3 lg:px-0">
          <div className="flex flex-col gap-y-2 lg:rounded-xl lg:border lg:border-gray-200 lg:p-5 lg:shadow-xl">
            <p className="text-accent">{eventData.event.category} Match</p>
            <h1 className="text-2xl font-bold">{eventData.event.title}</h1>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-accent" />
              <p>{DateFormatter(eventData.event.date)}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoTime className="text-accent" />
              <p>
                {TimeFormatter(eventData.event.startTime)} -{" "}
                {TimeFormatter(eventData.event.endTime)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-accent" />
              <p>
                {eventData.event.venue}, {eventData.event.location}{" "}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-start gap-2 border-t-2 border-gray-300 pt-5">
              <Image
                src={`${eventData.event.organizer.avatar}`}
                alt={`${eventData.event.organizer.name}`}
                width={25}
                height={25}
                className="h-12 w-12 rounded-full border border-gray-500 object-cover"
              />
              <div>
                <p>Hosted by</p>
                <p className="text-lg font-bold">
                  {eventData.event.organizer.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-start justify-start gap-5 lg:flex-row">
        <TabsAndOrder event={eventData.event} ticket={ticketData.tickets} />
      </div>
    </div>
  );
}
