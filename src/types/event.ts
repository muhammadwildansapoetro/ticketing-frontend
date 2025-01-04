import { IReview } from "./review";
import { ITicket } from "./ticket";
import { IOrganizerProfile } from "./user";

export interface IEvent {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  venue: string;
  date: string;
  startTime: string;
  endTime: string;
  image: string;
  organizer: IOrganizerProfile;
  Ticket: ITicket[];
  Review: IReview[];
}

export interface IEventInput {
  title: string;
  category: string;
  description: string;
  location: string;
  venue: string;
  date: string;
  startTime: string;
  endTime: string;
  image: File | null;
}
