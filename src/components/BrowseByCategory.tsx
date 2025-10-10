"use client";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    title: 'Weddings',
    image: 'https://images.unsplash.com/photo-1627913759066-2f62eb9bbaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjAwOTIxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Capture your special day',
  },
  {
    title: 'Corporate',
    image: 'https://images.unsplash.com/photo-1664042346301-687bcdfcdfa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDA5MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional business events',
  },
  {
    title: 'Portraits',
    image: 'https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MDA4MjcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Personal & family portraits',
  },
  {
    title: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1679962318280-84ba9cd4f1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwaG90b2dyYXBoeSUyMG91dGRvb3J8ZW58MXx8fHwxNzYwMDkyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Candid moments & stories',
  },
];

export function BrowseByCategory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#0f0f17] relative">
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
          <button className="hidden md:flex items-center gap-2 text-[#6B5BFF] hover:gap-3 transition-all duration-300">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <ImageWithFallback
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6B5BFF]/50 rounded-3xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-[#6B5BFF] hover:gap-3 transition-all duration-300">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
