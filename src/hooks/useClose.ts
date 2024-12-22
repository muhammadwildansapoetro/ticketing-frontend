import { useEffect, useCallback } from "react";

export default function useClose(isOpen: boolean, handleClose: () => void) {
  const clickClose = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (isOpen && target.tagName === "A") {
        handleClose();
      }
    },
    [isOpen, handleClose], // Dependencies of clickClose
  );

  useEffect(() => {
    document.addEventListener("click", clickClose);
    return () => {
      document.removeEventListener("click", clickClose);
    };
  }, [clickClose]); // Dependency for useEffect
}
