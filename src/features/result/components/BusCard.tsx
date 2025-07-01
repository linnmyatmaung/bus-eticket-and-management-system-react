// components/BusCard.tsx
import { Button } from "@/components/ui/button";

export type BusCardProps = {
  departure_time: string;
  source: string;
  destination: string;
  operator_image: string;
  operator_name: string;
  bus_type: string;
  available_seats: number;
  price: number;
  seat_count: number;
};

export const BusCard = ({
  departure_time,
  source,
  destination,
  operator_image,
  operator_name,
  bus_type,
  available_seats,
  price,
  seat_count,
}: BusCardProps) => {
  const total = price * seat_count;

  return (
    <div className="border p-4 rounded shadow-sm mb-4 bg-white">
      <div className="flex flex-wrap justify-between items-center mb-2 gap-4">
        <div>
          <p className="font-semibold">{departure_time}</p>
          <small>
            {source} - {destination}
          </small>
        </div>

        <p>{bus_type}</p>

        <p className="hidden sm:block">Available seats: {available_seats}</p>

        <div className="text-right">
          <p className="font-medium">MMK {total.toLocaleString()}</p>
          <small>
            {seat_count} seat{seat_count > 1 ? "s" : ""} x{" "}
            {price.toLocaleString()}
          </small>
        </div>

        <Button>Choose Seats</Button>
      </div>

      <div className="flex flex-wrap mt-2 text-sm text-gray-600 items-center">
        <img
          src={operator_image}
          alt={operator_name}
          className="w-16 h-10 object-contain"
        />
        <div className="w-full sm:w-1/3 ml-2">⭐️⭐️⭐️½☆</div>
        <div className="w-full sm:w-1/3 text-red-600">
          * Please bring your NRC — * Foreigner Not Allowed
        </div>
      </div>
    </div>
  );
};
