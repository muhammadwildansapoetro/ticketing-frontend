import React from "react";
import { Field, ErrorMessage, FormikProps } from "formik";

interface InputProps {
  formik: FormikProps<any>;
  name: string;
  label: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({ formik, name, label, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-3 w-full max-w-md">
      <label htmlFor={name} className="text-base font-semibold text-gray-800 md:text-lg">
        {label}
      </label>
      <div className="relative">
        <Field
          id={name}
          name={name}
          type={type}
          className={`w-full px-4 py-3 text-sm md:text-base border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched[name] && formik.errors[name] && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-6 h-6 text-red-500"
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
      <ErrorMessage name={name} component="div" className="text-red-500 text-xs md:text-sm" />
    </div>
  );
};
