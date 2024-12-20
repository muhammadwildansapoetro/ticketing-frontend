import EventList from "@/components/event/eventList";
import FilterMenu from "@/components/event/filterMenu";

export default function EventsPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <FilterMenu />
      <div className="lg:flex lg:flex-col">
        <EventList />
      </div>
    </div>
  );
}
