"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SlidingBanner() {
  const images = [
    {
      src: "https://thumbor.prod.vidiocdn.com/N4em_6KPfXGD81bWiZfhKdShICo=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3899717/f0bde1.jpg",
      alt: "banner 1",
    },
    {
      src: "https://thumbor.prod.vidiocdn.com/WQceE6CiJ1es-Nhs08K_wxuZsog=/640x360/filters:strip_icc():quality(70)/vidio-media-production/uploads/livestreaming/schedule/thumbnail/3899349/b24acd.jpg",
      alt: "banner 2",
    },
    {
      src: "https://thumbor.prod.vidiocdn.com/NZGbBaFkvnKAbSl8RTCD2RhEzIY=/744x422/filters:quality(75)/vidio-web-prod-video/uploads/video/image/8454419/ps-barito-putera-vs-persita-full-match-bri-liga-1-2024-25-7da63f.jpg",

      alt: "banner 3",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        ),
      2000,
    );

    return () => resetTimeout();
  }, [currentIndex]);

  return (
    <div className="my-10">
      <h1 className="mb-1 text-center text-2xl font-bold lg:text-3xl">
        Upcoming Match
      </h1>
      <div className="relative mx-auto w-full max-w-md items-center overflow-hidden rounded-xl lg:h-96 lg:max-w-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 w-full flex-shrink-0 lg:h-96"
            >
              <Image
                src={image.src}
                alt={image.src}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
