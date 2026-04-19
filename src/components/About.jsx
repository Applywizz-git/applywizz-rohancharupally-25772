import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Activity, Cpu, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      title: "Reporting Tech",
      desc: "Leveraging SAP Joule, Microsoft Copilot, and Alteryx to eliminate 50% manual variance query time.",
      icon: Cpu
    },
    {
      title: "System Migration",
      desc: "Led zero-discrepancy financial system migration for $350M+ asset institutions (ProfitStar to Jack Henry).",
      icon: Activity
    },
    {
      title: "Risk Control",
      desc: "Built daily liquidity monitoring models maintaining strict adherence to regulatory KRI thresholds.",
      icon: ShieldAlert
    }
  ];

  return (
    <section id="about" className="relative py-40 bg-alt-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
           <div>
              <h2 className="text-white text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-12 italic">STRATEGIC <br/> <span className="text-primary/40">ANALYTICS.</span></h2>
              <div className="w-40 h-1 bg-gradient-to-r from-primary to-transparent mb-16"></div>
              
              <p className="text-2xl md:text-3xl text-text-secondary leading-relaxed font-headlines italic border-l-2 border-primary/20 pl-12 mb-20">
                 Proven ability to translate complex financial and operational data into actionable insights for CFO, Board, and senior leadership. Specializing in budgeting, forecasting, and scenario modeling across multi-site environments.
              </p>
           </div>
           
           <div className="space-y-8">
              {highlights.map((obj, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="capital-card p-12 group relative overflow-hidden flex gap-10 items-start hover:bg-[#202E4E] transition-all"
                >
                   <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-xl shrink-0">
                      <obj.icon size={28} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white italic tracking-tighter uppercase mb-4">{obj.title}</h3>
                      <p className="text-text-secondary font-technical leading-relaxed text-lg">{obj.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
