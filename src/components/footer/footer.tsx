import Image from "next/image";
import Link from "next/link";
import { TbSoccerField } from "react-icons/tb";
import {
  FaDribbble,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaFacebookSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-accent py-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
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
                    Explore Matches
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
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

                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="opacity-70 hover:underline hover:opacity-100"
                  >
                    Tailwind CSS
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
          <span className="text-sm text-white opacity-70 sm:text-center">
            © 2024{" "}
            <Link href="#" className="hover:underline">
              MatchTix™
            </Link>
            . All Rights Reserved.
          </span>

          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <Link href="#" className="text-white opacity-70 hover:opacity-100">
              <FaFacebookSquare />
              <span className="sr-only">Facebook page</span>
            </Link>

            <Link
              href="#"
              className="ms-5 text-white opacity-70 hover:opacity-100"
            >
              <FaDiscord />
              <span className="sr-only">Discord community</span>
            </Link>

            <Link
              href="#"
              className="ms-5 text-white opacity-70 hover:opacity-100"
            >
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </Link>

            <Link
              href="#"
              className="ms-5 text-white opacity-70 hover:opacity-100"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </Link>

            <Link
              href="#"
              className="ms-5 text-white opacity-70 hover:opacity-100"
            >
              <FaDribbble />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
