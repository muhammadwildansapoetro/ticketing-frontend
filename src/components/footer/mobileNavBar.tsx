import { MdExplore } from "react-icons/md";
<<<<<<< HEAD
import { HiTicket, HiHome } from "react-icons/hi2";
=======
import { HiHome } from "react-icons/hi2";

>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
import Link from "next/link";
import { IoFootball } from "react-icons/io5";

export default function MobileNavBar() {
  return (
<<<<<<< HEAD
    <div className="sticky bottom-0 mx-auto border border-t-accent bg-white py-1 lg:hidden">
=======
    <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto border border-t-accent bg-white py-1 lg:hidden">
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
      <div className="flex items-baseline justify-center gap-x-20 px-10">
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

<<<<<<< HEAD
        {/* <Link
          href={"/"}
          className="flex flex-col items-center hover:text-accent focus:text-accent"
        >
          <HiTicket size={20} />
          <p>My Ticket</p>
        </Link> */}

=======
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
        <Link
          href={"/event"}
          className="flex flex-col items-center justify-center hover:text-accent focus:text-accent"
        >
          <MdExplore size={20} />
          <p>Explore</p>
        </Link>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
