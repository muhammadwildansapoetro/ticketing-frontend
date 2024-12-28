export interface FilterMenuProps {
  selectedCategories: string[];
  selectedLocations: string[];
  onCategoryChange: (category: string) => void;
  onLocationChange: (location: string) => void;
}
