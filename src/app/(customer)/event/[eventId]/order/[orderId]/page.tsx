import OrderDetail from "@/components/order-detail/orderDetail";
import PaymentDetail from "@/components/order-detail/paymentDetail";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { getOrderDetail, getOrderToken } from "@/libs/order";
import { IOrder } from "@/types/order";

export default async function OrderDetailPage({
  params,
}: {
  params: { orderId: number };
}) {
  const order: IOrder = await getOrderDetail(params.orderId);
  const orderToken: string = await getOrderToken(
    order.finalPrice,
    String(params.orderId),
  );

  return (
    <div>
      <div className="sticky inset-x-0 top-0 z-10 w-full bg-yellow-300 p-2 text-center font-medium tracking-wide">
        Please make payment before {DateFormatter(order.expiredAt)} -{" "}
        {TimeFormatter(order.expiredAt)} WIB
      </div>
      <div className="container mx-auto my-10 border lg:px-40">
        <div className="mx-5 flex flex-col gap-10 lg:flex-row">
          <OrderDetail order={order} />

          <PaymentDetail order={order} orderToken={orderToken} />
        </div>
      </div>
    </div>
  );
}
