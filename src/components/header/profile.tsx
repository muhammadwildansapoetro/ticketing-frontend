import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

export default function Profile() {
  return (
    // hidden if not signed in, block if signed in
    <Menu as="div" className="relative ml-3 hidden py-1 md:block">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <Image
            alt="Photo profile"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            width={500}
            height={500}
            className="size-8 rounded-full lg:size-10"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-base text-gray-700 data-[focus]:bg-accent/10 data-[focus]:outline-none"
          >
            Profile
          </a>
        </MenuItem>

        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-base text-gray-700 data-[focus]:bg-accent/10 data-[focus]:outline-none"
          >
            My Ticket
          </a>
        </MenuItem>

        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-base text-gray-700 data-[focus]:bg-accent/10 data-[focus]:outline-none"
          >
            My Order
          </a>
        </MenuItem>

        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-base text-gray-700 data-[focus]:bg-accent/10 data-[focus]:outline-none"
          >
            Dashboard
          </a>
        </MenuItem>

        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-base text-red-700 data-[focus]:bg-red-100 data-[focus]:outline-none"
          >
            Sign out
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
