"use client";

import { motion } from "framer-motion";

export default function DnaSection() {
  return (
    <section className="relative py-24 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2a6b61] max-w-4xl mx-auto leading-snug"
        >
          Your DNA is more than data. <br />
          <span className="font-semibold text-[#1d4f47] bg-clip-text">
            It’s a blueprint for lifelong well-being.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
