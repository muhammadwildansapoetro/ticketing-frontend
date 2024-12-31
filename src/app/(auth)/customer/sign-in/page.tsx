"use client";

import { Input } from "@/components/form/input";
import { useSession } from "@/context/useSession";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  data: Yup.string().required("username or email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimum")
    .required("password is required"),
});

interface SignInFormValues {
  data: string;
  password: string;
}

export default function CustomerSignInPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuth, setCustomer } = useSession();
  const router = useRouter();
  const initialValue: SignInFormValues = {
    data: "",
    password: "",
  };

  const handleSignIn = async (customer: SignInFormValues) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/auth/customer/sign-in`,
        {
          method: "POST",
          body: JSON.stringify(customer),
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
    <div className="mt-6 flex h-screen justify-center p-5">
      <div>
        <h1 className="my-5 text-3xl font-bold">Sign in Form</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={SignInSchema}
          onSubmit={(values, action) => {
            handleSignIn(values);
            action.resetForm();
          }}
        >
          {(props) => {
            return (
              <Form className="flex min-w-[400px] flex-col gap-2">
                <Input formik={props} name="data" label="Username or Email :" />
                <Input
                  formik={props}
                  name="password"
                  label="Password :"
                  type="password"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-medium tracking-wide text-white hover:bg-accent focus:outline-none focus:ring-4 focus:ring-accent disabled:cursor-not-allowed disabled:bg-accent/90 sm:w-auto"
                >
                  {isLoading ? "Loading..." : "Sign in"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
