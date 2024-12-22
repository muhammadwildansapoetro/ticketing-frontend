import { IEvent } from "./event";

export interface ITicket {
  id: number;
  category: string;
  price: number;
  quantity: number;
  description: string;
  event: IEvent;
}

export interface ITicketInput {
  category: string;
  price: string;
  quantity: string;
  description: string;
}
