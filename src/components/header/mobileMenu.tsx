import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import UseOpen from "@/hooks/useOpen";
import UseClose from "@/hooks/useClose";
import MenuBeforeSignIn from "./menuBeforeSignIn";
import MenuAfterSignIn from "./menuAfterSignIn";

export default function MobileMenu() {
  const { isOpen, isHidden, handleOpen } = UseOpen();
  UseClose(isOpen, handleOpen);

  return (
    <div>
      <div className="flex">
        <button type="button" onClick={handleOpen} className="text-white">
          {isOpen ? (
            <XMarkIcon aria-hidden="true" className="size-10" />
          ) : (
            <Bars3Icon aria-hidden="true" className="size-10" />
          )}
        </button>
      </div>

      <div
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} ${
          isHidden ? "" : "hidden"
        } absolute right-0 z-10 mt-2 h-screen w-full bg-white transition-all duration-300 ease-in-out lg:hidden`}
      >
        <MenuBeforeSignIn />
        {/* <MenuAfterSignIn /> */}
      </div>
    </div>
  );
}
