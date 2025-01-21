import { getEvents } from "@/libs/event";
import Image from "next/image";
import Hero from "@/components/landing/hero";
import SlidingUpcomingMatch from "@/components/landing/slidingUpcomingMatch";
import ChampionshipMatchSwiper from "@/components/landing/championshipMatchSwiper";
import LeagueMatchSwiper from "@/components/landing/leagueMatchSwiper";
import FriendlyMatchSwiper from "@/components/landing/friendlyMatchSwiper";
import MobileNavBar from "@/components/footer/mobileNavBar";
import TrainingMatchSwiper from "@/components/landing/trainingMatchSwiper";

interface IEvent {
  id: string;
  image: string;
  title: string;
  category: string;
  date: string;
  venue: string;
  location: string;
}

export default async function Home() {
  const events: IEvent[] = await getEvents();

  return (
    <main className="container mx-auto flex flex-col items-center justify-start pb-36">
      <section className="flex flex-col items-center justify-start lg:max-h-[500px] lg:flex-row lg:gap-5">
        <div className="flex max-w-[600px] flex-col">
          <Hero />
        </div>
        <div className="max-w-[500px] overflow-hidden">
          <Image
            src={
              "https://res.cloudinary.com/doiygpguv/image/upload/v1734916346/football-stadium-1_dlavjo.png"
            }
            alt="Football stadium icon"
            width={1000}
            height={1000}
            priority
            className="object-cover"
          />
        </div>
      </section>

      <div className="flex-col">
        <section>
          <SlidingUpcomingMatch events={events} />
        </section>

        <section className="mt-5">
          <ChampionshipMatchSwiper events={events} />
        </section>

        <section className="mt-5">
          <LeagueMatchSwiper events={events} />
        </section>

        <section className="mt-5">
          <FriendlyMatchSwiper events={events} />
        </section>

        <section className="mt-5">
          <TrainingMatchSwiper events={events} />
        </section>
      </div>

      <MobileNavBar />
    </main>
  );
}
