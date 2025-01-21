import Image from "next/image";
import Link from "next/link";
import { IEvent } from "@/types/event";
import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import DateFormatter from "@/helpers/dateFormatter";

export default function EventCard({ events }: { events: IEvent[] }) {
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
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-gray-200 group-hover:opacity-75">
                  <div className="absolute left-0 top-0 m-1 rounded-xl bg-white px-2 py-0.5 text-sm tracking-wide text-accent lg:text-xs">
                    {event.category} Match
                  </div>
                  <Image
                    src={`${event.image}`}
                    alt={event.title}
                    width={1000}
                    height={1000}
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="m-3">
                  <div>
                    <h3 className="overflow-hidden text-lg font-medium text-gray-900">
                      <Link href={`/event/${event.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {event.title}
                      </Link>
                    </h3>

                    <p className="text-gray-700">{DateFormatter(event.date)}</p>

                    <p className="text-sm text-gray-500">
                      {event.venue}, {event.location}
                    </p>

                    <p
                      className={`mb-1 mt-2 font-medium ${lowestPrice === 0 ? "tracking-wide text-accent" : "text-gray-800"}`}
                    >
                      {lowestPrice === 0
                        ? "Free"
                        : `Starting from ${CurrencyFormatter(lowestPrice)}`}
                    </p>

                    <div>
                      <div className="mt-3 flex items-center justify-start gap-2 border-t-2 border-gray-300 pt-3">
                        <div className="h-10 w-12 overflow-hidden rounded-full border border-gray-500">
                          <Image
                            src={`${event.organizer.avatar}`}
                            alt={`${event.organizer.fullname}`}
                            width={50}
                            height={50}
                            priority
                            className="object-cover"
                          />
                        </div>

                        <p className="w-full text-sm text-gray-700">
                          {event.organizer.fullname}
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
