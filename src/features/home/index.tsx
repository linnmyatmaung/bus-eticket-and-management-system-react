"use client";

import { useEffect, useState } from "react";
import { trips } from "@/mock/trips";
import type { Trip } from "@/types/trip";

import Loading from "@/components/loading";
import Showcase from "./components/ShowCase";
import ReviewSection from "./components/ReviewSection";
import PartnerSection from "./components/PartnerSection";
import PopularRoutes from "./components/PopularRoute";
import { FaqSection } from "./components/FaqSection";

export default function Home() {
  const [trip, setTrip] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrip(trips); // Load mock data after delay
      setIsLoading(false);
    }, 3000); // 3-second delay

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Showcase />
      <ReviewSection />
      <PartnerSection />
      <PopularRoutes />
      <FaqSection />
    </>
  );
}
