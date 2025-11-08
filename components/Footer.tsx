"use client";

import { Linkedin, Github, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: personalInfo.linkedin,
    },
    {
      name: "GitHub",
      icon: Github,
      href: personalInfo.github,
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Vishal Khandelwal. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
