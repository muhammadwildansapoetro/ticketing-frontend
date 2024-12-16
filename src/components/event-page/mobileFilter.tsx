"use client";

import { EventFilters } from "@/types/event";
import { IoIosArrowBack } from "react-icons/io";
import { IoReload } from "react-icons/io5";

export default function MobileFilter({
  filters,
  onFilterChange,
  onReload,
  onClose,
  categories,
  locations,
}: {
  filters: EventFilters;
  onFilterChange: (field: keyof EventFilters, value: string) => void;
  onReload: () => void;
  onClose: () => void;
  categories: string[];
  locations: string[];
}) {
  return (
    <div className="absolute inset-0 z-10 h-screen w-full bg-white lg:hidden">
      <div className="m-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={onClose}>
            <IoIosArrowBack size={25} className="hover:text-accent" />
          </button>
          <p className="text-xl font-medium">Filter</p>
        </div>

        <button onClick={onReload} className="flex gap-1 hover:text-accent">
          <IoReload size={25} />
          Reset filter
        </button>
      </div>

      <div className="mx-5 border border-accent/10" />

      {/* Category Filter */}
      <div className="m-5">
        <p className="mb-2 text-xl font-bold">Category</p>
        <div className="flex flex-col items-start justify-start gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterChange("category", cat)}
              className={`rounded-lg px-2 py-1 ${
                filters.category === cat
                  ? "bg-accent text-white"
                  : "bg-white text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div className="m-5">
        <p className="mb-2 text-xl font-bold">Location</p>
        <div className="flex flex-col items-start justify-start gap-1">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => onFilterChange("location", loc)}
              className={`rounded-lg px-2 py-1 ${
                filters.location === loc
                  ? "bg-accent text-white"
                  : "bg-white text-black"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center">
        <button
          onClick={onClose}
          className="mx-5 w-full rounded-lg bg-accent py-2 text-white hover:bg-accent/90"
        >
          Apply filter
        </button>
      </div>
    </div>
  );
}
