import { getEvents } from "@/libs/event";
import { IEvent } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

export default async function UpcomingMatch() {
  const events: IEvent[] = await getEvents();

  return (
    <div className="mt-10 hidden w-full flex-col lg:flex">
      <div className="text-xl font-bold">Upcoming Match</div>
      <div className="mt-5 flex gap-5 overflow-x-auto">
        {events.map((event, index) => (
          <div key={index} className="shrink-0">
            <Link href={`/event/${event.id}`}>
              <Image
                src={`${event.image}`}
                alt={`${event.title}`}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
