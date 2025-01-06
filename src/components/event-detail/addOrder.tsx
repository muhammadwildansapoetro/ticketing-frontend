"use client";

import { CurrencyFormatter } from "@/helpers/currencyFormatter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IOrderDetail } from "./tabsAndOrder";
import { IoTicket } from "react-icons/io5";
import axios from "@/helpers/axios";
import { useSession } from "@/context/useSession";
import { getCustomerCoupon, getCustomerPoints } from "@/libs/order";

interface IAddOrderProps {
  totalPrice: number;
  finalPrice: number;
  setTotalPrice: (parameter: number) => void;
  setFinalPrice: (parameter: number) => void;
  orderCart: IOrderDetail[] | null;
  params: string;
}

export default function AddOrder({
  totalPrice,
  finalPrice,
  setTotalPrice,
  setFinalPrice,
  orderCart,
  params,
}: IAddOrderProps) {
  const router = useRouter();
  const { isAuth } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [signInMessage, setSignInMessage] = useState<string | null>(null);
  const [customerCoupon, setCustomerCoupon] = useState<number>(0);
  const [customerPoints, setCustomerPoints] = useState<number>(0);
  const [isCouponRedeemed, setIsCouponRedeemed] = useState<boolean>(false);
  const [isPointsUsed, setIsPointsUsed] = useState<boolean>(false);

  const totalTickets = orderCart
    ? orderCart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  useEffect(() => {
    if (!isAuth) {
      setSignInMessage("You must sign in first to make an order.");
    } else {
      setSignInMessage(null);
    }
  }, [isAuth]);

  useEffect(() => {
    const getCouponPoints = async () => {
      const coupon = await getCustomerCoupon();
      const points = await getCustomerPoints();
      setCustomerCoupon(coupon);
      setCustomerPoints(points);
    };
    getCouponPoints();
  }, []);

  useEffect(() => {
    if (totalTickets > 5) {
      setErrorMessage("Maximum 5 tickets per customers");
    } else {
      setErrorMessage(null);
    }
  }, [totalTickets]);

  useEffect(() => {
    if (orderCart) {
      const currentDate = new Date();

      const totalPrice = orderCart.reduce((acc, item) => {
        return acc + item.ticket.price * item.quantity;
      }, 0);

      const finalPrice = orderCart.reduce((acc, item) => {
        const hasDiscount =
          item.ticket.discountPercentage && item.ticket.discountPercentage > 0;
        const discountStartDate = new Date(
          item.ticket.discountStartDate as string,
        );
        const discountEndDate = new Date(item.ticket.discountEndDate as string);
        const isDiscountActive =
          currentDate >= discountStartDate && currentDate <= discountEndDate;

        const finalPriceTicket =
          item.ticket.price === 0
            ? 0
            : hasDiscount && isDiscountActive
              ? item.ticket.price -
                (item.ticket.price *
                  (item.ticket.discountPercentage as number)) /
                  100
              : item.ticket.price;

        return acc + finalPriceTicket * item.quantity;
      }, 0);

      setTotalPrice(totalPrice);

      let adjustedFinalPrice = finalPrice;

      if (isPointsUsed) {
        adjustedFinalPrice -= customerPoints;
      }

      if (isCouponRedeemed) {
        adjustedFinalPrice -= adjustedFinalPrice * (customerCoupon / 100);
      }

      setFinalPrice(Math.max(adjustedFinalPrice, 0));
    }
  }, [
    orderCart,
    setTotalPrice,
    setFinalPrice,
    isPointsUsed,
    isCouponRedeemed,
    customerPoints,
  ]);

  const handleRedeemCoupon = () => {
    setIsCouponRedeemed(true);
  };

  const handleUsePoints = () => {
    setIsPointsUsed(true);
  };

  console.log("Total Price:", totalPrice);
  console.log("Final Price:", finalPrice);
  console.log("Order Cart:", orderCart);

  const handleAddOrder = async () => {
    try {
      setIsLoading(true);
      if (totalTickets > 5) {
        toast.warn("Maximum 5 tickets per customer");
        return;
      }

      const storedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        "/orders",
        {
          totalPrice: totalPrice,
          finalPrice: finalPrice,
          orderCart,
          customerCoupon: isCouponRedeemed,
          customerPoints: isPointsUsed,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        },
      );

      router.push(`/order/${params}/${data.orderId}`);
      toast.success(data.message);
    } catch (error) {
      console.error("Error adding order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(
    "isCouponRedeemed, customerCoupon",
    isCouponRedeemed,
    customerCoupon,
  );

  return (
    <div className="flex items-center justify-center gap-5 lg:w-full lg:flex-col">
      <div className="w-1/2 lg:w-full">
        <div className="mb-2 hidden gap-5 lg:flex lg:w-full lg:flex-col lg:pb-3">
          {orderCart && orderCart.length > 0 ? (
            orderCart.map((order, index) => {
              const currentDate = new Date();
              const hasDiscount =
                order.ticket.discountPercentage &&
                order.ticket.discountPercentage > 0;
              const discountStartDate = new Date(
                order.ticket.discountStartDate as string,
              );
              const discountEndDate = new Date(
                order.ticket.discountEndDate as string,
              );
              const isDiscountActive =
                currentDate >= discountStartDate &&
                currentDate <= discountEndDate;

              const ticketPrice =
                isDiscountActive && hasDiscount
                  ? order.ticket.price -
                    (order.ticket.price *
                      (order.ticket.discountPercentage as number)) /
                      100
                  : order.ticket.price;

              return (
                <div
                  key={index}
                  className="flex w-full flex-col border-b border-b-gray-300 pb-2"
                >
                  <div className="flex items-end justify-start gap-3">
                    <IoTicket className="text-3xl text-accent" />
                    <div className="text-xl">{order.ticket.category} Stand</div>
                  </div>
                  <div className="flex justify-between gap-20">
                    <div className="ml-10">{order.quantity} ticket</div>
                    <div className="font-bold">
                      {CurrencyFormatter(order.quantity * ticketPrice)}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>
              You haven&apos;t selected a ticket yet. Please select it first in
              the
              <span className="font-bold"> Ticket </span> menu tab.
            </p>
          )}
        </div>

        {orderCart && orderCart?.length > 0 ? (
          <>
            {customerCoupon || customerPoints || totalPrice > 10000 ? (
              <div className="mb-3 flex justify-between">
                <button
                  onClick={handleUsePoints}
                  disabled={isPointsUsed || customerPoints <= 0}
                  className={`rounded-lg bg-accent px-2 py-1 text-white disabled:cursor-not-allowed disabled:opacity-50 lg:px-4 lg:py-2`}
                >
                  Use Points
                </button>
                <button
                  onClick={handleRedeemCoupon}
                  disabled={customerCoupon === 0 || isCouponRedeemed}
                  className={`rounded-lg bg-accent px-2 py-1 text-white disabled:cursor-not-allowed disabled:opacity-50 lg:px-4 lg:py-2`}
                >
                  Redeem Coupon
                </button>
              </div>
            ) : null}

            {isPointsUsed && (
              <div className="flex justify-between text-sm font-medium text-accent lg:text-base">
                <p>Points:</p>
                <p>- {CurrencyFormatter(customerPoints)}</p>
              </div>
            )}

            {isCouponRedeemed && (
              <div className="flex justify-between text-sm font-medium text-accent lg:text-base">
                <p>Coupon discount {customerCoupon}%</p>
                <p>
                  -{" "}
                  {isPointsUsed
                    ? CurrencyFormatter(
                        (totalPrice - customerPoints) * (customerCoupon / 100),
                      )
                    : CurrencyFormatter(totalPrice * (customerCoupon / 100))}
                </p>
              </div>
            )}

            <div className="mt-3 flex items-center justify-between">
              <p className="text-base font-bold lg:text-lg">
                Total: {orderCart.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                ticket
              </p>
              <p className="text-base font-bold lg:text-lg">
                {CurrencyFormatter(finalPrice)}
              </p>
            </div>

            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </>
        ) : (
          <div className="items-center justify-between lg:flex lg:border-t lg:border-t-gray-300 lg:pt-3">
            <p>Total 0 ticket</p>
            <p className="text-xl font-bold">IDR 0</p>
          </div>
        )}
      </div>

      {signInMessage && <p className="text-red-500">{signInMessage}</p>}

      <button
        onClick={handleAddOrder}
        disabled={
          isLoading ||
          totalTickets > 5 ||
          !orderCart ||
          orderCart.length === 0 ||
          !isAuth
        }
        className={`${(isLoading || totalTickets > 5 || !orderCart || orderCart.length === 0 || !isAuth) && `disabled:cursor-not-allowed disabled:bg-accent/80 disabled:bg-opacity-50`}w-1/2 rounded-lg bg-accent px-6 py-2 text-center tracking-widest text-white hover:bg-accent/90 lg:w-full`}
      >
        {isLoading ? "Ordering ticket..." : "Order ticket"}
      </button>
    </div>
  );
}
