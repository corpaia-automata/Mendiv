"use client";

import { motion } from "framer-motion";
import { Dna, Brain, Users, Sparkles, CheckCircle } from "lucide-react";

export default function BioAlignSection() {
  const programs = [
    {
      icon: Dna,
      title: "LifeMap360™",
      description:
        "Complete genetic and epigenetic analysis with personalized lifestyle recommendations.",
      features: [
        "Genetic testing",
        "Epigenetic analysis",
        "Lifestyle optimization",
        "Progress tracking",
      ],
    },
    {
      icon: Brain,
      title: "NeuroSleep™",
      description:
        "Advanced sleep optimization based on your unique neurological patterns.",
      features: [
        "Sleep analysis",
        "Circadian optimization",
        "Recovery tracking",
        "Performance enhancement",
      ],
    },
    {
      icon: Users,
      title: "Digital Twin",
      description:
        "AI-powered digital representation of your biological systems and health metrics.",
      features: [
        "Real-time monitoring",
        "Predictive analytics",
        "Health forecasting",
        "Risk assessment",
      ],
    },
    {
      icon: Sparkles,
      title: "Mind Refreshment Studio",
      description:
        "Immersive wellness retreats combining science with mindful restoration.",
      features: [
        "Wellness retreats",
        "Mindfulness training",
        "Stress optimization",
        "Mental clarity",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-brosta text-4xl sm:text-5xl font-bold text-black mb-6">
            BioAlign™ Programs
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Align your biology, mind, and environment with our science-backed
            transformation programs.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl p-8 border border-green-100 shadow-lg hover:shadow-2xl transition-all duration-300 group 
             bg-gradient-to-br from-white via-green-50 to-green-100/40"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6 group-hover:bg-green-500 transition">
                <program.icon className="w-8 h-8 text-green-500 group-hover:text-white transition" />
              </div>

              {/* Title + Description */}
              <h3 className="font-brosta text-2xl font-bold text-black mb-3">
                {program.title}
              </h3>
              <p className="font-lato text-gray-700 mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {program.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center font-lato text-gray-800"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
