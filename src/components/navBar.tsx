"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { TbSoccerField } from "react-icons/tb";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Matches", href: "#" },
  { name: "My Match", href: "#" },
  { name: "My Ticket", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          <Link
            href="#"
            className={`rounded-md bg-accent px-3 py-0.5 text-lg hover:brightness-90 ${
              scrolled ? "bg-white text-accent" : "text-white"
            }`}
          >
            Sign in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        {/* <div className="fixed inset-0 z-50" /> */}

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
