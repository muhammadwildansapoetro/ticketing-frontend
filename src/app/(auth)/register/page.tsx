"use client";

import Link from "next/link";
import Image from "next/image";
import protectAfterAuth from "@/page-protection/protectAfterAuth";

function RegisterPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <Image
        src="/backgroundSUp.jpg"
        alt="Background"
        layout="fill"
        className="-z-10 object-cover"
        priority
      />

      <div className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Register
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Select your role to continue registration.
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/customer/register">
            <button className="w-full rounded-lg border border-accent bg-accent py-3 text-lg font-medium text-white transition-all hover:bg-accent/90">
              Register as Customer
            </button>
          </Link>
          <Link href="/organizer/register">
            <button className="w-full rounded-lg border border-accent py-3 text-lg font-medium text-gray-800 transition-all hover:bg-accent hover:text-white">
              Register as Organizer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default protectAfterAuth(RegisterPage);
