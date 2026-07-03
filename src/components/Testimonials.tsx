import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  projectScope: string;
  avatarLetter: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dinesh Wijesinghe',
    role: 'Managing Director',
    company: 'Blue Lagoon Residences, Galle',
    quote: 'CCTV Vision Lanka secure-engineered our entire 24-camera IP surveillance system. Their remote viewing configuration has made monitoring my vacation properties seamless. Extremely professional engineering!',
    rating: 5,
    projectScope: '24 CAMERA IP MESH GRID',
    avatarLetter: 'D',
  },
  {
    id: 2,
    name: 'Fathima Ruzna',
    role: 'Operations Head',
    company: 'Ruzna Super Marts, Colombo 05',
    quote: 'We had constant issues with false motion alerts from our previous supplier. CCTV Vision Lanka installed AI human detection cameras, reducing false alerts to near zero. Their support is unparalleled.',
    rating: 5,
    projectScope: '16 CHANNEL AI NIGHT-VISION SYSTEM',
    avatarLetter: 'F',
  },
  {
    id: 3,
    name: 'Ruwan Perera',
    role: 'Security Chief',
    company: 'Capital Logistical Hub, Panadura',
    quote: 'Their 4G cellular cameras saved our remote storage yards. With no router setup or landline internet available, we got continuous starlight color feed streamed right to our control room. Brilliant service.',
    rating: 5,
    projectScope: '4G SOLAR OFF-GRID CATALYZER',
    avatarLetter: 'R',
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
          <ShieldCheck className="w-3.5 h-3.5 text-[#5BD8FF]" />
          CLIENT VALIDATIONS
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-space font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Trusted by premium residences, retail supermarkets, and large industrial warehouses across Sri Lanka.
        </p>
      </div>

      {/* Showcase Slider */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Quote Icon watermark */}
        <div className="absolute top-[-30px] left-10 text-white/5 pointer-events-none">
          <Quote className="w-36 h-36" />
        </div>

        {/* Active Testimonial Card */}
        <motion.div
          className="glass-panel relative rounded-3xl p-8 md:p-12 w-full border border-white/10 shadow-[0_0_40px_rgba(7,17,31,0.5)] bg-gradient-to-br from-[#07111f]/45 to-black/60 overflow-hidden"
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          {/* Top border holographic bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2D9CFF] to-transparent" />

          {/* Grid bg */}
          <div className="absolute inset-0 bg-cyber-grid-fine opacity-5 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Avatar block */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2D9CFF] to-[#5BD8FF] flex items-center justify-center text-white font-orbitron font-extrabold text-3xl shadow-[0_0_20px_rgba(91,216,255,0.4)]">
                {testimonials[activeIndex].avatarLetter}
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border border-[#2D9CFF] flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5BD8FF]" />
              </div>
            </div>

            {/* Content block */}
            <div className="flex-grow text-center md:text-left">
              {/* Rating stars */}
              <div className="flex gap-1 justify-center md:justify-start mb-4">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-white text-base md:text-lg italic font-sans leading-relaxed mb-6">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author details */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 border-t border-white/5 pt-4">
                <div>
                  <h4 className="text-white font-space font-bold text-lg leading-tight">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-slate-400 text-xs font-mono">
                    {testimonials[activeIndex].role} &bull; <span className="text-[#5BD8FF]">{testimonials[activeIndex].company}</span>
                  </p>
                </div>

                <div className="bg-[#2D9CFF]/10 border border-[#2D9CFF]/30 px-3 py-1 rounded-full text-[9px] font-orbitron tracking-widest text-[#5BD8FF]">
                  {testimonials[activeIndex].projectScope}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-8 relative z-20">
          <motion.button
            className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900/60 border border-white/10 text-white hover:border-[#2D9CFF] hover:text-[#2D9CFF] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? 'w-8 bg-[#5BD8FF]' : 'w-2.5 bg-slate-700 hover:bg-slate-500'}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          <motion.button
            className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900/60 border border-white/10 text-white hover:border-[#2D9CFF] hover:text-[#2D9CFF] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
