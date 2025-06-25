import jj from "@/assets/images/jj.png";
import myatmandalarhtun from "@/assets/images/myatmandalarhtun.png";
import shwesinsatkyar from "@/assets/images/shwesinsatkyar.png";
import shwekachin from "@/assets/images/shwekachin.png";
import highclass from "@/assets/images/highclass.png";
import elite from "@/assets/images/elite.png";
import mandalarmin from "@/assets/images/mandalarmin.png";
import famous from "@/assets/images/famous.png";
import shanthitsar from "@/assets/images/shanthitsar.png";
import khaingmandalay from "@/assets/images/Khaing_Mandalay.png";
import shwemandalar from "@/assets/images/Shwe_Mandalar.png";

const partners = [
  { src: jj, alt: "jjexpress" },
  { src: myatmandalarhtun, alt: "myatmandalarhtun" },
  { src: shwesinsatkyar, alt: "shwesinsatkyar" },
  { src: shwekachin, alt: "shwekachin" },
  { src: highclass, alt: "highclass" },
  { src: jj, alt: "jjexpress" },
  { src: elite, alt: "elite" },
  { src: mandalarmin, alt: "mandalarmin" },
  { src: famous, alt: "famous" },
  { src: shanthitsar, alt: "shanthitsar" },
  { src: khaingmandalay, alt: "khaingmandalay" },
  { src: shwemandalar, alt: "shwemandalar" },
];

export default function PartnerSection() {
  return (
    <section className="py-3">
      <p className="text-center font-bold text-2xl mb-8 text-[#191970]">
        Our Partner Include
      </p>
      <div className="mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-3/4 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
