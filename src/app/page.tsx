import Hero from "@/components/landing-page/hero";
import SlidingBanner from "@/components/landing-page/slidingBanner";

export default async function Home() {
  return (
    <div>
      <Hero />
      <SlidingBanner />
    </div>
  );
}