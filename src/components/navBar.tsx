"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { IoIosFootball } from "react-icons/io";

const navigation = [
  { name: "Matches", href: "#" },
  { name: "My Match", href: "#" },
  { name: "My Ticket", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="#"
            className="-m-1.5 flex items-center gap-1 p-1.5 text-2xl tracking-tight text-accent"
          >
            <span className="sr-only">Your Company</span>
            <IoIosFootball />
            MatchTix
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-8 text-accent" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-semibold tracking-wide text-accent"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-lg font-semibold text-accent">
            Sign in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="-m-1.5 flex items-center gap-1 p-1.5 text-2xl font-black text-accent"
            >
              <span className="sr-only">Your Company</span>
              <IoIosFootball />
              MatchTix
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-accent"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-8" />
            </button>
          </div>

          <div className="mt-5 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-accent hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-accent hover:bg-gray-100"
                >
                  Register
                </Link>

                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-accent hover:bg-gray-100"
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
