"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Github, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        console.error("Form submission error:", data.error);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Let&apos;s Connect</h3>
              <p className="text-gray-600 mb-6">
                Interested in collaborating or hiring me? Let&apos;s build something impactful together.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </motion.button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-green-500 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}

            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-red-500 text-center"
              >
                Failed to send message. Please try again or email directly.
              </motion.p>
            )}

            <p className="text-xs text-muted-foreground text-center">
              Your message will be sent directly to my email. I&apos;ll get back to you soon!
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

