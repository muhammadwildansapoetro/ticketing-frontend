import { IoReload } from "react-icons/io5";
import { matchLocations, matchCategories } from "./filterList";
import { FilterMenuProps } from "@/types/filter";

export default function DesktopFilter({
  selectedCategories,
  selectedLocations,
  onCategoryChange,
  onLocationChange,
  onResetFilter,
}: FilterMenuProps & { onResetFilter: () => void }) {
  return (
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
                  onClick={() => onCategoryChange(category)}
                  className={`rounded-lg border border-accent/20 px-4 py-2 ${
                    selectedCategories?.includes(category)
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
                  onClick={() => onLocationChange(location)}
                  className={`rounded-lg border border-accent/20 px-4 py-2 hover:bg-accent/10 ${
                    selectedLocations.includes(location)
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
  );
}
