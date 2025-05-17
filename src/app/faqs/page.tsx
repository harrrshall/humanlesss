"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CalButton } from "@/components/ui/CalButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useState } from "react";

export default function FAQPage() {
    const faqs = [
        {
            question: "How secure is our client data with your AI solutions?",
            answer: "Data security and privacy are paramount. We utilize tools and implement processes adhering to strict security protocols suitable for sensitive financial data. We discuss specific measures, encryption, access controls, and data storage during consultation."
        },
        {
            question: "How accurate and reliable is the AI in identifying compliance issues?",
            answer: "Our approach focuses on well-defined tasks and includes mechanisms for human review and validation. We see AI as a powerful assistant to, not a replacement for, human oversight, aiming for high reliability to drastically reduce false positives/negatives."
        },
        {
            question: "Will this integrate with our existing CRM and other tools?",
            answer: "Yes, seamless integration (especially with major RIA CRMs like Redtail, Wealthbox, Salesforce) is a core part of our service."
        },
        {
            question: "How long does implementation take, and what resources do we need from us?",
            answer: "Initial high-impact projects are designed for rapid deployment (typically weeks). We'll need access to relevant systems, sample data/documents, and collaboration time from your compliance/ops team."
        },
        {
            question: "What is the pricing model and expected ROI?",
            answer: "For initial engagements, we use value-based fixed project fees. We clearly outline ROI based on time savings, cost savings (including avoidance of fines), and risk reduction."
        },
        {
            question: "Is this just a \"black box\"? Can we override the AI?",
            answer: "We prioritize transparency. Flagged items show why they were flagged. Systems allow human review, validation, and override – AI assists, your team decides."
        },
        {
            question: "Will this technology replace our compliance staff or advisors?",
            answer: "No, our goal is to augment your team. AI frees skilled personnel from tedious tasks to focus on higher-value activities."
        },
        {
            question: "How specifically can AI help with complex rules like Regulation Best Interest (Reg BI)?",
            answer: "AI can assist by automatically scanning communications for documented evidence related to Reg BI (disclosures, cost discussions, rationale for recommendations, conflicts) based on predefined rules, making review much faster."
        }
    ];

    const [showAll, setShowAll] = useState(false);

    return (
        <div className="min-h-screen">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="py-20 bg-accent">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Everything you need to know about Humanless AI
                            </p>
                            <Button
                                size="lg"
                                data-cal-link="harshal-singh-logu1i/15min" // Retained from original as context doesn't specify replacement
                                data-cal-namespace="15min" // Retained
                                data-cal-config='{"layout":"month_view","theme":"auto"}' // Retained
                            >
                                Still have questions? Contact Us
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section (show only first 5 or fewer if total is less than 5) */}
                <section className="py-20">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.slice(0, 5).map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-lg font-semibold">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            {faqs.length > 5 && ( // Only show "View All FAQs" if there are more than 5 FAQs
                                <div className="flex justify-center mt-8">
                                    <Button size="lg" variant="outline" onClick={() => setShowAll(true)}>
                                        View All FAQs
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Modal for all FAQs */}
                {showAll && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2">
                        <div className="bg-background rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative">
                            <button
                                className="absolute top-4 right-4 text-2xl font-bold text-muted-foreground hover:text-primary focus:outline-none"
                                onClick={() => setShowAll(false)}
                                aria-label="Close FAQ modal"
                            >
                                ×
                            </button>
                            <h2 className="text-2xl font-bold mb-4 text-center">All FAQs</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`modal-item-${index}`}>
                                        <AccordionTrigger className="text-base font-semibold">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <section className="py-20 bg-accent">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Learn More?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Schedule a consultation to discuss how our AI solutions can transform your compliance operations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <CalButton size="lg"> {/* Retained CalButton usage */}
                                    Schedule a Demo
                                </CalButton>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/solutions">Explore Solutions</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
