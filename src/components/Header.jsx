import React, { useState } from 'react';
import { Home, BarChart3, Clock, LayoutDashboard, Terminal, GraduationCap, Award, Send, Link2, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const tabs = [
    { name: 'Home', to: 'hero', icon: Home },
    { name: 'About', to: 'about', icon: BarChart3 },
    { name: 'Experience', to: 'experience', icon: Clock },
    { name: 'Projects', to: 'projects', icon: LayoutDashboard },
    { name: 'Skills', to: 'skills', icon: Terminal },
    { name: 'Education', to: 'education', icon: GraduationCap },
    { name: 'Certification', to: 'certifications', icon: Award },
    { name: 'Contact', to: 'contact', icon: Send },
  ];

  return (
    <>
      {/* Top Branding Bar */}
      <header className="fixed top-0 left-0 w-full z-[200] py-6 px-10 bg-dark-bg/50 backdrop-blur-3xl border-b border-white/5">
        <div className="flex justify-between items-center max-w-[1800px] mx-auto">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center font-black text-xs text-primary italic rounded-sm">RC</div>
            <span className="text-white font-black text-xl italic tracking-tighter uppercase hidden md:block">ROHAN CHARUPALLY.<span className="text-white/20"></span></span>
          </div>

        </div>
      </header>

      {/* FIXED BOTTOM NAVIGATION - Compact Glassmorphism Pill */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[210] bg-white/20 backdrop-blur-2xl border border-white/30 px-6 py-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-max max-w-[95vw]">
        <div className="flex justify-center items-center gap-1 md:gap-4">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.to}
              smooth={true}
              spy={true}
              activeClass="text-black bg-black/10"
              className="flex flex-col items-center justify-center p-3 text-black/60 hover:text-black transition-all cursor-pointer group rounded-lg relative overflow-hidden"
            >
              <tab.icon size={20} strokeWidth={2.5} className="mb-1 relative z-10" />
              <span className="text-[9px] font-bold tracking-tight hidden md:block uppercase group-hover:scale-105 transition-transform relative z-10">
                {tab.name}
              </span>
            </Link>
          ))}
          <a
            href="#"
            className="flex flex-col items-center justify-center p-3 text-black/60 hover:text-black transition-all rounded-lg"
            title="External Link"
          >
            <Link2 size={20} strokeWidth={2.5} className="mb-1" />
            <span className="text-[9px] font-bold tracking-tight hidden md:block uppercase">CONNECT</span>
          </a>
        </div>
      </nav>

    </>
  );
};

export default Header;
