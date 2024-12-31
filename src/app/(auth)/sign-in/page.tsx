"use client";

import { useRouter } from "next/navigation";
import { FaUserTie } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import Image from "next/image";

export default function SignInPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col bg-gray-50 lg:flex-row">
      {/* Left Panel */}
      <div className="relative flex w-full items-center justify-center bg-gradient-to-br from-green-50 to-green-400 text-white shadow-lg lg:w-1/2">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/stadium.jpg" // Replace with a football-themed image
            alt="Football Stadium"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative z-10 px-8 text-center">
          <h1 className="mb-4 text-5xl font-bold">Welcome Back!</h1>
          <p className="mb-6 text-lg">
            Get ready to experience the ultimate football excitement! Sign in to
            manage your events or book matches.
          </p>
          <button
            onClick={() => router.push("/")}
            className="rounded-lg bg-white px-8 py-2 font-semibold text-green-700 shadow-lg hover:bg-gray-100"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex w-full flex-col items-center justify-center bg-white px-8 py-12 lg:w-1/2 lg:px-24">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Sign In</h2>
        <p className="mb-8 text-center text-gray-600">
          Please select your role and log in to continue.
        </p>

        {/* Buttons */}
        <div className="flex w-full max-w-md flex-col gap-6">
          <button
            onClick={() => router.push("/customer/sign-in")}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-accent bg-accent py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-accent/90"
          >
            <FaUserTie />
            Sign in as Customer
          </button>
          <button
            onClick={() => router.push("/organizer/sign-in")}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-accent py-3 text-lg font-medium text-accent shadow-lg transition-all hover:bg-accent hover:text-white"
          >
            <VscOrganization />
            Sign in as Organizer
          </button>
        </div>
      </div>
    </div>
  );
}
