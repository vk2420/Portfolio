"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-lg text-sm font-medium text-teal-900 shadow-md hover:shadow-lg hover:border-teal-300 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
