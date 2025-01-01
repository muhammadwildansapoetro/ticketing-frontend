"use client";

import axios from "@/helpers/axios";
import { reviewSchema } from "@/schemas/reviewSchema";
import { IFormReview } from "@/types/review";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ReviewForm({ eventId }: { eventId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const initialValues: IFormReview = {
    rating: 0,
    review: "",
  };

  const handleAddReview = async (review: IFormReview) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await axios.post(`/reviews/${eventId}`, review, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success(data.message);
      router.push(`/review/${eventId}`);
    } catch (error) {
      console.log("Error add review", error);
      toast.error("Error add review");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-5 lg:border lg:border-gray-100 lg:shadow-lg">
      <h2 className="mb-4 text-xl font-semibold">Submit Your Review</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={reviewSchema}
        onSubmit={(values, action) => {
          handleAddReview(values);
          action.resetForm();
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Match Rating
              </label>
              <div
                role="group"
                aria-labelledby="rating-group"
                className="mt-2 flex space-x-4"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <label
                    key={star}
                    className="flex cursor-pointer items-center"
                  >
                    <Field
                      type="radio"
                      name="rating"
                      value={star}
                      onChange={() => setFieldValue("rating", star)}
                      className="hidden"
                    />
                    <FaStar
                      className={`h-8 w-8 transition-colors duration-200 ${
                        star <= values.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="review"
                className="block text-lg font-medium text-gray-700"
              >
                Match Review
              </label>
              <Field
                as="textarea"
                id="review"
                name="review"
                placeholder="Provide feedback on your experience, event quality, and suggestions for improvement"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-accent"
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full rounded-md px-4 py-2 font-semibold text-white focus:outline-none ${
                isLoading
                  ? "bg-accent/90 disabled:cursor-not-allowed"
                  : "bg-accent hover:bg-accent/90"
              }`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
