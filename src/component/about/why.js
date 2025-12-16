"use client";

import { motion } from "framer-motion";

export default function WhyCompetitionSection() {
  const points = [
    {
      title: "Ideas Without Platforms",
      desc: "Students have creative ideas but very few opportunities to express, test, and refine them in a real-world setting.",
    },
    {
      title: "Learning Without Application",
      desc: "Business concepts are often taught theoretically, without hands-on experience or practical challenges.",
    },
    {
      title: "Confidence Comes From Doing",
      desc: "Presenting ideas, receiving feedback, and working in teams helps students build confidence and clarity.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">
            Why This Competition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Turning Curiosity Into Real-World Thinking
          </h2>
          <p className="text-lg text-gray-600">
            This competition was designed to bridge the gap between learning
            business concepts and applying them through ideas, strategy, and
            presentation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
