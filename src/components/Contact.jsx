import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-40 bg-dark-bg overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] border-t border-r border-primary/5 -rotate-12 pointer-events-none"></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-white font-headlines uppercase mb-12 text-6xl md:text-9xl italic font-bold leading-none tracking-tighter">SECURE <br/> <span className="text-white/10 uppercase">CONTACT.</span></h2>
            
            <div className="space-y-12">
              <div className="flex gap-10 items-center group">
                 <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-xl font-bold italic">@</div>
                 <div>
                   <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-2 font-technical">Direct_Transmission</p>
                   <a href="mailto:chrohan.249@gmail.com" className="text-2xl font-bold text-white group-hover:text-primary transition-colors italic tracking-tighter uppercase leading-none">chrohan.249@gmail.com</a>
                 </div>
              </div>
              
              <div className="flex gap-10 items-center group">
                 <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-xl font-bold italic">
                    <Phone size={24} />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-2 font-technical">Secure_Line</p>
                   <a href="tel:+12032901667" className="text-2xl font-bold text-white group-hover:text-primary transition-colors italic tracking-tighter uppercase leading-none">+1 (203) 290-1667</a>
                 </div>
              </div>
            </div>
          </div>

          <form className="space-y-8 capital-card p-14 relative bg-[#111A2C] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] block pl-2 font-technical">Subject_Identity</label>
                   <input type="text" placeholder="Full Name" className="w-full bg-dark-bg border border-white/10 rounded-none px-6 py-6 focus:border-primary outline-none text-white font-medium" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] block pl-2 font-technical">Return_Target</label>
                  <input type="email" placeholder="Email Address" className="w-full bg-dark-bg border border-white/10 rounded-none px-6 py-6 focus:border-primary outline-none text-white font-medium" />
                </div>
             </div>
             <div className="space-y-4">
                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] block pl-2 font-technical">Analytical_Brief</label>
                <textarea rows="4" placeholder="Brief project overview" className="w-full bg-dark-bg border border-white/10 rounded-none px-6 py-6 focus:border-primary outline-none text-white font-medium resize-none"></textarea>
             </div>
             <button disabled className="group w-full py-8 bg-primary text-black font-bold uppercase tracking-[0.4em] rounded-none hover:translate-x-3 transition-all flex items-center justify-center gap-6 opacity-80 cursor-not-allowed">
                INIT_SECURE_SEND <Send size={22} />
             </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
