import { useEffect } from "react";

export default function UseClose(
  isOpen: boolean,
  handleClose: () => void,
  condition = (target: HTMLElement) => target.tagName === "A",
) {
  const clickClose = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isOpen && condition(target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickClose);
    return () => {
      document.removeEventListener("click", clickClose);
    };
  }, [isOpen, handleClose, condition]);
}
