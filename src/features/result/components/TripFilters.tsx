// components/TripFilters.tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type TripFiltersProps = {
  departureTime: string;
  operator: string;
  onDepartureTimeChange: (value: string) => void;
  onOperatorChange: (value: string) => void;
};

export const TripFilters = ({
  departureTime,
  operator,
  onDepartureTimeChange,
  onOperatorChange,
}: TripFiltersProps) => {
  return (
    <aside className="hidden lg:block w-64 p-4 border rounded bg-white">
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Departure Time</h4>
        <RadioGroup
          value={departureTime}
          onValueChange={onDepartureTimeChange}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="any" id="any" />
            <Label htmlFor="any">Any Time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="day" id="day" />
            <Label htmlFor="day">Day Time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="night" id="night" />
            <Label htmlFor="night">Night Time</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Bus Operator</h4>
        <RadioGroup
          value={operator}
          onValueChange={onOperatorChange}
          className="space-y-2"
        >
          {[
            "All Operator",
            "JJ Express",
            "Myat Mandalar Tun",
            "Mandalar Min",
            "Shwe Mandalay",
            "High Class",
            "Shwe Zin",
            "MenYaZar",
          ].map((op) => {
            const id = op.replace(/\s+/g, "").toLowerCase();
            return (
              <div key={id} className="flex items-center space-x-2">
                <RadioGroupItem value={id} id={id} />
                <Label htmlFor={id}>{op}</Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </aside>
  );
};
