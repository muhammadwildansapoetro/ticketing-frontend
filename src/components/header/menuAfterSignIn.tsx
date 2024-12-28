import Image from "next/image";
import Link from "next/link";

export default function MenuAfterSignIn() {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            src={
              "https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/customer-default-avatar_kas8rt.png"
            }
            alt="customer avatar"
            width={50}
            height={50}
            className="size-20 rounded-full border border-black"
          />
          {/* <Image
            src={
              "https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/organizer-default-avatar_bm5kg0.png"
            }
            alt="organizer avatar"
            width={50}
            height={50}
            className="size-20 rounded-full border border-black"
          /> */}
        </div>
        <div className="mt-2 text-xl">Customer/Organizer Name</div>
        <div className="mt-1">Customer/Organizer Email</div>
      </div>

      <div className="my-8 border-t border-accent/30" />

      <div className="flex flex-col gap-5">
        <Link href={"/"} className="hover:text-accent">
          Profile
        </Link>
        <Link href={"/"} className="hover:text-accent">
          Dashboard
        </Link>
        <Link href={"/"} className="hover:text-accent">
          My Match
        </Link>
        <Link href={"/"} className="hover:text-accent">
          My Ticket
        </Link>
        <div className="my-2 border-t border-accent/30" />
        <div>
          <Link href={"/"} type="button" className="hover:text-red-500">
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}