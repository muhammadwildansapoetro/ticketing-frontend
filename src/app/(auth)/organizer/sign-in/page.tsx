"use client";

import { Input } from "@/components/form/input";
import { useSession } from "@/context/useSession";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  data: Yup.string().required("Username or email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

interface FormValues {
  data: string;
  password: string;
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuth, setCustomer } = useSession();
  const router = useRouter();
  const initialValue: FormValues = {
    data: "",
    password: "",
  };

  const handleLogin = async (organizer: FormValues) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/auth/organizer/sign-in`,
        {
          method: "POST",
          body: JSON.stringify(organizer),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const result = await res.json();
      if (!res.ok) throw result;
      localStorage.setItem("token", result.token);
      setIsAuth(true);
      setCustomer(result.customer);
      router.push("/");
      router.refresh();
      toast.success(result.message);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Sign-In to Your Account</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            handleLogin(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValues>) => {
            return (
              <Form className="space-y-4">
                <Input
                  formik={props}
                  name="data"
                  label="Username or Email"
                />
                <Input
                  formik={props}
                  name="password"
                  label="Password"
                  type="password"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-4 py-2 text-white bg-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 hover:bg-teal-700 disabled:bg-teal-300 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sign-In in..." : "SIGN IN"}
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="w-full rounded-lg border border-gray-300 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Back to Previous Page
                </button>
              </Form>
            );
          }}
        </Formik>
        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account? <a href="/choice/register" className="text-teal-600 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}
