import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "FP&A Core",
      skills: ["Budgeting", "Forecasting", "Variance Analysis", "Scenario Modeling", "KPI Reporting"]
    },
    {
      title: "Data Engine",
      skills: ["Advanced Excel", "Power BI", "SQL", "Tableau", "Power Query"]
    },
    {
      title: "ERP & Automation",
      skills: ["SAP", "Hyperion", "Workday Adaptive", "Alteryx", "Excel VBA"]
    },
    {
      title: "Risk & Controls",
      skills: ["Liquidity Monitoring", "Compliance Support", "Audit Readiness", "MD&A Reporting"]
    }
  ];

  return (
    <section id="skills" className="py-40 bg-dark-bg border-y border-white/5">
      <div className="container-custom">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
           <div>
              <h2 className="text-white text-6xl md:text-8xl font-bold uppercase tracking-tighter italic leading-none">ANALYTICAL <br/> <span className="text-primary/20">ENGINE.</span></h2>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {categories.map((cat, idx) => (
             <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="capital-card p-10 border-t-4 border-primary/40"
             >
                <h3 className="text-2xl font-bold text-white italic uppercase tracking-tighter mb-10 border-b border-white/5 pb-4">{cat.title}</h3>
                <div className="space-y-6">
                   {cat.skills.map((skill, i) => (
                     <div key={i} className="group cursor-default">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:text-primary transition-colors">{skill}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 relative overflow-hidden rounded-full">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${Math.floor(Math.random() * 20 + 80)}%` }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                              className="absolute h-full bg-primary"
                           />
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
