"use client";

import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { IOrder } from "@/types/order";
import PayButton from "./payButton";

export default function PaymentDetail({ order }: { order: IOrder }) {
  const isCanceled = order.status === "Canceled" || order.status === "Paid";

  const pointsUsed = order.customerPoints ? order.customerPoints : 0;
  const couponDiscount = order.customerCoupon ? order.totalPrice / 10 : 0; // Assuming 10% discount
  const totalDiscount =
    order.finalPrice - order.totalPrice + pointsUsed + couponDiscount;

  return (
    <div className="sticky top-10 h-fit basis-1/3 rounded-xl border border-gray-300 p-5 shadow-lg">
      <h1 className="text-xl font-bold text-accent lg:text-2xl">
        Payment Detail
      </h1>

      <div className="mt-5 flex flex-col">
        <div className="flex justify-between">
          <p>Total Price</p>
          <p>{CurrencyFormatter(order.totalPrice)}</p>
        </div>
        <div className="flex justify-between font-bold text-accent">
          <p>Total Discount</p>
          <p>{CurrencyFormatter(totalDiscount)}</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Final Price</p>
          <p>{CurrencyFormatter(order.finalPrice)}</p>
        </div>
        <div className="mt-5 flex justify-between border-t border-gray-300 pt-5 text-lg font-bold">
          <p>Total Payment</p>
          <p className="text-xl">{CurrencyFormatter(order.finalPrice)}</p>
        </div>
        <div className="mt-5">
          <PayButton disabled={isCanceled} order={order} />
        </div>
      </div>
    </div>
  );
}
