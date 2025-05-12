"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Archive, Activity, UserCheck, Megaphone, FileText } from "lucide-react";

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Archive className="w-6 h-6" />,
      title: "Automated Recordkeeping & Retrieval",
      description: "AI systems to organize, store, and rapidly retrieve mandatory records (communications, trades, etc.) meeting Rule 204-2 and streamlining audits."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Code of Ethics Monitoring",
      description: "Automate employee personal trading surveillance against firm policies and Rule 204A-1, managing pre-clearance and reporting."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Automated Client Onboarding Checks",
      description: "Streamline onboarding with AI for document verification, data extraction, agreement generation, and initial compliance checks (e.g., ADV delivery)."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "AI-Assisted Marketing Review",
      description: "Utilize AI to scan marketing materials (websites, emails, social) for compliance with SEC Marketing Rule before publication."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Regulatory Filing Assistance (Form ADV)",
      description: "Leverage AI to assist in gathering data, identifying updates, and streamlining the preparation for Form ADV amendments."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-accent" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Driven Solutions for Your Critical Compliance Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We tackle your most pressing compliance challenges with targeted AI automation, designed for rapid deployment and demonstrable ROI, focusing initially on these high-impact areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border border-border flex flex-col"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
