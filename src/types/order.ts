import { ITicket } from "./ticket";

export interface IOrder {
  totalPrice: number;
  finalPrice: number;
  status: string;
  expiredAt: string;
  OrderDetail: IOrderDetail[];
}

interface IOrderDetail {
  quantity: number;
  subTotalPrice: number;
  ticket: ITicket;
}
