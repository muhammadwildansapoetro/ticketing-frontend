import Link from "next/link";

export default function Hero() {
  return (
    <div className="p-5 lg:p-0">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl">
          The Home of Football Ticketing
        </h1>
        <p className="mt-2 font-medium tracking-tight text-gray-700 lg:text-2xl lg:tracking-wide">
          Experience the passion, create the moments.
        </p>
        <p className="mt-4 text-sm tracking-wide text-gray-500 lg:text-xl">
          MatchTix is the all-in-one solution for football ticketing. Designed
          for fans and organizers, it makes creating matches and securing seats
          effortless.
        </p>
      </div>

      <div className="mt-5 flex w-full flex-col gap-2 lg:flex-row lg:gap-5">
        <Link
          href={"/create-event"}
          className="rounded-lg border border-accent py-2 text-center tracking-wide text-accent hover:bg-accent hover:text-white lg:px-10 lg:py-3"
        >
          Create match
        </Link>
        <Link
          href={"/event"}
          className="rounded-lg border border-accent bg-accent py-2 text-center tracking-wide text-white hover:bg-accent/90 lg:px-10 lg:py-3"
        >
          Explore match
        </Link>
      </div>
    </div>
  );
}
