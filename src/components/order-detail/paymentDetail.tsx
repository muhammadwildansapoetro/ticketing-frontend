"use client";

import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { IOrder } from "@/types/order";
import PayButton from "./payButton";

export default function PaymentDetail({
  order,
  orderToken,
}: {
  order: IOrder;
  orderToken: string;
}) {
  return (
    <div className="sticky top-10 h-fit basis-1/3 rounded-xl border border-gray-300 p-5 shadow-lg">
      <h1 className="text-xl font-bold text-accent lg:text-2xl">
        Payment Detail
      </h1>

      <div className="mt-5 flex flex-col">
        <div className="flex justify-between">
          <p>Total Ticket Price</p>
          <p>{CurrencyFormatter(order.totalPrice)}</p>
        </div>
        <div className="flex justify-between">
          <p> Additional Fees</p>
          <p>IDR 0</p>
        </div>
        <div className="flex justify-between">
          <p>Platform Fees</p>
          <p>IDR 0</p>
        </div>
        <div className="mt-5 flex justify-between border-t border-gray-300 pt-5 text-lg font-bold">
          <p>Total Payment</p>
          <p className="text-xl">{CurrencyFormatter(order.finalPrice)}</p>
        </div>
        <div className="mt-10">
          <PayButton orderToken={orderToken} />
        </div>
      </div>
    </div>
  );
}
