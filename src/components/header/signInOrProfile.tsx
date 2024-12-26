import Image from "next/image";
import Link from "next/link";
// import ProfileMenu from "./profileMenu";
import { Avatar } from "./avatar";

export default function SignInOrProfile() {
  return (
    <div className="flex items-center justify-center gap-5">
      <Avatar/>
      {/* <Link
        href="/choice/register"
        className="rounded-lg border border-white px-3 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-accent"
      >
        Sign up
      </Link>
      <Link
        href="/choice/sign-in"
        className="rounded-lg border border-white bg-white px-3 py-2 text-base font-semibold text-accent transition-all duration-300 ease-in-out hover:bg-white/90 focus:outline-none focus:-outline-offset-4 focus:outline-accent/50"
      >
        Sign in <span aria-hidden="true">&rarr;</span>
      </Link> */}
      {/* <ProfileMenu /> */}
    </div>
  );
}