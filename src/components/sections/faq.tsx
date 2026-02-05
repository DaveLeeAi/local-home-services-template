"use client";

import { Container } from "@/components/ui/container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
    {
        question: "Do I need a permit to build a deck in Atlanta?",
        answer: "Yes, most deck projects in Metro Atlanta (including Fulton, Cobb, Gwinnett, and DeKalb counties) require a building permit, especially if the deck is attached to the house or over 30 inches above grade. We handle the entire permitting process, ensuring your project is fully code-compliant and passes all inspections."
    },
    {
        question: "Composite vs. Wood: Which is better for Georgia's climate?",
        answer: "Georgia's high humidity and fluctuating temperatures can be tough on pressure-treated wood, causing it to warp, crack, and rot over time if not rigorously maintained. Composite decking (like Trex or TimberTech) is engineered to resist moisture, fading, and warping, making it the superior low-maintenance choice for our specific climate."
    },
    {
        question: "How long does a deck installation take?",
        answer: "A standard 12x20 deck typically takes 3-5 days to construct once permits are approved. Larger projects with porches, extensive railings, or drainage systems may take 1-2 weeks. We provide a detailed timeline with every quote and keep you updated throughout the process."
    },
    {
        question: "What areas of Atlanta do you serve?",
        answer: "We serve the entire North Metro Atlanta area, including Alpharetta, Roswell, Marietta, Johns Creek, Sandy Springs, Dunwoody, and Decatur. We are locally owned and understand the specific HOA and zoning requirements of these neighborhoods."
    }
];

export function FAQ() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">Common questions from homeowners in the Atlanta area.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {FAQS.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* JSON-LD Schema for FAQ */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Container>
        </section>
    );
}
