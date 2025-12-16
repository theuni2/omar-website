"use client";

import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/img/founder.png" // replace with founder image
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Accent */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-green-600 mb-4">
            The Founder
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Idea Started With a Simple Question
          </h2>

          <p className="text-gray-600 text-lg mb-5 leading-relaxed">
            Why do students learn about business but rarely get the chance to
            experience it? The founder noticed that while young minds are full
            of ideas, they often lack platforms that encourage practical thinking,
            confidence, and real-world exposure.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            This competition was created to change that — to give students a
            space where ideas are respected, learning is hands-on, and growth
            comes from participation, not just winning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
