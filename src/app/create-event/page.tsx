"use client";

import React, { useEffect, useState } from "react";
import { IEventInput } from "@/types/event";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { revalidate } from "@/libs/action";
import { useRouter } from "next/navigation";
import { ImageForm } from "@/components/create-event-page/imageForm";
import RichTextEditor from "@/components/create-event-page/richTextEditor";
import EventForm from "@/components/create-event-page/eventForm";

export const eventSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  location: Yup.string().required("Location is required"),
  venue: Yup.string().required("Venue is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
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
  time: "",
  location: "",
  venue: "",
  description: "",
};

export default function CreateMatchForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const onCreate = async (data: IEventInput) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      for (let key in data) {
        const item = data[key as keyof IEventInput];
        if (item) {
          formData.append(key, item);
        }
      }
      const res = await fetch("http://localhost:8000/api/events", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      revalidate("events");
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-[1200px] items-center rounded-lg border p-5 shadow-xl lg:my-10">
      <Formik
        initialValues={initialValues}
        validationSchema={eventSchema}
        onSubmit={(values, actions) => {
          onCreate(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          return (
            <Form className="flex w-full flex-col gap-3">
              <div>
                <h1 className="my-2 text-2xl font-bold lg:text-4xl">
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
                  htmlFor="content"
                  className="mb-2 block font-medium text-gray-700 lg:text-lg"
                >
                  Description
                </label>
                <RichTextEditor setFieldValue={props.setFieldValue} />
                <ErrorMessage
                  name="content"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>

              <div className="flex lg:justify-start">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-accent px-4 py-3 text-[#f5f5f7] hover:bg-accent/90 disabled:cursor-not-allowed lg:w-fit"
                >
                  {`${isLoading ? "Loading..." : "Create Match"}`}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
