"use client";

import { getEvents } from "@/libs/event";
import { IEvent } from "@/types/event";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TbSoccerField } from "react-icons/tb";

export default function SlidingBanner() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data: { events: IEvent[] } = await getEvents();
        const fetchedImages = data.events.map((event) => ({
          src: event.image,
          alt: event.title,
        }));
        setImages(fetchedImages);
      } catch (error) {
        console.log("Error fetching events", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        ),
      2000,
    );

    return () => resetTimeout();
  }, [currentIndex, images]);

  return (
    <div className="container mx-auto mt-10">
      <div className="relative mx-auto aspect-video max-w-3xl items-center overflow-hidden rounded-xl border border-red-500">
        {images.length > 0 ? (
          <div
            className="flex border border-blue-500 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="h-[276px] w-[1244px]">
                <Image
                  src={image.src}
                  alt={image.src}
                  width={1000}
                  height={1000}
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="animate-bounce">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-accent">
                <TbSoccerField className="h-8 w-8" />
                MatchTix
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
