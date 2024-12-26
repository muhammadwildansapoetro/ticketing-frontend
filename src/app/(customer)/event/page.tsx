"use client";

import EventCard from "@/components/events/eventCard";
import FilterMenu from "@/components/events/filterMenu";
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All category",
  ]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([
    "All location",
  ]);
  const [isMounted, setIsMounted] = useState(false);

  const fetchEvents = useCallback(async () => {
    try {
      const category = searchParams.get("category") || "All category";
      const location = searchParams.get("location") || "All location";
      const params: { category?: string; location?: string } = {};

      if (category !== "All category") params.category = category;
      if (location !== "All location") params.location = location;

      const { data } = await axios.get("/events", { params });
      setEvents(data.events);
    } catch (error) {
      console.log("Failed to fetch events", error);
    }
  }, [searchParams]);

  const updateQueryParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "All category" || value === "All location") {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      router.push(pathname + "?" + params.toString());
    },
    [router, pathname, searchParams],
  );

  useEffect(() => {
    if (isMounted) {
      fetchEvents();
    } else {
      setIsMounted(true);
    }
  }, [searchParams, isMounted, fetchEvents]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories([category]);
    updateQueryParams("category", category);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocations([location]);
    updateQueryParams("location", location);
  };

  const handleResetFilter = () => {
    setSelectedCategories(["All category"]);
    setSelectedLocations(["All location"]);
    router.push(pathname);
  };

  return (
    <div className="flex flex-col pb-24 lg:flex-row lg:pb-0">
      <FilterMenu
        selectedCategories={selectedCategories}
        selectedLocations={selectedLocations}
        onCategoryChange={handleCategoryChange}
        onLocationChange={handleLocationChange}
        onResetFilter={handleResetFilter}
      />
      <div className="lg:flex lg:flex-col">
        <EventCard events={events} />
      </div>
      <MobileNavBar />
    </div>
  );
}
