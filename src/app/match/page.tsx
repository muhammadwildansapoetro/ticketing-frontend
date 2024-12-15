"use client";

import { Filters } from "@/components/matchPage/filterList";
import MatchList from "@/components/matchPage/matchList";
import { useState } from "react";
import FilterMenu from "@/components/matchPage/filterMenu";
import Pagination from "@/components/matchPage/pagination";

export default function MatchesPage() {
  const [activeFilters, setActiveFilters] = useState<Filters>({
    category: "All category",
    location: "All location",
  });

  const handleFilterChange = (filters: Filters) => {
    setActiveFilters(filters);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <FilterMenu onFilter={handleFilterChange} />
      <MatchList activeFilters={activeFilters} />
      <Pagination />
    </div>
  );
}
