import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowDownCircle, Truck, Award, Sparkles } from 'lucide-react';

interface ValueCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: React.ComponentType<any>;
  color: string;
}

const valueCards: ValueCard[] = [
  {
    id: 'brands',
    title: 'Quality Brands',
    subtitle: 'AUTHORIZED PARTNER',
    description: 'We supply premium global surveillance brands (Hikvision, Dahua, Uniview, Ezviz) for maximum reliability.',
    details: ['100% Genuine OEM Hardware', 'Latest Firmware Pre-installed', 'Secure Cloud Integrations'],
    icon: ShieldCheck,
    color: '#2D9CFF',
  },
  {
    id: 'importer',
    title: 'Direct Importer',
    subtitle: 'UNBEATABLE PRICING',
    description: 'Bypassing wholesale distributors allows us to provide high-end security products at competitive price points.',
    details: ['Cost-Optimized Hardware', 'Direct OEM Channels', 'Bulk Custom Orders Supported'],
    icon: ArrowDownCircle,
    color: '#5BD8FF',
  },
  {
    id: 'delivery',
    title: 'Island-Wide Delivery',
    subtitle: 'FAST & SECURE DISPATCH',
    description: 'Rapid dispatch and insured transit of CCTV equipment and installation materials straight to your doorstep.',
    details: ['Delivery within 24-48 Hours', 'Insured Fragile Package Handling', 'Real-time Cargo Tracking'],
    icon: Truck,
    color: '#2D9CFF',
  },
  {
    id: 'warranty',
    title: 'Warranty Support',
    subtitle: '2-YEAR OFFICAL GUARANTEE',
    description: 'Comprehensive warranty support backed by official manufacturers and a dedicated local technical service team.',
    details: ['Hassle-Free Replacement Policy', 'Dedicated Service Desk', 'Lifetime Remote Tech Assistance'],
    icon: Award,
    color: '#5BD8FF',
  },
];

export const WhyChooseUs: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#5BD8FF]" />
          BENEFIT MATRIX
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-space font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          Why Choose CCTV Vision Lanka
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Our values define our service. Explore our performance parameters and infrastructure support layers.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {valueCards.map((card, idx) => {
          const isHovered = hoveredCard === card.id;
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              className="glass-panel relative rounded-2xl p-6 overflow-hidden flex flex-col justify-between cursor-pointer border border-white/5 h-[340px]"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                borderColor: card.color,
              }}
            >
              {/* Top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300"
                style={{ 
                  background: isHovered 
                    ? `linear-gradient(90deg, transparent, ${card.color}, transparent)`
                    : 'transparent'
                }}
              />

              {/* Glowing Background Radial */}
              <div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#07111f] via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: isHovered ? 0.8 : 0 }}
              />

              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-cyber-grid-fine opacity-5 pointer-events-none" />

              {/* Card Contents */}
              <div>
                {/* Icon Container */}
                <div className="relative mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                  <Icon 
                    className="w-6 h-6 transition-colors duration-300" 
                    style={{ color: isHovered ? card.color : '#94a3b8' }} 
                  />
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-[#5BD8FF]/40"
                      layoutId={`glowBorder-${card.id}`}
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                    />
                  )}
                </div>

                <span className="text-[9px] font-orbitron tracking-wider text-slate-500 block mb-1">
                  {card.subtitle}
                </span>
                <h3 className="text-lg font-space font-bold text-white mb-2 transition-colors duration-300" style={{ color: isHovered ? card.color : 'white' }}>
                  {card.title}
                </h3>
                
                {/* Regular description */}
                <motion.p 
                  className="text-slate-400 text-xs leading-relaxed"
                  animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {card.description}
                </motion.p>
              </div>

              {/* Revealed specifications on hover */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 text-[11px] font-mono text-slate-300 space-y-2 pointer-events-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[8px] text-[#5BD8FF] font-orbitron uppercase mb-1">SYSTEM SPECIFICATIONS:</div>
                {card.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-[#5BD8FF] rounded-full" />
                    <span>{detail}</span>
                  </div>
                ))}
              </motion.div>

              {/* Bottom pulse line */}
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-600 mt-4">
                <span>VERIFIED</span>
                <div className={`w-2.5 h-2.5 rounded-full ${isHovered ? 'bg-[#5BD8FF]' : 'bg-slate-700'} transition-all duration-300 animate-pulse`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
