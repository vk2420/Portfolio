"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getAllCaseStudies } from "@/data/case-studies";
import {
  Calendar,
  Clock,
  Tag,
  ClipboardList,
  Network,
  Truck,
  Building2,
  Rocket,
} from "lucide-react";
import Image from "next/image";

const caseStudyIcons: Record<string, typeof Rocket> = {
  "skill-matrix-system": ClipboardList,
  "ksa-home-network-optimizer": Network,
  "ai-assisted-delivery-tracker": Truck,
  "mulk-ai": Building2,
};

export default function CaseStudies() {
  const caseStudies = getAllCaseStudies();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  if (caseStudies.length === 0) {
    return null; // Don't show section if no case studies
  }

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Case Studies & Product Ideas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deep dives into product thinking, problem-solving, and innovative solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            
            return (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
                    {!imageErrors[index] ? (
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(index)}
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-4">
                          {(() => {
                            const Icon = caseStudyIcons[study.slug] ?? Rocket;
                            return (
                              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-white/70 flex items-center justify-center shadow-sm">
                                <Icon className="h-8 w-8 text-purple-700" />
                              </div>
                            );
                          })()}
                          <p className="text-lg font-semibold text-purple-900">{study.title}</p>
                        </div>
                      </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full shadow-md">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(study.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{study.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {study.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">{study.excerpt}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200"
                        >
                          <Tag className="h-3 w-3 inline mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      {/* Overview */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Overview</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{study.content.overview}</p>
                      </div>

                      {/* Problem */}
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                        <h4 className="font-semibold text-red-700 mb-2">Problem</h4>
                        <p className="text-sm text-red-600">{study.content.problem}</p>
                      </div>

                      {/* Solution */}
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                        <h4 className="font-semibold text-blue-700 mb-2">Solution</h4>
                        <p className="text-sm text-blue-600">{study.content.solution}</p>
                      </div>

                      {/* Impact */}
                      {study.content.impact && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r">
                          <h4 className="font-semibold text-green-700 mb-2">Impact</h4>
                          <p className="text-sm text-green-600">{study.content.impact}</p>
                        </div>
                      )}

                      {/* Key Features */}
                      {study.content.keyFeatures && study.content.keyFeatures.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {study.content.keyFeatures.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="text-purple-600 mt-1">▸</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack */}
                      {study.content.techStack && study.content.techStack.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.content.techStack.map((tech, techIndex) => {
                              const colors = [
                                "bg-blue-100 text-blue-700 border-blue-200",
                                "bg-indigo-100 text-indigo-700 border-indigo-200",
                                "bg-purple-100 text-purple-700 border-purple-200",
                                "bg-pink-100 text-pink-700 border-pink-200",
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
                        </div>
                      )}

                      {/* Challenges */}
                      {study.content.challenges && study.content.challenges.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenges</h4>
                          <ul className="space-y-1">
                            {study.content.challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="text-orange-600 mt-1">▸</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Learnings */}
                      {study.content.learnings && study.content.learnings.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Learnings</h4>
                          <ul className="space-y-1">
                            {study.content.learnings.map((learning, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="text-teal-600 mt-1">▸</span>
                                <span>{learning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Next Steps */}
                      {study.content.nextSteps && (
                        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r">
                          <h4 className="font-semibold text-indigo-700 mb-2">Next Steps</h4>
                          <p className="text-sm text-indigo-600">{study.content.nextSteps}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
