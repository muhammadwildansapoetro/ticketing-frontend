import { IReview } from "@/types/review";

export default function calculateReviews(reviews: IReview[]) {
  if (!reviews || reviews.length === 0)
    return { averageRating: 0, totalReviews: 0 };

  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = (totalRating / totalReviews).toFixed(1);

  return { averageRating, totalReviews };
}
