"use client";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    title: 'Weddings',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop',
    description: 'Capture your special day',
  },
  {
    title: 'Corporate',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    description: 'Professional business events',
  },
  {
    title: 'Portraits',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    description: 'Personal & family portraits',
  },
  {
    title: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop',
    description: 'Candid moments & stories',
  },
];

export function BrowseByCategory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#1a1a1a] relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-white mb-4">Browse by Category</h2>
            <p className="text-gray-400 max-w-2xl">
              Discover photographers specialized in your type of event
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white hover:gap-3 transition-all duration-300">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <ImageWithFallback
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay + Shine */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="pointer-events-none absolute -top-4 -left-4 w-1/2 h-full rotate-12 bg-white/10 translate-x-[-120%] group-hover:translate-x-[180%] transition-transform duration-700" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-3xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all duration-300">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
