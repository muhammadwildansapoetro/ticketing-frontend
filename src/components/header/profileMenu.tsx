import UseClose from "@/hooks/useClose";
import UseOpen from "@/hooks/useOpen";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfileMenu() {
  const { isOpen, handleOpen } = UseOpen();
  UseClose(isOpen, handleOpen);
  const router = useRouter();

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleOpen}>
        {/* <Image
          src={
            "https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/organizer-default-avatar_bm5kg0.png"
          }
          alt="organizer avatar"
          width={50}
          height={50}
          className="size-11 rounded-full border border-black bg-white"
        /> */}
        <Image
          src={
            "https://res.cloudinary.com/doiygpguv/image/upload/v1734129888/customer-default-avatar_kas8rt.png"
          }
          alt="customer avatar"
          width={50}
          height={50}
          className="size-11 rounded-full border border-black bg-white"
        />
      </button>

      <div className={`${isOpen ? "absolute right-8 top-14" : "hidden"} `}>
        <div className="z-10 mt-2 w-48 rounded-md border border-gray-300 bg-white shadow-lg">
          <ul className="py-1">
            {/* <li>
              <button
                // onClick={() => router.push("/profile")}
                className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                // onClick={() => router.push("/profile")}
                className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                My Match
              </button>
            </li> */}
            <li>
              <button
                // onClick={() => router.push("/profile")}
                className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                // onClick={() => router.push("/profile")}
                className="text block w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                My Ticket
              </button>
            </li>
            <li>
              <button
                // onClick={onSignOut}
                className="block w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-300 hover:text-gray-900"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
