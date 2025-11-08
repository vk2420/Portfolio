"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { about } from "@/data/portfolio";
import Image from "next/image";

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center ring-4 ring-blue-200/50">
              {!imageError ? (
                <Image
                  src="/profile.jpg"
                  alt="Vishal Khandelwal"
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="text-6xl font-bold text-gray-400">
                  VK
                </div>
              )}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base text-gray-600 leading-relaxed">
              {about.bio}
            </p>

            {/* Key Skills Grid */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Key Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {about.keySkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg text-sm font-medium text-blue-900 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
