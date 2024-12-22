"use client";

import React, { useState } from "react";
import { IEventInput } from "@/types/event";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ImageForm } from "@/components/create-event/imageForm";
import RichTextEditor from "@/components/create-event/richTextEditor";
import EventForm from "@/components/create-event/eventForm";
import axios from "@/helpers/axios";

export const eventSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  location: Yup.string().required("Location is required"),
  venue: Yup.string().required("Venue is required"),
  date: Yup.string().required("Date is required"),
  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string().required("End time is required"),
  image: Yup.mixed<File>()
    .required("Image is required")
    .test(
      "fileSize",
      "Maximum file size is 2 mb",
      (value) =>
        !value || (value instanceof File && value.size <= 2 * 1024 * 1024),
    )
    .test(
      "fileType",
      "Unsupported file formats (only accept .jpeg, .png, .jpg, .webp)",
      (value) =>
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(
            value.type,
          )),
    ),
});

const initialValues: IEventInput = {
  image: "",
  title: "",
  category: "",
  date: "",
  startTime: "",
  endTime: "",
  location: "",
  venue: "",
  description: "",
};

export default function CreateMatchPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const onCreate = async (event: IEventInput) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      for (const key in event) {
        const value = event[key as keyof IEventInput];
        if (value) {
          formData.append(key, value);
        }
      }
      const { data } = await axios.post("/events", formData);
      router.push(`/create-event/ticket/${data.eventId}`);
      toast.success(data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center rounded-lg border border-accent/10 p-5 shadow-xl lg:mx-40 lg:my-5">
      <Formik
        initialValues={initialValues}
        validationSchema={eventSchema}
        onSubmit={(values, actions) => {
          onCreate(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          console.log(props.values);

          return (
            <Form className="flex w-full flex-col gap-3">
              <div>
                <h1 className="mb-2 text-2xl font-bold lg:text-3xl">
                  Create Match Form
                </h1>

                <label
                  htmlFor="image"
                  className="mb-2 block font-medium text-gray-900 lg:text-lg"
                >
                  Match Image
                </label>
                <ImageForm name="image" formik={props} />
                <ErrorMessage
                  name="image"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>

              <EventForm />

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
                  {`${isLoading ? "Creating match..." : "Create match"}`}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
