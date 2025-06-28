import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CitySelect from "./CitySelect";
import DatePicker from "./DatePicker";
import SeatCounter from "./SeatCounter";
import { trips } from "@/mock/trips";

// Extract unique cities
const departureCities = Array.from(new Set(trips.map((t) => t.source)));
const arrivalCities = Array.from(new Set(trips.map((t) => t.destination)));

export default function SearchForm() {
  const [departure, setDeparture] = useState(departureCities[0]);
  const [arrival, setArrival] = useState(arrivalCities[0]);
  const [seatCount, setSeatCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
          cities={arrivalCities}
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
