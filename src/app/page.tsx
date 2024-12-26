<<<<<<< HEAD
import Hero from "@/components/landing-page/hero";
import SlidingBanner from "@/components/landing-page/slidingBanner";

export default async function Home() {
  return (
    <div>
      <Hero />
      <SlidingBanner />
=======
import MobileNavBar from "@/components/footer/mobileNavBar";
import Hero from "@/components/landing/hero";
import UpcomingMatch from "@/components/landing/upcomingMatch";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
      <div className="mx-5 my-10 flex flex-col items-center justify-center gap-5 lg:mx-10 lg:my-20 lg:flex-row xl:mx-20">
        <div className="container mx-auto flex basis-1/2 flex-col items-start justify-center">
          <Hero />
          <UpcomingMatch />
        </div>
        <div className="basis-1/2">
          <Image
            src={
              "https://res.cloudinary.com/doiygpguv/image/upload/v1734916346/football-stadium-1_dlavjo.png"
            }
            alt="Football stadium icon"
            width={750}
            height={750}
            className="object-cover"
          />
        </div>
      </div>
      <MobileNavBar />
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
    </div>
  );
}