"use client";

import { useSession } from "@/context/useSession";
import protectCustomerPage from "@/page-protection/protectCustomerPage";
import Link from "next/link";

function PaymentSuccessPage() {
  const { customer } = useSession();
  return (
    <div className="h-screen">
      <div className="my-10 flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl font-bold text-accent">Payment Successfull</h1>
        <h1 className="text-xl font-medium">
          Thank you for your payment,{" "}
          <span className="font-bold">{customer?.fullname}</span>
        </h1>
        <Link
          href={`/${customer?.username}`}
          className="rounded-lg bg-accent px-4 py-2 text-white"
        >
          See my ticket
        </Link>
      </div>
    </div>
  );
}

export default protectCustomerPage(PaymentSuccessPage);
