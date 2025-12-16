// import React from 'react'

// export default function Three() {
//   return (
//     <div>
//         <section className="bg-gray-50 py-20">
//   <div className="max-w-6xl mx-auto px-6">

//     {/* Section Title */}
//     <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
//       The 2-Phase Learning Framework
//     </h2>
//     <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
//       A structured journey that blends learning with real-world application. 
//       Students explore business fundamentals and then turn ideas into competitive pitches.
//     </p>

//     {/* Phase Cards */}
//     <div className="grid md:grid-cols-2 gap-8">

//       {/* Phase 1 Card */}
//       <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
//         <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
//           Phase 1 – Learn
//         </h3>
//         <p className="text-gray-700 mb-4">
//           A series of hands-on workshops & webinars delivered by experts to build 
//           a strong foundation in entrepreneurship and innovation.
//         </p>
//         <ul className="list-disc pl-5 text-gray-600 space-y-1">
//           <li>Identifying opportunities</li>
//           <li>Design thinking & innovation</li>
//           <li>Branding & marketing</li>
//           <li>Basics of investing & business strategy</li>
//         </ul>
//       </div>

//       {/* Phase 2 Card */}
//       <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
//         <h3 className="text-2xl font-semibold text-green-600 mb-3">
//           Phase 2 – Apply
//         </h3>
//         <p className="text-gray-700 mb-4">
//           Students bring their ideas to life through competitive challenges that test 
//           creativity, clarity, and strategic thinking.
//         </p>
//         <ul className="list-disc pl-5 text-gray-600 space-y-1">
//           <li>Pitch Competition</li>
//           <li>Case Challenge</li>
//           <li>Investment Challenge</li>
//           <li>Real-world problem solving</li>
//         </ul>
//       </div>
//     </div>

//   </div>
// </section>

//     </div>
//   )
// }


"use client";

import { motion } from "framer-motion";

export default function PhasesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            The 2-Phase Business Learning Journey
          </h2>
          <div className="mx-auto mt-3 w-20 h-1 bg-blue-600 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A clear path that helps students learn core business skills, then apply
            them through real-world challenges and exciting competitions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-3xl backdrop-blur-lg bg-white/70 shadow-xl border border-white/50"
          >
            <h3 className="text-2xl font-bold text-blue-700">
              Phase 1: Learn the Basics
            </h3>
            <div className="w-14 h-1 bg-blue-500 mt-2 mb-5 rounded-full"></div>

            <p className="text-gray-700 mb-4">
              Interactive workshops led by industry experts help students build a
              strong understanding of the business world.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 text-xl">•</span>
                <span className="ml-2">Identifying opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl">•</span>
                <span className="ml-2">Design thinking & innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl">•</span>
                <span className="ml-2">Branding & marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 text-xl">•</span>
                <span className="ml-2">Basics of investment & strategy</span>
              </li>
            </ul>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 rounded-3xl backdrop-blur-lg bg-white/70 shadow-xl border border-white/50"
          >
            <h3 className="text-2xl font-bold text-green-700">
              Phase 2: Apply Your Skills
            </h3>
            <div className="w-14 h-1 bg-green-500 mt-2 mb-5 rounded-full"></div>

            <p className="text-gray-700 mb-4">
              Students turn learning into action by pitching ideas, solving cases,
              and taking on investment challenges.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 text-xl">•</span>
                <span className="ml-2">Pitch Competition</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl">•</span>
                <span className="ml-2">Case Challenge</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl">•</span>
                <span className="ml-2">Investment Simulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl">•</span>
                <span className="ml-2">Real-world problem solving</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
