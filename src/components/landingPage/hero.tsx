import Image from "next/image";
import Link from "next/link";
import { TbSoccerField } from "react-icons/tb";

export default function Hero() {
  return (
    <div className="mt-10">
      <div className="mx-4 flex items-center justify-center">
        <div className="container mx-auto">
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-7xl">
              The Home of Football Ticketing
            </h1>

            {/* Tagline */}
            <p className="mt-2 text-xl text-gray-700 sm:text-2xl lg:text-4xl">
              Experience the passion, create the moments.
            </p>

            {/* Subheading */}
            <p className="mt-2 text-base font-normal tracking-wide text-gray-500 sm:text-base md:mx-56 md:text-xl">
              MatchTix is the all-in-one solution for football ticketing.
              Designed for fans and organizers, it makes creating matches and
              securing seats effortless. Experience football with easy,
              convenient ticketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
