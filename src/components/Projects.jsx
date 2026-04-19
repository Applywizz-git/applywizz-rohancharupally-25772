import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, TrendingUp, Settings2, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Financial Performance Dashboard",
      category: "Power BI | SQL | Power Query",
      image: "/assets/project1.png",
      desc: "Engineered an automated executive dashboard providing real-time visibility into KPIs including Net Interest Margin (NIM), ROA, and delinquency trends.",
      stat: "C-Suite_Metrics",
      icon: LayoutDashboard
    },
    {
      title: "Investment Portfolio Repositioning",
      category: "Excel | Scenario Modeling | ALM",
      image: "/assets/project2.png",
      desc: "Analysis driving an ALCO-approved decision to shift investment mix from CD-heavy to bond-heavy, optimizing yield while maintaining liquidity limits.",
      stat: "Yield_Max_v1.2",
      icon: TrendingUp
    },
    {
      title: "Reporting Automation Workflow",
      category: "Alteryx | SQL | VBA",
      image: "/assets/project3.png",
      desc: "Automated recurring financial workflows replacing legacy transformations, reducing monthly reporting preparation time by approximately 25%.",
      stat: "25%_Efficiency_Gain",
      icon: Settings2
    }
  ];

  return (
    <section id="projects" className="py-40 bg-alt-bg">
       <div className="container-custom">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
             <div>
                <h2 className="text-white text-6xl md:text-8xl font-bold uppercase tracking-tighter italic leading-none text-left">STRATEGIC <br/> <span className="text-white/10 text-right block">DELIVERABLES.</span></h2>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
             {projects.map((proj, i) => (
               <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="capital-card group overflow-hidden flex flex-col"
               >
                  <div className="h-72 overflow-hidden relative">
                     <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" />
                     <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="absolute top-6 right-6 p-4 bg-primary text-black rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                        <proj.icon size={22} />
                     </div>
                  </div>
                  
                  <div className="p-10 flex-grow">
                     <span className="text-primary font-technical text-[9px] tracking-[0.3em] font-black uppercase mb-4 block italic">{proj.category}</span>
                     <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tighter italic group-hover:text-primary transition-colors">{proj.title}</h3>
                     <p className="text-text-secondary leading-relaxed mb-10 font-medium opacity-80 h-24 overflow-hidden">
                        {proj.desc}
                     </p>
                     
                     <div className="flex items-center justify-between pt-8 border-t border-white/5">
                        <div className="flex flex-col">
                           <span className="text-white/20 font-black text-[9px] uppercase tracking-widest mb-1">Target_Impact</span>
                           <span className="text-primary font-bold text-sm italic uppercase">{proj.stat}</span>
                        </div>
                        <div className="flex gap-4">
                           <a href="#" className="p-2 text-white/40 hover:text-primary transition-colors"><Github size={18} /></a>
                           <a href="#" className="p-2 text-primary hover:text-white transition-colors"><ExternalLink size={18} /></a>
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

export default Projects;
