import { ICustomerProfile, IOrganizerProfile } from "@/types/user";
import Image from "next/image";
import Link from "next/link";

export default function MenuAfterSignIn({
  customer,
  organizer,
  onSignOut,
}: {
  customer: ICustomerProfile | null;
  organizer: IOrganizerProfile | null;
  onSignOut: () => void;
}) {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center justify-center">
        <div>
          {customer && (
            <Image
              src={
                "https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/customer-default-avatar_kas8rt.png"
              }
              alt="customer avatar"
              width={50}
              height={50}
              priority
              className="size-20 rounded-full border border-black"
            />
          )}
          {organizer && (
            <Image
              src={
                "https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/organizer-default-avatar_bm5kg0.png"
              }
              alt="organizer avatar"
              width={50}
              height={50}
              priority
              className="size-20 rounded-full border border-black"
            />
          )}
        </div>
        {customer && (
          <>
            <div className="mt-2 text-xl">{customer.username}</div>
            <div className="mt-1">{customer.email}</div>
          </>
        )}
        {organizer && (
          <>
            <div className="mt-2 text-xl">{organizer.name}</div>
            <div className="mt-1">{organizer.email}</div>
          </>
        )}
      </div>

      <div className="my-8 border-t border-accent/30" />

      <div className="flex flex-col gap-5">
        {customer && (
          <>
            <Link
              href={`/customer-profile/${customer.username}`}
              className="hover:text-accent"
            >
              Profile
            </Link>
            <Link href={"/"} className="hover:text-accent">
              My Ticket
            </Link>
          </>
        )}
        {organizer && (
          <>
            <Link href={"/dashboard"} className="hover:text-accent">
              Dashboard
            </Link>
            <Link
              href={`/organizer-profile/${organizer.name}`}
              className="hover:text-accent"
            >
              Profile
            </Link>
          </>
        )}
        <div className="my-2 border-t border-accent/30" />
        <div className="w-full">
          <button
            onClick={onSignOut}
            type="button"
            className="w-full font-bold tracking-wide text-red-500"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
