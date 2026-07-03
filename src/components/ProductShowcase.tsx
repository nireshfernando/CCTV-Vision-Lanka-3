import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Radio, Cpu, HardDrive, Shield, ShoppingCart, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
  price: string;
  icon: React.ComponentType<any>;
}

const products: Product[] = [
  {
    id: 'wifi',
    name: 'Smart WiFi Cameras',
    tag: 'WIRELESS SURVEILLANCE',
    description: 'High-definition wireless smart home cameras featuring AI motion tracking and real-time remote configuration.',
    features: ['360° Pan & Tilt', 'Two-Way Audio', 'Cloud & SD Storage', 'Human Detection'],
    price: 'Rs. 12,500 Upwards',
    icon: Wifi,
  },
  {
    id: '4g',
    name: '4G LTE Bullet Cameras',
    tag: 'REMOTE SURVEILLANCE',
    description: 'Off-grid cellular security cameras operating via SIM card, perfect for agricultural lands, sites, and remote properties.',
    features: ['No Router Needed', 'Solar Panel Support', 'IP67 Waterproof', 'Night Vision'],
    price: 'Rs. 18,900 Upwards',
    icon: Radio,
  },
  {
    id: 'nvr',
    name: 'Enterprise NVR Systems',
    tag: 'CENTRALIZED STORAGE',
    description: 'Centralized network video recorders designed for continuous 24/7 high-bitrate multi-channel record management.',
    features: ['Up to 64 Channels', 'AI Video Analytics', 'H.265+ Compression', 'Hot-Swap HDD'],
    price: 'Rs. 29,000 Upwards',
    icon: HardDrive,
  },
  {
    id: 'accessories',
    name: 'Smart Accessories',
    tag: 'INFRASTRUCTURE',
    description: 'Premium copper cabling, PoE switches, heavy-duty camera mounts, and surveillance-grade hard drives.',
    features: ['Pure Copper Cat6', 'Gigabit PoE Switch', 'CCTV Brackets', 'Toshiba/WD Drives'],
    price: 'Rs. 1,500 Upwards',
    icon: Cpu,
  },
];

