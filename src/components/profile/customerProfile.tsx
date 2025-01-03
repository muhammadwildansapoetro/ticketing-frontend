"use client";

import Loading from "@/app/loading";
import { useSession } from "@/context/useSession";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function CustomerProfile() {
  const { customer } = useSession();

  if (!customer) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex flex-col items-center lg:items-start">
        <div className="h-32 w-32 rounded-full border border-black bg-white lg:h-64 lg:w-64">
          <Image
            src={customer?.avatar}
            alt={customer?.username}
            height={500}
            width={500}
            priority
            className="rounded-full object-cover"
          />
        </div>

        <div className="mt-2 text-2xl font-bold">{customer?.fullname}</div>
        <div className="text-xl text-gray-700">{customer?.username}</div>
      </div>

      <div className="mt-3 flex flex-col items-center gap-1 lg:items-start">
        {customer?.isVerified ? (
          <div className="flex items-center gap-2 rounded-lg text-lg font-medium text-accent">
            <p>Verified</p>
            <RiVerifiedBadgeFill />
          </div>
        ) : (
          <div className="text-red-500">Not verified yet</div>
        )}
        <div className="text-lg">{customer?.email}</div>
        <div className="text-lg">
          Referral Code:{" "}
          <span className="font-bold">{customer?.referralCode}</span>
        </div>
      </div>
    </div>
  );
}
