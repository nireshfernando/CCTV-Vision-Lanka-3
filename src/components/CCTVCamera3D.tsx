import React, { useState } from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';
import { Camera, RefreshCw, Radio, Cpu, Shield } from 'lucide-react';

interface CCTVCamera3DProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const CCTVCamera3D: React.FC<CCTVCamera3DProps> = ({ mouseX, mouseY }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [autofocusActive, setAutofocusActive] = useState(false);

  // Smooth springs for mouse parallax
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 20 });
  const translateZ = 50;

  const triggerAutofocus = () => {
    setAutofocusActive(true);
    setTimeout(() => setAutofocusActive(false), 1500);
  };

  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center select-none">
      {/* HUD Background Radar Sweep */}
      <div className="absolute inset-0 rounded-full border border-[#2D9CFF]/10 bg-radial from-[#07111f]/40 to-transparent pointer-events-none overflow-hidden">
        {/* Sweeper Line */}
        <div className="absolute inset-0 origin-center rotate-45 border-r border-[#2D9CFF]/20 animate-[spin_6s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border border-[#2D9CFF]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full border border-[#2D9CFF]/5" />
      </div>

      {/* 3D Camera Container */}
      <motion.div
        className="relative w-72 h-72 cursor-pointer z-10"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={triggerAutofocus}
      >
        {/* Camera Base Mounting Bracket */}
        <div 
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-16 bg-gradient-to-b from-[#111] to-[#333] border border-white/10 rounded-b-xl shadow-lg"
          style={{ transform: `translateZ(${-translateZ}px)` }}
        />

        {/* Camera Body Cylinder */}
        <motion.div 
          className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#050505] via-[#151d2a] to-[#253246] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(7,17,31,0.8)] overflow-hidden"
          style={{ transform: `translateZ(0px)` }}
          animate={{
            boxShadow: isHovered 
              ? "0 0 60px rgba(45, 156, 255, 0.4)" 
              : "0 0 40px rgba(7, 17, 31, 0.8)"
          }}
        >
          {/* Internal circuitry pattern on hover */}
          <div className="absolute inset-0 bg-cyber-grid-fine opacity-20" />

          {/* Glowing Ring Core */}
          <motion.div 
            className="w-56 h-56 rounded-full border border-[#2D9CFF]/30 flex items-center justify-center bg-[#07111f]/60 relative"
            animate={{
              scale: autofocusActive ? [1, 0.96, 1.04, 1] : 1,
              borderColor: isHovered ? "rgba(91, 216, 255, 0.6)" : "rgba(45, 156, 255, 0.3)"
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Holographic scanning circle */}
            <motion.div 
              className="absolute inset-4 rounded-full border border-dashed border-[#5BD8FF]/40"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />

            {/* Lens Outer Glass Panel */}
            <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#1b2230] to-[#070e17] border-2 border-slate-700/60 flex items-center justify-center relative shadow-inner overflow-hidden">
              
              {/* Camera Lens Blue Aperture */}
              <motion.div 
                className="w-28 h-28 rounded-full bg-radial from-[#0e2744] via-[#050c18] to-black border-4 border-slate-900 flex items-center justify-center relative"
                animate={{
                  boxShadow: autofocusActive
                    ? "inset 0 0 30px rgba(91, 216, 255, 0.9), 0 0 35px rgba(91, 216, 255, 0.8)"
                    : isHovered 
                    ? "inset 0 0 20px rgba(45, 156, 255, 0.7), 0 0 20px rgba(45, 156, 255, 0.5)"
                    : "inset 0 0 10px rgba(45, 156, 255, 0.4)"
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Lens Glass reflection */}
                <div className="absolute top-2 left-6 w-12 h-6 bg-white/10 rounded-full blur-[1px] rotate-[-30deg]" />

                {/* Laser scanline vertical movement */}
                <motion.div 
                  className="absolute left-0 right-0 h-[2px] bg-[#5BD8FF] box-glow-cyan"
                  animate={{
                    top: ["10%", "90%", "10%"]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />

                {/* Center Camera Iris/Sensor */}
                <motion.div 
                  className="w-12 h-12 rounded-full bg-black border border-[#2D9CFF]/80 flex items-center justify-center relative"
                  animate={{
                    scale: autofocusActive ? 0.7 : 1
                  }}
                >
                  {/* Glowing blue iris core */}
                  <div className="w-4 h-4 rounded-full bg-[#5BD8FF] shadow-[0_0_12px_#5BD8FF] animate-pulse" />
                </motion.div>

                {/* Red recording LED */}
                <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#ff0000] animate-ping" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Futuristic Overlay projected panels (appearing on hover) */}
        <motion.div 
          className="absolute -right-32 top-0 w-44 glass-panel rounded-xl p-3 border border-[#2D9CFF]/30 text-left pointer-events-none"
          style={{ transform: "translateZ(80px)" }}
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0.2, 
            x: isHovered ? 0 : -10,
            scale: isHovered ? 1 : 0.9 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <div className="flex items-center gap-1.5 text-[10px] text-[#5BD8FF] font-orbitron mb-1.5">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>LIVE FEED: ACTIVE</span>
          </div>
          <div className="text-[9px] text-white/70 font-mono space-y-1">
            <div>CAM_ID: LK-COL-01</div>
            <div>RES: 3840x2160</div>
            <div>FPS: 60.00 FPS</div>
            <div className="flex items-center gap-1 mt-1 text-[#2D9CFF]">
              <Cpu className="w-3 h-3 animate-spin" />
              <span>AI DETECT: 99.8%</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Tracking Marker Box */}
        <motion.div 
          className="absolute -left-28 bottom-4 w-40 glass-panel rounded-xl p-3 border border-[#5BD8FF]/30 text-left pointer-events-none"
          style={{ transform: "translateZ(60px)" }}
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0.1, 
            x: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.9 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
        >
          <div className="flex items-center gap-1 text-[10px] text-[#2D9CFF] font-orbitron mb-1">
            <Shield className="w-3 h-3" />
            <span>AUTOFOCUS STATUS</span>
          </div>
          <div className="text-[9px] text-white/80 font-mono">
            Focus: <span className={autofocusActive ? "text-green-400 font-bold" : "text-[#5BD8FF]"}>{autofocusActive ? "LOCKING..." : "AUTO-SECURE"}</span>
            <div className="mt-1 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#2D9CFF] to-[#5BD8FF]" 
                animate={{ width: autofocusActive ? "100%" : "65%" }}
                transition={{ duration: 1.2 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Cinematic Live Feed Projection Window (Autoplay video file) */}
      <motion.div
        className="absolute bottom-[-130px] md:bottom-[-90px] left-1/2 -translate-x-1/2 w-64 h-36 md:w-80 md:h-44 rounded-xl overflow-hidden glass-panel border border-[#5BD8FF]/40 shadow-[0_0_30px_rgba(91,216,255,0.2)]"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ 
          opacity: isHovered ? 1 : 0.5, 
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1.05 : 0.95
        }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        {/* Holographic interface overlay on video */}
        <div className="absolute inset-0 z-10 border border-white/5 pointer-events-none">
          <div className="absolute top-2 left-2 text-[8px] font-orbitron bg-black/60 px-1.5 py-0.5 rounded border border-[#2D9CFF]/30 text-[#2D9CFF]">
            LENS LINK 01
          </div>
          {/* Target Reticle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none">
            <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#5BD8FF]" />
            <div className="absolute top-0 left-0 w-[1px] h-2 bg-[#5BD8FF]" />
            <div className="absolute top-0 right-0 w-2 h-[1px] bg-[#5BD8FF]" />
            <div className="absolute top-0 right-0 w-[1px] h-2 bg-[#5BD8FF]" />
            <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-[#5BD8FF]" />
            <div className="absolute bottom-0 left-0 w-[1px] h-2 bg-[#5BD8FF]" />
            <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-[#5BD8FF]" />
            <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-[#5BD8FF]" />
          </div>

          {/* AI human tracker box */}
          <motion.div 
            className="absolute border border-green-500 rounded p-0.5 pointer-events-none font-mono"
            animate={{
              left: ["15%", "55%", "15%"],
              top: ["25%", "35%", "25%"],
              width: ["40px", "55px", "40px"],
              height: ["70px", "80px", "70px"]
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          >
            <span className="absolute -top-3.5 left-0 text-[6px] text-green-400 font-bold bg-black/70 px-0.5 rounded">
              HUMAN 99.4%
            </span>
          </motion.div>
        </div>

        {/* Autoplay local CCTV video feed */}
        <video 
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] hue-rotate-[180deg]"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/CCTV 1 .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Scan lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none opacity-40" />
      </motion.div>
    </div>
  );
};
