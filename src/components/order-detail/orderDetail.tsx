import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import DateFormatter from "@/helpers/dateFormatter";
import TimeFormatter from "@/helpers/timeFormatter";
import { IOrder } from "@/types/order";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTicket, IoTime } from "react-icons/io5";
import PaymentMethod from "./paymentMethod";

export default function OrderDetail({ order }: { order: IOrder }) {
  return (
    <div className="basis-2/3">
      <div className="basis-2/3 rounded-xl border border-gray-300 p-5 shadow-lg">
        <h1 className="text-xl font-bold text-accent lg:text-2xl">
          Order Detail
        </h1>

        <div className="mt-5 flex flex-col gap-5 lg:flex-row">
          <div className="aspect-video basis-1/2">
            <Image
              src={`${order.OrderDetail[0].ticket.event.image}`}
              alt={`${order.OrderDetail[0].ticket.event.title}`}
              width={1600}
              height={900}
              priority
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex basis-1/2 flex-col gap-2">
            <h1 className="text-xl font-bold">
              {order.OrderDetail[0].ticket.event.title}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <FaCalendarAlt className="text-accent" />
              <p>{DateFormatter(order.OrderDetail[0].ticket.event.date)}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoTime className="text-accent" />
              <p>
                {TimeFormatter(order.OrderDetail[0].ticket.event.startTime)} -{" "}
                {TimeFormatter(order.OrderDetail[0].ticket.event.endTime)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-accent" />
              <p>
                {order.OrderDetail[0].ticket.event.venue},{" "}
                {order.OrderDetail[0].ticket.event.location}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:mt-5">
          <table className="mx-auto w-full border-separate border-spacing-2">
            <thead>
              <tr className="text-lg font-medium shadow-sm">
                <th className="text-start">Category</th>
                <th className="text-end">Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.OrderDetail.map((item, index) => (
                <tr key={index} className="">
                  <td className="flex items-start gap-2">
                    <IoTicket className="text-2xl text-accent lg:text-3xl" />
                    <p>{item.ticket.category} Stand</p>
                  </td>
                  <td className="text-end">
                    {CurrencyFormatter(item.subTotalPrice)}
                  </td>
                  <td className="text-center">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5 text-lg">
            <p>Order ID: {order.id}</p>
            <p>
              Order status:{" "}
              <span
                className={`ml-1 rounded-lg font-medium ${order.status === "Unpaid" ? "text-yellow-500" : order.status === "Paid" ? "text-accent" : order.status === "Canceled" ? "text-red-500" : ""}`}
              >
                {order.status}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      {order.status !== "Paid" && (
        <div className="mt-10 basis-2/3 rounded-xl border border-gray-300 p-5 shadow-lg">
          <PaymentMethod />
        </div>
      )}
    </div>
  );
}
