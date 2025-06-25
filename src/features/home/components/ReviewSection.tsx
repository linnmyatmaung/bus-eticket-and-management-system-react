// components/ReviewSection.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaTags, FaTicketAlt, FaComments } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";

const reviews = [
  {
    icon: (
      <FaTags className="text-3xl mb-3 text-center mx-auto text-indigo-600" />
    ),
    title: "Best Prices",
    description:
      "We find the best express tickets, so you can wander for best and less.",
  },
  {
    icon: (
      <FaTicketAlt className="text-3xl mb-3 text-center mx-auto text-indigo-600" />
    ),
    title: "Best Travel Options",
    description:
      "We partner with 9 operators to bring you the most express options.",
  },
  {
    icon: (
      <FaRegCreditCard className="text-3xl mb-3 text-center mx-auto text-indigo-600" />
    ),
    title: "Quick & Easy Purchasing",
    description:
      "Purchase tickets quickly with a simple, hassle-free checkout - on our website.",
  },
  {
    icon: (
      <FaComments className="text-3xl mb-3 text-center mx-auto text-indigo-600" />
    ),
    title: "Fast Customer Support",
    description:
      "We don't monkey around. We respond within minutes to help you out.",
  },
];

export default function ReviewSection() {
  return (
    <section className="container mx-auto px-4 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, idx) => (
          <Card key={idx} className="h-full shadow-md">
            <CardContent className="p-6 text-center">
              {review.icon}
              <h3 className="uppercase font-bold text-sm mb-2">
                {review.title}
              </h3>
              <p className="text-sm text-gray-600">{review.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
