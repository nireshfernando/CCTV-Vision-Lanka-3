import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { MessageSquare, ArrowRight, } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { CCTVCamera3D } from './components/CCTVCamera3D';
import { ProductShowcase } from './components/ProductShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InteractiveMap } from './components/InteractiveMap';
import { SecurityTechShowcase } from './components/SecurityTechShowcase';
import { InstallationTimeline } from './components/InstallationTimeline';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for global cursor parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax background translations
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), { stiffness: 50, damping: 15 });
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 50, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleWhatsApp = (text = 'Hello CCTV Vision Lanka, I would like to request a free security consultation.') => {
    window.open(`https://wa.me/94771234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-[#050505] text-white min-h-screen relative font-sans overflow-x-hidden md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth no-scrollbar"
    >
      {/* Global Transparent Blur Navbar */}
      <Navbar />

      {/* Background Ambient Video Layer (CCTV 2 .mp4) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video 
          className="w-full h-full object-cover opacity-15 filter brightness-50 contrast-125"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/CCTV 2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* ================= SECTION 2: HERO SECTION ================= */}
      <section 
        id="home" 
        className="w-full min-h-screen md:h-screen md:snap-start relative flex items-center pt-24 md:pt-0 overflow-hidden"
      >
        {/* Parallax Holographic Surveillance Grid */}
        <motion.div 
          className="absolute inset-0 cyber-grid opacity-25 z-0"
          style={{ x: bgX, y: bgY }}
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
          {/* Left Text Box */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 border border-[#2D9CFF]/30 px-3.5 py-1.5 rounded-full bg-[#2D9CFF]/5 text-[#5BD8FF] font-orbitron text-xs font-semibold tracking-wider text-glow"
            >
              <span className="w-2 h-2 rounded-full bg-[#5BD8FF] animate-ping" />
              #1 Security Solutions in Sri Lanka
            </motion.div>

            {/* Title with Particle styling (Splitting header) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-space font-extrabold leading-tight text-white"
            >
              Your Trusted <br />
              <span className="bg-gradient-to-r from-[#2D9CFF] via-[#5BD8FF] to-white bg-clip-text text-transparent text-glow">
                Security Partner
              </span> <br />
              in Sri Lanka
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl font-space"
            >
              CCTV Vision Lanka is Sri Lanka's premium engineering partner for ultra-realistic 4K surveillance, smart AI boundary defenses, cloud servers, and professional physical installation grids.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary WhatsApp Order */}
              <button
                onClick={() => handleWhatsApp('Hi CCTV Vision Lanka, I want to order security cameras. Please assist.')}
                className="glass-panel text-white border border-[#2D9CFF]/60 bg-[#2D9CFF]/15 px-8 py-4 rounded-2xl flex items-center justify-center gap-2 font-space text-sm font-bold tracking-wider hover:bg-[#2D9CFF] transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(45,156,255,0.15)] hover:shadow-[0_0_30px_rgba(45,156,255,0.5)]"
              >
                <MessageSquare className="w-4 h-4 text-[#5BD8FF]" />
                <span>Order on WhatsApp</span>
              </button>

              {/* Secondary Explore */}
              <a
                href="#products"
                className="glass-panel text-slate-300 border border-white/10 hover:border-white/20 px-8 py-4 rounded-2xl flex items-center justify-center gap-2 font-space text-sm font-semibold tracking-wider hover:text-white transition-all duration-300"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Camera Model Box */}
          <div className="lg:col-span-5 flex justify-center items-center h-full min-h-[450px]">
            <CCTVCamera3D mouseX={mouseX} mouseY={mouseY} />
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PRODUCT SHOWCASE ================= */}
      <section 
        id="products" 
        className="w-full min-h-screen md:h-screen md:snap-start flex items-center justify-center bg-gradient-to-b from-black via-[#07111f]/20 to-black overflow-y-auto"
      >
        <ProductShowcase />
      </section>

      {/* ================= SECTION 4: WHY CHOOSE US ================= */}
      <section 
        id="why-us" 
        className="w-full min-h-screen md:h-screen md:snap-start flex items-center justify-center overflow-y-auto"
      >
        <WhyChooseUs />
      </section>

      {/* ================= SECTION 5: GEOLOCATION MAP ================= */}
      <section 
        id="branches" 
        className="w-full min-h-screen md:h-screen md:snap-start flex items-center justify-center bg-gradient-to-b from-black via-[#07111f]/10 to-black overflow-y-auto"
      >
        <InteractiveMap />
      </section>

      {/* ================= SECTION 6: TECH SHOWCASE ================= */}
      <section 
        id="tech-specs" 
        className="w-full min-h-screen md:h-screen md:snap-start flex items-center justify-center overflow-y-auto"
      >
        <SecurityTechShowcase />
      </section>

      {/* ================= SECTION 7: TIMELINE ================= */}
      <section 
        className="w-full min-h-screen md:h-screen md:snap-start flex items-center justify-center bg-[#050505] overflow-y-auto"
      >
        <InstallationTimeline />
      </section>

      {/* ================= SECTION 8: TESTIMONIALS ================= */}
      <section 
        className="w-full min-h-screen md:h-screen md:snap-start flex items-center justify-center overflow-y-auto"
      >
        <Testimonials />
      </section>

      {/* ================= SECTION 9: FINAL CTA ================= */}
      <section 
        id="contact"
        className="w-full min-h-[50vh] md:h-screen md:snap-start relative flex flex-col justify-between overflow-y-auto"
      >
        {/* Content Container */}
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-space font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight"
            >
              Protect What Matters Most.
            </motion.h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Experience next-generation surveillance systems designed for homes, businesses, and enterprises across Sri Lanka.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <motion.button
                className="glass-panel text-white border border-[#2D9CFF] bg-[#2D9CFF]/15 px-8 py-4 rounded-2xl font-space text-sm font-bold tracking-wider hover:bg-[#2D9CFF] transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(45,156,255,0.2)] hover:shadow-[0_0_30px_rgba(45,156,255,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp('Hi, I would like to order CCTV cameras.')}
              >
                Order on WhatsApp
              </motion.button>
              <motion.button
                className="glass-panel text-slate-300 border border-white/10 hover:border-[#5BD8FF]/40 px-8 py-4 rounded-2xl font-space text-sm font-semibold tracking-wider hover:text-white transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp('Hi CCTV Vision Lanka, I would like to request a free security site inspection consultation.')}
              >
                Request Free Consultation
              </motion.button>
            </div>
          </div>
        </div>

        {/* ================= SECTION 10: PREMIUM FOOTER ================= */}
        <Footer />
      </section>
    </div>
  );
}
