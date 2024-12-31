"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import UseClose from "@/hooks/useClose";
import MenuBeforeSignIn from "./mobileMenuBefore";
import MenuAfterSignIn from "./mobileMenuAfter";
import useToggleState from "@/hooks/useToggle";
import { useSession } from "@/context/useSession";
import { deleteToken } from "@/libs/action";
import { useRouter } from "next/navigation";

export default function MobileMenu() {
  const { isAuth, customer, organizer, setIsAuth } = useSession();
  const { isOpen, isHidden, handleToggle } = useToggleState();
  UseClose(isOpen, handleToggle);
  const router = useRouter();
  const onSignOut = () => {
    deleteToken("token");
    setIsAuth(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div>
      <div className="flex">
        <button type="button" onClick={handleToggle} className="text-white">
          {isOpen ? (
            <XMarkIcon aria-hidden="true" className="size-8" />
          ) : (
            <Bars3Icon aria-hidden="true" className="size-8" />
          )}
        </button>
      </div>

      <div
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} ${
          isHidden ? "hidden" : ""
        } absolute right-0 z-40 mt-2 h-screen w-full bg-white transition-all duration-300 ease-in-out lg:hidden`}
      >
        {isAuth ? (
          <MenuAfterSignIn
            customer={customer}
            organizer={organizer}
            onSignOut={onSignOut}
          />
        ) : (
          <MenuBeforeSignIn />
        )}
      </div>
    </div>
  );
}
