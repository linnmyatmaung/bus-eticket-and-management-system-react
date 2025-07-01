import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CitySelect from "./CitySelect";
import DatePicker from "./DatePicker";
import SeatCounter from "./SeatCounter";
import { trips } from "@/mock/trips";
import { format } from "date-fns";

interface SearchFormProps {
  initialSource?: string;
  initialDestination?: string;
  initialSeatCount?: number;
  initialDate?: Date;
}
const departureCities = Array.from(new Set(trips.map((t) => t.source)));
const arrivalCities = Array.from(new Set(trips.map((t) => t.destination)));

export default function SearchForm({
  initialSource,
  initialDestination,
  initialSeatCount = 1,
  initialDate = new Date(),
}: SearchFormProps) {
  const [departure, setDeparture] = useState(
    initialSource || departureCities[0]
  );
  const [arrival, setArrival] = useState(
    initialDestination || arrivalCities[0]
  );
  const [seatCount, setSeatCount] = useState(initialSeatCount);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    initialDate
  );

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Please select a travel date");
      return;
    }

    const queryParams = new URLSearchParams({
      source: departure,
      destination: arrival,
      travel_date: format(selectedDate, "yyyy-MM-dd"),
      seat_count: seatCount.toString(),
    });

    navigate(`/schedule/search?${queryParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <CitySelect
          label="Departure"
          value={departure}
          onChange={setDeparture}
          cities={departureCities}
        />
        <CitySelect
          label="Arrival"
          value={arrival}
          onChange={setArrival}
          cities={arrivalCities.filter((city) => city !== departure)}
        />

        <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
        <SeatCounter count={seatCount} setCount={setSeatCount} />
        <div className="flex items-end">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full"
          >
            <Button
              type="submit"
              className="w-full bg-[#191970] text-white hover:bg-[#151552] py-3"
            >
              Search Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </form>
  );
}
