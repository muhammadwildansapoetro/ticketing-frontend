"use client";

import Loading from "@/app/loading";
import { useSession } from "@/context/useSession";
import Image from "next/image";

export default function OrganizerProfile() {
  const { organizer } = useSession();

  if (!organizer) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex flex-col items-center lg:items-start">
        <div className="h-32 w-32 rounded-full border border-black bg-white lg:h-64 lg:w-64">
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
        <div className="mt-2 text-2xl font-bold">{organizer?.username}</div>
        <div className="text-lg">{organizer?.email}</div>
      </div>
    </div>
  );
}
