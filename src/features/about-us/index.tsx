import React from "react";
import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-xl border-none bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-8">
              About Us
            </h2>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                About Trip Hub
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Trip Hub is your ultimate travel companion, offering
                personalized itineraries, curated experiences, and seamless
                booking services. Whether you're exploring new destinations or
                revisiting favorites, Trip Hub connects you with local experts,
                exclusive deals, and tailored recommendations—ensuring every
                journey is memorable, stress-free, and exactly what you
                envision.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                Instant Confirmation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Trip Hub is the only travel platform in Myanmar providing
                instant confirmation for your bus ticket purchases. We partner
                with all the leading bus operators for a seamless booking
                experience. No delays, no hassle—just quick and secure bookings.
              </p>
            </section>

            <Separator className="my-6" />

            <section>
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                Payment Options
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Trip Hub accepts several payment methods. You can pay with
                KBZBanking, KBZPay, WaveMoney, and AYAPay.
              </p>
            </section>

            <div className="mt-10 text-center">
              <Link to="/">
                <Button
                  variant="outline"
                  className="text-slate-700 hover:text-white hover:bg-slate-700 transition-all rounded-full px-6 py-2"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back To Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
