"use client";
import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { BrowseByCategory } from './components/BrowseByCategory';
import { TrendingPhotographers } from './components/TrendingPhotographers';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PhotographerOnboarding } from './components/PhotographerOnboarding';
import { Button } from './components/ui/button';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  if (showOnboarding) {
    return <PhotographerOnboarding />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Header />
      <Hero />
      <HowItWorks />
      <BrowseByCategory />
      <TrendingPhotographers />
      <CTASection />
      <Footer />
      
      {/* Floating CTA for Photographers */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setShowOnboarding(true)}
          className="bg-gradient-to-r from-[#6B5BFF] to-[#FF7EB3] hover:opacity-90 shadow-2xl px-6 py-6 rounded-2xl"
        >
          Join as Photographer
        </Button>
      </div>
    </div>
  );
}
