import React from 'react';
import { motion } from 'framer-motion';

export const HardwareBadge: React.FC = () => {
  return (
    <motion.div
      className="relative w-12 h-12 flex items-center justify-center cursor-pointer select-none"
      style={{ perspective: 1000 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* 3D Hardware Badge Elements */}
      <motion.div
        className="w-10 h-10 rounded-xl glass-panel relative flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(45,156,255,0.3)]"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear"
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Silver metallic frame border */}
        <div className="absolute inset-0.5 rounded-lg border-2 border-slate-400/40 bg-gradient-to-tr from-slate-600/30 via-slate-200/20 to-slate-500/30 backdrop-blur-md"></div>
        
        {/* Futuristic Grid Detail */}
        <div className="absolute inset-1 rounded bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2D9CFF]/20 via-transparent to-transparent opacity-60"></div>
        
        {/* Glass Reflection overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none"></div>

        {/* Center Tech Icon Shield */}
        <svg
          className="w-5 h-5 text-[#5BD8FF] relative z-10 filter drop-shadow-[0_0_5px_rgba(91,216,255,0.8)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>

        {/* Outer Tech Ring */}
        <div className="absolute -inset-1.5 rounded-2xl border border-[#2D9CFF]/30 opacity-40 animate-pulse"></div>
      </motion.div>

      {/* Behind glowing shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2D9CFF] to-[#5BD8FF] rounded-full blur-md opacity-20 -z-10 animate-pulse"></div>
    </motion.div>
  );
};
