"use client";

import ProfileMenu from "./profileMenu";
import { ICustomerProfile, IOrganizerProfile } from "@/types/user";
import Link from "next/link";

interface ProfileProps {
  customer: ICustomerProfile | null;
  organizer: IOrganizerProfile | null;
  onSignOut: () => void;
}

export const Profile = ({ customer, organizer, onSignOut }: ProfileProps) => {
  return (
    <div className="flex gap-5">
      {customer && (
        <Link
          href={"/event"}
          className="p-1.5 font-medium tracking-wide text-white transition-all duration-300 ease-in-out hover:underline hover:underline-offset-8"
        >
          Explore Matches
        </Link>
      )}
      {organizer && (
        <Link
          href={"/create-event"}
          className="p-1.5 font-medium tracking-wide text-white transition-all duration-300 ease-in-out hover:underline hover:underline-offset-8"
        >
          Create Match
        </Link>
      )}
      <ProfileMenu
        customer={customer}
        organizer={organizer}
        onSignOut={onSignOut}
      />
    </div>
  );
};
