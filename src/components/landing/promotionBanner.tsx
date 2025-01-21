"use client";

import useClose from "@/hooks/useClose";
import useToggle from "@/hooks/useToggle";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PromotionBanner() {
  const { isOpen, handleToggle } = useToggle();
  useClose(isOpen, handleToggle);

  if (isOpen) return null;

  return (
    <div className="sticky top-0 z-50 hidden w-screen items-center justify-center gap-5 bg-yellow-300 p-2 lg:flex">
      <p className="text-center tracking-wider">
        <span className="font-medium underline underline-offset-4 hover:font-bold">
          <Link href={"/register"}>Register</Link>
        </span>{" "}
        with your friend&apos;s referral code to get{" "}
        <span className="font-bold">10% discount coupon</span>.{" "}
        <span className="font-medium underline underline-offset-4 hover:font-bold">
          <Link href={"/sign-in"}>Invite</Link>
        </span>{" "}
        your friends to register with your referral code to get{" "}
        <span className="font-bold">10.000 points</span>
      </p>
      <button onClick={handleToggle} className="size-6 font-bold">
        <XMarkIcon />
      </button>
    </div>
  );
}
