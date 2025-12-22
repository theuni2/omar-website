// "use client";

// import { motion } from "framer-motion";

// export default function PitchHero() {
//   return (
//     <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-28 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="uppercase tracking-widest text-sm text-blue-100 mb-4">
//             Pitch Competition
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Business for Sports  
//             <span className="block text-green-200">
//               Where Ideas Turn Into Action
//             </span>
//           </h1>

//           <p className="text-lg text-blue-100 max-w-xl mb-10">
//             A student-led pitch competition where young minds create, present,
//             and refine sports-related business ideas while learning real-world
//             thinking from industry experts and judges.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">
//               Register Now
//             </button>
//             <button className="px-8 py-3 border border-white/40 rounded-lg hover:bg-white/10 transition">
//               View Guidelines
//             </button>
//           </div>
//         </motion.div>

//         {/* Visual */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur">
//             <img
//               src="/img/about_img_hero.png" // competition image
//               alt="Students pitching business idea"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Decorative glow */}
//           <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-40"></div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Optional icon, install lucide-react or remove

const PitchCompetition = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center py-20 px-6">
      
      {/* --- Background Gradient Blobs (Blue & Green) --- */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* --- Left Content --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Tag */}
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-md">
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              Global Edition
            </span>
          </div>

          {/* Title with Gradient */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-500">
                Business Pitch
              </span>{" "}
              <br />
              Competition
            </h1>
            
          </div>

          {/* Description Text */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            This initiative was founded with a simple belief — students learn best 
            when they are given the space to think, create, and present real ideas. 
            The competition bridges learning with real-world business exposure.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-green-500/40 transition-all"
            >
              Apply Now
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-gray-600 text-white font-medium flex items-center gap-2 transition-all"
            >
              View Details <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* --- Right Image Card --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Card Container */}
          <div className="relative group rounded-2xl p-4 bg-gray-900/40 border border-gray-800 backdrop-blur-sm hover:border-blue-500/30 transition-colors duration-500">
            
            {/* Image Placeholder area */}
            <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-800">
               {/* Replace src with your actual image */}
               <img 
                 src="/api/placeholder/800/600" 
                 alt="Students working on business pitch"
                 className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
               />
               
               {/* Overlay Gradient on Image */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Card Footer Text */}
            <div className="mt-4 flex justify-between items-center text-xs md:text-sm font-mono text-gray-400">
              <span>Strategy • Innovation</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                Live
              </span>
            </div>
          </div>

          {/* Decorative Elements behind card */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-gray-800 rounded-2xl opacity-50" />
        </motion.div>

      </div>
    </section>
  );
};

export default PitchCompetition;