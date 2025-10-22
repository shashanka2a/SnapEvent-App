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
                <img src="/image.png" alt="SnapEvent" className="w-8 h-8" />
                <span className="text-white relative">
                  SnapEvent
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-300"></span>
                </span>
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
