"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">
            About the Founder & Competition
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Building Young Entrepreneurs Through  
            <span className="text-green-600"> Ideas, Pitch & Strategy</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            This initiative was founded with a simple belief — students learn best
            when they are given the space to think, create, and present real ideas.
            The competition bridges learning with real-world business exposure.
          </p>

          <div className="flex gap-4">
            <button className="px-7 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
              Explore the Competition
            </button>
            <button className="px-7 py-3 border border-gray-300 rounded-lg text-lg text-gray-700 hover:bg-gray-100 transition">
              Meet the Founder
            </button>
          </div>
        </motion.div>

        {/* Visual / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/img/about_img_hero.png" // replace with your generated image
              alt="Students presenting business ideas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-green-100 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}

