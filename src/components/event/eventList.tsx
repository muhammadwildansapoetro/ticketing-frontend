import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/types/event";
import { getEvents } from "@/libs/event";

export default async function EventList() {
  const data: { events: IEvent[] } = await getEvents();

  return (
    <div className="">
      <div className="mx-auto px-5 py-10">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
          {data.events.map((event, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-white shadow-lg"
            >
              <Image
                src={`${event.image}`}
                alt={event.title}
                width={1000}
                height={1000}
                className="aspect-video w-full rounded-tl-xl rounded-tr-xl bg-gray-200 object-cover group-hover:opacity-75"
              />
              <div className="m-2">
                <div>
                  <h3 className="overflow-hidden text-lg font-medium text-gray-900">
                    <Link href={`/event/${event.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {event.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-gray-500">{event.venue}</p>
                  <p className="mt-1 text-gray-500">{event.location}</p>
                  <p className="mb-1 mt-1 font-medium text-gray-800">price</p>
                  <div className="border-t border-gray-500" />
                  <p className="w-full text-gray-700">{event.organizer.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
