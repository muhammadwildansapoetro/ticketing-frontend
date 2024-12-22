import EventCard from "@/components/events/eventCard";
import FilterMenu from "@/components/events/filterMenu";
import MobileNavBar from "@/components/footer/mobileNavBar";

export default function EventsPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <FilterMenu />
      <div className="lg:flex lg:flex-col">
        <EventCard />
      </div>
      <MobileNavBar />
    </div>
  );
}
