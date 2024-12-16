export interface IOrganizer {
  name: string;
  email: string;
  avatar: string;
}

export interface IEvent {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  venue: string;
  date: string;
  time: string;
  image: File | string;
  organizer: IOrganizer;
}

export interface IEventInput {
  title: string;
  category: string;
  description: string;
  location: string;
  venue: string;
  date: string;
  time: string;
  image: File | string;
}

export interface FilterMenuProps {
  filters: EventFilters;
  onFilterChange: (field: keyof EventFilters, value: string) => void;
}

export type EventFilters = {
  category: string;
  location: string;
};
