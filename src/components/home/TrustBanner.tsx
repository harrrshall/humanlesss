"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function TrustBanner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Mock company logos
  const logos = [
    { id: 1, name: "Company 1" },
    { id: 2, name: "Company 2" },
    { id: 3, name: "Company 3" },
    { id: 4, name: "Company 4" },
    { id: 5, name: "Company 5" },
    { id: 6, name: "Company 6" },
  ];

  return (
    <section className="py-12 bg-light-purple" ref={ref}>
      {/* <div className="container-custom">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground">
            Trusted by businesses across industries
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="h-12 w-24 bg-white/60 rounded-lg flex items-center justify-center"
            >
              <div className="w-16 h-8 bg-gray-200/50 rounded" />
            </div>
          ))}
        </motion.div>
      </div> */}
    </section>
  );
}
