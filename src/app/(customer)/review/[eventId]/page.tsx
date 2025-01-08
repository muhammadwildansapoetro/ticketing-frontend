import RatingStar from "@/components/review/ratingStar";
import ReviewSubmission from "@/components/review/reviewSubmisson";
import DateFormatter from "@/helpers/dateFormatter";
import formatDate from "@/helpers/formatDate";
import TimeFormatter from "@/helpers/timeFormatter";
import { getEventDetail } from "@/libs/event";
import { getReviews } from "@/libs/review";
import { IEvent } from "@/types/event";
import { IReview } from "@/types/review";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default async function EventReviewPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event: IEvent = await getEventDetail(params.eventId);
  const reviews: IReview[] = await getReviews(params.eventId);

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews
        ).toFixed(1)
      : 0;

  return (
    <div className="container mx-auto pb-96 lg:px-20 lg:pt-5">
      <h1 className="hidden text-center text-2xl font-bold lg:block lg:text-3xl">
        Match Review and Rating
      </h1>

      <div className="flex flex-col gap-5 lg:mt-5 lg:flex-row">
        <div className="flex basis-2/3 flex-col justify-center rounded-lg lg:border lg:border-gray-100 lg:p-5 lg:shadow-lg">
          <div className="flex flex-col justify-center gap-5 lg:flex-row">
            <div className="w-full basis-3/5 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                height={1000}
                width={1000}
                className="lg:rounded-xl"
              />
            </div>

            <div className="flex basis-2/5 flex-col px-5 lg:px-0">
              <div className="mt-3 text-2xl font-bold">{event.title}</div>

              <div className="mt-2 flex items-center gap-2">
                <FaCalendarAlt className="text-accent" size={18} />
                <div className="text-lg">{DateFormatter(event.date)}</div>
              </div>

              <div className="flex items-center gap-2">
                <IoTime className="text-accent" size={20} />
                <div className="text-lg">
                  {TimeFormatter(event.startTime)} -{" "}
                  {TimeFormatter(event.endTime)} WIB
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaLocationDot className="text-accent" size={19} />
                <div className="text-lg">
                  {event.venue}, {event.location}
                </div>
              </div>

              <div className="mt-4 w-fit bg-accent px-3 text-lg font-bold text-white">
                Average rating: {averageRating}/5
              </div>
              <div className="mt-2 w-fit bg-accent px-3 text-lg font-bold text-white">
                Total review: {totalReviews}
              </div>
            </div>
          </div>

          <div className="mt-5 border border-t-accent/10" />

          <div>
            {reviews.length ? (
              reviews.map((review, index) => {
                return (
                  <div
                    key={index}
                    className="mx-5 border-b border-gray-300 py-5"
                  >
                    <div className="mb-2 font-bold">
                      {review.customer.fullname}{" "}
                      <span className="ml-2 text-xs text-gray-500">
                        {formatDate(review.createdAt)}
                      </span>
                    </div>
                    <RatingStar rating={review.rating} />
                    <div className="my-1 text-lg">
                      &quot;{review.review}&quot;
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="mx-5">No reviews and ratings yet</div>
            )}
          </div>
        </div>

        <ReviewSubmission reviews={reviews} eventId={params.eventId} />
      </div>
    </div>
  );
}
