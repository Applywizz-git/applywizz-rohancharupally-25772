import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-alt-bg border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
             <div className="w-12 h-12 bg-primary flex items-center justify-center font-bold text-lg text-black italic rounded-sm">RC</div>
             <div>
                <p className="text-white font-bold text-xl italic tracking-tighter uppercase leading-none">ROHAN CHARUPALLY</p>
             </div>
          </div>

          <div className="text-right">
             <p className="text-white/30 font-bold text-[9px] mt-4 uppercase tracking-[0.4em] font-technical flex items-center justify-end gap-2">
                © 2026 ROHAN C. ALL RIGHTS RESERVED. <span className="w-2 h-2 rounded-full bg-primary/20"></span>
             </p>
          </div>
        </div>
      </div>
      {/* Bottom Navbar Spacer */}
      <div className="h-24 md:h-32 w-full"></div>
    </footer>
  );
};

export default Footer;
