import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SeatCounterProps {
  count: number;
  setCount: (count: number) => void;
}

export default function SeatCounter({ count, setCount }: SeatCounterProps) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          type="button"
          onClick={() => setCount(Math.max(1, count - 1))}
          className="px-3 py-2"
        >
          -
        </Button>
        <Input
          readOnly
          value={`${count} seat${count > 1 ? "s" : ""}`}
          className="w-24 text-center"
        />
        <Button
          variant="outline"
          type="button"
          onClick={() => setCount(count + 1)}
          className="px-3 py-2"
        >
          +
        </Button>
      </div>
    </div>
  );
}
