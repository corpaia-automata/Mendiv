"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HeroSection() {
  const pathname = usePathname();

  // Parent container for both lines
  const lineContainer = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  // Individual word animation
  const wordAnim = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const ctaAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.8, duration: 0.6, ease: "easeOut" },
    },
  };

  const descriptionAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.6, duration: 0.6, ease: "easeOut" },
    },
  };

  const lineAnim = {
    hidden: { width: 0 },
    visible: {
      width: "60px",
      transition: { delay: 2, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Image - Mobile vs Desktop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/hero.png"
          alt="Parent tossing child into the sky – symbolizing potential and future"
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src="/media/hero2.png"
          alt="Mobile hero: Empowering wellness journey"
          className="block md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          key={pathname}
          className="flex flex-col justify-start space-y-8 text-left pt-20 lg:pt-16"
        >
          {/* Animated Two-Line Heading */}
          <motion.h1 className="font-brosta font-bold text-white leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            {/* First Line: Decode Your Biology (single line) */}
            <motion.div
              variants={lineContainer}
              custom={0.3}
              className="block whitespace-nowrap"
              style={{ whiteSpace: "nowrap" }}
            >
              {[
                "Decode",
                "your",
                <span key="bio" className="text-green-400">
                  biology
                </span>,
              ].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordAnim}
                  className="inline-block align-top"
                  style={{ marginRight: i < 2 ? "0.2em" : "0" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Second Line: Design Your Future (single line) */}
            <motion.div
              variants={lineContainer}
              custom={0.6}
              className="block mt-3 whitespace-nowrap"
              style={{ whiteSpace: "nowrap" }}
            >
              {[
                "Design",
                "your",
                <span key="fut" className="text-green-400">
                  future
                </span>,
              ].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordAnim}
                  className="inline-block align-top"
                  style={{ marginRight: i < 2 ? "0.2em" : "0" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          {/* Description */}
          <motion.div variants={descriptionAnim} className="space-y-3 max-w-lg">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Empower your health, optimize performance, and shape a
              personalized future one gene at a time.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={ctaAnim}>
            <Button className="rounded-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base sm:text-lg font-lato font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Start Your Life Journey
            </Button>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            variants={lineAnim}
            className="h-0.5 bg-green-500 w-0"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
