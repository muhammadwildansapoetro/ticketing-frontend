import { IEvent } from "./event";

export interface ITicket {
  id: number;
  category: string;
  price: number;
  quantity: number;
  description: string;
  event: IEvent;
  discountPercentage?: number;
  discountStartDate?: string;
  discountEndDate?: string;
}

export interface ITicketInput {
  category: string;
  price: string;
  quantity: string;
  description: string;
  discountPercentage?: number;
  discountStartDate?: string | null;
  discountEndDate?: string | null;
}
