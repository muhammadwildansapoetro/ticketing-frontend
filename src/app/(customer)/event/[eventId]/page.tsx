import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { getEventDetail, getEvents } from "@/libs/event";
import { IEvent } from "@/types/event";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import TabsAndOrder from "@/components/event-detail/tabsAndOrder";

export const generateStaticParams = async () => {
  const events: IEvent[] = await getEvents();

  return events
    .filter((event) => event.id)
    .map((event) => ({
      eventId: event.id,
    }));
};

export async function generateMetadata({
  params,
}: {
  params: { eventId: string };
}) {
  const event: IEvent = await getEventDetail(params.eventId);

  return {
    title: event.title,
    openGraph: { images: [`${event.image}`] },
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event: IEvent = await getEventDetail(params.eventId);

  return (
    <div className="flex flex-col lg:mx-20 lg:my-10 xl:mx-56">
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:justify-start">
        <div className="w-full lg:basis-2/3 lg:px-0">
          <Image
            src={`${event.image}`}
            alt={event.title}
            width={1000}
            height={1000}
            priority
            className="w-full object-center lg:rounded-xl lg:shadow-xl"
          />
        </div>

        <div className="w-full px-5 lg:basis-1/3 lg:px-0">
          <div className="flex flex-col gap-y-2 lg:rounded-xl lg:border lg:border-gray-200 lg:p-5 lg:shadow-xl">
            <p className="text-accent">{event.category} Match</p>
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-accent" />
              <p>{DateFormatter(event.date)}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoTime className="text-accent" />
              <p>
                {TimeFormatter(event.startTime)} -{" "}
                {TimeFormatter(event.endTime)} WIB
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-accent" />
              <p>
                {event.venue}, {event.location}{" "}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-start gap-2 border-t-2 border-gray-300 pt-5">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-gray-500">
                <Image
                  src={`${event.organizer.avatar}`}
                  alt={`${event.organizer.fullname}`}
                  width={50}
                  height={50}
                  priority
                  className="object-cover"
                />
              </div>

              <div>
                <p>Hosted by</p>
                <p className="font-bold">{event.organizer.fullname}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-start justify-start gap-5 lg:flex-row">
        <TabsAndOrder event={event} params={params.eventId} />
      </div>
    </div>
  );
}
