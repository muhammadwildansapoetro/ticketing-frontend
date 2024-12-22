import Link from "next/link";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="">
        <h1 className="2xl:5xl text-3xl font-bold tracking-tight text-gray-900 xl:text-4xl">
          The Home of Football Ticketing
        </h1>
        <p className="mt-2 text-xl text-gray-700">
          Experience the passion, create the moments
        </p>
        <p className="mt-2 text-base font-normal tracking-wide text-gray-500">
          MatchTix is the all-in-one solution for football ticketing. Designed
          for fans and organizers, it makes creating matches and securing seats
          effortless.
        </p>
      </div>

      <div className="mt-5 flex w-full flex-col gap-5 lg:flex-row">
        <Link
          href={"/create-event"}
          className="rounded-lg border border-accent px-10 py-3 text-center tracking-wide hover:bg-accent/5"
        >
          Create match
        </Link>
        <Link
          href={"/event"}
          className="rounded-lg border border-accent bg-accent px-10 py-3 text-center tracking-wide text-white hover:bg-accent/90"
        >
          Explore match
        </Link>
      </div>
    </div>
  );
}
