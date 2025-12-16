import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center">
        
        {/* Logo + Brand */}
        <a className="flex items-center title-font font-medium text-gray-900">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="ml-3 text-xl font-semibold tracking-wide">
            Pitch Competition
          </span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">
          © 2025 Pitch Competition 
          <a
            href="https://twitter.com/knyttneve"
            className="ml-1 text-indigo-600 hover:text-indigo-800 transition"
            target="_blank"
          >
        
          </a>
        </p>

        {/* Social Icons */}
        {/* <span className="flex sm:ml-auto sm:mt-0 mt-4 space-x-4">
          <a className="text-gray-500 hover:text-indigo-600 transition">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5..." />
            </svg>
          </a>
          <a className="text-gray-500 hover:text-indigo-600 transition">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10..." />
            </svg>
          </a>
          <a className="text-gray-500 hover:text-indigo-600 transition">
            <svg
              fill="none"
              stroke="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4..." />
            </svg>
          </a>
          <a className="text-gray-500 hover:text-indigo-600 transition">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6..." />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </span> */}
      </div>
    </footer>
  );
}
