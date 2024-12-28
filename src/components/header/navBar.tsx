// "use client";

// import Link from "next/link";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { TbSoccerField } from "react-icons/tb";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import Profile from "./profile";
// // import DialogMenu from "./dialogMenu";

// import { Avatar } from "./avatar";

// const navigation = [
//   { name: "Explore Matches", href: "match" },
//   { name: "Create Match", href: "create-match" },
// ];

// export default function NavBar() {
//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
//         scrolled ? "bg-accent/95" : "bg-transparent"
//       }`}
//     >
//       <nav className="flex items-center justify-between px-3 py-1 lg:px-8">
//         {/* Logo */}
//         <div className="flex lg:flex-1">
//           <Link
//             href="/"
//             className={`flex items-center gap-1 p-1.5 text-2xl font-bold md:tracking-tight ${scrolled ? "text-white hover:text-white/90" : "text-accent hover:text-accent/80"} lg:text-3xl`}
//           >
//             <TbSoccerField className="size-8 lg:size-10" />
//             MatchTix
//           </Link>
//         </div>

//         {/* Menu Icon */}
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-gray-700"
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon
//               aria-hidden="true"
//               className={`size-9 ${scrolled ? "text-white" : "text-accent"}`}
//             />
//           </button>
//         </div>

//         {/* Navigation Menu */}
//         <div className="hidden lg:flex lg:gap-x-5">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`rounded-lg text-base font-medium tracking-wide transition-all duration-300 ease-in-out ${scrolled ? "text-white hover:underline hover:underline-offset-8" : "text-gray-900 hover:underline hover:underline-offset-8"}`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//         <Avatar/>
//         {/* Register and Sign in */}
//         {/* <div className="hidden gap-2 md:flex md:flex-1 md:items-center md:justify-end">
//           <Link
//             href="#"
//             className={`rounded-lg px-4 py-2.5 text-base font-semibold transition-all duration-300 ease-in-out ${scrolled ? "border border-white text-white hover:bg-white hover:text-gray-700" : "border border-accent hover:bg-accent hover:text-white"}`}
//           >
//             Register
//           </Link>
//           <Link
//             href="#"
//             className={`rounded-lg px-4 py-2.5 text-base font-semibold transition-all duration-300 ease-in-out ${scrolled ? "border border-white bg-white text-gray-700 hover:bg-white/90" : "border border-accent bg-accent text-white hover:bg-accent/90"}`}
//           >
//             Explore Matches
//           </Link>
//         </div> */}


//         {/* <Profile /> */}
//       </nav>
//     </header>
//   );
// }
"use client";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";
import Profile from "./profile";
import MobileSearch from "./mobileSearch";
import DesktopSearch from "./desktopSearch";
import { Avatar } from "./avatar";

export default function NavBar() {
  return (
    <header className="inset-x-0 top-0 z-50 bg-accent/90 transition duration-500">
      <nav className="flex items-center justify-between px-3 py-1 lg:px-8">
        <div className="flex items-center gap-10">
          <Logo />
          <DesktopSearch />
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
          <Avatar/>
          {/* <Profile /> */}
        </div>

        <div className="flex gap-2 lg:hidden">
          <MobileSearch />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}