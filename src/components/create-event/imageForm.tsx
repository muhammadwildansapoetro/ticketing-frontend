"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FormikProps } from "formik";

interface ImageFieldProps<T> {
  name: string;
  formik: FormikProps<T>;
  className?: string;
}

export const ImageForm = <T extends object>({
  name,
  formik,
  className = "",
}: ImageFieldProps<T>) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      formik.setFieldValue(name, file);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <input
        type="file"
        id={name}
        name={name}
        className="hidden"
        ref={imgRef}
        onChange={handleChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />
      {!previewUrl ? (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-500 p-5 text-center lg:h-fit"
        >
          <div className="text-4xl lg:text-5xl">+</div>
          <h1 className="text-sm font-bold lg:text-xl">Upload match image</h1>
          <p className="px-5 text-sm lg:text-lg">
            File format must be .jpeg / .png / .jpg / .webp and maximum file
            size is 2 mb
          </p>
        </div>
      ) : (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-500 md:h-[150px] md:w-[150px]"
        >
          <Image
            src={previewUrl}
            alt="Preview"
            width={150}
            height={150}
            layout="responsive"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      )}
    </div>
  );
};
