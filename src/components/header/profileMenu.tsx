import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FormValuesCustomer } from "@/types/user";
import { useRouter } from "next/navigation";

export default function ProfileMenu({
  user,
  onLogout,
}: {
  user: FormValuesCustomer | null;
  onLogout: () => void;
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
        <div className="relative h-10 w-10">
          <Image
            className="rounded-full object-cover"
            src={user?.avatar || ""}
            alt={user?.username || "author"}
            fill
            priority
          />
        </div>
        <div className="ms-2 min-w-0 flex-1 max-sm:hidden">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            {user?.username}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <ul className="py-1">
            <li>
              <button
                onClick={() => router.push("/profile")}
                className="text block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Profile
              </button>
            </li>
            {user?.role == "customer" && (
              <li>
                <button
                  onClick={() => router.push("/blog/create")}
                  className="text block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Create Blog
                </button>
              </li>
            )}
            <li>
              <button
                onClick={onLogout}
                className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
