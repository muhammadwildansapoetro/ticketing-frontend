"use client";

import { useState } from "react";
import { category, location } from "./filterList";
import DesktopFilterBar from "./desktopFilter";
import MobileFilterMenu from "./mobileFilter";
import { EventFilters } from "@/types/event";
import useToggleState from "@/hooks/useToggleState";

export default function FilterBar({
  onFilter,
}: {
  onFilter: (filters: EventFilters) => void;
}) {
  const { isOpen, handleToggle } = useToggleState();
  const [filters, setFilters] = useState<EventFilters>({
    category: "All category",
    location: "All location",
  });

  const handleReload = () => {
    const defaultFilters: EventFilters = { category: "All", location: "All" };
    setFilters(defaultFilters);
    onFilter(defaultFilters);
    window.location.reload();
  };

  const handleFilterChange = (field: keyof EventFilters, value: string) => {
    const updatedFilters = {
      ...filters,
      [field]: value,
    };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  return (
    <div>
      {/* Mobile Filter Button */}
      <div className="flex items-center justify-center lg:hidden">
        <button
          onClick={handleToggle}
          className="mx-5 mt-5 w-full rounded-lg border border-accent bg-white p-2 hover:bg-accent/5"
        >
          <p className="text-lg font-medium text-accent">Filter</p>
        </button>
      </div>

      {/* Desktop Filter Bar */}
      <DesktopFilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onReload={handleReload}
        categories={category}
        locations={location}
      />

      {/* Mobile Filter Menu */}
      {isOpen && (
        <MobileFilterMenu
          filters={filters}
          onFilterChange={handleFilterChange}
          onReload={handleReload}
          onClose={handleToggle}
          categories={category}
          locations={location}
        />
      )}
    </div>
  );
}
