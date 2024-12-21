export interface ITicket {
  id: number;
  category: string;
  price: number;
  quantity: number;
  description: string;
}

export interface ITicketInput {
  category: string;
  price: string;
  quantity: string;
  description: string;
}
