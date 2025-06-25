import { Button } from "@/components/ui/button";
import MdyImg from "@/assets/images/mdy.jpg";
import NaypyitawImg from "@/assets/images/naypyitaw.jpeg";
import BaganImg from "@/assets/images/bagan.jpg";
import TaunggyiImg from "@/assets/images/taunggyi.jpg";

const popularRoutes = [
  { id: 1, imgSrc: MdyImg, alt: "Mdy" },
  { id: 2, imgSrc: NaypyitawImg, alt: "Naypyitaw" },
  { id: 3, imgSrc: BaganImg, alt: "Bagan" },
  { id: 4, imgSrc: TaunggyiImg, alt: "Taunggyi" },
];

export default function PopularRoutes() {
  return (
    <div className="container my-5 mb-12 px-4">
      <p className="text-center font-bold text-2xl mb-8 text-[#191970]">
        Most Popular Routes
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {popularRoutes.map(({ id, imgSrc, alt }) => (
          <div key={id} className="text-center">
            <div className="rounded border shadow-lg overflow-hidden inline-block w-3/4 mx-auto">
              <img
                src={imgSrc}
                alt={alt}
                className="object-cover w-full h-auto rounded"
              />
            </div>
            <Button
              variant="softBlue"
              className="mt-2 w-1/2 text-sm py-1 px-3"
              size="sm"
            >
              Check
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
