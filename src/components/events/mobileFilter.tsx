"use client";

import UseClose from "@/hooks/useClose";
import useToggleState from "@/hooks/useToggle";
import { IoIosArrowBack } from "react-icons/io";
import { IoReload } from "react-icons/io5";

export default function MobileFilter({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-10 h-screen w-full bg-white lg:hidden">
      <div className="m-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={onClose}>
            <IoIosArrowBack size={25} className="hover:text-accent" />
          </button>
          <p className="text-xl font-medium">Filter</p>
        </div>

        <button className="flex gap-1 hover:text-accent">
          <IoReload size={25} />
          Reset filter
        </button>
      </div>

      <div className="mx-5 border border-accent/10" />

      {/* Category Filter */}
      <div className="m-5">
        <p className="mb-2 text-xl font-bold">Category</p>
        <div className="flex flex-col items-start justify-start gap-1">
          <button className="rounded-lg bg-white px-2 py-1 text-black">
            Category
          </button>
        </div>
      </div>

      {/* Location Filter */}
      <div className="m-5">
        <p className="mb-2 text-xl font-bold">Location</p>
        <div className="flex flex-col items-start justify-start gap-1">
          <button className="rounded-lg bg-white px-2 py-1 text-black">
            Location
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center">
        <button className="mx-5 w-full rounded-lg bg-accent py-2 text-white hover:bg-accent/90">
          Apply filter
        </button>
      </div>
    </div>
  );
}
