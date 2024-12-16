"use client";

import { EventFilters } from "@/types/event";
import { IoReload } from "react-icons/io5";

export default function DesktopFilterBar({
  filters,
  onFilterChange,
  onReload,
  categories,
  locations,
}: {
  filters: EventFilters;
  onFilterChange: (field: keyof EventFilters, value: string) => void;
  onReload: () => void;
  categories: string[];
  locations: string[];
}) {
  return (
    <div className="hidden h-full w-72 border border-accent/20 lg:block">
      <div className="mx-5 flex items-center justify-between border-b border-accent/20 py-5">
        <p className="text-xl font-medium">Filters</p>
        <button
          onClick={onReload}
          className="flex items-center gap-1 hover:text-accent"
        >
          <IoReload size={25} />
          Reset
        </button>
      </div>
      <div className="flex flex-col gap-10 p-5">
        {/* Category Filter */}
        <div>
          <p className="mb-2 text-lg font-bold">Category</p>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterChange("category", category)}
                className={`rounded-lg px-4 py-2 ${
                  filters.category === category
                    ? "bg-accent text-white"
                    : "border border-accent/20 bg-white text-black hover:bg-accent/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div>
          <p className="mb-2 text-lg font-bold">Location</p>
          <div className="flex flex-col gap-2">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => onFilterChange("location", location)}
                className={`rounded-lg px-4 py-2 ${
                  filters.location === location
                    ? "bg-accent text-white"
                    : "border border-accent/20 bg-white text-black hover:bg-accent/10"
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
