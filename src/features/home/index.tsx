"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import Showcase from "./components/ShowCase";
import ReviewSection from "./components/ReviewSection";
import PartnerSection from "./components/PartnerSection";
import PopularRoutes from "./components/PopularRoute";
import { FaqSection } from "./components/FaqSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
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
