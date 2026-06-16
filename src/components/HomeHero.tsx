import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, Award, Users, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HomeHeroProps {
  scrollToSection: (id: string) => void;
}

export default function HomeHero({ scrollToSection }: HomeHeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-navy-dark flex flex-col justify-center pt-24 overflow-hidden"
    >
      {/* Background Hero Image with Dark Blue Radial Gradients for rich overlay depth */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_DATA.bgImage} 
          alt="Jukes Consults Limited Corporate Head Office" 
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-8 md:py-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column text section */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-gold/10 border border-primary-gold/20 px-4 py-1.5 rounded-none text-primary-gold text-[10px] font-mono uppercase tracking-widest font-bold"
          >
            <span className="w-1.5 h-1.5 bg-primary-gold animate-ping" />
            Leading Corporate Partner in Nigeria
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]"
          >
            Reliable <span className="text-primary-gold">Commodity</span> Trading, Construction <span className="text-primary-gold">Materials</span> Supply, Scrap Iron & <span className="text-primary-gold">Logistics</span> Solutions.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 font-sans text-base sm:text-lg max-w-2xl leading-relaxed border-l-4 border-primary-gold pl-6"
          >
            {HERO_DATA.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="bg-primary-gold hover:bg-gold-dark text-[#0A192F] px-8 py-3.5 rounded-none font-sans font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer hover:text-white"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white/30 text-white hover:bg-white/5 px-8 py-3.5 rounded-none font-sans font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              Contact Us
              <PhoneCall className="w-4 h-4 text-primary-gold" />
            </button>
          </motion.div>

          {/* Core Trust Indicators built cleanly */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-10 border-t border-white/10 max-w-xl"
          >
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wide">CAC Registered</h4>
                <p className="text-white/50 font-sans text-[10px] mt-0.5">Verified Corporate Enterprise</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wide">Premium Grading</h4>
                <p className="text-white/50 font-sans text-[10px] mt-0.5">Strict Quality Assured</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wide">24/7 Dispatch</h4>
                <p className="text-white/50 font-sans text-[10px] mt-0.5">Always On-Schedule</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column graphic decoration */}
        <div className="lg:col-span-4 hidden lg:flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-80 h-96 rounded-none border-2 border-primary-gold p-4 flex flex-col justify-end overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent z-10" />
            <img 
              src="https://i.imgur.com/LIWfHeR.png" 
              alt="Supplies representation" 
              className="absolute inset-0 w-full h-full object-cover scale-105"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
            
            <div className="relative z-20 space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#C5A021] uppercase font-bold">Executive Leadership</span>
              <h3 className="font-display font-medium text-white text-base leading-snug uppercase tracking-tight">Mr. Adeshina Adekunle Samuel</h3>
              <p className="text-white/75 font-sans text-[11px] leading-relaxed">
                Directing strategic management and elite commodities sourcing pipelines with over 11 years of proven industrial expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
