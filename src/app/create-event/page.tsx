"use client";

import React, { useEffect, useState } from "react";
import { IEventInput } from "@/types/event";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { revalidate } from "@/libs/action";
import { useRouter } from "next/navigation";
import { ImageField } from "@/components/create-event-page/imageField";
import RichTextEditor from "@/components/create-event-page/richTextEditor";

export const blogSchema = Yup.object({
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
  title: "",
  category: "",
  description: "",
  location: "",
  venue: "",
  date: "",
  time: "",
  image: "",
};

export default function CreateMatch() {
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
      const res = await fetch("http://localhost:8000/api/matches", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      revalidate("blogs");
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-[1200px] items-center p-4">
      <Formik
        initialValues={initialValues}
        validationSchema={blogSchema}
        onSubmit={(values, actions) => {
          onCreate(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          return (
            <Form className="flex w-full flex-col gap-3">
              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Match Image
                </label>
                <ImageField name="image" formik={props} />
                <ErrorMessage
                  name="image"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Match Title
                </label>
                <Field
                  name="title"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="title"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Match Category
                </label>
                <Field
                  name="category"
                  as="select"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Choose category</option>
                  <option value="Training">Training</option>
                  <option value="Friendly Match">Friendly Match</option>
                  <option value="League Match">League Match</option>
                  <option value="Championship Match">Championship Match</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Match Location
                </label>
                <Field
                  name="location"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="location"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="venue"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Match Venue
                </label>
                <Field
                  name="venue"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="venue"
                  component="span"
                  className="text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Match Description
                </label>
                <RichTextEditor setFieldValue={props.setFieldValue} />
                <ErrorMessage
                  name="content"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>

              <div className="flex sm:justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-accent py-3 text-[#f5f5f7] hover:bg-[#595959] disabled:cursor-not-allowed"
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
