import OrderDetail from "@/components/order-detail/orderDetail";
import PaymentDetail from "@/components/order-detail/paymentDetail";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { getOrderDetail } from "@/libs/order";
import { IOrder } from "@/types/order";

export default async function OrderDetailPage({
  params,
}: {
  params: { orderId: number };
}) {
  const order: IOrder = await getOrderDetail(params.orderId);

  const currentDateTime = new Date();
  const orderExpirationDateTime = new Date(order.expiredAt);

  const isExpired = currentDateTime > orderExpirationDateTime;
  const message = isExpired
    ? `Payment cancelled because the order has expired.`
    : `Please make payment before ${DateFormatter(order.expiredAt)} - ${TimeFormatter(order.expiredAt)} WIB`;

  if (order.status === "Paid" || order.finalPrice === 0) {
    return (
      <div>
        <div className="container mx-auto my-10 lg:px-40">
          <div className="mx-5 flex flex-col gap-10 lg:flex-row">
            <OrderDetail order={order} />
            {order.status !== "Paid" && <PaymentDetail order={order} />}
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
          <PaymentDetail order={order} />
        </div>
      </div>
    </div>
  );
}
