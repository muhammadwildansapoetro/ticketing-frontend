"use client";

import Link from "next/link";
import Logo from "./logo";
import Search from "./search";
import { BiSearch } from "react-icons/bi";
import MobileMenu from "./mobileMenu";
import Profile from "./avatar";

export default function NavBar() {
  return (
    <header className="inset-x-0 top-0 z-50 bg-accent/95 transition duration-500">
      <nav className="flex items-center justify-between px-3 py-1 lg:px-8">
        <div className="flex items-center gap-10">
          <Logo />

          <div className="hidden items-center lg:flex">
            <input
              placeholder="Search match here"
              className="h-10 w-52 rounded-bl-md rounded-tl-md bg-accent pl-3 placeholder-white focus:bg-white focus:outline-none focus:-outline-offset-4 focus:outline-accent/50 xl:w-96"
            />
            <button
              aria-label="search button"
              className="flex h-10 items-center justify-center rounded-br-md rounded-tr-md border border-l-accent bg-white px-2 text-accent hover:bg-white/90"
            >
              <BiSearch size={25} />
            </button>
          </div>
        </div>

        <div className="hidden gap-5 lg:flex lg:items-center lg:justify-end">
          <Link
            href={"/create-event"}
            className="p-1.5 font-medium tracking-wide text-white transition-all duration-300 ease-in-out"
          >
            Create Match
          </Link>
          <Link
            href={"/event"}
            className="p-1.5 font-medium tracking-wide text-white transition-all duration-300 ease-in-out"
          >
            Explore Matches
          </Link>

          <Profile />
        </div>

        <div className="flex gap-2 lg:hidden">
          <Search />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
