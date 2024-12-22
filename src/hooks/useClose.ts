import { useEffect } from "react";

export default function UseClose(isOpen: boolean, handleClose: () => void) {
  const clickClose = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (isOpen && target.tagName === "A") {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickClose);
    return () => {
      document.removeEventListener("click", clickClose);
    };
  }, [isOpen, clickClose]);
}
