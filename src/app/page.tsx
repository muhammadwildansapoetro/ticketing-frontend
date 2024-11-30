import MatchList from "@/components/landing_page/matchList";
import HeroSection from "@/components/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-5 mt-20 flex flex-col items-center justify-center border">
      <MatchList />
    </div>
  );
}
