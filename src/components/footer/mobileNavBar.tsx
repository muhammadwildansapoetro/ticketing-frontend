import { MdExplore } from "react-icons/md";
import { HiHome } from "react-icons/hi2";

import Link from "next/link";
import { IoFootball } from "react-icons/io5";

export default function MobileNavBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto border border-t-accent bg-white py-1 lg:hidden">
      <div className="flex items-center justify-center gap-16 px-5">
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
        >
          <HiHome size={20} />
          <p className="text-sm">Home</p>
        </Link>

        <Link
          href={"/create-event"}
          className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
        >
          <IoFootball size={20} />
          <p className="text-center text-sm">Create Event</p>
        </Link>

        <Link
          href={"/event"}
          className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
        >
          <MdExplore size={20} />
          <p className="text-sm">Explore</p>
        </Link>
      </div>
    </div>
  );
}
