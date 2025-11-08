"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
              )}

              <div className="flex gap-6">
                {/* Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 flex items-center justify-center overflow-hidden shadow-lg ring-2 ring-purple-200/50">
                    {!imageErrors[index] ? (
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="object-contain p-2"
                        onError={() => handleImageError(index)}
                        unoptimized
                      />
                    ) : (
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {exp.company.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-lg font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <motion.li
                        key={highlightIndex}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + highlightIndex * 0.05,
                        }}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-purple-600 mt-1 font-bold">▸</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
