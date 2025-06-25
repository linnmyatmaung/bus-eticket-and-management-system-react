import * as React from "react";
import faqImage from "@/assets/images/service.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection: React.FC = () => {
  return (
    <section className="container mx-auto mt-10 mb-6 px-4">
      <div className="text-center mb-6">
        <p className="text-2xl font-semibold text-[#191970]">
          Frequently Asked Questions(FAQ)
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={faqImage}
            alt="faq"
            className="rounded-md shadow-md max-w-full h-auto"
          />
        </div>

        <div className="lg:w-1/2">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How to purchase tickets online?
              </AccordionTrigger>
              <AccordionContent>
                <strong>To purchase express tickets online,</strong> visit the
                official website of Trip Hub <strong>(www.triphub.com)</strong>.
                On the first page, you will see where you can purchase tickets.
                After filling the required data, the available express operators
                will be shown. Select the operator you want and then complete
                the payment steps and the ticket purchasing is complete.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is it safe to buy express tickets online?
              </AccordionTrigger>
              <AccordionContent>
                <strong>Yes, buying tickets online can be safe</strong> as long
                as you use secure platforms and the official website. First,
                ensure the URL is https://www.triphub.com. Use secure payment
                methods (we accept KBZ Pay, Wave Pay, AYA Pay). We will not
                initiate contact with customers who haven’t submitted their
                information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How will I receive my express ticket after purchasing online?
              </AccordionTrigger>
              <AccordionContent>
                <strong>After purchasing,</strong> you'll typically receive your
                ticket via email. It may be an e-ticket accessible through an
                app or website. You can print it or show it on your phone for
                entry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I cancel or reschedule my ticket after booking?
              </AccordionTrigger>
              <AccordionContent>
                <strong>
                  Unfortunately, tickets cannot be cancelled or rescheduled
                </strong>{" "}
                once the booking is confirmed. Please make sure to double-check
                your travel details before completing your purchase on
                <strong>www.triphub.com</strong>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
