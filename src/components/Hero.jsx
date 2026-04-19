import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Download, Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-0 overflow-hidden bg-dark-bg finance-grid">
      {/* Light Gold Pulse */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-48 items-center justify-between">

          <div className="w-full lg:w-[45%] relative z-20 text-center lg:text-left">
            <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="w-12 h-px bg-primary"></div>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black mb-10 leading-[0.9] tracking-tighter uppercase italic -translate-x-[10px]">
                ROHAN <br /> <span className="capital-gradient">CHARUPALLY.</span>
              </h1>

              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-16 font-medium border-l-2 border-primary/20 lg:pl-8 italic">
                Results-driven Financial Analyst with 4+ years of progressive FP&A experience across <span className="text-white">Fortune 50 operations</span> and $350M+ financial institutions.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center mb-20">
                <a
                  href="/assets/AWL-25772-14042026-0227-resume_rohan-charupally_fa.pdf"
                  download
                  className="group relative px-12 py-6 bg-primary text-black font-black text-[12px] tracking-[0.2em] rounded-sm transition-all overflow-hidden flex items-center gap-4 active:scale-95 shadow-[0_20px_50px_rgba(234,179,8,0.2)]"
                >
                  <span className="relative z-10 uppercase">DOWNLOAD_RESUME</span>
                  <Download size={18} className="relative z-10" />
                  <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </a>
              </div>

              {/* <div className="grid grid-cols-3 gap-8 opacity-40 max-w-lg mx-auto lg:mx-0">
                {[
                  { label: 'Variance', val: 'Zero' },
                  { label: 'Assets', val: '$350M+' },
                  { label: 'Ops', val: 'Fortune_50' }
                ].map((stat, i) => (
                  <div key={stat.label}>
                    <span className="text-white/40 font-technical text-[9px] uppercase tracking-widest block mb-2 font-black">{stat.label}</span>
                    <span className="text-lg font-bold text-white italic tracking-tighter">{stat.val}</span>
                  </div>
                ))}
              </div> */}
            </motion.div>
          </div>

          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="relative translate-x-[3px]"
            >
              <div className="relative w-72 h-[450px] md:w-[400px] md:h-[550px] overflow-hidden rounded-sm border-[10px] border-alt-bg shadow-2xl">
                <img
                  src="/assets/portrait.png"
                  alt="Rohan"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
