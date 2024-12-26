"use client";

import { Input } from "@/components/form/input";
import { useSession } from "@/context/useSession";
import { Form, Formik, FormikProps } from "formik";
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_BE!}/auth/customer/sign-in`, {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await res.json();
      if (!res.ok) throw result;
      localStorage.setItem("token", result.token)
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
    <div className="flex justify-center p-5 mt-6">
      <div>
        <h1 className="text-3xl font-bold my-5">Login Form</h1>
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
              <Form className="flex flex-col gap-2 min-w-[400px]">
                <Input
                  formik={props}
                  name="data"
                  label="Username Or Email :"
                />
                <Input
                  formik={props}
                  name="password"
                  label="Password :"
                  type="password"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="text-white disabled:bg-teal-300 disabled:cursor-not-allowed bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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