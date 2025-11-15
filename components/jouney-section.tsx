"use client";

import Image from "next/image";
import { JourneyFeatures } from "@/components/journey-features";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const metadata = {
  title: "A Lifetime of Support — Your DNA Journey with mendiv",
  description:
    "Green-themed hero with right-panel benefits, inspired by the provided reference.",
};

export default function Journeysection() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animate as element enters & exits viewport
  });

  // Map scroll progress to animation values
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <main className="min-h-screen">
      <section ref={ref} className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <motion.div style={{ opacity }} className="absolute inset-0">
          <Image
            src="/media/mom.png"
            alt="Sky background with a parent tossing a child upward"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Overlay content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left content */}
            <motion.div style={{ y, opacity }} className="md:col-span-7">
              <h1 className="text-balance text-[#ffff] font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl ">
                A Lifetime of Support on
                <br />
                Your DNA Journey
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-white text-base sm:text-lg leading-relaxed">
                Navigate every step with confidence. Our team, tools, and
                insights help you understand your genetics and take meaningful
                action today and for years to come.
              </p>
            </motion.div>

            {/* Right panel */}
            <motion.div style={{ y, opacity }} className="md:col-span-5">
              <JourneyFeatures />
            </motion.div>
          </div>
        </motion.div>

        {/* Green accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-500"
          aria-hidden="true"
        />
      </section>
    </main>
  );
}
