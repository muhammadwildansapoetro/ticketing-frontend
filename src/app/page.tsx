import MobileNavBar from "@/components/footer/mobileNavBar";
import Hero from "@/components/landing/hero";
import JoinInvitation from "@/components/landing/joinInvitation";
import SlidingBanner from "@/components/landing/slidingBanner";

export default async function Home() {
  return (
    <div className="my-auto flex h-screen flex-col">
      <Hero />
      <JoinInvitation />
      <SlidingBanner />
      <MobileNavBar />
    </div>
  );
}
