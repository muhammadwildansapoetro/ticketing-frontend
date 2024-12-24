import EventCard from "@/components/events/eventCard";
import FilterMenu from "@/components/events/filterMenu";
import MobileNavBar from "@/components/footer/mobileNavBar";
import { getEvents } from "@/libs/event";
import { IEvent } from "@/types/event";

export default async function EventsPage() {
  const events: IEvent[] = await getEvents();

  return (
    <div className="flex flex-col lg:flex-row">
      <FilterMenu />
      <div className="lg:flex lg:flex-col">
        <EventCard events={events} />
      </div>
      <MobileNavBar />
    </div>
  );
}
