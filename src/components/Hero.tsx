"use client";
import { motion } from 'motion/react';
import { Search, MapPin, Users, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F]">
      {/* Animated Overlay Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Camera Lens Shimmer Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Camera className="w-96 h-96 text-white/10" strokeWidth={0.5} />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Headline */}
          <h1 className="text-white mb-6">
            Capture Life's Best Moments with{' '}
            <span className="text-white underline">
              SnapEvent
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Find the perfect photographer for your special moments. Browse portfolios, compare prices, and book with confidence.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-3 border border-white/20 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-3">
              {/* Photography Type */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <Input
                  placeholder="Photography type"
                  className="w-full pl-12 pr-4 py-6 bg-white/10 border border-white/20 rounded-2xl placeholder:text-gray-400 text-white"
                />
              </div>

              {/* Location */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <Input
                  placeholder="Location"
                  className="w-full pl-12 pr-4 py-6 bg-white/10 border border-white/20 rounded-2xl placeholder:text-gray-400 text-white"
                />
              </div>

              {/* Event Size */}
              <div className="flex-1 relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <Input
                  placeholder="Event size"
                  className="w-full pl-12 pr-4 py-6 bg-white/10 border border-white/20 rounded-2xl placeholder:text-gray-400 text-white"
                />
              </div>

              {/* CTA Button */}
              <Button className="px-8 py-6 bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:opacity-90 transition-opacity rounded-2xl shadow-lg font-semibold border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                Find Photographers
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
