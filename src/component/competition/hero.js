"use client";

import { motion } from "framer-motion";

export default function PitchHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-sm text-blue-100 mb-4">
            Pitch Competition
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Business for Sports  
            <span className="block text-green-200">
              Where Ideas Turn Into Action
            </span>
          </h1>

          <p className="text-lg text-blue-100 max-w-xl mb-10">
            A student-led pitch competition where young minds create, present,
            and refine sports-related business ideas while learning real-world
            thinking from industry experts and judges.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">
              Register Now
            </button>
            <button className="px-8 py-3 border border-white/40 rounded-lg hover:bg-white/10 transition">
              View Guidelines
            </button>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur">
            <img
              src="/img/about_img_hero.png" // competition image
              alt="Students pitching business ideas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative glow */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}
