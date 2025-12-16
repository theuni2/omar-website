'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [phasesOpen, setPhasesOpen] = useState(false);

  // close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
    setPhasesOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Competition",
      href: "/competition",
    
    },
    { label: "Conference", href: "/conference" },
    { label: "Register", href: "/register" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white font-bold">B</div>
              <div className="hidden sm:block">
                <div className="text-lg font-semibold text-slate-700">Business Through Ideas</div>
                <div className="text-xs text-slate-500">Pitch & Strategy Series</div>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {!item.submenu ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href) ? "text-white bg-blue-600" : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div
                    tabIndex={0}
                    onMouseEnter={() => setPhasesOpen(true)}
                    onMouseLeave={() => setPhasesOpen(false)}
                    className="flex items-center gap-1 cursor-pointer select-none"
                  >
                    <button
                      aria-haspopup="true"
                      aria-expanded={phasesOpen}
                      onClick={() => setPhasesOpen((s) => !s)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href) ? "text-white bg-blue-600" : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </button>

                    {/* Submenu */}
                    {phasesOpen && (
                      <div className="absolute top-full mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md py-2 z-50">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-4 py-2 text-sm ${isActive(sub.href) ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-gray-50"}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link href="/register" className="hidden md:inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium">
              Register
            </Link>

            <button
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-md text-slate-600 hover:bg-gray-100"
              onClick={() => setMobileOpen((s) => !s)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {!item.submenu ? (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href) ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-gray-50"}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setPhasesOpen((s) => !s)}
                      className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${isActive(item.href) ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-gray-50"}`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{item.label}</span>
                        <svg className={`w-5 h-5 transform ${phasesOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </button>

                    {phasesOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(sub.href) ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-gray-50"}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="px-3 py-3">
              <Link href="/register" className="block text-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



