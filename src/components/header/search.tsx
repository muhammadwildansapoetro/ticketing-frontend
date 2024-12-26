<<<<<<< HEAD
import UseOpen from "@/hooks/useOpen";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function () {
  const { isOpen, handleOpen } = UseOpen();

  return (
    <div className="flex items-center">
      <button type="button" onClick={handleOpen}>
        <BiSearch className="size-8 text-white" />
=======
import useToggle from "@/hooks/useToggle";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  const { isOpen, handleToggle } = useToggle();

  return (
    <div className="flex items-center">
      <button type="button" onClick={handleToggle}>
        <BiSearch className="size-6 text-white" />
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
      </button>

      <div className={`${isOpen ? "absolute inset-0" : "hidden"} `}>
        <div className="flex h-14 w-full items-center justify-between bg-accent px-5">
          <input
            type="text"
            placeholder="Search match here"
            className="custom-outline-accent w-full rounded-md py-1 pl-3"
          />
<<<<<<< HEAD
          <button type="button" onClick={handleOpen}>
            <XMarkIcon className="size-10 items-center text-white" />
=======
          <button type="button" onClick={handleToggle}>
            <XMarkIcon className="size-8 items-center text-white" />
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
          </button>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
