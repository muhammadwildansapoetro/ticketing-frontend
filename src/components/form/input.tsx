import React from "react";
import { Field, ErrorMessage, FormikProps } from "formik";

// Define a generic type for the form values
interface InputProps<T> {
  formik: FormikProps<T>;
  name: keyof T; // Ensure name is a key of the form values
  label: string;
  type?: string;
}

// Use the generic type in the component
export const Input = <T,>({
  formik,
  name,
  label,
  type = "text",
}: InputProps<T>) => {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 md:gap-3">
      <label
        htmlFor={name as string} // Cast to string for the htmlFor attribute
        className="text-base font-semibold text-gray-800 md:text-lg"
      >
        {label}
      </label>
      <div className="relative">
        <Field
          id={name as string} // Cast to string for the id attribute
          name={name}
          type={type}
          className={`w-full rounded-lg border px-4 py-3 text-sm shadow-sm transition-all duration-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 md:text-base ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched[name] && formik.errors[name] && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-6 w-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      <ErrorMessage
        name={name as string}
        component="div"
        className="text-xs text-red-500 md:text-sm"
      />
    </div>
  );
};
