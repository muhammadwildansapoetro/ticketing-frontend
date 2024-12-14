import Image from "next/image";
import Link from "next/link";
import { matches } from "./matches";

export default function MatchList() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-5 pb-20 sm:px-7 lg:max-w-full lg:px-10">
        <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:mx-20 lg:grid-cols-4 xl:gap-x-5">
          {matches.map((match) => (
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
                  <p className="text-gray-700">Organizer_Name</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
