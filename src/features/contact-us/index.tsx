import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import envelopeImage from "@/assets/images/envelope.png"; // make sure your bundler supports this

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <h5 className="text-lg text-muted-foreground">
          Experience the world with us!
        </h5>
      </div>

      <Card className="max-w-5xl mx-auto p-6 md:p-10 rounded-2xl shadow-lg">
        <CardContent className="flex flex-col md:flex-row items-center gap-8">
          {/* Image block */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={envelopeImage}
              alt="Envelope illustration"
              className="rounded-xl object-cover w-3/4 h-auto"
            />
          </div>

          {/* Contact info block */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm text-muted-foreground">
                  University of Technology,
                  <br />
                  Yatanapon Cyber City,
                  <br />
                  Pyin Oo Lwin.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-muted-foreground">09447288860</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">
                  triphub2024@gmail.com
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
