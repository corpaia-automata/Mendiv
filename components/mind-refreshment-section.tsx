"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Define types for clarity
interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

const featureCards: Omit<FeatureCardProps, "index">[] = [
  {
    title: "Neurofeedback Sessions",
    description:
      "Real-time brain training to optimize cognitive performance and emotional regulation.",
  },
  {
    title: "Mindfulness Integration",
    description:
      "Science-backed meditation and mindfulness practices tailored to your neural patterns.",
  },
  {
    title: "Stress Optimization",
    description:
      "Transform your relationship with stress through personalized resilience training.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  rest: {
    scale: 1,
    y: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  hover: {
    scale: 1.03,
    y: -8,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderColor: "rgba(134, 239, 172, 0.4)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const textHoverVariants = {
  rest: { color: "#ffffff" },
  hover: { color: "#86efac", transition: { duration: 0.3 } },
};

const pulseGlow = {
  rest: {
    opacity: 0.5,
  },
  pulse: {
    opacity: 0.8,
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export default function MindRefreshmentSection() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-700"
      aria-labelledby="mind-refresh-title"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-green-400/40 rounded-full blur-3xl"
          variants={pulseGlow}
          initial="rest"
          animate="pulse"
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl"
          variants={pulseGlow}
          initial="rest"
          animate="pulse"
          transition={{ delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Heading */}
        <motion.h2
          id="mind-refresh-title"
          variants={fadeInUp}
          className="font-brosta text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Mind Refreshment Studio
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="font-lato text-sm sm:text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Immersive wellness retreats that combine cutting-edge neuroscience
          with mindful restoration. Reset your mind, optimize your neural
          pathways, and emerge with enhanced clarity and focus.
        </motion.p>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-14"
          variants={containerVariants}
        >
          {featureCards.map((card, index) => (
            <FeatureCard key={index} {...card} index={index} />
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          variants={itemVariants}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              aria-label="Book your wellness retreat"
              className="rounded-full bg-white text-green-800 hover:bg-green-50 hover:shadow-lg hover:shadow-white/30 px-8 py-6 text-base font-lato font-semibold transition-all duration-300 transform"
            >
              Book Your Retreat
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              aria-label="Take a virtual tour of the studio"
              className="rounded-full border-2 border-white text-white hover:bg-white hover:text-green-800 hover:border-transparent px-8 py-6 text-base font-lato font-semibold transition-all duration-300 transform bg-transparent backdrop-blur-sm"
            >
              Virtual Studio Tour
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Enhanced Card Component with animations
function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="rounded-2xl p-6 border shadow-lg cursor-pointer transform-gpu
        active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30"
      tabIndex={0}
      aria-label={title}
      custom={index}
      variants={cardHoverVariants}
    >
      <div className="h-full">
        <motion.h3
          className="font-brosta text-xl sm:text-2xl font-bold mb-4 leading-tight"
          variants={textHoverVariants}
        >
          {title}
        </motion.h3>
        <motion.p
          className="font-lato text-sm sm:text-base leading-relaxed"
          variants={textHoverVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
