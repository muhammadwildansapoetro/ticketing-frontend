"use client";

import { useSession } from "@/context/useSession";
import { deleteCookie } from "@/libs/action";
import { useRouter } from "next/navigation";
import AvatarMenu from "./profileMenu";

export const Profile = () => {
  const router = useRouter();
  const { customer, isAuth, setIsAuth } = useSession();
  const onLogout = () => {
    deleteCookie("token");
    setIsAuth(false);
    router.push("/choice/sign-in");
    router.refresh();
  };

  return (
    <>
      {isAuth ? (
        <AvatarMenu user={customer} onLogout={onLogout} />
      ) : (
        <div className="flex gap-5">
          <button
            onClick={() => router.push("/register")}
            className="rounded-lg border border-white px-3 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-accent"
          >
            Register{" "}
          </button>
          <button
            onClick={() => router.push("/sign-in")}
            className="rounded-lg border border-white bg-white px-3 py-2 text-base font-semibold text-accent transition-all duration-300 ease-in-out hover:bg-white/90 focus:outline-none focus:-outline-offset-4 focus:outline-accent/50"
          >
            Sign in
          </button>
        </div>
      )}
    </>
  );
};
