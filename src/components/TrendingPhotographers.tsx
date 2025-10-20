"use client";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const photographers = [
  {
    name: 'Priya Sharma',
    specialty: 'Wedding & Portrait Photographer',
    city: 'Mumbai, Maharashtra',
    rating: 4.9,
    reviews: 127,
    startingPrice: '₹85,000',
    verified: true,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Arjun Mehta',
    specialty: 'Corporate & Event Photography',
    city: 'Bangalore, Karnataka',
    rating: 5.0,
    reviews: 203,
    startingPrice: '₹95,000',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Ananya Reddy',
    specialty: 'Lifestyle & Fashion',
    city: 'Delhi, NCR',
    rating: 4.8,
    reviews: 156,
    startingPrice: '₹75,000',
    verified: true,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Vikram Singh',
    specialty: 'Portrait & Commercial',
    city: 'Pune, Maharashtra',
    rating: 4.9,
    reviews: 189,
    startingPrice: '₹80,000',
    verified: true,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
  },
];

export function TrendingPhotographers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0f0f17] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF7EB3] to-[#6B5BFF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-white mb-4">Trending Photographers</h2>
            <p className="text-gray-400 max-w-2xl">
              Highly rated professionals ready to capture your moments
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#6B5BFF] hover:gap-3 transition-all duration-300">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Scrollable Cards */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-6 min-w-max">
            {photographers.map((photographer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="w-80 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={photographer.image}
                    alt={photographer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {photographer.verified && (
                    <Badge className="absolute top-4 right-4 bg-blue-500/90 backdrop-blur-sm border-0 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-white mb-1">{photographer.name}</h4>
                  <p className="text-gray-400 mb-3">{photographer.specialty}</p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{photographer.city}</span>
                  </div>

                  {/* Rating and Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white">{photographer.rating}</span>
                      <span className="text-gray-400">({photographer.reviews})</span>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">From</p>
                      <p className="text-white">{photographer.startingPrice}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
