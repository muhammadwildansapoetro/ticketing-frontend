"use client";

import UseOpen from "@/hooks/useOpen";

import { IoIosArrowBack } from "react-icons/io";
import { IoReload } from "react-icons/io5";

export default function MobileMatchFilter() {
  const { isOpen, handleOpen } = UseOpen();
  const handleReload = () => [window.location.reload()];

  return (
    <div>
      <div className="flex items-center justify-center lg:hidden">
        <button
          onClick={handleOpen}
          className="mx-5 mt-5 w-full rounded-lg border border-accent bg-white p-2 hover:bg-accent/5"
        >
          <p className="text-lg font-medium text-accent">Filter</p>
        </button>
      </div>

      <div
        className={`${isOpen ? "absolute" : "hidden"} absolute inset-0 z-10 h-screen w-full bg-white`}
      >
        <div className="m-5 flex items-center justify-between">
          <div className="flex gap-2">
            <button onClick={handleOpen}>
              <IoIosArrowBack size={25} className="hover:text-accent" />
            </button>
            <p className="text-xl font-medium">Filter</p>
          </div>

          <button onClick={handleReload}>
            <IoReload size={25} className="hover:text-accent" />
          </button>
        </div>

        <div className="mx-5 border border-black/10" />

        <div className="mt-5 flex items-center justify-center">
          <button
            onClick={handleOpen}
            className="mx-5 w-full rounded-lg bg-accent py-2 text-white"
          >
            Apply filter
          </button>
        </div>
      </div>
    </div>
  );
}
