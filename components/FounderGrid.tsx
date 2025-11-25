"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Mr. OA Vahab",
    role: "Managing Director, Tree G Group",
    img: "/founders/oavahab.jpg",
  },
  {
    name: "Dr. Muhammed Hussain KM",
    role: "MBBS, MMST (IIT Kharagpur)",
    img: "/founders/drhuzain.jpg",
  },
  {
    name: "Mr. SALEEQUE MP",
    role: "AI Consultant | DeepTech Architect",
    img: "/founders/saleeque.png",
  },
  {
    name: "Dr. Abdussalam OK",
    role: "M.Phil Clinical Psychology",
    img: "/founders/aslam.jpg",
  },
  {
    name: "Mr. Aslam Sidheek",
    role: "MBBS (AIIMS), MD Psychiatry (NIMHANS)",
    img: "/founders/abdusalam.png",
  },
];

export default function ExpandingFounderStrip() {
  return (
    <div className="py-20">

      {/* ⭐ HEADING SECTION ⭐ */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
          The Founders Behind Mendiv
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Visionaries shaping the future of wellness, longevity, and human performance.
        </p>
      </div>

      {/* 🌙 MOBILE VERSION (STACKED CARDS) */}
      <div className="lg:hidden grid grid-cols-1 gap-6 px-4">
        {founders.map((f, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src={f.img}
              fill
              alt={f.name}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-2xl font-bold text-white">{f.name}</h2>
              <p className="text-white/80 text-lg">{f.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 💻 DESKTOP VERSION (EXPANDING STRIP) */}
      <div className="hidden lg:flex max-w-7xl mx-auto h-[600px] overflow-hidden rounded-xl">
        {founders.map((f, index) => (
          <motion.div
            key={index}
            className="relative h-full flex-1 overflow-hidden group cursor-pointer"
            initial={{ flex: 1 }}
            whileHover={{ flex: 4 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={f.img}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
              alt={f.name}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-10 left-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <h2 className="text-3xl font-bold text-white mb-2">{f.name}</h2>
              <p className="text-xl text-white/90">{f.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
