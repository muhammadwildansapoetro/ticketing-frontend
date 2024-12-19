"use client";

import DesktopFilterBar from "./desktopFilter";
import MobileFilterMenu from "./mobileFilter";
import useToggleState from "@/hooks/useToggleState";

export default function FilterMenu() {
  const { isOpen, handleToggle } = useToggleState();

  return (
    <div>
      {/* Mobile Filter Button */}
      <div className="flex items-center justify-center lg:hidden">
        <button
          onClick={handleToggle}
          className="mx-5 mt-5 w-full rounded-lg border border-accent bg-white p-2 hover:bg-accent/5"
        >
          <p className="text-lg font-medium text-accent">Filter</p>
        </button>
      </div>

      {/* Desktop Filter Bar */}
      <DesktopFilterBar />

      {/* Mobile Filter Menu */}
      {isOpen && <MobileFilterMenu onClose={handleToggle} />}
    </div>
  );
}
