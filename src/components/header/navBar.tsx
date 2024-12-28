import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";
import Search from "./search";
import { Profle } from "./profile";

export default function NavBar() {
  return (
    <header className="inset-x-0 top-0 z-50 bg-accent transition duration-500">
      <nav className="flex items-center justify-between px-3 py-1 lg:px-8">
        <div className="flex items-center gap-5 lg:gap-10">
          <Logo />
          <Search />
        </div>

        <div className="hidden gap-5 lg:flex lg:items-center lg:justify-end">
          <Link
            href={"/create-event"}
            className="p-1.5 font-medium tracking-wide text-white transition-all duration-300 ease-in-out hover:underline hover:underline-offset-8"
          >
            Create Match
          </Link>
          <Link
            href={"/event"}
            className="p-1.5 font-medium tracking-wide text-white transition-all duration-300 ease-in-out hover:underline hover:underline-offset-8"
          >
            Explore Matches
          </Link>

          <Profle />
        </div>

        <div className="flex gap-2 lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
