"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TbSoccerField } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const navigation = [
  // { name: "Dashboard", href: "#" },
  // { name: "Matches", href: "#" },
  // { name: "My Match", href: "#" },
  // { name: "My Ticket", href: "#" },
  { name: "Search Bar", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 transition duration-300 ${
        scrolled ? "bg-accent" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-5 py-2 lg:px-10"
      >
        <div className="flex lg:flex-1">
          <Link
            href="#"
            className={`-m-1.5 flex items-center gap-1 p-1.5 text-2xl font-black tracking-tight ${
              scrolled ? "text-white" : "text-accent"
            }`}
          >
            <span className="sr-only">Your Company</span>
            MatchTix
            <TbSoccerField size={30} />
          </Link>
        </div>

        <form className="mx-auto w-96">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search match..."
              required
            />
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              scrolled ? "text-white" : "text-accent"
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-semibold hover:underline hover:underline-offset-8 ${
                scrolled ? "text-white" : "text-accent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden gap-3 lg:flex lg:flex-1 lg:items-center lg:justify-end">
          <Link
            href="#"
            className={`rounded-md border border-accent px-3 py-1 text-lg hover:brightness-90 ${
              scrolled ? "bg-white text-accent" : "text-accent"
            }`}
          >
            Register
          </Link>
          <Link
            href="#"
            className={`rounded-md border border-accent bg-accent px-3 py-1 text-lg hover:brightness-90 ${
              scrolled ? "bg-white text-accent" : "text-white"
            }`}
          >
            Sign in
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-5 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="-m-1.5 flex items-center gap-1 p-1.5 text-2xl font-black tracking-tight text-accent"
            >
              <span className="sr-only">Your Company</span>
              MatchTix
              <TbSoccerField size={30} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-accent"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-10" />
            </button>
          </div>

          <div className="mt-5 flow-root">
            <div className="-my-6 divide-y divide-accent">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-accent hover:bg-gray-100 hover:underline hover:underline-offset-8"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-accent hover:bg-gray-100 hover:underline hover:underline-offset-8"
                >
                  Register
                </Link>

                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-accent hover:bg-gray-100 hover:underline hover:underline-offset-8"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
