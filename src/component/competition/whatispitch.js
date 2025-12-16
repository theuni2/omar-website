"use client";

import { motion } from "framer-motion";

export default function WhatIsPitchCompetition() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-widest text-sm text-blue-600 mb-3">
            About the Competition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What is the Pitch Competition?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Pitch Competition is a platform where students turn ideas into
            structured business concepts and present them with confidence.
            It focuses on learning by doing — not just winning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 border border-gray-200 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Open Business Ideas
            </h3>
            <p className="text-gray-600">
              Students can present ideas from any domain — technology, education,
              sustainability, social impact, sports, health, or student life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 border border-gray-200 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Individual or Team-Based
            </h3>
            <p className="text-gray-600">
              Students may participate individually or in teams of 3–5 members,
              depending on school preference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 border border-gray-200 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Learning-Focused Approach
            </h3>
            <p className="text-gray-600">
              Feedback, clarity of thinking, and presentation skills matter more
              than perfection or prior experience.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
