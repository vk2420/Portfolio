"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import {
  Github,
  ExternalLink,
  ClipboardList,
  Network,
  Truck,
  Boxes,
  Container,
  Building2,
  Sparkles,
  LineChart,
  Rocket,
} from "lucide-react";
import Image from "next/image";

const projectIcons: Record<string, typeof Rocket> = {
  "Skill Matrix System": ClipboardList,
  "KSA Home Network Optimizer": Network,
  "AI-Assisted Delivery Tracker": Truck,
  "Pallet Tracking System": Boxes,
  "Container Tracking Platform": Container,
  "Mulk AI": Building2,
  "AI Skin-Care Recommendation Platform": Sparkles,
  "Options Trading Assistant": LineChart,
};

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-indigo-300 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
                {!imageErrors[index] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={() => handleImageError(index)}
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200">
                    <div className="text-center p-4">
                      {(() => {
                        const Icon = projectIcons[project.title] ?? Rocket;
                        return (
                          <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-white/70 flex items-center justify-center shadow-sm">
                            <Icon className="h-7 w-7 text-indigo-700" />
                          </div>
                        );
                      })()}
                      <p className="text-sm font-semibold text-indigo-900">{project.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {"badge" in project && project.badge && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                    {project.badge as string}
                  </span>
                )}
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                {/* Problem → Solution → Impact */}
                <div className="space-y-3 text-sm">
                  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r">
                    <span className="font-semibold text-red-700">Problem: </span>
                    <span className="text-red-600">{project.problem}</span>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
                    <span className="font-semibold text-blue-700">Solution: </span>
                    <span className="text-blue-600">{project.solution}</span>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r">
                    <span className="font-semibold text-green-700">Impact: </span>
                    <span className="text-green-600">{project.impact}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => {
                    const colors = [
                      "bg-blue-100 text-blue-700 border-blue-200",
                      "bg-indigo-100 text-indigo-700 border-indigo-200",
                      "bg-purple-100 text-purple-700 border-purple-200",
                      "bg-teal-100 text-teal-700 border-teal-200",
                    ];
                    const colorClass = colors[techIndex % colors.length];
                    return (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 ${colorClass} rounded-full text-xs font-medium border`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                  {project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
