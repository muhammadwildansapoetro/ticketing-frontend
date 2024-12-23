import { getEvents } from "@/libs/event";
import { IEvent } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

export default async function UpcomingMatch() {
  const data: { events: IEvent[] } = await getEvents();

  return (
    <div className="mt-10 hidden w-full flex-col overflow-hidden lg:flex">
      <div className="text-xl font-bold">Upcoming Match</div>
      <div>
        {data.events.map((event, index) => (
          <div key={index} className="mt-5">
            <Link href={`/event/${event.id}`}>
              <Image
                src={`${event.image}`}
                alt={`${event.title}`}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
