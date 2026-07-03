import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Map, Settings, Users, ShieldAlert, Cpu } from 'lucide-react';

interface TimelineStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  icon: React.ComponentType<any>;
}

const steps: TimelineStep[] = [
  {
    id: 1,
    title: 'Consultation & Planning',
    subtitle: 'STEP 01 — DEMAND IDENTIFICATION',
    description: 'We meet with you to assess coverage parameters, evaluate structural vulnerabilities, and determine the optimal security grid specifications.',
    duration: '1 - 2 Hours',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Site Inspection & Engineering',
    subtitle: 'STEP 02 — CALIBRATION',
    description: 'Our engineers conduct field testing on lighting conditions, power grids, and line-of-sight constraints to design final cable runs and camera mounts.',
    duration: '2 - 4 Hours',
    icon: Map,
  },
  {
    id: 3,
    title: 'Precision Physical Installation',
    subtitle: 'STEP 03 — DEPLOYMENT',
    description: 'Our expert technician team deploys physical wiring, secure brackets, cameras, and power supplies using top-grade weatherproof standards.',
    duration: '1 - 2 Days',
    icon: ShieldAlert,
  },
  {
    id: 4,
    title: 'Network & System Configuration',
    subtitle: 'STEP 04 — INTEGRATION',
    description: 'We configure NVR recording channels, optimize video bitrates, set up local database drives, and connect smart remote access clients.',
    duration: '3 - 6 Hours',
    icon: Settings,
  },
  {
    id: 5,
    title: 'Client Training & Handover',
    subtitle: 'STEP 05 — PROVISIONING',
    description: 'We guide you through the mobile application, show you how to review playback streams, set AI alert parameters, and hand over security credentials.',
    duration: '1 - 2 Hours',
    icon: Users,
  },
  {
    id: 6,
    title: 'Continuous Technical Support',
    subtitle: 'STEP 06 — MAINTENANCE',
    description: 'Dedicated post-installation warranty support, remote network health monitoring, and system software updates.',
    duration: 'Ongoing Support',
    icon: Cpu,
  },
];

export const InstallationTimeline: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs text-[#5BD8FF] font-orbitron tracking-widest uppercase mb-3 flex items-center justify-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5BD8FF]" />
          EXECUTION FLOW
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-space font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          Professional Installation Process
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          From first touch to continuous monitoring, our military-grade deployment process guarantees absolute security integrity.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Central Vertical Connector Line (Desktop Only) */}
        <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#2D9CFF] via-[#5BD8FF]/40 to-slate-900 z-0 pointer-events-none">
          {/* Animated flowing energy dot */}
          <motion.div
            className="w-[6px] h-20 bg-gradient-to-b from-white to-[#2D9CFF] rounded-full blur-[1px] absolute top-0 left-[-2px]"
            animate={{ top: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-20 relative z-10">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = step.icon;

            return (
              <div 
                key={step.id} 
                className="flex flex-col md:flex-row items-start md:items-center relative w-full"
              >
                {/* Node Dot (Left-aligned for mobile, Centered for desktop) */}
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-[#2D9CFF] z-20 shadow-[0_0_10px_rgba(45,156,255,0.4)]">
                  <Icon className="w-3.5 h-3.5 text-[#5BD8FF]" />
                </div>

                {/* Alternating Content Containers */}
                <div className="w-full flex flex-col md:flex-row items-center">
                  
                  {/* Left Column Spacer / Content */}
                  <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${isEven ? 'md:justify-end md:pr-16' : 'md:order-3 md:justify-start md:pl-16'}`}>
                    <motion.div
                      className="glass-panel rounded-2xl p-6 border border-white/5 max-w-md w-full relative hover:border-[#5BD8FF]/30 transition-colors duration-300"
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      {/* Subtitle */}
                      <span className="text-[9px] font-orbitron tracking-widest text-[#5BD8FF] block mb-1">
                        {step.subtitle}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-lg font-space font-bold text-white mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {step.description}
                      </p>

                      {/* Estimated time tag */}
                      <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-slate-500 border-t border-white/5 pt-3">
                        <span>EST. TIMEFRAME:</span>
                        <span className="text-white font-bold">{step.duration}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-0 md:w-0 md:order-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
