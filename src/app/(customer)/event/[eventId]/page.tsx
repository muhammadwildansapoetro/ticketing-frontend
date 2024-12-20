import Tabs from "@/components/event/event-detail/tabs";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { getEventDetail } from "@/libs/event";
import { IEvent } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

export default async function EventDetail({
  params,
}: {
  params: { eventId: string };
}) {
  const data: { event: IEvent } = await getEventDetail(params.eventId);

  return (
    <div className="my-10 flex flex-col">
      <div className="flex flex-col items-start justify-start gap-5 lg:mx-60 lg:flex-row">
        <div className="flex items-center justify-center overflow-hidden lg:basis-2/3 lg:rounded-xl">
          <Image
            src={`${data.event.image}`}
            alt={data.event.title}
            width={1000}
            height={1000}
            className="w-full object-center"
          />
        </div>

        <div className="m-5 rounded-xl lg:m-0 lg:basis-1/3 lg:shadow-xl">
          <div className="flex flex-col gap-y-2 rounded-xl border-gray-200 lg:border lg:p-5">
            <h1 className="text-2xl font-bold">{data.event.title}</h1>
            <p>{data.event.category} Match</p>
            <p>
              <DateFormatter date={data.event.date} />
            </p>
            <p>
              <TimeFormatter date={data.event.startTime} /> -{" "}
              <TimeFormatter date={data.event.endTime} />
            </p>
            <p>{data.event.venue}</p>
            <p>{data.event.location}</p>
            <div className="mt-5 flex items-center justify-start gap-2">
              <Image
                src={`${data.event.organizer.avatar}`}
                alt={`${data.event.organizer.name}`}
                width={25}
                height={25}
                className="h-12 w-12 rounded-full border border-gray-500 object-cover"
              />
              <p>Hosted by {data.event.organizer.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-start justify-start gap-5 lg:mx-60 lg:flex-row">
        <Tabs event={data.event} />
        <div className="flex basis-1/3 rounded-lg border border-gray-200 p-5 lg:shadow-xl">
          <Link
            href={`/order`}
            className="w-full rounded-lg bg-accent p-2 text-center tracking-widest text-white hover:bg-accent/90"
          >
            Buy ticket
          </Link>
        </div>
      </div>
    </div>
  );
}
