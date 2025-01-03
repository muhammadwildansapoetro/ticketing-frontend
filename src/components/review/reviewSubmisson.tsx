"use client";

import { useSession } from "@/context/useSession";
import { IReview } from "@/types/review";
import ReviewForm from "./reviewForm";

interface ReviewSubmissionProps {
  eventId: string;
  reviews: IReview[];
}

export default function ReviewSubmission({
  eventId,
  reviews,
}: ReviewSubmissionProps) {
  const { customer } = useSession();
  const hasSubmittedReview = reviews.some(
    (review) => review.customer.id === customer?.id,
  );

  return (
    <div className="basis-1/3">
      {customer ? (
        hasSubmittedReview ? (
          <div className="text-lg font-medium text-accent">
            You have already submitted a review for this event.
          </div>
        ) : (
          <ReviewForm eventId={eventId} />
        )
      ) : (
        <div className="text-lg font-medium">
          Only customers can submit reviews.
        </div>
      )}
    </div>
  );
}
