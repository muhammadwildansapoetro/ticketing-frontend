import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/types/event";
import { CurrencyFormatter } from "@/helpers/currencyFormatter";

export default async function EventCard({ events }: { events: IEvent[] }) {
  return (
    <div className="">
      <div className="mx-auto px-5 py-10">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
          {events.map((event, index) => {
            const lowestPrice = Math.min(
              ...event.Ticket.map((ticket) => Number(ticket.price)),
            );
            return (
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
                <div className="m-3">
                  <div>
                    <h3 className="overflow-hidden text-lg font-medium text-gray-900">
                      <Link href={`/event/${event.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {event.title}
                      </Link>
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {event.venue}, {event.location}
                    </p>

                    <p className="mb-1 mt-2 font-medium text-gray-800">
                      Starting from {CurrencyFormatter(lowestPrice)}
                    </p>

                    <div>
                      <div className="mt-3 flex items-center justify-start gap-2 border-t-2 border-gray-300 pt-3">
                        <Image
                          src={`${event.organizer.avatar}`}
                          alt={`${event.organizer.name}`}
                          width={50}
                          height={50}
                          className="h-10 w-10 rounded-full border border-gray-500 object-cover"
                        />

                        <p className="w-full text-gray-700">
                          {event.organizer.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
