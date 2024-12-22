import Link from "next/link";
import { TbSoccerField } from "react-icons/tb";
import SocialMedia from "./socialMedia";

export default function Footer() {
  return (
    <footer className="bg-accent p-5 py-10">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="flex items-center gap-1">
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
                MatchTix
              </span>
              <TbSoccerField size={30} className="text-white" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Menu
              </h2>

              <ul className="font-medium text-white">
                <li className="mb-4">
                  <Link
                    href="#"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    About Us
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="/event"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Explore Matches
                  </Link>
                </li>

                <li>
                  <Link
                    href="/create-event"
                    target="_blank"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Create a match
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>

              <ul className="font-medium text-white">
                <li className="mb-4">
                  <Link
                    href="https://flowbite.com/"
                    target="_blank"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Flowbite
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Tailwind CSS
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.vidio.com/categories/liga-1"
                    target="_blank"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Vidio.com
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>

              <ul className="font-medium text-white">
                <li className="mb-4">
                  <Link
                    href="#"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="#"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Support Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-2">
            <SocialMedia />
          </div>
          <span className="text-sm text-white opacity-70 sm:text-center">
            © 2024{" "}
            <Link href="#" className="hover:underline">
              MatchTix™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
