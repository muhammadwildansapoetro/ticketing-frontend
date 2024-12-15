"use client";

import { useState } from "react";
import { category, Filters, location } from "./filterList";
import UseOpen from "@/hooks/useOpen";
import DesktopFilterBar from "./desktopFilter";
import MobileFilterMenu from "./mobileFilter";

export default function FilterBar({
  onFilter,
}: {
  onFilter: (filters: Filters) => void;
}) {
  const { isOpen, handleOpen } = UseOpen();
  const [filters, setFilters] = useState<Filters>({
    category: "All category",
    location: "All location",
  });

  const handleReload = () => {
    const defaultFilters: Filters = { category: "All", location: "All" };
    setFilters(defaultFilters);
    onFilter(defaultFilters);
    window.location.reload();
  };

  const handleFilterChange = (field: keyof Filters, value: string) => {
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
          onClick={handleOpen}
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
          onClose={handleOpen}
          categories={category}
          locations={location}
        />
      )}
    </div>
  );
}
