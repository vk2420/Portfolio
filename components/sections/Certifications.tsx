"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award, CheckCircle2, Clock } from "lucide-react";

export default function Certifications() {
  const getStatusIcon = (status: string) => {
    if (status.includes("Completed") || status.includes("11/13")) {
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    }
    if (status.includes("Progress") || status.includes("In Progress")) {
      return <Clock className="h-5 w-5 text-yellow-500" />;
    }
    return <Award className="h-5 w-5 text-muted-foreground" />;
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 border border-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  {getStatusIcon(cert.status)}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-sm font-medium text-muted-foreground">
                    {cert.status}
                  </span>
                  <span className="text-sm text-muted-foreground">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

