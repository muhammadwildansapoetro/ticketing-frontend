"use client";

import { Input } from "@/components/form/input";
import { useSession } from "@/context/useSession";
import protectAfterAuth from "@/page-protection/protectAfterAuth";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  data: Yup.string().required("Name or email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

interface FormValues {
  data: string;
  password: string;
}

function OrganizerSignInPage() {
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
        },
      );
      const result = await res.json();
      if (!res.ok) throw result;
      localStorage.setItem("token", result.token);
      setIsAuth(true);
      setCustomer(result.customer);
      router.push("/");
      router.refresh();
      toast.success(result.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md sm:p-8">
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Sign in to your account
        </h1>
        <Formik
          initialValues={initialValue}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            handleLogin(values);
            action.resetForm();
          }}
        >
          {(props) => {
            return (
              <Form className="space-y-4">
                <Input formik={props} name="data" label="Name or Email" />
                <Input
                  formik={props}
                  name="password"
                  label="Password"
                  type="password"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-md bg-accent px-4 py-2 text-white hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-accent/90"
                >
                  {isLoading ? "Loading..." : "Sign in"}
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
          Don&apos;t have an account?{" "}
          <a href="/choice/register" className="text-accent hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default protectAfterAuth(OrganizerSignInPage);
