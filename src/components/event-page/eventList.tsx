import Image from "next/image";
import Link from "next/link";
import { events } from "./events";
import { EventFilters } from "./filterList";

export default function EventList({
  activeFilters,
}: {
  activeFilters: EventFilters;
}) {
  const filteredMatches = events.filter((event) => {
    const matchesCategory =
      activeFilters.category === "All category" ||
      activeFilters.category === event.category;
    const matchesLocation =
      activeFilters.location === "All location" ||
      activeFilters.location === event.location;

    return matchesCategory && matchesLocation;
  });
  return (
    <div className="">
      <div className="mx-auto px-5 py-10">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <div
                key={match.id}
                className="group relative rounded-xl bg-white shadow-lg"
              >
                <Image
                  src={match.imageSrc}
                  alt={match.imageAlt}
                  width={1000}
                  height={1000}
                  className="aspect-video w-full rounded-tl-xl rounded-tr-xl bg-gray-200 object-cover group-hover:opacity-75"
                />
                <div className="m-2">
                  <div>
                    <h3 className="overflow-hidden text-lg font-medium text-gray-900">
                      <Link href={match.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {match.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-gray-500">{match.venue}</p>
                    <p className="mb-1 mt-1 font-medium text-gray-800">
                      {match.price}
                    </p>
                    <div className="border-t border-gray-500" />
                    <p className="w-full text-gray-700">{match.organizer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No matches found for the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
