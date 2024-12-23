import Link from "next/link";
import { HiHome, HiTicket } from "react-icons/hi2";
import { MdExplore } from "react-icons/md";

export default function CustomerMobileNavBar() {
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
        href={"/"}
        className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
      >
        <HiTicket size={20} />
        <p>My Ticket</p>
      </Link>

      <Link
        href={"/event"}
        className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
      >
        <MdExplore size={20} />
        <p>Explore</p>
      </Link>
    </>
  );
}
