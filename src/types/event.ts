import { IOrganizer } from "./organizer";
import { IReview } from "./review";
import { ITicket } from "./ticket";

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
  organizer: IOrganizer;
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
