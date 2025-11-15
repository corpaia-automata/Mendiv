"use client";

import { motion } from "framer-motion";
import { Brain, HeartPulse, Shield, Moon } from "lucide-react";

export default function NeuroSleepSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
            Mendiv NeuroSleep
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary sleep optimization program that transforms your brain
            health, heart function, and vitality through science-driven sleep
            medicine.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Image/Visual */}

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/media/sleep.jpg"
                alt="NeuroSleep"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Deep sleep clears brain toxins, regulates blood pressure,
                strengthens immunity, and balances hormones. Our personalized
                program uses advanced sleep studies and biomarker analysis to
                optimize your sleep architecture.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Experience enhanced cognitive performance, cardiovascular
                health, immune resilience, and emotional well-being through
                science-backed sleep optimization tailored to your unique
                physiology.
              </p>

              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <p className="text-green-800 font-semibold italic text-center">
                  "Sleep is medicine. NeuroSleep gives you the science and tools
                  to heal, recharge, and thrive."
                </p>
              </div>

              <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium text-base hover:bg-green-700 transition-colors duration-300 shadow-md mx-auto block">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
