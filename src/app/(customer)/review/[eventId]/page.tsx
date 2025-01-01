import ReviewForm from "@/components/review/reviewForm";
import DateFormatter from "@/helpers/dateFormatter";
import formatDate from "@/helpers/formatDate";
import TimeFormatter from "@/helpers/timeFormatter";
import { getEventDetail } from "@/libs/event";
import { getReviews } from "@/libs/review";
import { IEvent } from "@/types/event";
import { IReview } from "@/types/review";
import Image from "next/image";

export default async function EventReviewPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event: IEvent = await getEventDetail(params.eventId);
  const reviews: IReview[] = await getReviews(params.eventId);

  return (
    <div className="container mx-auto pb-96 lg:px-20 lg:pt-5">
      <h1 className="hidden text-center text-2xl font-bold lg:block lg:text-3xl">
        Match Review and Rating
      </h1>

      <div className="flex flex-col gap-5 lg:mt-5 lg:flex-row">
        <div className="flex basis-2/3 flex-col justify-center rounded-lg lg:border lg:border-gray-100 lg:p-5 lg:shadow-lg">
          <div className="flex flex-col justify-center gap-5 lg:flex-row">
            <div className="aspect-video w-[500px] overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                height={1000}
                width={1000}
                className="lg:rounded-xl"
              />
            </div>

            <div className="flex flex-col px-5 lg:px-0">
              <div className="mt-3 text-2xl font-bold">{event.title}</div>
              <div className="mt-2 text-lg">{DateFormatter(event.date)}</div>
              <div className="text-lg">
                {TimeFormatter(event.startTime)} -{" "}
                {TimeFormatter(event.endTime)} WIB
              </div>
              <div className="text-lg">
                {event.venue}, {event.location}
              </div>
            </div>
          </div>

          <div className="my-5 border border-t-accent/10" />

          <div>
            {reviews.length &&
              reviews.map((review, index) => {
                return (
                  <div
                    key={index}
                    className="border-b border-gray-300 p-5 pb-5"
                  >
                    <div className="font-bold">{review.customer.fullname}:</div>
                    <div className="my-1 text-lg">
                      &quot;{review.review}&quot;
                    </div>
                    <div className="text-sm">
                      On {formatDate(review.createdAt)}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="basis-1/3">
          <ReviewForm eventId={params.eventId} />
        </div>
      </div>
    </div>
  );
}
