"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", company: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-28 px-6 md:px-12 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.08),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={fadeUp}
            custom={2}
          >
            Ready to Begin Your
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block md:inline">
              Wellness Journey?
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            variants={fadeUp}
            custom={3}
          >
            We'd love to hear about your vision. Whether it's a consultation,
            partnership, or pod inquiry let's discuss how we can help bring your
            ideas to life.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info - Left */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={0}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                variants={fadeUp}
                custom={1}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We typically respond within 2-4 hours during business days.
                  For urgent matters, please call us directly.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email Us",
                      content: "info@mendiv.com",
                      action: "mailto:info@mendiv.com",
                    },
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Call Us",
                      content: "+91 8714541871",
                      action: "tel:+918714541871",
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Visit Us",
                      content:
                        "3rd Floor, Hilite Business Park, Phase T2, HiLite City, Thondayad Bypass, Kozhikode, 673014, India",
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Business Hours",
                      content: "Monday - Friday: 9:00 AM - 6:00 PM IST",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i + 2}
                      className="group"
                    >
                      <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-all duration-200 hover:shadow-md">
                        <div className="bg-green-100 text-green-600 p-3 rounded-xl group-hover:bg-green-200 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          {item.action ? (
                            <a
                              href={item.action}
                              className="text-green-600 hover:text-green-700 font-medium hover:underline transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 font-medium">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick CTA */}
              <motion.div
                className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 text-white shadow-2xl"
                variants={fadeUp}
                custom={6}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-xl font-bold mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-green-100 mb-6 leading-relaxed">
                  Schedule a complimentary 30-minute consultation to discuss
                  your project requirements and explore possibilities.
                </p>
                <button className="group w-full bg-white text-green-800 hover:bg-green-50 px-6 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg">
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right */}
            <motion.div
              className="lg:sticky lg:top-8 lg:self-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={0}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                variants={fadeUp}
                custom={1}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeUp} custom={2}>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-900 mb-3"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-gray-50 focus:bg-white hover:border-gray-300"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} custom={3}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 mb-3"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-gray-50 focus:bg-white hover:border-gray-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeUp} custom={4}>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-gray-50 focus:bg-white hover:border-gray-300"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} custom={5}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-gray-50 focus:bg-white hover:border-gray-300 resize-none"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`group w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
                      isSubmitted
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : isSubmitting
                        ? "bg-green-400 text-white cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 text-white hover:shadow-xl hover:scale-[1.02]"
                    }`}
                    variants={fadeUp}
                    custom={6}
                    whileHover={{ scale: 1.02 }}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent Successfully!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  <motion.p
                    className="text-sm text-gray-500 text-center leading-relaxed"
                    variants={fadeUp}
                    custom={7}
                  >
                    By sending this message, you agree to our privacy policy and
                    terms of service. We'll never share your information with
                    third parties.
                  </motion.p>
                </form>
              </motion.div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            className="mt-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <motion.div
              className="bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-3xl p-12 text-white shadow-2xl"
              variants={fadeUp}
              custom={1}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We're Excited to Meet You!
              </h2>
              <p className="text-green-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Questions? Ideas? Let's connect and build something amazing
                together. We're here to help turn your vision into reality.
              </p>
              <a
                href="mailto:hello@yourcompany.com"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
