"use client";

import { motion } from "framer-motion";
import { CheckCircle, Dna, Activity, Sparkles, Brain } from "lucide-react";

export default function LifeScriptSection() {
  const cards = [
    {
      icon: Dna,
      title: "Genetic Analysis",
      description:
        "Comprehensive DNA sequencing and epigenetic profiling to reveal your unique biological blueprint.",
    },
    {
      icon: Activity,
      title: "Lifestyle Assessment",
      description:
        "Deep evaluation of your habits, environment, and health metrics to uncover optimization opportunities.",
    },
    {
      icon: Brain,
      title: "Personalized Blueprint",
      description:
        "Tailored roadmap with recommendations for nutrition, exercise, sleep, and stress management.",
    },
    {
      icon: Sparkles,
      title: "Ongoing Guidance",
      description:
        "Continuous monitoring, adjustments, and access to expert coaches for sustainable progress.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brosta text-4xl sm:text-5xl font-bold text-black mb-6">
            LifeMap360 Journey
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A proven step-by-step process that aligns your biology and lifestyle
            for optimal health and performance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-100 mb-6">
                <card.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-brosta text-xl font-bold text-black mb-4">
                {card.title}
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block px-8 py-4 rounded-full bg-green-500 text-white font-lato font-medium shadow-lg hover:bg-green-600 transition"
          >
            Begin LifeMap360
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
