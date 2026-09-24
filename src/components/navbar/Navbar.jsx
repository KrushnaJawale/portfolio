import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Glassmorphic Main Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg shadow-black/10">

          {/* Logo with Solid White Background Container & Black Text */}
          <a
            href="#home"
            className="px-4 py-1.5 rounded-xl bg-white text-black font-bold tracking-tight text-lg shadow-sm hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            K TECH
          </a>

          {/* Menu Icon with Solid White Background Container & Black Icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2.5 rounded-xl bg-white text-black hover:bg-gray-100 shadow-sm transition-all cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-black" />
          </button>

        </div>
      </header>

      {/* Glassmorphic Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Dark Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Sidebar Panel */}
        <aside
          className={`absolute top-0 right-0 w-80 h-full bg-[#080d1a]/90 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="px-3 py-1 rounded-lg bg-white text-black font-bold text-base">
                K TECH
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-white text-black hover:bg-gray-100 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 flex flex-col gap-3">
              {["Home", "About", "Services", "Projects", "Certificates", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all font-medium text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="pt-6 border-t border-white/10">
            <a href="#contact" className="w-full text-center block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer">
              Let's Talk
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}