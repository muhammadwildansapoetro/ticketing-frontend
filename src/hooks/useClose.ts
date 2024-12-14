import { useEffect } from "react";

export default function UseClose(isOpen: boolean, toggleMenu: () => void) {
  const closeMenu = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (isOpen && target.tagName === "A") {
      toggleMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]);
}
