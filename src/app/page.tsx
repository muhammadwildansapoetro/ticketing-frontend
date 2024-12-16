import Hero from "@/components/landing-page/hero";
import JoinInvitation from "@/components/landing-page/joinInvitation";
import SlidingBanner from "@/components/landing-page/slidingBanner";

export default async function Home() {
  return (
    <div>
      <Hero />
      <SlidingBanner />
      <JoinInvitation />
    </div>
  );
}
