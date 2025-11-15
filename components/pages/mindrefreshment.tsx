"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Waves,
  Heart,
  Zap,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Phone,
} from "lucide-react";

const services = [
  {
    title: "NeuroFeedback Training",
    description:
      "Advanced brain training using real-time EEG monitoring to enhance cognitive function, focus, and emotional regulation.",
    icon: Brain,
    features: [
      "Personalized protocols",
      "Real-time feedback",
      "Progress tracking",
    ],
    duration: "45 minutes",
  },
  {
    title: "Mindfulness Therapy",
    description:
      "Scientifically-backed meditation and mindfulness practices tailored to your unique stress patterns and lifestyle.",
    icon: Waves,
    features: ["Custom meditation plans", "Stress reduction", "Mental clarity"],
    duration: "30 minutes",
  },
  {
    title: "Stress Resilience Coaching",
    description:
      "Comprehensive training to build lasting stress resilience through breathwork, HRV optimization, and autonomic regulation.",
    icon: Heart,
    features: ["Breathing techniques", "HRV training", "Recovery protocols"],
    duration: "60 minutes",
  },
];

const benefits = [
  "Enhanced cognitive performance",
  "Reduced stress and anxiety",
  "Improved emotional regulation",
  "Better sleep quality",
  "Increased focus and clarity",
  "Optimized mental energy",
];

export default function MindRefreshmentSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className=" bg-white py-24 ">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mind Refreshment
            <span className="block text-green-600">Studio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your mental wellness through cutting-edge neuroscience
            technology and personalized therapeutic approaches designed for
            optimal brain health.
          </p>
          <div className="mt-8 w-20 h-1 bg-[#007a35] mx-auto rounded-full"></div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          {/* Left Content */}
          <motion.div variants={fadeIn}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Future of Mental Wellness
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our Mind Refreshment Studio combines advanced neurofeedback
              technology with evidence-based therapeutic practices to help you
              achieve optimal mental performance, emotional balance, and
              cognitive clarity.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2"
            >
              Learn More About Our Approach
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div variants={fadeIn} className="relative">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Brain Training
                  </h4>
                  <p className="text-sm text-gray-600">
                    Advanced EEG neurofeedback
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Mindfulness
                  </h4>
                  <p className="text-sm text-gray-600">
                    Personalized meditation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Stress Relief
                  </h4>
                  <p className="text-sm text-gray-600">HRV optimization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Performance
                  </h4>
                  <p className="text-sm text-gray-600">Cognitive enhancement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-24"
        >
          <motion.h3
            variants={fadeIn}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our Specialized Services
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-green-300 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-[#007a35] rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-4xl font-bold mb-6">
            Ready to Transform Your Mind?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our exclusive program and experience the future of mental
            wellness. Limited spots available for personalized sessions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Your Session
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Explore Packages
              </motion.button>
            </div>
          </div>

          <p className="mt-8 text-sm opacity-80">
            Free consultation available • Flexible scheduling • Expert guidance
            included
          </p>
        </motion.div>

        {/* Trust Section */}
      </div>
    </section>
  );
}
