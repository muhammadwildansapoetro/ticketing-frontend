import { IoIosArrowBack } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { matchCategories, matchLocations } from "./filterList";

export default function MobileFilter({
  onClose,
  selectedCategories,
  selectedLocations,
  onCategoryChange,
  onLocationChange,
  onResetFilter,
}: {
  onClose: () => void;
  selectedCategories: string[];
  selectedLocations: string[];
  onCategoryChange: (category: string) => void;
  onLocationChange: (location: string) => void;
  onResetFilter: () => void;
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
          <div className="my-1 flex flex-col items-start">
            <button
              key={index}
              onClick={() => onCategoryChange(category)}
              className={`rounded-lg px-2 py-1 ${
                selectedCategories.includes(category)
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
          <div className="my-1 flex flex-col items-start">
            <button
              key={index}
              onClick={() => onLocationChange(location)}
              className={`rounded-lg px-2 py-1 ${
                selectedLocations.includes(location)
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
          onClick={onClose}
          className="mx-5 w-full rounded-lg bg-accent py-2 text-white hover:bg-accent/90"
        >
          Apply filter
        </button>
      </div>
    </div>
  );
}
