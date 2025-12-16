"use client";

import { motion } from "framer-motion";

export default function ImpactSection() {
  const stats = [
    { label: "Students Participated", value: "12,500+" },
    { label: "Workshops & Conferences", value: "85+" },
    { label: "Cities Impacted", value: "40+" },
    { label: "Scholarships Facilitated", value: "300+" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Impact So Far
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow-lg rounded-xl p-8 text-center border border-gray-200"
            >
              <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600 mt-2 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
