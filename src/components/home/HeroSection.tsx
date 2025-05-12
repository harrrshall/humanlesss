"use client";

import { Button } from "@/components/ui/button";
import { CalButton } from "@/components/ui/CalButton";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion

export function HeroSection() {
  return (
    // Added a subtle gradient background and relative positioning
    <section className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-b from-background via-background to-muted/10">
      {/* Optional: Add a subtle decorative element like a glow */}
      {/* <div className="absolute -top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg h-96 bg-primary/5 rounded-full blur-3xl opacity-40 z-0" /> */}

      <div className="container-custom relative z-10">
        {/* Wrap content in motion.div for animation */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Refined Headline for impact */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Navigate RIA Compliance with Confidence using <span className="text-primary">AI-Powered Automation</span>
          </h1>
          {/* Slightly refined description for clarity and flow */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Humanless empowers RIAs to tackle complex regulations efficiently. Our specialized AI solutions reduce risk, save valuable time, and free you to focus on your clients.
          </p>
          {/* Added motion to buttons for staggered animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <CalButton size="lg" className="shadow-md hover:shadow-lg transition-shadow duration-300">
              Schedule a Demo
            </CalButton>
            <Button asChild variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
