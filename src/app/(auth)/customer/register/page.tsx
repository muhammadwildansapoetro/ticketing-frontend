"use client";

import { Input } from "@/components/form/input";
import { Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { FormValuesCustomer } from "@/types/user";
import protectAfterAuth from "@/HOC/protectAfterAuth";
import { toastError } from "@/helpers/toastError";

const customerSchema = Yup.object().shape({
  fullname: Yup.string().required("Please enter your full name"),
  username: Yup.string().required("Please provide a username"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /(?=.*[A-Z])/,
      "Password must include at least one uppercase letter",
    )
    .matches(
      /(?=.*[!@#$%^&*])/,
      "Password must include at least one special character (e.g., !, @, #, $, %, ^, &, *)",
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match, please try again")
    .required("Please confirm your password"),
  referralCodeBy: Yup.string()
    .uppercase()
    .matches(
      /^[A-Z0-9]+$/,
      "Referral code must contain only uppercase letters and numbers",
    )
    .min(6, "The referral code must be exactly 6 characters long")
    .max(6, "The referral code must be exactly 6 haracters long")
    .nullable()
    .default(null),
});

function CustomerRegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const initialValue: FormValuesCustomer = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCodeBy: "",
  };

  const handleRegister = async (customer: FormValuesCustomer) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/auth/customer/register`,
        {
          method: "POST",
          body: JSON.stringify(customer),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message || "Registration successful!");
      router.push(`/customer/sign-in`);
    } catch (error) {
      toastError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full bg-gray-50">
      <div
        className="hidden w-1/2 items-center justify-center bg-gradient-to-r from-accent to-accent/50 text-white shadow-lg lg:flex"
        style={{ clipPath: "ellipse(120% 100% at 0% 50%)" }}
      >
        <div className="p-8 text-center">
          <h1 className="mb-4 text-5xl font-bold">Welcome!</h1>
          <p className="mb-8 text-lg leading-relaxed">
            Join us to enjoy exclusive features and benefits. <br />
            Already have an account? Log in now!
          </p>
          <button
            onClick={() => router.push("/customer/sign-in")}
            className="rounded-lg bg-white px-8 py-2 font-semibold tracking-wider text-accent shadow-lg hover:bg-gray-100"
          >
            Sign in
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-6 py-10 lg:w-1/2 lg:px-16">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">
          Register as Customer
        </h1>
        <Formik
          initialValues={initialValue}
          validationSchema={customerSchema}
          onSubmit={(values, action) => {
            handleRegister(values);
            action.resetForm();
          }}
        >
          {(props) => (
            <Form className="w-full max-w-md space-y-6 rounded-lg border bg-white p-8 shadow-lg">
              <Input formik={props} name="fullname" label="Full Name" />
              <Input formik={props} name="username" label="Username" />
              <Input
                formik={props}
                name="email"
                label="Email Address"
                type="email"
              />
              <Input
                formik={props}
                name="password"
                label="Password"
                type="password"
              />
              <Input
                formik={props}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
              <Input
                formik={props}
                name="referralCodeBy"
                label="Referral Code"
              />

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-accent py-2 font-semibold tracking-wider text-white hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  {isLoading ? "Loading..." : "Register"}
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/register")}
                  className="w-full rounded-lg border border-gray-300 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Back to Previous Page
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default protectAfterAuth(CustomerRegisterPage);
