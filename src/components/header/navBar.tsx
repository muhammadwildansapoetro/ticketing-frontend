"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TbSoccerField } from "react-icons/tb";
import { Dialog, DialogPanel } from "@headlessui/react";
import Profile from "./profile";
import DialogMenu from "./dialogMenu";

const navigation = [
  { name: "Explore Matches", href: "match" },
  { name: "Create Match", href: "create-match" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        scrolled ? "bg-accent/95" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-3 py-1 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={`flex items-center gap-1 p-1.5 text-2xl font-bold md:tracking-tight ${scrolled ? "text-white hover:text-white/90" : "text-accent hover:text-accent/80"} lg:text-3xl`}
          >
            <TbSoccerField className="size-8 lg:size-10" />
            MatchTix
          </Link>
        </div>

        {/* Menu Icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className={`size-9 ${scrolled ? "text-white" : "text-accent"}`}
            />
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex lg:gap-x-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-lg text-base font-medium tracking-wide transition-all duration-300 ease-in-out ${scrolled ? "text-white hover:underline hover:underline-offset-8" : "text-gray-900 hover:underline hover:underline-offset-8"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
          <Link
            href="#"
            className={`rounded-lg px-4 py-2.5 text-base font-semibold transition-all duration-300 ease-in-out ${scrolled ? "bg-white text-gray-700 hover:bg-white/90" : "bg-accent text-white hover:bg-accent/90"}`}
          >
            Sign in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <Profile />
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-3 py-1 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center gap-1 p-1.5 text-2xl font-bold text-accent"
            >
              <span className="sr-only">Your Company</span>
              <TbSoccerField className="size-8 lg:size-10" />
              MatchTix
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-9" />
            </button>
          </div>

          <DialogMenu />
        </DialogPanel>
      </Dialog>
    </header>
  );
}
