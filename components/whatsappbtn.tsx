"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

// WhatsApp Floating Button with Tooltip
const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="absolute -top-10 right-11 bg-white  border-green-400 text-black text-sm font-medium px-4 py-1 rounded-full shadow-md whitespace-nowrap flex items-center before:content-[''] before:absolute before:-right-2 before:top-1/2 before:w-2 before:h-2 before:bg-white before:rotate-45 z-10"
      ></motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/+918714541871"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={45} color="white" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
