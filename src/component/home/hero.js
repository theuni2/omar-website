// components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-white pt-24 pb-16 text-center">
      {/* Badge */}
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium text-gray-700">
        Made for Students
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl mx-auto px-4 leading-tight">
        Dream it. <span className="text-blue-600">Pitch it.</span> Own it.
      <br/>
Your Ideas, Your Stage. 
      </h1>
 
      {/* Subtext */}
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto px-4">
        Learn, create, and compete through real-world entrepreneurship challenges.
      </p>

      {/* Search Bar */}
      {/* <div className="mt-10 max-w-xl mx-auto px-4">
        <div className="w-full h-12 flex items-center px-4 border border-gray-300 rounded-xl shadow-sm">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-500 mr-3"
          >
            <path
              d="M21 21l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <input
            type="text"
            placeholder="Search ideas, topics, sessions..."
            className="w-full outline-none text-gray-700"
          />
        </div>
      </div> */}

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
        {[
          "All",
          "Pitch Ideas",
          "Workshops",
          "Innovation",
         
        ].map((item, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-lg border text-sm font-medium ${
              index === 1
                ? "border-blue-600 text-blue-600 bg-blue-50"
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

