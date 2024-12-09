import Link from "next/link";
import { TbSoccerField } from "react-icons/tb";

export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="relative px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hub for Creating and Attending Events
            </h1>
            {/* Subheading */}
            <p className="mt-4 text-sm text-gray-500 sm:text-base lg:text-lg">
              Designed for fans and organizers, MatchTix simplifies the process
              of creating events, promoting games, and securing seats at the
              stadium.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-6 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-6">
              <Link
                href="#"
                className="w-full rounded-md bg-accent px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent/90 sm:w-auto"
              >
                Attend Match
              </Link>
              <Link
                href="#"
                className="w-full rounded-md border border-accent bg-white px-4 py-3 text-base font-semibold text-gray-900 hover:bg-accent hover:text-white sm:w-auto"
              >
                Create Match <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
