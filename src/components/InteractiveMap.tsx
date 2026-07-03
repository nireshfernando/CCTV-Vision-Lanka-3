import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation2, Network } from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coords: { x: number; y: number }; // SVG Map Coordinates
  zoomCoords: { x: number; y: number; scale: number }; // ViewPort control
  mapUrl: string;
}

const branches: Branch[] = [
  {
    id: 'colombo',
    name: 'Colombo Head Office',
    address: 'No 145, Galle Road, Colombo 03, Sri Lanka',
    phone: '011 453 2191',
    hours: 'Mon - Sat: 8:30 AM - 6:00 PM',
    coords: { x: 135, y: 220 },
    zoomCoords: { x: -40, y: -90, scale: 2.2 },
    mapUrl: 'https://maps.google.com/?q=Colombo+03+Sri+Lanka',
  },
  {
    id: 'panadura',
    name: 'Panadura Branch',
    address: 'No 45B, Arthur V. Dias Mawatha, Panadura, Sri Lanka',
    phone: '038 224 8756',
    hours: 'Mon - Sat: 8:30 AM - 5:30 PM',
    coords: { x: 140, y: 250 },
    zoomCoords: { x: -50, y: -160, scale: 2.5 },
    mapUrl: 'https://maps.google.com/?q=Panadura+Sri+Lanka',
  },
  {
    id: 'galle',
    name: 'Galle Regional Hub',
    address: 'No 88, Wackwella Road, Galle, Sri Lanka',
    phone: '091 223 4875',
    hours: 'Mon - Sat: 9:00 AM - 5:30 PM',
    coords: { x: 165, y: 310 },
    zoomCoords: { x: -110, y: -300, scale: 2.8 },
    mapUrl: 'https://maps.google.com/?q=Galle+Sri+Lanka',
  },
];

