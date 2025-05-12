"use client";

import { Button } from "@/components/ui/button";
import { CalButton } from "@/components/ui/CalButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden gradient-bg text-white"
    >
      <div className="absolute inset-0 glow z-0" />

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Compliance Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join forward-thinking RIAs who are already reducing compliance risk and saving valuable time with our AI-powered solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalButton size="lg">
              Schedule a Consultation
            </CalButton>
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
