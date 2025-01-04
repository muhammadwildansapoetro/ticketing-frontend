"use client";

import Loading from "@/app/loading";
import { useSession } from "@/context/useSession";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function OrganizerProfile() {
  const { organizer } = useSession();

  if (!organizer) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex flex-col items-center lg:items-start">
        <div className="h-32 w-32 overflow-hidden rounded-full border border-black bg-white lg:h-64 lg:w-64">
          <Image
            src={organizer?.avatar}
            alt={organizer?.fullname}
            height={500}
            width={500}
            priority
            className="rounded-full object-cover"
          />
        </div>

        <div className="mt-2 text-2xl font-bold">{organizer?.fullname}</div>
        <div className="text-xl text-gray-700">{organizer?.username}</div>
      </div>

      <div className="mt-3 flex flex-col items-center gap-1 lg:items-start">
        {organizer?.isVerified ? (
          <div className="flex items-center gap-2 rounded-lg text-lg font-medium text-accent">
            <p>Verified</p>
            <RiVerifiedBadgeFill />
          </div>
        ) : (
          <div className="text-red-500">Not verified yet</div>
        )}
        <div className="text-lg">{organizer?.email}</div>
      </div>
    </div>
  );
}
