"use client";

import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/create-event/richTextEditor";
import axios from "@/helpers/axios";
import { ITicket } from "@/types/ticket";
import useToggle from "@/hooks/useToggle";

export const ticketSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  price: Yup.number().required("Location is required"),
  quantity: Yup.number().required("Venue is required"),
  description: Yup.string().required("Description is required"),
});

const initialValues: ITicket = {
  category: "",
  price: 0,
  quantity: 0,
  description: "",
};

export default function CreateTicket({
  params,
}: {
  params: { eventId: string };
}) {
  const { isOpen, handleToggle } = useToggle();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const onCreate = async (ticket: ITicket) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`/tickets/${params.eventId}`, ticket);
      router.push(`/create-event/${params.eventId}`);
      toast.success(data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleToggle}
        className="mt-10 rounded-lg bg-accent px-3 py-2 text-white hover:bg-accent/90"
      >
        Add ticket
      </button>

      {isOpen && (
        <div className="mx-auto flex max-w-fit items-center justify-center rounded-lg border border-accent/50 p-5 shadow-xl lg:my-5">
          <Formik
            initialValues={initialValues}
            validationSchema={ticketSchema}
            onSubmit={(values, actions) => {
              onCreate(values);
              actions.resetForm();
            }}
          >
            {(props) => {
              console.log(props.values);

              return (
                <Form className="flex flex-col items-center justify-center gap-3">
                  <h1 className="text-2xl font-bold lg:text-4xl">
                    Ticket Match Form
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
                      <option value="VIP">VIP</option>
                      <option value="Regular">Regular</option>
                      <option value="Free">Free</option>
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
                      name="availableSeat"
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
      )}
    </div>
  );
}
