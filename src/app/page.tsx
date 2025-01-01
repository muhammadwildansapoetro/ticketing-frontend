import MobileNavBar from "@/components/footer/mobileNavBar";
import Hero from "@/components/landing/hero";
import UpcomingMatch from "@/components/landing/upcomingMatch";
import { getEvents } from "@/libs/event";
import { IEvent } from "@/types/event";
import Image from "next/image";

export default async function Home() {
  const events: IEvent[] = await getEvents();

  return (
    <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
      <div className="mx-5 my-10 flex flex-col items-center justify-center gap-5 lg:mx-24 lg:my-16 lg:flex-row">
        <div className="container mx-auto flex basis-1/2 flex-col items-start justify-center">
          <Hero />
          <UpcomingMatch events={events} />
        </div>
        <div className="basis-1/2">
          <Image
            src={
              "https://res.cloudinary.com/doiygpguv/image/upload/v1734916346/football-stadium-1_dlavjo.png"
            }
            alt="Football stadium icon"
            width={750}
            height={750}
            priority
            className="object-cover"
          />
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
}
