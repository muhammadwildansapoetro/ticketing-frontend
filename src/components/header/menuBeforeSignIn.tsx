import Link from "next/link";

export default function MenuBeforeSignIn() {
  return (
    <div className="p-5">
      <div>
        <div className="text-xl font-bold">Sign in to your account</div>
        <div className="text-lg">to access all features on MatchTix.</div>
        <div className="mt-3 flex justify-between gap-5">
          <Link
<<<<<<< HEAD
            href={"/register"}
            className="rounded-lg border border-accent px-20 py-2 font-medium text-accent hover:bg-gray-100"
          >
            Sign up
          </Link>
          <Link
            href={"/sign-in"}
            className="text rounded-lg border border-accent bg-accent px-20 py-2 font-medium text-white hover:bg-accent/90"
=======
            href={"/"}
            className="rounded-lg border border-accent px-16 py-2 font-medium text-accent hover:bg-accent hover:text-white"
          >
            Register
          </Link>
          <Link
            href={"/"}
            className="text rounded-lg border border-accent bg-accent px-16 py-2 font-medium text-white hover:bg-accent/90"
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
          >
            Sign in
          </Link>
        </div>
      </div>

      <div className="my-8 border-t border-accent/30" />

      <div className="flex flex-col gap-5">
        <Link href={"/"} className="menu-mobile">
          About MatchTix
        </Link>
        <Link href={"/"} className="menu-mobile">
          Start become Match Organizer
        </Link>
        <Link href={"/"} className="menu-mobile">
          Fee
        </Link>
        <Link href={"/"} className="menu-mobile">
          Blog
        </Link>
        <Link href={"/"} className="menu-mobile">
          Contact us
        </Link>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
