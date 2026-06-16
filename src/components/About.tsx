import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { ABOUT_DATA, CORE_VALUES } from '../data';

export default function About() {
  // Helper to map string to lucide icons
  const renderIcon = (iconName: string, classNameValue: string = "w-6 h-6 text-primary-gold") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={classNameValue} />;
    }
    return <Icons.HelpCircle className={classNameValue} />;
  };

  return (
    <section id="about" className="py-6 sm:py-8 bg-white relative overflow-hidden">
      {/* Structural decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold/[0.02] rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-navy/[0.01] rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Column: Profile & Mission/Vision */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-gold block mb-2">
                Corporate Profile
              </span>
              <h2 className="font-display font-medium text-navy-dark text-3xl sm:text-4xl tracking-tight leading-tight">
                About Jukes Consults Limited
              </h2>
              <div className="w-20 h-1 bg-primary-gold mt-4" />
            </div>

            <p className="font-sans text-slate-600 leading-relaxed text-base sm:text-lg font-light">
              {ABOUT_DATA.overview}
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              {/* Mission Card */}
              <div className="p-6 rounded-none bg-slate-50 border-l-4 border-l-primary-gold border border-slate-100 relative group hover:border-slate-300 transition-all">
                <div className="absolute top-0 left-10 transform -translate-y-1/2 p-2.5 bg-primary-navy rounded-none border-2 border-primary-gold">
                  <Icons.Target className="w-5 h-5 text-primary-gold" />
                </div>
                <h3 className="font-display font-bold text-navy-dark text-lg pt-2 pb-3 mt-1 uppercase tracking-wider text-xs">Our Mission</h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  {ABOUT_DATA.mission}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-none bg-slate-50 border-l-4 border-l-primary-gold border border-slate-100 relative group hover:border-slate-300 transition-all">
                <div className="absolute top-0 left-10 transform -translate-y-1/2 p-2.5 bg-primary-navy rounded-none border-2 border-primary-gold">
                  <Icons.Eye className="w-5 h-5 text-primary-gold" />
                </div>
                <h3 className="font-display font-bold text-navy-dark text-lg pt-2 pb-3 mt-1 uppercase tracking-wider text-xs">Our Vision</h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  {ABOUT_DATA.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Core Values presentation */}
          <div className="lg:col-span-12 xl:col-span-5 bg-primary-navy p-8 sm:p-10 rounded-none border-2 border-primary-gold text-white shadow-none relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(197,160,33,0.03)_0%,transparent_100%)] z-0" />
            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-primary-gold uppercase">The Pillars of Our Services</span>
                <h2 className="font-display font-medium text-white text-2xl tracking-tight mt-1">Our Core Values</h2>
              </div>

              {/* Core Values Vertical List */}
              <div className="space-y-6">
                {CORE_VALUES.map((val) => (
                  <div key={val.id} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-none bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-all group-hover:border-primary-gold/50 group-hover:bg-white/[0.08]">
                      {renderIcon(val.iconName, "w-5 h-5 text-primary-gold")}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white group-hover:text-primary-gold transition-colors text-xs uppercase tracking-wider">
                        {val.title}
                      </h4>
                      <p className="font-sans text-xs text-white/50 leading-relaxed mt-1">
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
