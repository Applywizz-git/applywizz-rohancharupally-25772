import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Globe2, Layers } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Financial Analyst (Contract)",
      company: "PepsiCo",
      location: "Plano, TX",
      period: "Jan 2026 - Present",
      metrics: ["100% On-Time", "50% Manual Query ↓", "Zero Restatement"],
      bullets: [
        "Performed monthly Actual vs. Budget variance analysis across 5 plant cost centers supporting North America consolidation.",
        "Leveraged SAP Joule's embedded AI assistant to build a reusable prompt library, reducing manual query time by 50%.",
        "Supported the AOP process by stress-testing volume and pricing scenarios for plant submissions.",
        "Maintained 100% audit-ready records by enforcing data governance across material ledger classifications."
      ],
      icon: Building2
    },
    {
      role: "Financial Analyst",
      company: "Mutual Security Credit Union",
      location: "Shelton, CT",
      period: "Mar 2025 - Dec 2025",
      metrics: ["$350M+ Assets", "15% Speed ↑", "Zero Discrepancy"],
      bullets: [
        "Partnered with CFO to deliver ALM report packages covering NIM sensitivity and rate shock scenarios.",
        "Led a zero-discrepancy system migration from ProfitStar to FPS Cloud (Jack Henry) achieving 100% data accuracy.",
        "Built a dynamic daily liquidity monitoring model maintaining adherence to regulatory KRI thresholds.",
        "Automated reporting preparation workflows using Microsoft Copilot, reducing narrative preparation effort by 30%."
      ],
      icon: Landmark
    },
    {
      role: "Financial Analyst",
      company: "Immersive IT Solutions",
      location: "Lewisville, TX",
      period: "Aug 2024 - Mar 2025",
      metrics: ["$20K Cost Save", "8hr Saved/Bi-weekly", "100% Accuracy"],
      bullets: [
        "Drove annual budgeting and quarterly forecasting in Workday Adaptive Planning, identifying $20K in SG&A savings.",
        "Generated daily KPI dashboards in Power BI improving leadership visibility into profitability trends.",
        "Automated recurring reporting workflows using Excel VBA template logic, saving 8 hours bi-weekly."
      ],
      icon: Layers
    },
    {
      role: "Consultant (Financial Data Analyst)",
      company: "Deloitte",
      location: "India",
      period: "Dec 2019 - Sep 2022",
      metrics: ["40% Effort ↓", "2000+ Hrs Saved", "Zero-Error ESG"],
      bullets: [
        "Analyzed multi-source financial datasets including RSU vesting and K-1 distributions for 7 major enterprise clients.",
        "Spearheaded a firm-wide Alteryx automation initiative reducing manual data processing effort by 40% globally.",
        "Supervised work allocation and mentorship for junior analysts maintaining a zero-error escalation rate."
      ],
      icon: Globe2
    }
  ];

  return (
    <section id="experience" className="relative py-40 bg-dark-bg">
      <div className="container-custom">
        <div className="mb-24 text-center">
           <h2 className="text-white text-6xl font-bold mb-0 uppercase tracking-tighter italic leading-none">PROFESSIONAL <br/> <span className="text-primary/20">TIMELINE.</span></h2>
        </div>

        <div className="relative space-y-24">
           {/* Ledger Margin */}
           <div className="absolute left-[30px] top-10 bottom-10 w-px bg-white/5 hidden lg:block border-l-2 border-dashed border-primary/10"></div>

           {experiences.map((exp, i) => (
             <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-12 gap-12 group relative"
             >
                <div className="lg:col-span-1 hidden lg:flex justify-center pt-8">
                   <div className="w-4 h-4 rounded-full bg-primary border-4 border-dark-bg z-10 shadow-[0_0_15px_#EAB308]"></div>
                </div>

                <div className="lg:col-span-11 capital-card p-12 md:p-16 group-hover:bg-[#1E293B]/80 transition-all">
                   <div className="grid lg:grid-cols-3 gap-12">
                      <div className="lg:col-span-1 border-r border-white/5 pr-10">
                         <p className="text-primary font-technical text-[10px] tracking-[0.3em] font-black uppercase mb-4 italic">{exp.period}</p>
                         <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter italic">{exp.role}</h3>
                         <div className="flex items-center gap-3 text-text-secondary text-[11px] font-bold uppercase tracking-widest mb-10">
                            <exp.icon size={16} className="text-primary" />
                            {exp.company} <span className="text-white/10">|</span> {exp.location}
                         </div>
                         
                         <div className="flex flex-wrap gap-2">
                            {exp.metrics.map((m, idx) => (
                              <span key={idx} className="px-5 py-2 bg-primary/5 border border-primary/20 text-[9px] font-black tracking-widest text-primary uppercase italic">
                                {m}
                              </span>
                            ))}
                         </div>
                      </div>

                      <div className="lg:col-span-2">
                         <ul className="space-y-6">
                            {exp.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex gap-6 group/item">
                                 <span className="text-primary/40 font-headlines font-bold text-xs pt-1 italic">0{idx+1}/</span>
                                 <span className="text-text-secondary leading-relaxed text-lg group-hover/item:text-white transition-colors">
                                    {bullet}
                                 </span>
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
