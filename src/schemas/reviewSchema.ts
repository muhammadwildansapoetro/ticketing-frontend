import * as Yup from "yup";

export const reviewSchema = Yup.object({
  rating: Yup.number()
    .oneOf([1, 2, 3, 4, 5], "Rating must be between 1 and 5")
    .required("Rating is required"),
  review: Yup.string().required("Review is required"),
});
