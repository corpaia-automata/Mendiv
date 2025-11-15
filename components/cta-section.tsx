"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-gradient-to-r from-[#06391c] to-emerald-600 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-brosta text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          Ready to Design Your Future?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-lato text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join thousands who've unlocked their genetic potential and transformed
          their health with science-backed precision. Your optimal future starts
          with understanding your unique biology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Button className="rounded-full bg-white text-emerald-700 hover:bg-white/90 px-8 py-4 text-lg font-lato transition-all duration-300 hover:scale-105">
              Start Your journey
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/programmes">
              <Button
                variant="ghost"
                className="rounded-full text-white/90 hover:text-green-600 hover:underline px-8 py-4 text-lg font-lato transition-all duration-300 bg-transparent hover:scale-105"
              >
                Explore more
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
