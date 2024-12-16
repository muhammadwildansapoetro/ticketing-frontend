"use client";

import MatchList from "@/components/event-page/eventList";
import { useState } from "react";
import FilterMenu from "@/components/event-page/filterMenu";
import Pagination from "@/components/event-page/pagination";
import { EventFilters } from "@/types/event";
import EventList from "@/components/event-page/eventList";

export default function MatchesPage() {
  const [activeFilters, setActiveFilters] = useState<EventFilters>({
    category: "All category",
    location: "All location",
  });

  const handleFilterChange = (filters: EventFilters) => {
    setActiveFilters(filters);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <FilterMenu onFilter={handleFilterChange} />
      <div className="lg:flex lg:flex-col">
        <EventList activeFilters={activeFilters} />
        <div className="mr-10 lg:flex lg:justify-end">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
