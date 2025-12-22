"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Trophy } from "lucide-react"; // Optional icons

const ProgramPhases = () => {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden px-6">
      
      {/* --- Background Glows --- */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Program Structure
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Learn first, then apply. The program is designed in two phases to
            help students build confidence before competing.
          </p>
        </motion.div>

        {/* --- Phase 1: Learning (Blue Theme) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group bg-gray-900/50 border border-blue-900/50 rounded-2xl p-8 md:p-12 mb-8 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-500"
        >
          {/* Vertical Decoration Line */}
          <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-r-full" />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/20">
                <BookOpen size={14} /> Phase 1
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Learning Phase
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Students attend interactive workshops and webinars to understand
                the fundamentals of business, innovation, and pitching.
              </p>

              <div className="bg-blue-900/10 border border-blue-800/30 rounded-xl p-6">
                <h4 className="font-semibold text-blue-200 mb-2">Outcome</h4>
                <p className="text-gray-400 text-sm">
                  Students gain clarity, creativity, and confidence to convert
                  ideas into structured business concepts.
                </p>
              </div>
            </div>

            <div className="flex-1 border-l border-gray-800 md:pl-8 flex items-center">
               <ul className="space-y-4 text-gray-300">
                  {[
                    "Identifying business opportunities",
                    "Design thinking & innovation",
                    "Branding and customer needs",
                    "Business models & strategy",
                    "Fundamentals of pitching"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </motion.div>

        {/* --- Phase 2: Competition (Green Theme) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group bg-gray-900/50 border border-green-900/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-green-500/50 transition-colors duration-500"
        >
          {/* Vertical Decoration Line */}
          <div className="absolute right-0 top-12 bottom-12 w-1 bg-gradient-to-b from-green-500 to-transparent rounded-l-full" />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 order-2 md:order-1 border-l border-gray-800 md:border-l-0 md:border-r md:pr-8 grid gap-4">
               
               {/* Card 1 */}
               <div className="bg-gray-800/50 hover:bg-gray-800 transition-colors p-5 rounded-xl border border-gray-700/50">
                  <h4 className="font-semibold text-green-300 mb-2">Pitch Competition</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    3–5 minute pitch explaining the problem, solution, target
                    audience, business model, and impact.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-gray-800/50 hover:bg-gray-800 transition-colors p-5 rounded-xl border border-gray-700/50">
                  <h4 className="font-semibold text-green-300 mb-2">Investment Challenge</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Optional challenge where students analyze a business scenario
                    or evaluate a startup idea.
                  </p>
               </div>

            </div>

            <div className="flex-1 order-1 md:order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4 border border-green-500/20">
                <Trophy size={14} /> Phase 2
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Competition Phase
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Students apply their learning by pitching original business ideas
                individually or in teams. This is where theory meets practice in a high-energy environment.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProgramPhases;