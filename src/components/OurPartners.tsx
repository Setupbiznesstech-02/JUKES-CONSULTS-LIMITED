import { motion } from 'motion/react';
import { PARTNERS } from '../data';
import { Partner } from '../types';

export default function OurPartners() {
  return (
    <section id="partners" className="py-6 sm:py-8 bg-[#FAFBFD] relative overflow-hidden border-t border-slate-200">
      {/* Absolute subtle visual graphics */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary-gold/[0.01] rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A021]">
            Trusted Industry Alliances
          </span>
          <h2 className="font-display font-medium text-[#0A192F] text-2xl sm:text-3xl mt-1 tracking-tight">
            OUR PARTNERS
          </h2>
          <div className="w-16 h-0.5 bg-primary-gold mx-auto mt-2" />
          <p className="font-sans text-slate-500 mt-3 text-xs sm:text-sm font-light leading-relaxed">
            Collaborating with leading steel works, food clusters, structural operators, and industrial global glass packaging leaders to distribute excellence across Nigeria.
          </p>
        </div>

        {/* Brand Logos Flex-Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-center">
          {PARTNERS.map((partner: Partner, index: number) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="bg-white border border-slate-200 p-4 h-24 flex items-center justify-center group hover:border-[#C5A021] hover:shadow-sm transition-all duration-300 relative"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="max-h-12 max-w-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              {/* Tooltip for user convenience */}
              <div className="absolute bottom-1 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-[9px] font-sans font-medium text-slate-500 tracking-wide bg-slate-50 px-1 py-0.5 border border-slate-200">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
