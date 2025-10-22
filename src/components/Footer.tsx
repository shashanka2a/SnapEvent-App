"use client";
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  snapEvent: {
    title: 'SnapEvent',
    links: ['About', 'Careers', 'Blog', 'Press'],
  },
  forClients: {
    title: 'For Clients',
    links: ['Find Photographers', 'Pricing', 'Help Center', 'How It Works'],
  },
  forPhotographers: {
    title: 'For Photographers',
    links: ['Join SnapEvent', 'Resources', 'FAQs', 'Success Stories'],
  },
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="6" width="16" height="12" rx="2" fill="white"/>
                <rect x="2" y="8" width="3" height="1" rx="0.5" fill="white"/>
                <circle cx="12" cy="12" r="4" fill="white"/>
                <circle cx="12" cy="12" r="2.5" fill="#666666"/>
                <circle cx="12" cy="12" r="1.5" fill="black"/>
              </svg>
              <span className="text-white">SnapEvent</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting clients with professional photographers worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* SnapEvent Links */}
          <div>
            <h4 className="text-white mb-4">{footerLinks.snapEvent.title}</h4>
            <ul className="space-y-3">
              {footerLinks.snapEvent.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Clients Links */}
          <div>
            <h4 className="text-white mb-4">{footerLinks.forClients.title}</h4>
            <ul className="space-y-3">
              {footerLinks.forClients.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Photographers Links */}
          <div>
            <h4 className="text-white mb-4">{footerLinks.forPhotographers.title}</h4>
            <ul className="space-y-3">
              {footerLinks.forPhotographers.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 SnapEvent. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#6B5BFF] transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#6B5BFF] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#6B5BFF] transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
