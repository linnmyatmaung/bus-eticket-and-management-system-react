import { useSearchParams } from "react-router";
import { parseISO } from "date-fns";
import { useState } from "react";
import { TripFilters } from "@/features/result/components/TripFilters";
import { BusCard } from "@/features/result/components/BusCard";
import SearchForm from "@/components/user/search/SearchForm";
import { mockResults } from "@/mock/schedule";
import type { schedule } from "@/types/schedule";

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const source = searchParams.get("source") || undefined;
  const destination = searchParams.get("destination") || undefined;
  const travel_date = searchParams.get("travel_date");
  const seat_count = searchParams.get("seat_count");
  const seatCountInt = seat_count ? parseInt(seat_count) : 1;

  const [departureTime, setDepartureTime] = useState("any");
  const [operator, setOperator] = useState("alloperator");

  const filteredResults = mockResults.filter((bus: schedule) => {
    const operatorMatch =
      operator === "alloperator" ||
      bus.operator_name.replace(/\s+/g, "").toLowerCase() === operator;

    const isAM = bus.departure_time.toLowerCase().includes("am");
    const timeMatch =
      departureTime === "any" ||
      (departureTime === "day" && isAM) ||
      (departureTime === "night" && !isAM);

    return operatorMatch && timeMatch;
  });

  return (
    <div className="container mx-auto mt-6 px-4">
      <div className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md p-6 flex flex-col lg:flex-row gap-6">
        <TripFilters
          departureTime={departureTime}
          operator={operator}
          onDepartureTimeChange={setDepartureTime}
          onOperatorChange={setOperator}
        />

        <div className="flex-1 space-y-4">
          <SearchForm
            initialSource={source}
            initialDestination={destination}
            initialSeatCount={seatCountInt}
            initialDate={travel_date ? parseISO(travel_date) : undefined}
          />

          <div className="h-[500px] overflow-y-auto pr-2 space-y-4">
            {filteredResults.length > 0 ? (
              filteredResults.map((bus, index) => (
                <BusCard key={index} {...bus} seat_count={seatCountInt} />
              ))
            ) : (
              <p className="text-gray-500 text-center mt-8">No trips found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
