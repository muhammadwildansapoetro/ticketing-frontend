import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { IoFootball } from "react-icons/io5";
import { TbSoccerField } from "react-icons/tb";

export default function OrganizerMobileNavBar() {
  return (
    <>
      <Link
        href={"/"}
        className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
      >
        <HiHome size={20} />
        <p>Home</p>
      </Link>

      <Link
        href={"/create-event"}
        className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
      >
        <IoFootball size={20} />
        <p>Create Event</p>
      </Link>

      <Link
        href={"/"}
        className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
      >
        <TbSoccerField size={20} />
        <p>My Match</p>
      </Link>
    </>
  );
}
