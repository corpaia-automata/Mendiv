"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Mobile Footer */}
        <div className="lg:hidden text-center mb-8">
          <div className="flex flex-col items-center space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/mendiv.png"
                alt="Mendiv Logo"
                width={200}
                height={70}
                className="object-contain"
              />
            </Link>

            {/* Tagline */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Enhancing mental and physical well-being with innovative, adaptive
              wellness solutions.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 justify-center mt-4">
              <Link
                href="https://www.linkedin.com/company/mendiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@mendiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/mendiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/mendiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="mt-6 px-8 py-3 bg-green-600 text-white text-base font-medium rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Desktop Footer - Hidden on Mobile */}
        <div className="hidden lg:grid grid-cols-4 gap-12 text-left">
          {/* Brand (Desktop Only) */}
          <div className="flex flex-col items-start space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/mendiv.png"
                alt="Mendiv Logo"
                width={200}
                height={70}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed ">
              Mind Scape Wellness Private Limited enhancing mental and physical
              well-being with innovative, adaptive wellness solutions.
            </p>
            <div className="flex space-x-8 mt-1 ">
              <Link
                href="https://www.linkedin.com/company/mendiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-7 w-7" />
              </Link>
              <Link
                href="https://www.youtube.com/@mendiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="h-7 w-7" />
              </Link>
              <Link
                href="https://www.instagram.com/mendiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-7 w-7" />
              </Link>
              <Link
                href="https://twitter.com/mendiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-7 w-7" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start space-y-4 ps-20">
            <h3 className="font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Programmes", href: "/Programmes" },
                { name: "Why Choose Us", href: "/about" },
                // { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-green-600 text-sm transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="font-semibold text-gray-800">Our Office</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                3rd Floor, Hilite Business Park, Phase T2, HiLite City,
                Thondayad Bypass, Kozhikode, 673014, India
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start space-y-4 px-20">
            <h3 className="font-semibold text-gray-800">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-500 text-sm">info@mendiv.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-500 text-sm">+91 8714541871</span>
              </div>
              <Link
                href="https://wa.me/918714541871"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-500 hover:text-green-600 text-sm transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5 text-green-600" />
                <span>WhatsApp Support</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Always Visible */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} MENDIV Mind Scape Wellness Pvt Ltd. All
            rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
