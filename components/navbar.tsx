"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const pathname = usePathname();
  const lastScrollY = useRef(0);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programmes", label: "Programmes" },
    { href: "/mind-refreshment-studio", label: "Mind Refreshment Studio" },
    { href: "/contact", label: "Contact" },
  ];

  // Check if we're on home page and haven't scrolled past header
  const isInitialState = pathname === "/" && !isScrolled;

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNavbar(
        currentScrollY < lastScrollY.current || currentScrollY < 50
      );
      setIsScrolled(currentScrollY > 30);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <div
        className={`flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 rounded-2xl transition-all duration-500 backdrop-blur-lg ${
          isInitialState ? "bg-transparent shadow-md" : "bg-white/90 shadow-lg"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/mendiv.png"
              alt="Mendiv"
              width={120}
              height={40}
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-lato transition-colors duration-300 ${
                isInitialState
                  ? "text-white hover:text-green-500"
                  : "text-black hover:text-green-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Now Button + Mobile Menu Button */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="hidden lg:inline-block px-5 py-2 rounded-full font-lato font-semibold transition-all duration-300 bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg"
          >
            Book Now
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isInitialState
                  ? "text-white hover:text-green-500"
                  : "text-black hover:text-green-600"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black font-medium text-lg hover:text-green-600 transition-colors duration-200 w-full py-2"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Book Now Button */}
              <div className="w-full mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
                >
                  Book a call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
