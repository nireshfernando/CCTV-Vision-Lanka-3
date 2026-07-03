import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Smartphone, CloudLightning, Shield, UserCheck, CloudSun, BrainCircuit } from 'lucide-react';

interface TechFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
}

const features: TechFeature[] = [
  {
    id: 'ai-motion',
    title: 'AI Motion Detection',
    subtitle: 'NEURAL CLASSIFIER',
    description: 'Real-time pixel analysis engine filters out tree motion, animals, and light changes to reduce false alerts.',
    icon: BrainCircuit,
  },
  {
    id: 'night-vision',
    title: 'Infrared Night Vision',
    subtitle: 'THERMAL FLUX',
    description: 'Smart IR cut filters coupled with high-sensitivity sensors project crystal-clear monochrome and starlight color in total darkness.',
    icon: Eye,
  },
  {
    id: 'remote-access',
    title: 'Remote Mobile Access',
    subtitle: 'P2P DECRYPTED',
    description: 'Instantly view feeds, manage configurations, and review playback from anywhere in the world on iOS and Android.',
    icon: Smartphone,
  },
  {
    id: 'cloud-record',
    title: 'Secure Cloud Recording',
    subtitle: 'AES-256 SYNC',
    description: 'Dual-destination recording syncs local storage directly to military-grade encrypted cloud vaults continuously.',
    icon: CloudLightning,
  },
  {
    id: 'human-detect',
    title: 'Human Silhouette Lock',
    subtitle: 'BIOMETRIC SCAN',
    description: 'Advanced edge computing models map pedestrian geometry to isolate human presence instantly.',
    icon: UserCheck,
  },
  {
    id: 'weatherproof',
    title: 'Weatherproof Hardware',
    subtitle: 'IP67 SEALED',
    description: 'Solid aluminum housing with vacuum seals operates in heavy rain, dust storms, and extreme tropical temperatures.',
    icon: CloudSun,
  },
];

export const SecurityTechShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <Shield className="w-3.5 h-3.5 text-[#5BD8FF] animate-pulse" />
          FUTURISTIC ALGORITHMS
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-space font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          Security Tech Showcase
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Our systems are powered by cutting-edge edge AI, secure cloud networks, and armored military-grade surveillance hardware.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const isHovered = hoveredIndex === index;
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.id}
              className="glass-panel relative rounded-2xl p-6 md:p-8 cursor-pointer overflow-hidden border border-white/5 flex flex-col justify-between min-h-[220px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(91, 216, 255, 0.4)',
                boxShadow: '0 10px 25px rgba(45, 156, 255, 0.15)'
              }}
            >
              {/* Card Corner Tech Grid Element */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-25 border-b border-l border-white/10 pointer-events-none" />

              {/* Inner ambient glow on hover */}
              <div 
                className="absolute -inset-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#07111f]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: isHovered ? 1 : 0 }}
              />

              {/* Header section with Icon */}
              <div className="flex items-start justify-between">
                <div className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-[#5BD8FF]' : 'text-slate-400'}`} />
                  
                  {/* Subtle active holographic wave */}
                  {isHovered && (
                    <motion.div 
                      className="absolute inset-0 rounded-xl border border-[#2D9CFF] opacity-50"
                      animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  )}
                </div>

                {/* Cyber status code */}
                <span className="text-[7px] font-mono text-slate-500 font-bold bg-white/5 px-1.5 py-0.5 rounded border border-white/5 uppercase">
                  {feature.subtitle}
                </span>
              </div>

              {/* Details and Text */}
              <div className="mt-6">
                <h3 className="text-lg font-space font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#5BD8FF]">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom laser bar on hover */}
              <div className="w-full h-[1.5px] bg-slate-800 rounded mt-5 overflow-hidden relative">
                {isHovered && (
                  <motion.div
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-[#5BD8FF] to-transparent w-2/3"
                    animate={{ left: ['-100%', '150%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
