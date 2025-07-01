// components/SearchTrip.tsx
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@radix-ui/react-select";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchTrip = () => {
  const [seatCount, setSeatCount] = useState(1);
  const cities = [
    "Mandalay",
    "Yangon",
    "NayPyiTaw",
    "PyinOoLwin",
    "MyitKyiNa",
    "Taunggyi",
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Search Trip</h2>
      <form className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* From City */}
        <Select>
          <SelectTrigger className="w-full border p-2 rounded">
            <SelectValue placeholder="From" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* To City */}
        <Select>
          <SelectTrigger className="w-full border p-2 rounded">
            <SelectValue placeholder="To" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Departure Date */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              Departure Date
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white p-4 rounded shadow max-w-sm">
            <h3 className="text-lg font-medium mb-2">Choose the date</h3>
            {/* Calendar component should go here */}
            <div className="h-48 border border-dashed rounded p-4 text-center text-gray-500">
              Calendar goes here
            </div>
          </DialogContent>
        </Dialog>

        {/* Seat Count */}
        <div className="flex items-center justify-between border rounded px-2">
          <Button
            variant="ghost"
            onClick={() => setSeatCount(Math.max(1, seatCount - 1))}
          >
            -
          </Button>
          <Input
            value={`${seatCount} seats`}
            readOnly
            className="w-20 text-center border-none"
          />
          <Button variant="ghost" onClick={() => setSeatCount(seatCount + 1)}>
            +
          </Button>
        </div>

        {/* Search Button */}
        <Button className="w-full">Search Now</Button>
      </form>
    </div>
  );
};
