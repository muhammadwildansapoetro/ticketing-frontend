import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
<<<<<<< HEAD
import UseOpen from "@/hooks/useOpen";
import UseClose from "@/hooks/useClose";
import MenuBeforeSignIn from "./menuBeforeSignIn";
import MenuAfterSignIn from "./menuAfterSignIn";

export default function MobileMenu() {
  const { isOpen, isHidden, handleOpen } = UseOpen();
  UseClose(isOpen, handleOpen);
=======
import UseClose from "@/hooks/useClose";
import MenuBeforeSignIn from "./menuBeforeSignIn";
import MenuAfterSignIn from "./menuAfterSignIn";
import useToggleState from "@/hooks/useToggle";

export default function MobileMenu() {
  const { isOpen, isHidden, handleToggle } = useToggleState();
  UseClose(isOpen, handleToggle);
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b

  return (
    <div>
      <div className="flex">
<<<<<<< HEAD
        <button type="button" onClick={handleOpen} className="text-white">
          {isOpen ? (
            <XMarkIcon aria-hidden="true" className="size-10" />
          ) : (
            <Bars3Icon aria-hidden="true" className="size-10" />
=======
        <button type="button" onClick={handleToggle} className="text-white">
          {isOpen ? (
            <XMarkIcon aria-hidden="true" className="size-8" />
          ) : (
            <Bars3Icon aria-hidden="true" className="size-8" />
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
          )}
        </button>
      </div>

      <div
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} ${
<<<<<<< HEAD
          isHidden ? "" : "hidden"
        } absolute right-0 z-10 mt-2 h-screen w-full bg-white transition-all duration-300 ease-in-out lg:hidden`}
      >
        <MenuBeforeSignIn />
        {/* <MenuAfterSignIn /> */}
      </div>
    </div>
  );
}
=======
          isHidden ? "hidden" : ""
        } absolute right-0 z-40 mt-2 h-screen w-full bg-white transition-all duration-300 ease-in-out lg:hidden`}
      >
        <MenuBeforeSignIn />
        <MenuAfterSignIn />
      </div>
    </div>
  );
}
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
