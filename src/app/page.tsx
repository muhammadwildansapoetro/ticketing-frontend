import MobileNavBar from "@/components/footer/mobileNavBar";
import Hero from "@/components/landing/hero";

export default async function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
      <div className="mx-5 flex flex-col items-center justify-center gap-5 lg:mx-20 lg:flex-row xl:mx-32">
        <Hero />
      </div>
      <MobileNavBar />
    </div>
  );
}
