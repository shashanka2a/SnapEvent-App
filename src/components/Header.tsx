"use client";
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="6" width="16" height="12" rx="2" fill="white"/>
              <rect x="2" y="8" width="3" height="1" rx="0.5" fill="white"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
              <circle cx="12" cy="12" r="2.5" fill="#666666"/>
              <circle cx="12" cy="12" r="1.5" fill="black"/>
            </svg>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SnapEvent</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Find Photographers
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              How It Works
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Pricing
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
