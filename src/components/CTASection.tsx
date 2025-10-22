"use client";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0F]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-white mb-6">
            Ready to capture your special moments?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect photographer on <span className="text-white relative">
              SnapEvent
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-300"></span>
            </span>
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="px-10 py-7 bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:opacity-90 rounded-2xl shadow-2xl group font-semibold border-2 border-white/20 hover:border-white/40 transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
