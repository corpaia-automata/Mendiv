"use client";

import { motion } from "framer-motion";
import { FlaskConical, BrainCircuit, Sparkles } from "lucide-react";

export default function HowMendivWorks() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: i * 0.25 },
    }),
  };

  const steps = [
    {
      title: "Test",
      icon: <FlaskConical className="w-10 h-10 text-green-600" />,
      description:
        "We start with advanced diagnostics DNA, epigenetics, gut microbiome, and sleep analysis to map your unique biology.",
    },
    {
      title: "Decode",
      icon: <BrainCircuit className="w-10 h-10 text-green-600" />,
      description:
        "Using Mendiv’s BioAlign system, we interpret your biological data into actionable insights across mind, body, and environment.",
    },
    {
      title: "Transformation",
      icon: <Sparkles className="w-10 h-10 text-green-600" />,
      description:
        "You receive a personalized roadmap of lifestyle, wellness, and longevity strategies guided by science, designed for results.",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            How <span className="text-green-600">Mendiv</span> Works
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-600"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            A clear, science-backed pathway to your next chapter:{" "}
            <span className="text-green-600 font-semibold">
              Test. Decode. Transformation.
            </span>
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i + 2}
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
