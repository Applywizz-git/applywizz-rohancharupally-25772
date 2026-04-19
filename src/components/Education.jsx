import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Finance (Analytics)",
      school: "University of Bridgeport",
      location: "USA",
      icon: GraduationCap
    },
    {
      degree: "Bachelors in Commerce (Accounting and Computers)",
      school: "Osmania University",
      location: "India",
      icon: Landmark
    }
  ];

  return (
    <section id="education" className="py-40 bg-alt-bg">
      <div className="container-custom">
        <div className="mb-24 text-center">
          <h2 className="text-white text-6xl font-bold uppercase tracking-tighter italic leading-none">EDUCATION.</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
           {education.map((edu, i) => (
             <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="capital-card p-12 relative group text-center"
             >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                  <edu.icon size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 italic tracking-tighter uppercase leading-tight">{edu.degree}</h3>
                <p className="text-primary font-technical font-bold text-lg uppercase tracking-widest">{edu.school}</p>
                <p className="text-white/20 font-technical text-[10px] mt-4 tracking-[0.5em] uppercase">{edu.location}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
