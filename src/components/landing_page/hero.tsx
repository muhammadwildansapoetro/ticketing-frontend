import Link from "next/link";
import { TbSoccerField } from "react-icons/tb";

export default function Hero() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-20">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Hub for Creating and Attending Events{" "}
            </h1>
            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Connecting Matches and Fans{" "}
            </h1>
            <p className="mt-4 text-pretty text-lg font-medium text-gray-500 lg:px-10">
              MatchTix is your ultimate solution for football event ticketing.
              Designed for fans and organizers, <br />
              MatchTix simplifies the process of creating events, promoting
              games, and securing seats at the stadium.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
