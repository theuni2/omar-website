"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Clock, CheckCircle } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // --- Countdown Logic ---
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the launch date here (e.g., 2 weeks from now)
    const targetDate = new Date("2026-01-31T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Add your backend submission logic here
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5s
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden px-4 py-20">
      
      {/* --- Background Ambient Glows --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-sm font-medium tracking-widest text-blue-400 backdrop-blur-md uppercase">
            <Clock size={14} /> Conference Coming Soon...
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tight leading-tight">
            We Are <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-green-500">
              Launching Soon
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            The ultimate student business pitch competition is returning. 
            Get ready to innovate, create, and present your ideas to the world.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/40 border border-gray-800 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center hover:border-blue-500/30 transition-colors duration-300"
            >
              <span className="text-4xl md:text-5xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="mt-2 text-xs md:text-sm text-gray-500 uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Notify Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto pt-8"
        >
          {isSubmitted ? (
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-4 rounded-xl flex items-center justify-center gap-3"
             >
                <CheckCircle size={20} />
                <span className="font-medium">You've been added to the waitlist!</span>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative group">
              {/* Glowing Border Gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full opacity-25 group-hover:opacity-75 blur transition duration-500"></div>
              
              <div className="relative flex items-center bg-black rounded-full p-1.5 border border-gray-800 focus-within:border-gray-600 transition-colors">
                <div className="pl-4 text-gray-500">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates"
                  className="w-full bg-transparent text-white placeholder-gray-500 px-4 py-3 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
                >
                  Notify Me <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
          <p className="mt-4 text-sm text-gray-600">
            We respect your privacy. No spam, ever.
          </p>
        </motion.div>

      </div>
    </section>
  );
}