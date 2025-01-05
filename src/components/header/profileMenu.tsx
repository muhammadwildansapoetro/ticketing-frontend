"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ICustomerProfile, IOrganizerProfile } from "@/types/user";
import { useRouter } from "next/navigation";

export default function ProfileMenu({
  customer,
  organizer,
  onSignOut,
}: {
  customer: ICustomerProfile | null;
  organizer: IOrganizerProfile | null;
  onSignOut: () => void;
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center"
      >
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
          {customer && (
            <Image
              className="rounded-full object-cover"
              src={customer?.avatar}
              alt={customer?.fullname}
              width={100}
              height={100}
              priority
            />
          )}
          {organizer && (
            <Image
              className="rounded-full object-cover"
              src={organizer?.avatar}
              alt={organizer?.fullname}
              width={100}
              height={100}
              priority
            />
          )}
        </div>
        {customer && (
          <div className="ms-2 min-w-0 flex-1 max-sm:hidden">
            <p className="truncate text-sm font-medium text-white">
              {customer?.username}
            </p>
            <p className="truncate text-sm text-gray-100">{customer?.email}</p>
          </div>
        )}
        {organizer && (
          <div className="ms-2 min-w-0 flex-1 max-sm:hidden">
            <p className="truncate text-sm font-medium text-white">
              {organizer?.username}
            </p>
            <p className="truncate text-sm text-gray-100">{organizer?.email}</p>
          </div>
        )}
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
          <ul className="py-1">
            {customer && (
              <>
                <li>
                  <button
                    onClick={() => router.push(`/profile/${customer.username}`)}
                    className="text block w-full px-4 py-2 text-sm hover:bg-accent hover:text-white"
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push(`/${customer.username}`)}
                    className="text block w-full px-4 py-2 text-sm hover:bg-accent hover:text-white"
                  >
                    My Ticket
                  </button>
                </li>
              </>
            )}
            {organizer && (
              <>
                <li>
                  <button
                    onClick={() =>
                      router.push(`/dashboard/${organizer.username}`)
                    }
                    className="text block w-full px-4 py-2 text-sm hover:bg-accent hover:text-white"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push(`/${organizer.username}/match`)}
                    className="text block w-full px-4 py-2 text-sm hover:bg-accent hover:text-white"
                  >
                    My Match
                  </button>
                </li>
              </>
            )}
            <li>
              <button
                onClick={onSignOut}
                className="block w-full px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-500 hover:text-white"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
