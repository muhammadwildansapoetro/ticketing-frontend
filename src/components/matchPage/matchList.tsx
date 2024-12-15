import Image from "next/image";
import Link from "next/link";
import { matches } from "./matches";
import { Filters } from "./filterList";

export default function MatchList({
  activeFilters,
}: {
  activeFilters: Filters;
}) {
  const filteredMatches = matches.filter((match) => {
    const matchesCategory =
      activeFilters.category === "All category" ||
      activeFilters.category === match.category;
    const matchesLocation =
      activeFilters.location === "All location" ||
      activeFilters.location === match.location;

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
                <div className="m-2 flex justify-between">
                  <div>
                    <h3 className="overflow-hidden font-medium text-gray-900 lg:text-lg">
                      <Link href={match.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {match.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-gray-500">{match.venue}</p>
                    <p className="mb-1 mt-1 font-medium text-gray-800">
                      {match.price}
                    </p>
                    <p className="text-gray-700">{match.organizer}</p>
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
