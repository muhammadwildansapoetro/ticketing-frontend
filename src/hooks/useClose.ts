"use client";

import { useEffect, useCallback } from "react";

export default function useClose(isOpen: boolean, handleToggle: () => void) {
  const clickClose = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (isOpen && target.tagName === "A") {
        handleToggle();
      }
    },
    [isOpen, handleToggle],
  );

  useEffect(() => {
    document.addEventListener("click", clickClose);
    return () => {
      document.removeEventListener("click", clickClose);
    };
  }, [clickClose]);
}
