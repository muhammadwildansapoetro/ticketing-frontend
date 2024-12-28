"use client";

import useToggle from "@/hooks/useToggle";
import { IoReload } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { matchLocations, matchCategories } from "./filterList";
import { FilterMenuProps } from "@/types/filter";

export default function FilterMenu({
  selectedCategory,
  selectedLocation,
  onCategoryChange,
  onLocationChange,
  onResetFilter,
}: FilterMenuProps & { onResetFilter: () => void }) {
  const { isOpen, handleToggle } = useToggle();

  const handleCategoryClick = (category: string) => {
    // Set the selected category, deselecting any previously selected category
    onCategoryChange(selectedCategory === category ? "" : category);
  };

  const handleLocationClick = (location: string) => {
    // Set the selected location, deselecting any previously selected location
    onLocationChange(selectedLocation === location ? "" : location);
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
      <div className="hidden h-full w-72 border border-accent/20 lg:block">
        <div className="mx-5 flex items-center justify-between border-b border-accent/20 py-5">
          <p className="text-xl font-medium">Filters</p>
          <button
            onClick={onResetFilter}
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
              {matchCategories.map((category) => (
                <div key={category}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`rounded-lg border border-accent/20 px-4 py-2 ${
                      selectedCategory?.includes(category)
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-white text-black hover:bg-accent/10"
                    }`}
                  >
                    {category}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <p className="mb-2 text-lg font-bold">Location</p>
            <div className="flex flex-col gap-2">
              {matchLocations.map((location) => (
                <div key={location}>
                  <button
                    onClick={() => handleLocationClick(location)}
                    className={`rounded-lg border border-accent/20 px-4 py-2 hover:bg-accent/10 ${
                      selectedLocation.includes(location)
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-white text-black hover:bg-accent/10"
                    }`}
                  >
                    {location}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Menu */}
      {isOpen && (
        <div className="absolute inset-0 z-10 h-screen w-full bg-white lg:hidden">
          <div className="m-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button onClick={handleToggle}>
                <IoIosArrowBack size={25} className="hover:text-accent" />
              </button>
              <p className="text-xl font-medium">Filter</p>
            </div>

            <button
              onClick={onResetFilter}
              className="flex gap-1 hover:text-accent"
            >
              <IoReload size={25} />
              Reset filter
            </button>
          </div>

          <div className="mx-5 border border-accent/10" />

          {/* Category Filter */}
          <div className="m-5">
            <p className="mb-2 text-xl font-bold">Category</p>
            {matchCategories.map((category, index) => (
              <div key={index} className="my-1 flex flex-col items-start">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`rounded-lg px-2 py-1 ${
                    selectedCategory.includes(category)
                      ? "bg-accent text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>

          {/* Location Filter */}
          <div className="m-5">
            <p className="mb-2 text-xl font-bold">Location</p>
            {matchLocations.map((location, index) => (
              <div key={index} className="my-1 flex flex-col items-start">
                <button
                  onClick={() => handleLocationClick(location)}
                  className={`rounded-lg px-2 py-1 ${
                    selectedLocation.includes(location)
                      ? "bg-accent text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {location}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center">
            <button
              onClick={handleToggle}
              className="mx-5 w-full rounded-lg bg-accent py-2 text-white hover:bg-accent/90"
            >
              Apply filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
