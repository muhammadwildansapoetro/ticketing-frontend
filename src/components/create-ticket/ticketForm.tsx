"use client";

import useToggle from "@/hooks/useToggle";
import { ITicketInput } from "@/types/ticket";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import RichTextEditor from "../create-event/richTextEditor";
import { useRouter } from "next/navigation";
import { revalidate } from "@/libs/action";

export const ticketSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  price: Yup.number().required("Location is required"),
  quantity: Yup.number().required("Venue is required"),
  description: Yup.string().required("Description is required"),
});

const initialValues: ITicketInput = {
  category: "",
  price: "",
  quantity: "",
  description: "",
};

const base_url_be = process.env.NEXT_PUBLIC_BASE_URL_BE;

export default function CreateTicketForm({ eventId }: { eventId: string }) {
  const { isOpen, handleToggle } = useToggle();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const onCreate = async (ticket: ITicketInput) => {
    try {
      setIsLoading(true);

      const res = await fetch(`${base_url_be}/tickets/${eventId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });

      console.log(JSON.stringify(ticket));

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create ticket");
      }

      await revalidate("tickets");
      toast.success(data.message);
      router.push(`/create-event/ticket/${eventId}`);
    } catch (error) {
      console.error("Error creating ticket:", error);
      toast.error("Error creating ticket");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <button
        onClick={handleToggle}
        className="mt-5 rounded-lg border border-accent bg-accent px-3 py-2 text-white hover:bg-accent/90"
      >
        Add ticket
      </button>

      {/* Create ticket form */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleToggle}
          ></div>

          <div className="fixed z-30 mx-auto flex max-w-fit items-center justify-center rounded-lg border border-accent/50 bg-white p-5 shadow-xl lg:my-5">
            <Formik
              initialValues={initialValues}
              validationSchema={ticketSchema}
              onSubmit={(values, actions) => {
                onCreate(values);
                actions.resetForm();
                handleToggle();
                router.refresh();
              }}
            >
              {(props) => {
                console.log(props.values);

                return (
                  <Form className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-2xl font-bold lg:text-4xl">
                      Create Match Ticket
                    </h1>

                    <div className="flex w-full flex-col items-start justify-center">
                      <label
                        htmlFor="category"
                        className="mb-2 block font-medium text-gray-900 lg:text-lg"
                      >
                        Category
                      </label>
                      <Field
                        name="category"
                        as="select"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 outline-none focus:border-accent focus:ring-accent"
                      >
                        <option value="">Choose category</option>
                        <option value="North">North Stand</option>
                        <option value="East">East Stand</option>
                        <option value="South">South Stand</option>
                        <option value="West">West Stand</option>
                      </Field>
                      <ErrorMessage
                        name="category"
                        component="span"
                        className="text-red-500"
                      />
                    </div>

                    <div className="flex w-full flex-col items-start justify-center">
                      <label
                        htmlFor="price"
                        className="mb-2 block font-medium text-gray-900 lg:text-lg"
                      >
                        Price
                      </label>
                      <Field
                        name="price"
                        type="number"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] outline-none focus:border-accent focus:ring-accent"
                      />
                      <ErrorMessage
                        name="price"
                        component="span"
                        className="text-red-500"
                      />
                    </div>

                    <div className="flex w-full flex-col items-start justify-center">
                      <label
                        htmlFor="quantity"
                        className="mb-2 block font-medium text-gray-900 lg:text-lg"
                      >
                        Quantity
                      </label>
                      <Field
                        name="quantity"
                        type="number"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] outline-none focus:border-accent focus:ring-accent"
                      />
                      <ErrorMessage
                        name="quantity"
                        component="span"
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="mb-2 block font-medium text-gray-700 lg:text-lg"
                      >
                        Description
                      </label>
                      <RichTextEditor setFieldValue={props.setFieldValue} />
                      <ErrorMessage
                        name="description"
                        component="span"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="mt-2 flex lg:justify-end">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full rounded-lg bg-accent px-4 py-3 text-[#f5f5f7] hover:bg-accent/90 disabled:cursor-not-allowed lg:w-fit"
                      >
                        {`${isLoading ? "Creating ticket..." : "Create ticket"}`}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </>
      )}
    </div>
  );
}
