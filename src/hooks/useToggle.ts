"use client";

import { useState } from "react";

export default function useToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const isHidden = !isOpen;

  return { isOpen, isHidden, handleToggle };
}
