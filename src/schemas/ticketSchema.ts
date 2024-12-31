import * as Yup from "yup";

export const ticketSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  price: Yup.number().required("Location is required"),
  quantity: Yup.number().required("Venue is required"),
  description: Yup.string().required("Description is required"),
  discountPercentage: Yup.number()
    .min(1, "Discount must be greater than 0%")
    .max(100, "Discount cannot be more than 100%"),
  discountStartDate: Yup.string().nullable(),
  discountEndDate: Yup.string().nullable(),
});
