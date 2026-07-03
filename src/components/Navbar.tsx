import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Menu, X, ShieldAlert } from 'lucide-react';
import { HardwareBadge } from './HardwareBadge';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Branches', href: '#branches' },
    { name: 'Tech Specs', href: '#tech-specs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/94771234567?text=Hello%20CCTV%20Vision%20Lanka', '_blank');
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'glass-panel-heavy py-3 border-[#2D9CFF]/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent py-5 border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Logo and Badge */}
        <div className="flex items-center gap-3">
          <HardwareBadge />
          <div className="flex flex-col">
            <span className="font-orbitron font-extrabold text-sm md:text-base tracking-wider text-white leading-tight text-glow">
              CCTV VISION
            </span>
            <span className="font-mono text-[8px] md:text-[9px] text-[#5BD8FF] tracking-widest leading-none">
              LANKA SECURITY
            </span>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-xs font-space font-medium text-slate-300 hover:text-white uppercase tracking-wider transition-colors duration-300 py-1"
              whileHover="hover"
            >
              <span>{link.name}</span>
              
              {/* Blue Underline Reveal */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#5BD8FF]"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1 }
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              />

              {/* Blue lens flare overlay on hover */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-[#2D9CFF]/20 rounded-full blur-md opacity-0 pointer-events-none"
                variants={{
                  hover: { opacity: 1 }
                }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Right CTA / WhatsApp floating trigger */}
        <div className="flex items-center gap-4">
          <motion.button
            className="glass-panel text-white border border-[#2D9CFF]/40 rounded-xl px-4 py-2 flex items-center gap-2 font-space text-xs font-semibold cursor-pointer relative overflow-hidden group shadow-[0_0_15px_rgba(45,156,255,0.1)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppChat}
          >
            {/* Pulsing inner green circle */}
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute top-1.5 right-1.5" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute top-2 right-2" />

            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:animate-bounce" />
            <span className="hidden sm:inline">Order on WhatsApp</span>
            <span className="sm:hidden">Chat Now</span>

            {/* Glowing background flow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2D9CFF]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
          </motion.button>

          {/* Mobile menu trigger */}
          <button 
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-[60px] bg-[#050505]/95 border-b border-[#2D9CFF]/15 backdrop-blur-xl z-40 py-6 px-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-space font-medium text-slate-300 hover:text-[#5BD8FF] uppercase py-2 tracking-wider border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
