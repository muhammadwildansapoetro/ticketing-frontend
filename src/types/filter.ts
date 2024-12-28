export interface FilterMenuProps {
  selectedCategory: string;
  selectedLocation: string;
  onCategoryChange: (categoriy: string) => void;
  onLocationChange: (location: string) => void;
}
