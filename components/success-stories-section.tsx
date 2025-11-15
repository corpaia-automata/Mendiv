"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Genetics vs. Lifestyle: Who Really Controls Aging?",
      excerpt:
        "Your DNA sets the foundation, but daily habits decide how fast you age. Discover how Mendiv’s LifeMap360™ bridges both.",
      image:
        "https://images.unsplash.com/photo-1581091870634-1a27a7e924b8?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
      slug: "/blog/genetics-vs-lifestyle",
    },
    {
      id: 2,
      title: "The Science of Sleep: Why Deep Rest is Your Best Medicine",
      excerpt:
        "NeuroSleep™ dives into polysomnography, circadian rhythms, and environment design to optimize nightly recovery.",
      image:
        "https://images.unsplash.com/photo-1597072689222-462d6c03da11?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
      slug: "/blog/science-of-sleep",
    },
    {
      id: 3,
      title: "Beauty & Regeneration: Aging Starts in Your Cells",
      excerpt:
        "Collagen, hormones, and metabolism play key roles in beauty. Learn how to slow cellular aging with science-backed methods.",
      image:
        "https://images.unsplash.com/photo-1508387023470-3c9e07cb8cc4?ixlib=rb-4.0.3&q=80&w=1080&fit=crop",
      slug: "/blog/beauty-and-regeneration",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="font-brosta text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Insights for <span className="text-green-500">Your Next Chapter</span>
        </h2>
        <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Science, wellness, and longevity decoded by Mendiv experts. Stay
          updated with the latest breakthroughs.
        </p>

        {/* Blog Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href={blog.slug}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-left flex flex-col flex-grow">
                  <h3 className="font-brosta text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-500 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="font-lato text-gray-600 mb-4 flex-grow">
                    {blog.excerpt}
                  </p>
                  <span className="text-green-500 font-semibold mt-auto">
                    Read More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
