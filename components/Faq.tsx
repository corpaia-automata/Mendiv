"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Mendiv?",
      answer:
        "Mendiv is a science-driven wellness and longevity brand that combines biology, lifestyle, and environment to help you achieve optimal health and vitality.",
    },
    {
      question: "What kind of services do you provide?",
      answer:
        "We offer advanced wellness programs focused on sleep optimization, beauty & regeneration, gut health, and personalized performance strategies.",
    },
    {
      question: "Who are Mendiv’s programs designed for?",
      answer:
        "Our solutions are ideal for professionals, athletes, couples, biohackers, and wellness seekers looking to extend healthspan and improve daily performance.",
    },
    {
      question: "Do you provide personalized solutions?",
      answer:
        "Yes. Every program is tailored using biological insights and lifestyle mapping to ensure a customized path to long-term vitality.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can start by booking a consultation or exploring our core programs. Our team will guide you with a step-by-step personalized approach.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left heading section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-brosta text-black mb-6">
            Frequently Asked <span className="text-[#3da525]">Questions</span>
          </h2>
          <p className="text-gray-600 font-lato text-lg">
            Find answers to our most frequently asked questions. <br />
            Still have questions?
          </p>
        </motion.div>

        {/* Right FAQ accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left p-5 font-lato text-lg text-black"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#3da525]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-gray-600 font-lato">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
