// "use client";

// import useToggle from "@/hooks/useToggle";
// import DesktopFilterBar from "./desktopFilter";
// import MobileFilterMenu from "./mobileFilter";
// import useClose from "@/hooks/useClose";
// import { FilterMenuProps } from "@/types/filter";

// export default function FilterMenu({
//   selectedCategories,
//   selectedLocations,
//   onCategoryChange,
//   onLocationChange,
//   onResetFilter,
// }: FilterMenuProps & { onResetFilter: () => void }) {
//   const { isOpen, handleToggle } = useToggle();
//   useClose(isOpen, handleToggle);

//   return (
//     <div>
//       {/* Mobile Filter Button */}
//       <div className="flex items-center justify-center lg:hidden">
//         <button
//           onClick={handleToggle}
//           className="mx-5 mt-5 w-full rounded-lg border border-accent bg-white p-2 hover:bg-accent/5"
//         >
//           <p className="text-lg font-medium text-accent">Filter</p>
//         </button>
//       </div>

//       {/* Desktop Filter Bar */}
//       <DesktopFilterBar
//         selectedCategories={selectedCategories}
//         selectedLocations={selectedLocations}
//         onCategoryChange={onCategoryChange}
//         onLocationChange={onLocationChange}
//         onResetFilter={onResetFilter}
//       />

//       {/* Mobile Filter Menu */}
//       {isOpen && (
//         <MobileFilterMenu
//           selectedCategories={selectedCategories}
//           selectedLocations={selectedLocations}
//           onCategoryChange={onCategoryChange}
//           onLocationChange={onLocationChange}
//           onClose={handleToggle}
//           onResetFilter={onResetFilter}
//         />
//       )}
//     </div>
//   );
// }
