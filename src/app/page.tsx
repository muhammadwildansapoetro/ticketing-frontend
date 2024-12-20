import MobileNavBar from "@/components/landing/mobileNavBar";
import Hero from "@/components/landing/hero";
import SlidingBanner from "@/components/landing/slidingBanner";

export default async function Home() {
  return (
    <div className="container mx-auto my-40 flex flex-col items-center justify-center lg:flex-row">
      <div className="mx-5 flex flex-col items-center justify-center gap-5 lg:mx-20 lg:flex-row xl:mx-32">
        <Hero />
        <SlidingBanner />
      </div>
      <MobileNavBar />
    </div>
  );
}
