"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      id: "secure",
      question: "How secure is our client data with your AI solutions?",
      answer:
        "Data security and privacy are paramount in our solutions. We implement enterprise-grade security measures including end-to-end encryption, strict access controls, and secure data storage protocols that meet or exceed industry standards for financial data protection. All data processing occurs in secure, SOC 2 Type II certified environments, and we maintain comprehensive audit trails of all system access and data handling.",
    },
    {
      id: "accuracy",
      question: "How accurate and reliable is the AI in identifying compliance issues?",
      answer:
        "Our AI systems are specifically trained on RIA compliance requirements and continuously improve through machine learning. We maintain high accuracy rates by focusing on well-defined compliance tasks and incorporating human validation checkpoints. The system flags potential issues for review rather than making final determinations, ensuring that your compliance team maintains control while benefiting from AI-powered efficiency.",
    },
    {
      id: "integration",
      question: "Will this integrate with our existing CRM and other tools?",
      answer:
        "Yes, seamless integration is a core feature of our solutions. We support integration with major RIA CRMs including Redtail, Wealthbox, Salesforce, and others. Our team works with you to ensure smooth data flow between systems while maintaining data integrity and security. We can also integrate with your existing portfolio management and communication platforms.",
    },
    {
      id: "implementation",
      question: "How long does implementation take, and what resources do we need to provide?",
      answer:
        "Implementation typically takes 2-4 weeks, depending on the scope of your needs and the complexity of your existing systems. We'll need access to relevant systems (with appropriate permissions), sample data/documents for configuration, and collaboration time from your compliance/operations team. Our team handles the technical implementation while working closely with your staff to ensure a smooth transition.",
    },
    {
      id: "roi",
      question: "What is the pricing model and expected ROI?",
      answer:
        "We offer value-based pricing models that align with your firm's size and needs. For initial engagements, we typically use fixed project fees with clear ROI expectations based on quantifiable factors like time savings and risk reduction. Our clients typically see a return on investment within 3-6 months through reduced compliance costs, improved efficiency, and mitigated risk exposure.",
    },
    {
      id: "transparency",
      question: "Is this just a 'black box'? Can we understand and override the AI's suggestions?",
      answer:
        "Transparency is a core principle of our solutions. The system provides clear explanations for why items are flagged, including specific keywords, missing elements, or potential compliance concerns. All AI suggestions are subject to human review and override capabilities. We provide detailed audit trails and documentation of all system decisions and human interventions.",
    },
    {
      id: "staff",
      question: "Will this technology replace our compliance staff or advisors?",
      answer:
        "No, our goal is to augment your team, not replace them. The AI automation handles repetitive, time-consuming tasks, freeing your skilled personnel to focus on higher-value activities like complex case reviews, strategic advice, policy development, and client interaction. This makes your compliance team more efficient and effective while maintaining human oversight where it matters most.",
    },
    {
      id: "regbi",
      question: "How specifically can AI help with complex rules like Regulation Best Interest (Reg BI)?",
      answer:
        "Our AI systems are specifically trained to identify and document evidence related to Reg BI requirements. The system automatically scans meeting transcripts and communications for key elements like disclosures, cost discussions, recommendation rationales, and conflict of interest identification. It helps ensure consistent documentation across all client interactions while flagging potential gaps for human review.",
    },
    {
      id: "updates",
      question: "How do you handle updates to compliance regulations?",
      answer:
        "We maintain a dedicated team that continuously monitors regulatory changes and updates our systems accordingly. When new regulations are introduced or existing ones are modified, we update our compliance rules and provide training to ensure your team understands the changes. Our systems are designed to be easily updated to accommodate new requirements without disrupting your operations.",
    },
    {
      id: "support",
      question: "What kind of training and support do you provide?",
      answer:
        "We offer comprehensive onboarding and ongoing support, including initial training sessions, detailed documentation, and 24/7 technical support. Our team provides regular check-ins and updates, and we offer additional training sessions as needed. We also maintain a knowledge base and provide access to compliance experts who can help with specific questions or concerns.",
    },
  ];

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              RIA Compliance Automation: Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions about Humanless AI's compliance solutions for Registered Investment Advisors.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 5).map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={faq.id} className="border-b border-border py-2">
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <Button
              className="rounded-full bg-primary text-white hover:bg-primary/90 px-8"
              size="lg"
              onClick={() => setShowAll(true)}
            >
              View all FAQs
            </Button>
          </div>
        </motion.div>
      </div>

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
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`modal-${faq.id}`}>
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
    </section>
  );
}
