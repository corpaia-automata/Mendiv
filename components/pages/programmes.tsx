"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { GiDna1, GiMeditation, GiBrain } from "react-icons/gi";
import {
  MdNightlightRound,
  MdOutlinePrecisionManufacturing,
} from "react-icons/md";
import { FaCity, FaBrain, FaUsers, FaLeaf, FaHeartbeat } from "react-icons/fa";
import { BiChip } from "react-icons/bi";

const Programmes = () => {
  const programs = [
    {
      icon: GiDna1,
      title: "Mendiv LifeScript",
      description: "Genetic & Epigenetic Blueprint Analysis",
      features: [
        "Whole-genome SNP screening",
        "Lifestyle-gene interaction report",
        "Personalized nutrigenomic plan",
      ],
      slug: "lifeScript",
    },
    {
      icon: MdNightlightRound,
      title: "NeuroSleep",
      description: "Science-Backed Sleep Optimization",
      features: [
        "Sleep architecture mapping",
        "Circadian rhythm tuning",
        "Neurochemical rebalancing protocols",
      ],
      slug: "neuroSleep",
    },
    {
      icon: FaCity,
      title: "Xpanzone",
      description: "Living & Work Environment Optimization",
      features: [
        "Biophilic space design",
        "EMF & air quality assessment",
        "Neuro-acoustic environment tuning",
      ],
      slug: "xpanzone",
    },
    {
      icon: BiChip,
      title: "Digital Twin",
      description: "AI-Powered Health Simulation",
      features: [
        "Continuous biomarker tracking",
        "Predictive health modeling",
        "Intervention outcome forecasting",
      ],
      slug: "digitalTwin",
    },
  ];

  const edges = [
    {
      icon: FaHeartbeat,
      title: "Preventive Wellness",
      description:
        "Proactive insights to intercept health concerns before they manifest.",
    },
    {
      icon: GiBrain,
      title: "Cognitive Enhancement",
      description:
        "Sharpen focus, memory, and mental clarity through neuro-optimized protocols.",
    },
    {
      icon: FaLeaf,
      title: "Sustainable Living",
      description:
        "Harmonize personal wellness with planetary health through mindful choices.",
    },
    {
      icon: MdOutlinePrecisionManufacturing,
      title: "Precision Medicine",
      description:
        "Tailored interventions based on your unique biology, not averages.",
    },
    {
      icon: FaUsers,
      title: "Community & Support",
      description:
        "Connect with experts and peers on a shared journey to vitality.",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardHover: Variants = {
    rest: {
      y: 0,
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow:
        "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconHover: Variants = {
    rest: {
      scale: 1,
      rotate: 0,
      color: "#059669",
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      color: "#047857",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 text-gray-900 relative overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #059669 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              The{" "}
              <span className="bg-[#007a35] bg-clip-text text-transparent">
                BioAlign
              </span>{" "}
              Experience
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Where biology meets intention. A science-rooted, soul-nourishing
              journey to optimal health, performance, and longevity.
            </motion.p>
          </motion.div>
        </section>

        {/* Programmes Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible" // ✅ animate immediately on mount
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
              key={
                typeof window !== "undefined"
                  ? window.location.pathname
                  : "programmes"
              }
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  animate="rest"
                  className="group"
                >
                  <motion.div variants={cardHover} className="h-full">
                    <Card className="h-full bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-2xl overflow-hidden transition-all duration-300">
                      <CardHeader className="text-center pb-4 pt-8">
                        <motion.div
                          variants={iconHover}
                          className="mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-emerald-500/10"
                        >
                          <program.icon className="w-8 h-8 text-emerald-600" />
                        </motion.div>
                        <CardTitle className="text-2xl font-semibold text-gray-800">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="text-gray-500 mt-2">
                          {program.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-6 pb-8 space-y-4">
                        <ul className="space-y-3 text-gray-600">
                          {program.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0 }}
                            >
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <Link href={`/programmes/${program.slug}`}>
                          <Button className="w-full mt-6 bg-[#007a35] hover:bg-emerald-700 text-white text-base py-5 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                            Explore {program.title}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Edge Section */}
        <section className="py-20 bg-gradient-to-b from-emerald-50 to-white px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                The{" "}
                <span className="bg-[#007a35] bg-clip-text text-transparent">
                  Mendiv Edge
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Why our integrative, data-informed approach delivers lasting
                transformation.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {edges.map((edge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  className="group"
                >
                  <motion.div variants={cardHover} className="h-full">
                    <Card className="bg-white/90 backdrop-blur-sm border border-emerald-100/50 rounded-xl h-full transition-all duration-300">
                      <CardContent className="pt-8 pb-6 px-5 text-center">
                        <motion.div
                          variants={iconHover}
                          className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10"
                        >
                          <edge.icon className="w-6 h-6 text-emerald-600" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2.5">
                          {edge.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {edge.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            variants={containerVariants}
            className="container mx-auto text-center relative z-10 max-w-4xl"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            >
              Begin Your{" "}
              <span className="bg-[#007a35] bg-clip-text text-transparent">
                LifeScript
              </span>{" "}
              Journey
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-14 leading-relaxed"
            >
              Align your genes, mind, and environment in a personalized program
              designed for sustainable vitality.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button className="bg-[#007a35] hover:bg-green-700 text-white text-lg px-10 py-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white text-lg px-10 py-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-1"
              >
                Book a Discovery Call
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Programmes;
