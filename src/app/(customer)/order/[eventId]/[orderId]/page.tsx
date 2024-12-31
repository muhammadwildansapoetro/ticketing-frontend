"use client";

import Loading from "@/app/loading";
import OrderDetail from "@/components/order-detail/orderDetail";
import PaymentDetail from "@/components/order-detail/paymentDetail";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { getOrderDetail, getOrderToken } from "@/libs/order";
import { IOrder } from "@/types/order";
import { useEffect, useState } from "react";

export default function OrderDetailPage({
  params,
}: {
  params: { orderId: number };
}) {
  const [orderToken, setOrderToken] = useState<string>("");
  const [order, setOrder] = useState<IOrder | null>(null);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      const fetchedOrder: IOrder = await getOrderDetail(params.orderId);
      setOrder(fetchedOrder);

      const token = await getOrderToken(
        fetchedOrder.finalPrice,
        String(params.orderId),
      );
      setOrderToken(token);
    };

    fetchOrderDetail();
  }, [params.orderId]);

  if (!order) {
    return <Loading />;
  }

  const currentDateTime = new Date();
  const orderExpirationDateTime = new Date(order.expiredAt);

  const isExpired = currentDateTime > orderExpirationDateTime;
  const message = isExpired
    ? `Payment cancelled because the order has expired.`
    : `Please make payment before ${DateFormatter(order.expiredAt)} - ${TimeFormatter(order.expiredAt)} WIB`;

  if (order.status === "Paid") {
    return (
      <div>
        <div className="container mx-auto my-10 lg:px-40">
          <div className="mx-5 flex flex-col gap-10 lg:flex-row">
            <OrderDetail order={order} />
            <PaymentDetail order={order} orderToken={orderToken} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className={`sticky inset-x-0 top-0 z-10 w-full p-2 text-center font-medium tracking-wide ${order.status === "Canceled" ? "bg-red-500 text-white" : "bg-yellow-300 text-black"}`}
      >
        {message}
      </div>
      <div className="container mx-auto my-10 lg:px-40">
        <div className="mx-5 flex flex-col gap-10 lg:flex-row">
          <OrderDetail order={order} />

          <PaymentDetail order={order} orderToken={orderToken} />
        </div>
      </div>
    </div>
  );
}
