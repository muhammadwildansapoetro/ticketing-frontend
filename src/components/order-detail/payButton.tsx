"use client";

import { useSession } from "@/context/useSession";
import axios from "@/helpers/axios";
import { getOrderToken } from "@/libs/order";
import { IOrder } from "@/types/order";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface PayButtonProps {
  order: IOrder;
  disabled?: boolean;
}

export default function PayButton({ order, disabled = false }: PayButtonProps) {
  const router = useRouter();
  const { customer } = useSession();
  const [loading, setLoading] = useState(false);

  const handlePayTicket = async () => {
    if (disabled) {
      console.log("Payment is disabled");
      return;
    }

    setLoading(true);

    try {
      const orderToken = await getOrderToken(order.finalPrice, order.id);
      if (orderToken) {
        window.snap.pay(orderToken);
      } else {
        console.log("Failed to retrieve order token");
      }
    } catch (error) {
      console.log("Error fetching order token:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFreeTicket = async () => {
    const resBody = {
      transaction_status: "settlement",
      order_id: order.id,
    };

    setLoading(true);

    try {
      const { data } = await axios.post("/orders/midtrans-webhook", resBody);
      router.push(`/${customer?.username}`);
      toast.success(data.message);
    } catch (error) {
      console.log("Error handling free ticket:", error);
      toast.error("Error handling free ticket");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (order.finalPrice === 0) {
      handleFreeTicket();
    } else {
      handlePayTicket();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full rounded-lg p-2 text-center text-white ${disabled ? "cursor-not-allowed bg-accent/80" : "bg-accent"}`}
    >
      {loading
        ? "Loading..."
        : order.finalPrice === 0
          ? "Get Free Ticket"
          : "Pay Ticket"}
    </button>
  );
}
