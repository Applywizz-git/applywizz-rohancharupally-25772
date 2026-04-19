import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certs = [
    "AI Capabilities and Limitations - Anthropic",
    "AI Fluency: Framework & Foundations - Anthropic",
    "Financial Planning & Analysis (FP&A) Professional Certificate - Coursera",
    "Data Analysis and Visualization with Power BI - Coursera",
    "SQL for Data Science - Coursera",
    "Business Analytics Specialization - Coursera"
  ];

  return (
    <section id="certifications" className="py-40 bg-dark-bg">
      <div className="container-custom">
        <div className="mb-24 text-center">
          <h2 className="text-white text-6xl font-bold uppercase tracking-tighter italic leading-none">CERTIFICATIONS.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
           {certs.map((cert, i) => (
             <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-6 p-10 bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all group rounded-sm"
             >
                <div className="w-12 h-12 flex items-center justify-center text-primary/20 group-hover:text-primary transition-colors shrink-0">
                   <Award size={24} />
                </div>
                <span className="text-text-secondary font-bold text-sm tracking-widest uppercase group-hover:text-white transition-colors">{cert}</span>
                <CheckCircle2 size={16} className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
