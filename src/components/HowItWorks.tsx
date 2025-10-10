"use client";
import { motion } from 'motion/react';
import { Search, GitCompare, CreditCard } from 'lucide-react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Browse verified photographers',
    description: 'Explore our curated collection of professional photographers, all verified and rated by real clients.',
  },
  {
    number: '2',
    icon: GitCompare,
    title: 'Compare packages',
    description: 'Review detailed portfolios and pricing packages. Read authentic customer reviews to find the perfect match.',
  },
  {
    number: '3',
    icon: CreditCard,
    title: 'Book securely with SnapEvent',
    description: 'Complete your booking with our secure payment system. Your money is protected until the job is done.',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#6B5BFF] to-[#FF7EB3] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Getting started with SnapEvent is simple. Follow these three easy steps to find and book your perfect photographer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#6B5BFF] to-[#FF7EB3] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-[#6B5BFF]/20 to-[#FF7EB3]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#6B5BFF]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6B5BFF]/0 to-[#FF7EB3]/0 group-hover:from-[#6B5BFF]/5 group-hover:to-[#FF7EB3]/5 rounded-3xl transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
