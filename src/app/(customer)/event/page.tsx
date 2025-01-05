"use client";

import EventCard from "@/components/events/eventCard";
import EventCardSkeleton from "@/components/events/eventCardSkeleton";
import FilterMenu from "@/components/events/filterMenu";
import Pagination from "@/components/events/pagination";
import MobileNavBar from "@/components/footer/mobileNavBar";
import axios from "@/helpers/axios";
import { IEvent } from "@/types/event";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function EventsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All category");
  const [selectedLocation, setSelectedLocation] =
    useState<string>("All location");

  const fetchEvents = useCallback(async () => {
    setIsLoading(true);
    try {
      const category = searchParams.get("category") || "All category";
      const location = searchParams.get("location") || "All location";
      const params: { category?: string; location?: string; page?: number } = {
        page: currentPage,
      };

      if (category !== "All category") params.category = category;
      if (location !== "All location") params.location = location;

      const { data } = await axios.get("/events", { params });
      setEvents(data.events);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Failed to fetch events", error);
    } finally {
      setIsLoading(false);
    }
  }, [searchParams, currentPage]);

  const updateQueryParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "All category" || value === "All location") {
        params.delete(name);
      } else {
        params.set(name, value!);
      }
      router.replace(pathname + "?" + params.toString());
    },
    [router, pathname, searchParams],
  );

  useEffect(() => {
    fetchEvents();
  }, [searchParams, currentPage, fetchEvents]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateQueryParams("category", category);
    setCurrentPage(1);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    updateQueryParams("location", location);
    setCurrentPage(1);
  };

  const handleResetFilter = () => {
    setSelectedCategory("All category");
    setSelectedLocation("All location");
    router.replace(pathname);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col pb-24 lg:flex-row">
      <FilterMenu
        selectedCategory={selectedCategory}
        selectedLocation={selectedLocation}
        onCategoryChange={handleCategoryChange}
        onLocationChange={handleLocationChange}
        onResetFilter={handleResetFilter}
      />
      <div className="lg:flex lg:flex-col">
        {isLoading ? (
          <div className="grid w-full grid-cols-1 gap-x-5 gap-y-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
            {Array.from({ length: 12 }).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="mx-auto my-40 flex items-center justify-center p-10 lg:my-0">
            <p className="text-lg font-medium">
              No match found for the selected filters or no upcoming matches.
            </p>
          </div>
        ) : (
          <div className="relative">
            <EventCard events={events} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>

      <MobileNavBar />
    </div>
  );
}
