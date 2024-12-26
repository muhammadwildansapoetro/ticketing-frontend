// import UseClose from "@/hooks/useClose";
// import UseOpen from "@/hooks/useOpen";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function ProfileMenu() {
//   const { isOpen, handleOpen } = UseOpen();
//   UseClose(isOpen, handleOpen);
//   const router = useRouter();

//   return (
//     <div className="flex items-center justify-center">
//       <button onClick={handleOpen}>
//         <Image
//           src={
//             "https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/organizer-default-avatar_bm5kg0.png"
//           }
//           alt="organizer avatar"
//           width={50}
//           height={50}
//           className="size-11 rounded-full border border-black bg-white"
//         />
//         <Image
//           src={
//             "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
//           }
//           alt="customer avatar"
//           width={50}
//           height={50}
//           className="size-11 rounded-full border border-black bg-white"
//         />
//       </button>

//       <div className={`${isOpen ? "absolute right-8 top-14" : "hidden"} `}>
//         <div className="z-10 mt-2 w-48 rounded-md border border-gray-300 bg-white shadow-lg">
//           <ul className="py-1">
//             {/* <li>
//               <button
//                 // onClick={() => router.push("/profile")}
//                 className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
//               >
//                 Dashboard
//               </button>
//             </li>
//             <li>
//               <button
//                 // onClick={() => router.push("/profile")}
//                 className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
//               >
//                 My Match
//               </button>
//             </li> */}
//             <li>
//               <button
//                 // onClick={() => router.push("/profile")}
//                 className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
//               >
//                 Profile
//               </button>
//             </li>
//             <li>
//               <button
//                 // onClick={() => router.push("/profile")}
//                 className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
//               >
//                 My Ticket
//               </button>
//             </li>
//             <li>
//               <button
//                 // onClick={onSignOut}
//                 className="block w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-300 hover:text-gray-900"
//               >
//                 Sign out
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormValuesCustomer } from "@/types/blog";

const ProfileMenu = ({
  user,
  onLogout,
}: {
  user: FormValuesCustomer | null;
  onLogout: () => void;
}) => {
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
    <div ref={dropdownRef} className="relative flex items-center justify-center">
      <button onClick={toggleDropdown} className="flex items-center">
        <Image
          src={
            user?.role === "organizer"
              ? "https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/organizer-default-avatar_bm5kg0.png"
              : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
          }
          alt={`${user?.role || "user"} avatar`}
          width={50}
          height={50}
          className="size-11 rounded-full border border-black bg-white"
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-14 z-10 mt-2 w-48 rounded-md border border-gray-300 bg-white shadow-lg">
          <ul className="py-1">
            <li>
              <button
                onClick={() => router.push("/profile")}
                className="block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Profile
              </button>
            </li>
            {user?.role === "organizer" && (
              <li>
                <button
                  onClick={() => router.push("/dashboard")}
                  className="block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Dashboard
                </button>
              </li>
            )}
            {user?.role === "customer" && (
              <li>
                <button
                  onClick={() => router.push("/my-tickets")}
                  className="block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  My Tickets
                </button>
              </li>
            )}
            <li>
              <button
                onClick={onLogout}
                className="block w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-300 hover:text-gray-900"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
