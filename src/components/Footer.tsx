import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MessageCircle, Shield } from 'lucide-react';
import { HardwareBadge } from './HardwareBadge';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open('https://wa.me/94771234567?text=Hi%20CCTV%20Vision%20Lanka', '_blank');
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative pulse line network node */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#2D9CFF]/30 to-transparent">
        <motion.div 
          className="w-10 h-[1.5px] bg-[#5BD8FF]" 
          animate={{ left: ['0%', '100%'] }} 
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          style={{ position: 'absolute' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Logo and Info */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <HardwareBadge />
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-sm tracking-wider text-white">
                CCTV VISION
              </span>
              <span className="font-mono text-[8px] text-[#5BD8FF] tracking-widest">
                LANKA SECURITY
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Sri Lanka's premium CCTV surveillance, smart AI integrations, and professional installation solutions. Protecting homes, commercial offices, and industrial hubs island-wide.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            {[
              { 
                icon: () => (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                ),
                href: 'https://facebook.com' 
              },
              { 
                icon: () => (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ),
                href: 'https://instagram.com' 
              },
              { 
                icon: () => (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                ),
                href: 'https://linkedin.com' 
              },
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <motion.a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#5BD8FF] hover:border-[#5BD8FF] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-orbitron font-bold text-xs tracking-wider text-[#5BD8FF] uppercase">
            Navigation Directories
          </h4>
          <ul className="space-y-2 text-xs text-slate-400 font-space">
            {[
              { name: 'Home System', href: '#home' },
              { name: 'Hardware Catalog', href: '#products' },
              { name: 'Benefit Matrix', href: '#why-us' },
              { name: 'Geolocation Radar', href: '#branches' },
              { name: 'Tech Showcase', href: '#tech-specs' },
            ].map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-[#5BD8FF] transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#5BD8FF] transition-colors" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-5 space-y-4">
          <h4 className="font-orbitron font-bold text-xs tracking-wider text-[#5BD8FF] uppercase">
            Secure Communications
          </h4>
          <div className="space-y-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#2D9CFF]" />
              <span>Voice: 011 453 2191</span>
            </div>
            
            {/* WhatsApp Contact with Pulsing green icon */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={handleWhatsApp}
            >
              <div className="relative">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
              </div>
              <span className="group-hover:text-emerald-400 transition-colors">
                WhatsApp Chat: 011 453 2191 (Click to Chat)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#2D9CFF]" />
              <span>Secure Mail: support@cctvvisionlanka.lk</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#2D9CFF]" />
              <span>Terminal Web: www.cctvvisionlanka.lk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
        <div>
          <span>&copy; {currentYear} CCTV Vision Lanka. All Rights Reserved. Securing Sri Lanka's Future.</span>
        </div>

        {/* Portfolio attribution */}
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-[#2D9CFF]" />
          <span>Concept and Redesign by <span className="text-[#5BD8FF] font-bold">Antigravity</span></span>
        </div>
      </div>
    </footer>
  );
};
