"use client";

import { Input } from "@/components/form/input";
import { useSession } from "@/context/useSession";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  data: Yup.string().required("username or email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimum")
    .required("password is required"),
});

interface FormValues {
  data: string;
  password: string;
}

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuth, setCustomer } = useSession();
  const router = useRouter();
  const initialValue: FormValues = {
    data: "",
    password: "",
  };

  const handleLogin = async (customer: FormValues) => {
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
    <div className="mt-6 flex justify-center p-5">
      <div>
        <h1 className="my-5 text-3xl font-bold">Login Form</h1>
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
              <Form className="flex min-w-[400px] flex-col gap-2">
                <Input formik={props} name="data" label="Username Or Email :" />
                <Input
                  formik={props}
                  name="password"
                  label="Password :"
                  type="password"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-teal-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:cursor-not-allowed disabled:bg-teal-300 sm:w-auto"
                >
                  {isLoading ? "Loading ..." : "Login"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