export const ProductShowcase: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleOrder = (productName: string) => {
    const text = encodeURIComponent(`Hi CCTV Vision Lanka, I would like to inquire about ${productName}. Please send details.`);
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs text-[#5BD8FF] font-orbitron tracking-widest uppercase mb-3 flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#5BD8FF] animate-ping" />
          SYSTEM HARDWARE CATALOG
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-space font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          Holographic Product Showcase
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Hover over each holographic panel to engage the hardware component, inspect system specs, and order directly on WhatsApp.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => {
          const isHovered = hoveredCard === product.id;
          return (
            <motion.div
              key={product.id}
              className="glass-panel relative rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer group transition-colors duration-300"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ 
                y: -8, 
                borderColor: 'rgba(91, 216, 255, 0.4)',
                boxShadow: '0 10px 30px rgba(45, 156, 255, 0.15)'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ perspective: 1000 }}
            >
              {/* Corner tech details */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10px] right-[-10px] w-20 h-5 bg-[#2D9CFF]/10 border-b border-l border-[#2D9CFF]/20 rotate-45" />
              </div>

              {/* Grid Background */}
              <div className="absolute inset-0 bg-cyber-grid-fine opacity-10 pointer-events-none" />

              {/* Graphic/Interactive Render Section */}
              <div className="w-full h-48 relative flex items-center justify-center mb-6 rounded-2xl bg-black/40 border border-white/5 overflow-hidden">
                
                {/* Simulated Hologram Pedestal */}
                <div className="absolute bottom-4 w-32 h-2 bg-gradient-to-r from-transparent via-[#2D9CFF]/40 to-transparent rounded-full blur-[1px]" />
                <div className="absolute bottom-4 w-24 h-4 bg-gradient-to-r from-transparent via-[#5BD8FF]/20 to-transparent rounded-full blur-[4px] animate-pulse" />

                {/* Laser light projection lines */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 origin-bottom bg-gradient-to-t from-[#2D9CFF]/15 to-transparent pointer-events-none"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 120, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
                    />
                  )}
                </AnimatePresence>

                {/* Interactive Product Visualizations */}
                {product.id === 'wifi' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* WiFi Antennas */}
                    <motion.div 
                      className="absolute top-6 left-10 w-1.5 h-16 bg-slate-600 rounded-full origin-bottom"
                      animate={{ rotate: isHovered ? -15 : -40 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    />
                    <motion.div 
                      className="absolute top-6 right-10 w-1.5 h-16 bg-slate-600 rounded-full origin-bottom"
                      animate={{ rotate: isHovered ? 15 : 40 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    />
                    
                    {/* Camera Body (Dome styling) */}
                    <motion.div 
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-700 via-slate-800 to-black border-2 border-slate-600 shadow-lg relative flex items-center justify-center"
                      animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
                      transition={{ duration: 4, repeat: isHovered ? Infinity : 0 }}
                    >
                      {/* Lens Ring */}
                      <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center relative">
                        {/* Lens reflection & blue light */}
                        <motion.div 
                          className="w-8 h-8 rounded-full bg-cyan-950/80 border border-[#5BD8FF] relative flex items-center justify-center"
                          animate={{ boxShadow: isHovered ? '0 0 12px #5BD8FF' : 'none' }}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-[#5BD8FF]" />
                        </motion.div>
                      </div>
                      <Wifi className={`absolute bottom-2 w-4 h-4 ${isHovered ? 'text-[#5BD8FF] animate-pulse' : 'text-slate-500'}`} />
                    </motion.div>
                  </div>
                )}

                {product.id === '4g' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* Signal rings on hover */}
                    {isHovered && [1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute border border-[#5BD8FF]/40 rounded-full"
                        style={{ width: 60, height: 60 }}
                        animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.6 }}
                      />
                    ))}
                    
                    {/* Bullet Camera Shape */}
                    <motion.div 
                      className="w-28 h-16 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 shadow-md relative origin-center"
                      animate={{ 
                        rotate: isHovered ? [0, -5, 5, 0] : 0,
                        y: isHovered ? -5 : 0 
                      }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      {/* Sunshield hood */}
                      <div className="absolute top-[-4px] left-[-2px] w-24 h-2 bg-slate-500 rounded-t" />
                      {/* Camera Lens front */}
                      <div className="absolute left-[88px] top-3 w-4 h-10 bg-black rounded-r border-r border-[#2D9CFF] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2D9CFF]" />
                      </div>
                      {/* SIM card slot detail */}
                      <div className="absolute bottom-2 left-6 w-8 h-2 bg-slate-800 rounded border border-slate-600" />
                    </motion.div>
                  </div>
                )}

                {product.id === 'nvr' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* NVR chassis box */}
                    <motion.div 
                      className="w-32 h-14 bg-gradient-to-b from-slate-800 to-black border border-slate-700 rounded-lg relative flex flex-col justify-between p-2 shadow-2xl"
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                    >
                      {/* Front status panel */}
                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-1 items-center">
                          <HardDrive className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[7px] font-mono text-slate-500">SYSTEM NVR</span>
                        </div>
                        {/* Pulsing LEDs */}
                        <div className="flex gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full bg-green-500 ${isHovered ? 'animate-pulse' : ''}`} />
                          <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-[#5BD8FF] animate-ping' : 'bg-[#2D9CFF]/50'}`} />
                        </div>
                      </div>

                      {/* Network activity lines */}
                      <div className="w-full bg-slate-900 h-3 rounded border border-slate-800 overflow-hidden relative">
                        {isHovered && (
                          <motion.div 
                            className="absolute h-full w-4 bg-[#2D9CFF] blur-[1px]"
                            animate={{ left: ['-10%', '110%'] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* Concentric Server Stack lines behind NVR */}
                    <div className="absolute -z-10 w-40 h-28 border border-dashed border-[#2D9CFF]/15 rounded-xl pointer-events-none" />
                  </div>
                )}

                {product.id === 'accessories' && (
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* Exploding Parts (bracket, hard drive, connector) */}
                    <motion.div 
                      className="absolute w-12 h-12 bg-slate-800 border border-slate-600 rounded-md flex items-center justify-center"
                      animate={{ 
                        x: isHovered ? -35 : -10, 
                        y: isHovered ? -20 : 0, 
                        rotate: isHovered ? -15 : 0 
                      }}
                    >
                      <Cpu className="w-6 h-6 text-slate-400" />
                    </motion.div>
                    
                    <motion.div 
                      className="absolute w-14 h-16 bg-gradient-to-br from-slate-600 to-slate-900 border border-slate-500 rounded shadow-md flex flex-col p-1.5"
                      animate={{ 
                        x: isHovered ? 25 : 10, 
                        y: isHovered ? 15 : 0, 
                        rotate: isHovered ? 20 : 0 
                      }}
                    >
                      <div className="w-full h-1 bg-slate-900 rounded mb-1" />
                      <div className="flex-grow bg-slate-800 rounded flex items-center justify-center">
                        <HardDrive className="w-7 h-7 text-[#2D9CFF]" />
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="mb-6 flex-grow">
                <span className="text-[10px] font-orbitron tracking-wider text-[#5BD8FF] block mb-1">
                  {product.tag}
                </span>
                <h3 className="text-xl font-space font-bold text-white mb-2 group-hover:text-[#5BD8FF] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features (Visible always, accented on hover) */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] md:text-xs font-mono text-slate-300">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2D9CFF]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Order Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">STARTING FROM</span>
                  <span className="text-sm font-orbitron text-white font-bold">{product.price}</span>
                </div>

                <motion.button
                  className="px-4 py-2 rounded-xl text-xs font-space font-semibold flex items-center gap-2 bg-[#2D9CFF]/10 text-[#5BD8FF] border border-[#2D9CFF]/30 hover:bg-[#2D9CFF] hover:text-white transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(45,156,255,0.1)] hover:shadow-[0_0_20px_rgba(45,156,255,0.4)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOrder(product.name)}
                >
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
