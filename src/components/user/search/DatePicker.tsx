import { useState } from "react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";

interface DatePickerProps {
  selectedDate: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

export default function DatePicker({
  selectedDate,
  onChange,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    onChange(date);
    setOpen(false);
  };

  return (
    <div className="relative">
      <Input
        readOnly
        value={selectedDate ? format(selectedDate, "PPP") : ""}
        onClick={() => setOpen((prev) => !prev)}
        placeholder="Departure"
        className="cursor-pointer"
      />
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 mt-2 bg-white border rounded-md shadow-md"
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            fromDate={new Date()}
            className="rounded-md"
            initialFocus
          />
        </motion.div>
      )}
    </div>
  );
}
