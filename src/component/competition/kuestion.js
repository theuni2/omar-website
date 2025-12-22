"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the requirements for the pitch?",
      answer: (
        <div className="space-y-3">
          <p>Your pitch should be <strong>3–5 minutes long</strong> (live or recorded based on school preference). It must clearly articulate:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400">
            <li>The Problem & Solution</li>
            <li>Target Audience</li>
            <li>Basic Business Model</li>
            <li>Expected Impact</li>
            <li>Why the idea matters to students</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How will the pitches be judged?",
      answer: (
        <div className="space-y-4">
          <p>Projects are evaluated based on the following weighted criteria:</p>
          <div className="grid gap-3">
            {[
              { label: "Creativity & Originality", value: "30%" },
              { label: "Clarity of Problem & Solution", value: "25%" },
              { label: "Business Feasibility", value: "20%" },
              { label: "Presentation Skills", value: "15%" },
              { label: "Impact", value: "10%" },
            ].map((criterion, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-gray-300">{criterion.label}</span>
                <span className="font-mono font-bold text-blue-400">{criterion.value}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      question: "Who is eligible to participate?",
      answer: (
        <p>
          The competition is open to students in <strong>Grades 8–12</strong> (subject to school adjustments). All ideas presented must be original work.
        </p>
      ),
    },
    {
      question: "Can I participate individually or do I need a team?",
      answer: (
        <p>
          You have the flexibility to choose! You can join <strong>individually</strong> or form a group of <strong>3–5 members</strong>. Note that teams must comply strictly with submission deadlines.
        </p>
      ),
    },
    {
      question: "Do I need a slide deck or poster?",
      answer: (
        <p>
          Visual aids such as slides or posters are <strong>allowed but not mandatory</strong>. However, they can help in the "Presentation Skills" criteria if they enhance clarity.
        </p>
      ),
    },
    {
      question: "Can parents or mentors help?",
      answer: (
        <p>
          Professional assistance (from parents or mentors) should be limited to <strong>guidance only</strong>. The core idea, execution, and presentation must be the students' own work.
        </p>
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden px-6">
      
      {/* --- Background Ambient Glow --- */}
      <div className="absolute top-[30%] right-0 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto z-10 relative">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-sm font-semibold mb-4 border border-blue-800/30">
            <HelpCircle size={14} /> Support
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Questions</span>
          </h2>
        </motion.div>

        {/* --- Accordion Items --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border rounded-xl transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-gray-900/60 border-blue-500/50" 
                  : "bg-gray-900/20 border-gray-800 hover:border-gray-700"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-medium transition-colors ${activeIndex === index ? "text-white" : "text-gray-300"}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-blue-500/20 text-blue-400 rotate-180" : "bg-gray-800 text-gray-400"}`}>
                  <ChevronDown size={20} />
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;