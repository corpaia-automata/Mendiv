"use client";

import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2 * i },
  }),
};

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We place human care and empathy at the center of everything we do, creating a safe and nurturing space for healing and growth.",
    },
    {
      icon: Lightbulb,
      title: "Growth",
      description:
        "Encouraging continuous self-discovery and development by blending modern practices with timeless wisdom.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Fostering belonging and meaningful connections, because true wellness thrives when shared with others.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Delivering high-quality programmes, therapies, and experiences that empower individuals to unlock their full potential.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#eef2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible" // ✅ triggers immediately on mount
            key={
              typeof window !== "undefined"
                ? window.location.pathname
                : "default"
            }
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="font-montserrat font-bold text-5xl md:text-6xl text-[#376255] mb-6"
            >
              About Mendiv
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Mendiv is a sanctuary for the mind, body, and soul. We combine
              therapeutic programmes, mindfulness practices, and innovative
              wellness experiences to help individuals refresh, heal, and
              rediscover balance in their everyday lives.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible" // ✅ triggers immediately on mount
            key={
              typeof window !== "undefined"
                ? window.location.pathname
                : "default"
            }
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-montserrat font-bold text-4xl md:text-5xl text-[#376255] mb-6"
            >
              Our Story
            </motion.h2>
          </motion.div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            {[
              "Mendiv was founded with a simple belief: true well-being begins in the mind. In a world where stress, anxiety, and disconnection have become common, we envisioned a place where people could pause, reflect, and renew themselves.",
              "Our journey began by blending psychology, mindfulness, and creative therapies into carefully designed programmes. From relaxation pods to immersive workshops, Mendiv quickly grew into a holistic wellness destination that supports individuals at every stage of their mental health journey.",
              "Today, Mendiv offers a diverse range of services from mind-refreshment experiences to personalized therapeutic support all grounded in evidence-based practices and delivered with compassion.",
              "We believe that wellness should not be a luxury, but an everyday practice. At Mendiv, we are committed to making mental health care both approachable and transformative.",
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible" // ✅ scroll-trigger for paragraphs
                viewport={{ once: true, amount: 0 }}
                custom={i}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="space-y-6" variants={fadeUp} custom={0}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#007a35] rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="font-montserrat font-bold text-3xl text-[#376255]">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create a world where mental wellness is accessible to
                  everyone, empowering individuals to live with clarity,
                  resilience, and inner peace.
                </p>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeUp} custom={1}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#376255] rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="font-montserrat font-bold text-3xl text-[#007a35]">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To design and deliver transformative wellness programmes,
                  therapeutic interventions, and creative spaces that nurture
                  the mind and spirit. Mendiv’s mission is to make mental health
                  care approachable, engaging, and impactful for all.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src="/media/dna.jpg"
                  alt="Healing and Wellness Environment"
                  fill
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[#007a35] opacity-10 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#eef2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-montserrat font-bold text-4xl md:text-5xl text-[#007a35] mb-6"
            >
              Core Values
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              The guiding principles that define Mendiv’s approach to mental
              wellness and personal transformation.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="hover-lift shadow-lg bg-white border-[#376255]/20 group h-full">
                  <CardContent className="p-8 text-center h-[350px] flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-[#376255] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-montserrat font-semibold text-xl text-[#376255] mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#eef2f2]">
        <motion.div
          className="max-w-5xl mx-auto text-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl font-montserrat font-bold text-[#007a35] mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Take the first step towards clarity, balance, and renewal with
            Mendiv. Explore our programmes designed to refresh your mind and
            uplift your spirit.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 bg-[#007a35] text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105 hover:bg-[#2a4a43]"
            >
              Explore Programmes <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
