import { ITicket } from "./ticket";

export interface IOrder {
  id: string;
  totalPrice: number;
  finalPrice: number;
  status: string;
  expiredAt: string;
  customerPoints: number;
  customerCoupon: boolean;
  OrderDetail: IOrderDetail[];
}

interface IOrderDetail {
  quantity: number;
  subTotalPrice: number;
  ticket: ITicket;
}
