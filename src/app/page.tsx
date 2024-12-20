import MobileNavBar from "@/components/landing/mobileNavBar";
import Hero from "@/components/landing/hero";
import JoinInvitation from "@/components/landing/joinInvitation";
import SlidingBanner from "@/components/landing/slidingBanner";

export default async function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Hero />
      <JoinInvitation />
      <SlidingBanner />
      <MobileNavBar />
    </div>
  );
}
