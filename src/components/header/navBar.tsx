"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TbSoccerField } from "react-icons/tb";
import { Dialog, DialogPanel } from "@headlessui/react";
import Profile from "./profile";
import DialogMenu from "./dialogMenu";
import Logo from "./logo";
import SignIn from "./signIn";

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
      className={`fixed inset-x-0 top-0 z-10 transition duration-500 ${
        scrolled ? "bg-accent" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-3 py-1 lg:px-8">
        {/* Menu Icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className={`size-9 ${scrolled ? "text-white" : "text-accent"}`}
            />
          </button>
        </div>

        <Logo />

        {/* Navigation Menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-semibold ${scrolled ? "text-white hover:underline hover:underline-offset-8" : "text-gray-900 hover:underline hover:underline-offset-8"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <SignIn />
        <Profile />
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-3 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-9" />
            </button>

            <Link
              href="#"
              className="flex items-center gap-1 p-1.5 text-xl text-accent"
            >
              <span className="sr-only">Your Company</span>
              <TbSoccerField size={30} />
              MatchTix
            </Link>
          </div>

          <DialogMenu />
        </DialogPanel>
      </Dialog>
    </header>
  );
}
