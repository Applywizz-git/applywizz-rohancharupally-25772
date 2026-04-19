import React, { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy Components
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-secondary flex flex-col items-center justify-center finance-grid overflow-hidden"
    >
      <div className="w-full max-w-[400px] px-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-white text-5xl font-black text-center mb-12 tracking-tighter"
        >
          ROHAN C.
        </motion.h2>
        <div className="flex justify-end items-end mb-4 font-technical">
           <span className="text-white font-bold text-4xl">{progress}%</span>
        </div>
        <div className="relative h-px w-full bg-white/5 overflow-hidden">
           <motion.div className="absolute h-px bg-primary shadow-[0_0_20px_#EAB308]" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    // Optimized Lenis settings for performance
    const lenis = new Lenis({ 
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-bg selection:bg-primary selection:text-black">
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <Suspense fallback={<div className="min-h-screen bg-dark-bg" />}>
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
