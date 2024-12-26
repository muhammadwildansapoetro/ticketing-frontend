"use client";

import { useState } from "react";

export default function UseOpen() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isHidden, setHidden] = useState<boolean>(false);

  const handleOpen = () => {
    if (!isOpen) {
      setHidden(!isHidden);
      setTimeout(() => {
        setOpen(!isOpen);
      }, 0);
    } else {
      setOpen(!isOpen);
      setTimeout(() => {
        setHidden(!isHidden);
      }, 0);
    }
  };

  return { isOpen, isHidden, handleOpen };
}