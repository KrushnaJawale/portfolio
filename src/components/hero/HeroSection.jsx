import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import RippleDistortion from "./RippleDistortion";

export default function FullHeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080d1a] font-sans text-white overflow-hidden">
      

      {/* 2. HERO SECTION WITH RIPPLE DISTORTION BACKGROUND */}
      <section id="home" className="relative h-screen min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
        {/* Background Ripple Distortion Layer */}
        <div className="absolute inset-0 z-0">
          <RippleDistortion
             brushSize={180}
            strength={0.25}
            swirl={1}
            rings={4}
            spread={4}
            fade={3}
            spacing={12}
            dispersion={0.05}
            glint={0.3}
            tint="#3b82f6"
            tintAmount={0.25}
            grayscale={false}
            trigger="both"
            quality="high"
            className="w-full h-full opacity-60"
          />
          </div>

        {/* Dynamic Glowing Ambient Highlights */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Content Area */}
        <div className="max-w-4xl mx-auto w-full text-center relative z-10 my-auto flex flex-col items-center">
         
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15]">
            Hello! I am{" "}
            <span className="text-yellow-500">
              Krushna
            </span>
            <br />
            <span className="text-gray-300">Full-Stack Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed mt-4 md:mt-6">
            Building full-stack applications, backend systems, APIs, and AI-powered solutions with a focus on practical engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 md:mt-8 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 cursor-pointer active:scale-95">
              Contact Now
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-gray-100 border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95">
              Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}