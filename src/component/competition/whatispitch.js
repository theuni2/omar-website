// "use client";

// import { motion } from "framer-motion";

// export default function WhatIsPitchCompetition() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <p className="uppercase tracking-widest text-sm text-blue-600 mb-3">
//             About the Competition
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             What is the Pitch Competition?
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             The Pitch Competition is a platform where students turn ideas into
//             structured business concepts and present them with confidence.
//             It focuses on learning by doing — not just winning.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="p-8 border border-gray-200 rounded-xl shadow-sm"
//           >
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">
//               Open Business Ideas
//             </h3>
//             <p className="text-gray-600">
//               Students can present ideas from any domain — technology, education,
//               sustainability, social impact, sports, health, or student life.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="p-8 border border-gray-200 rounded-xl shadow-sm"
//           >
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">
//               Individual or Team-Based
//             </h3>
//             <p className="text-gray-600">
//               Students may participate individually or in teams of 3–5 members,
//               depending on school preference.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="p-8 border border-gray-200 rounded-xl shadow-sm"
//           >
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">
//               Learning-Focused Approach
//             </h3>
//             <p className="text-gray-600">
//               Feedback, clarity of thinking, and presentation skills matter more
//               than perfection or prior experience.
//             </p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, TrendingUp } from "lucide-react"; // Install lucide-react if needed

const WhatIsPitchCompetition = () => {
  const cards = [
    {
      title: "Open Business Ideas",
      description:
        "Students can present ideas from any domain — technology, education, sustainability, social impact, sports, health, or student life.",
      icon: <Lightbulb size={24} />,
      color: "from-blue-500 to-cyan-400",
      delay: 0,
    },
    {
      title: "Individual or Team-Based",
      description:
        "Students may participate individually or in teams of 3–5 members, depending on school preference.",
      icon: <Users size={24} />,
      color: "from-cyan-400 to-teal-400",
      delay: 0.1,
    },
    {
      title: "Learning-Focused Approach",
      description:
        "Feedback, clarity of thinking, and presentation skills matter more than perfection or prior experience.",
      icon: <TrendingUp size={24} />,
      color: "from-teal-400 to-green-500",
      delay: 0.2,
    },
  ];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden px-6">
      
      {/* --- Background Glows --- */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* --- Heading --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            About the Competition
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            What is the Pitch Competition?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The Pitch Competition is a platform where students turn ideas into
            structured business concepts and present them with confidence. It
            focuses on <span className="text-white font-medium">learning by doing</span> — not just winning.
          </p>
        </motion.div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-gray-900/40 border border-gray-800 rounded-2xl backdrop-blur-sm hover:bg-gray-900/60 hover:border-gray-700 transition-all duration-300 text-left relative overflow-hidden"
            >
              {/* Top Gradient Line on Hover */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} p-0.5 mb-6 inline-block`}>
                <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center text-white">
                    {card.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsPitchCompetition;