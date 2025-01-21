"use client";

import Link from "next/link";
import Image from "next/image";
import protectAfterAuth from "@/HOC/protectAfterAuth";

function RegisterPage() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col-reverse items-center justify-start lg:flex-row lg:justify-center lg:gap-20">
      <section className="w-full lg:w-[500px]">
        <Image
          src={
            "https://res.cloudinary.com/doiygpguv/image/upload/v1737376188/2853458_fr0wet.jpg"
          }
          width={1000}
          height={1000}
          alt="Supporter illustration"
          loading="lazy"
        />
      </section>

      <section className="relative w-full rounded-xl px-5 pt-20 lg:w-[500px] lg:border lg:border-gray-200 lg:p-10 lg:shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-800 lg:text-4xl">
          Create your account
        </h1>
        <p className="my-3 text-center text-xl text-gray-600 lg:my-5">
          Choose your role to get started
        </p>

        <div className="flex flex-col gap-5">
          <Link
            href="/customer/register"
            aria-label="Register as customer"
            className="rounded-lg border border-accent bg-accent py-3 text-center text-lg font-medium text-white transition-all hover:bg-accent/90"
          >
            Register as Customer
          </Link>
          <Link
            href="/organizer/register"
            aria-label="Register as organizer"
            className="rounded-lg border border-accent py-3 text-center text-lg font-medium text-gray-800 transition-all hover:bg-accent hover:text-white"
          >
            Register as Organizer
          </Link>
        </div>
      </section>
    </main>
  );
}

export default protectAfterAuth(RegisterPage);
