"use client";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";
import Search from "./search";
import { useSession } from "@/context/useSession";
import { Profile } from "./profile";
import { useRouter } from "next/navigation";
import { deleteToken } from "@/libs/action";

export default function NavBar() {
  const { isAuth, setIsAuth, customer, setCustomer, organizer, setOrganizer } =
    useSession();
  const router = useRouter();
  const onSignOut = () => {
    deleteToken("token");
    setIsAuth(false);
    setCustomer(null);
    setOrganizer(null);
    router.push("/");
    router.refresh();
  };

  return (
    <header className="inset-x-0 top-0 z-50 bg-accent transition duration-500">
      <nav className="flex items-center justify-between px-3 py-1 lg:px-8">
        <div className="flex items-center gap-5 lg:gap-10">
          <Logo />
          <Search />
        </div>

        <div className="hidden gap-5 lg:flex lg:items-center lg:justify-end">
          {!isAuth ? (
            <>
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
              <div className="flex gap-5">
                <button
                  onClick={() => router.push("/register")}
                  className="rounded-lg border border-white px-3 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-accent"
                >
                  Register
                </button>
                <button
                  onClick={() => router.push("/sign-in")}
                  className="rounded-lg border border-white bg-white px-3 py-2 text-base font-semibold text-accent transition-all duration-300 ease-in-out hover:bg-white/90 focus:outline-none focus:-outline-offset-4 focus:outline-accent/50"
                >
                  Sign in
                </button>
              </div>
            </>
          ) : (
            <Profile
              customer={customer}
              organizer={organizer}
              onSignOut={onSignOut}
            />
          )}
        </div>

        <div className="flex gap-2 lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
