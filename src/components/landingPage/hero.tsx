import Image from "next/image";
import Link from "next/link";
import { TbSoccerField } from "react-icons/tb";

export default function Hero() {
  return (
    <div className="md:h-screen">
      <div className="mt-14">
        <Image
          src={"/football-stadium.jpg"}
          alt="stadium seat image"
          width={1000}
          height={1000}
          className="h-32 w-full object-cover md:h-64"
        />
      </div>

      <div className="relative z-10 mx-4 flex items-center justify-center py-10 md:mx-8">
        <div className="container mx-auto">
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-6xl">
              The Home of Football Ticketing
            </h1>

            {/* Tagline */}
            <p className="mt-2 text-xl text-gray-700 sm:text-2xl lg:text-3xl">
              Experience the passion, create the moments.
            </p>

            {/* Subheading */}
            <p className="mt-2 text-base font-normal tracking-wide text-gray-500 sm:text-base md:mx-56 md:text-xl">
              MatchTix is the all-in-one solution for football ticketing.
              Designed for fans and organizers, it makes creating matches and
              securing seats effortless. Experience football with easy,
              convenient ticketing.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-6 flex flex-col items-center gap-y-4 tracking-wide sm:flex-row sm:justify-center sm:gap-x-6">
              <Link
                href="/match"
                className="w-full rounded-md bg-accent px-4 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-accent/90 sm:w-auto"
              >
                Explore Matches
              </Link>
              <Link
                href="/create-match"
                className="w-full rounded-md border border-accent bg-white px-4 py-3 text-base font-medium text-gray-900 transition-all duration-300 ease-in-out hover:bg-accent hover:text-white sm:w-auto"
              >
                Create Match <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={"/people-watching-football.jpg"}
          alt="stadium seat image"
          width={1000}
          height={1000}
          className="hidden h-44 w-full object-cover md:block lg:h-72"
        />
      </div>
    </div>
  );
}