export const InteractiveMap: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<string | null>(null);

  // Fallback coords if no branch is hovered (Full Sri Lanka map zoom)
  const defaultZoom = { x: 0, y: 0, scale: 1 };
  const currentZoom = activeBranch 
    ? branches.find(b => b.id === activeBranch)?.zoomCoords || defaultZoom
    : defaultZoom;

  const handleDirections = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
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
          <Network className="w-3.5 h-3.5 text-[#5BD8FF]" />
          GEOLOCATION RADAR
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-space font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          Interactive Branch Network
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Hover over our service terminals to lock coordinate systems, zoom the holographic map, and draw high-speed route paths.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Branch Cards list - Left Side */}
        <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
          {branches.map((branch) => {
            const isActive = activeBranch === branch.id;
            return (
              <motion.div
                key={branch.id}
                className="glass-panel relative rounded-2xl p-5 border border-white/5 cursor-pointer overflow-hidden transition-all duration-300"
                onMouseEnter={() => setActiveBranch(branch.id)}
                onMouseLeave={() => setActiveBranch(null)}
                whileHover={{ 
                  x: 8, 
                  borderColor: 'rgba(91, 216, 255, 0.4)',
                }}
                animate={{
                  backgroundColor: isActive ? 'rgba(7, 17, 31, 0.7)' : 'rgba(7, 17, 31, 0.45)',
                  boxShadow: isActive ? '0 0 20px rgba(45, 156, 255, 0.1)' : 'none'
                }}
              >
                {/* Active left indicator light */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
                  style={{ backgroundColor: isActive ? '#5BD8FF' : 'transparent' }}
                />

                <h3 className="text-lg font-space font-bold text-white flex items-center gap-2 mb-3">
                  <MapPin className={`w-4 h-4 ${isActive ? 'text-[#5BD8FF] animate-pulse' : 'text-slate-500'}`} />
                  {branch.name}
                </h3>

                <div className="space-y-2 text-xs text-slate-400 font-mono">
                  <p className="flex items-start gap-2">
                    <span className="text-[#2D9CFF]">ADD:</span>
                    <span>{branch.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#2D9CFF]">TEL:</span>
                    <span className="text-white font-semibold">{branch.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#2D9CFF]">HRS:</span>
                    <span>{branch.hours}</span>
                  </p>
                </div>

                {/* Animated Directions Button */}
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
                  <motion.button
                    className="px-3.5 py-1.5 rounded-lg text-[10px] font-space font-semibold flex items-center gap-1.5 bg-[#2D9CFF]/15 text-[#5BD8FF] border border-[#2D9CFF]/30 hover:bg-[#2D9CFF] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDirections(branch.mapUrl)}
                  >
                    <Navigation2 className="w-3 h-3" />
                    <span>Get Directions</span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Holographic SVG Map - Right Side */}
        <div className="lg:col-span-7 flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full aspect-[4/5] max-w-[450px] glass-panel rounded-3xl p-6 border border-white/5 bg-[#050505]/40 box-glow overflow-hidden">
            {/* Holographic Radar Rings behind map */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-[#2D9CFF]/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 border border-[#2D9CFF]/5 rounded-full pointer-events-none" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-cyber-grid-fine opacity-10 pointer-events-none" />

            {/* SVG Canvas with Zoom & Pan Transitions */}
            <motion.svg
              className="w-full h-full relative z-10"
              viewBox="0 0 300 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: currentZoom.x,
                y: currentZoom.y,
                scale: currentZoom.scale,
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            >
              {/* Sri Lanka Coastline (Stylized Hologram Path) */}
              <path
                d="M150 50 C165 65, 175 80, 185 100 C195 120, 205 135, 215 155 C225 175, 230 195, 225 215 C220 235, 210 255, 205 270 C195 295, 185 315, 170 335 C155 350, 145 355, 135 345 C125 335, 115 315, 110 300 C105 280, 95 260, 95 240 C95 220, 100 200, 105 180 C110 160, 112 140, 115 120 C118 100, 125 80, 135 65 Z"
                stroke="rgba(45, 156, 255, 0.2)"
                strokeWidth="1.5"
                fill="rgba(7, 17, 31, 0.4)"
                className="transition-colors duration-300"
              />
              <path
                d="M150 50 C165 65, 175 80, 185 100 C195 120, 205 135, 215 155 C225 175, 230 195, 225 215 C220 235, 210 255, 205 270 C195 295, 185 315, 170 335 C155 350, 145 355, 135 345 C125 335, 115 315, 110 300 C105 280, 95 260, 95 240 C95 220, 100 200, 105 180 C110 160, 112 140, 115 120 C118 100, 125 80, 135 65 Z"
                stroke="url(#mapGrad)"
                strokeWidth="2"
                strokeDasharray="4,4"
              />

              <defs>
                <linearGradient id="mapGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2D9CFF" />
                  <stop offset="100%" stopColor="#5BD8FF" />
                </linearGradient>
              </defs>

              {/* Dynamic Connection lines drawn to active branch */}
              <AnimatePresence>
                {activeBranch && (
                  <motion.path
                    d={`M 135 220 Q 138 235, ${
                      branches.find((b) => b.id === activeBranch)?.coords.x
                    } ${branches.find((b) => b.id === activeBranch)?.coords.y}`}
                    stroke="#5BD8FF"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </AnimatePresence>

              {/* Sri Lanka City Nodes */}
              {branches.map((branch) => {
                const isActive = activeBranch === branch.id;
                return (
                  <g key={branch.id} className="cursor-pointer">
                    {/* Pulsing ring indicator */}
                    {isActive && (
                      <circle
                        cx={branch.coords.x}
                        cy={branch.coords.y}
                        r="12"
                        className="fill-none stroke-[#5BD8FF] opacity-50"
                      >
                        <animate
                          attributeName="r"
                          values="4;16;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.8;0;0.8"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    {/* Outer glow ring */}
                    <circle
                      cx={branch.coords.x}
                      cy={branch.coords.y}
                      r="6"
                      fill={isActive ? '#5BD8FF' : '#2D9CFF'}
                      className="opacity-40 transition-all duration-300"
                    />

                    {/* Central node dot */}
                    <circle
                      cx={branch.coords.x}
                      cy={branch.coords.y}
                      r="3.5"
                      fill="#ffffff"
                      stroke={isActive ? '#5BD8FF' : '#2D9CFF'}
                      strokeWidth="1.5"
                      onMouseEnter={() => setActiveBranch(branch.id)}
                      onMouseLeave={() => setActiveBranch(null)}
                    />

                    {/* City label */}
                    <text
                      x={branch.coords.x + 8}
                      y={branch.coords.y + 4}
                      fill={isActive ? '#5BD8FF' : '#94a3b8'}
                      fontSize="7"
                      fontFamily="Orbitron"
                      fontWeight="bold"
                      className="transition-colors duration-300 select-none pointer-events-none"
                    >
                      {branch.id.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </motion.svg>

            {/* Static HUD Overlay corner widgets */}
            <div className="absolute bottom-4 left-4 z-10 text-[8px] font-mono text-slate-500">
              GRID SCALE: 1:1200000<br />
              TERM ACTIVE: OK
            </div>
            <div className="absolute top-4 right-4 z-10 text-[8px] font-mono text-right text-slate-500">
              HUD SYS: ACTIVE<br />
              Wavelength: 420nm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
