"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.25,
      },
    }),
  };

  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Heading + Tagline */}
        <div className="text-center space-y-4 md:space-y-6 mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            About <span className="text-green-600">Mendiv</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-600"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <span className="block text-gray-500">
              Science-backed longevity & wellness for your next chapter.
            </span>
          </motion.p>
          <motion.div
            className="w-16 h-1 bg-green-600 mx-auto rounded-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1.5}
          />
        </div>

        {/* Content paragraphs */}
        <div className="space-y-6 md:space-y-8">
          {[
            "Mendiv is a science-driven longevity and wellness brand focused on decoding human biology and aligning it with personalized lifestyle, environment, and mindset practices. We bring together the latest research in genetics, epigenetics, sleep science, and environmental design to help individuals unlock their full potential.",

            "We believe longevity is not just about adding years to life, but adding clarity, vitality, and purpose to each chapter. Mendiv blends luxury and science to create transformative experiences from digital programs to immersive retreats designed for high-performance professionals, couples, athletes, and wellness seekers ready for their next chapter.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-base leading-relaxed text-gray-700 md:text-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i + 2}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
