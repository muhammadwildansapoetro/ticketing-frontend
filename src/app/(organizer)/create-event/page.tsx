"use client";

import { useState } from "react";
import { IEventInput } from "@/types/event";
import { Formik, ErrorMessage, Form } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ImageForm } from "@/components/create-event/imageForm";
import RichTextEditor from "@/components/create-event/richTextEditor";
import EventForm from "@/components/create-event/eventForm";
import { eventSchema } from "@/schemas/eventSchema";
import Image from "next/image";
import { revalidate } from "@/libs/action";

const initialValues: IEventInput = {
  image: null,
  title: "",
  category: "",
  date: "",
  startTime: "",
  endTime: "",
  location: "",
  venue: "",
  description: "",
};

const base_url_be = process.env.NEXT_PUBLIC_BASE_URL_BE;

export default function CreateMatchPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const onCreate = async (event: IEventInput) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      for (const key in event) {
        const value = event[key as keyof IEventInput];
        if (key === "image" && typeof value === "string") {
          console.error("Image must be a file, not a string!");
        }
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      }

      const res = await fetch(`${base_url_be}/events`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await res.json();

      if (!res.ok) {
        const errorResponse = await res.json();
        console.error("Server error:", errorResponse);
        throw new Error(errorResponse.message || "Failed to create event");
      }

      await revalidate("events");
      toast.success(result.message);
      router.push(`/create-event/ticket/${result.eventId}`);
    } catch (error) {
      console.error("Error details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center lg:my-10 lg:px-20 xl:px-40">
      <div className="hidden lg:block lg:basis-1/2">
        <Image
          src={
            "https://res.cloudinary.com/doiygpguv/image/upload/v1734916284/football-training-facility_qe5lll.png"
          }
          alt="Football training facility"
          width={1000}
          height={1000}
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-center rounded-lg border border-accent/30 p-5 pb-20 shadow-xl lg:basis-1/2 lg:pb-5">
        <Formik<IEventInput>
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
    </div>
  );
}
