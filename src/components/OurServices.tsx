import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface OurServicesProps {
  onSelectInquiry: (subject: string) => void;
}

export default function OurServices({ onSelectInquiry }: OurServicesProps) {
  // Helper to map string to lucide icons
  const renderIcon = (iconName: string, classNameValue: string = "w-6 h-6 text-[#C5A021]") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={classNameValue} />;
    }
    return <Icons.HelpCircle className={classNameValue} />;
  };

  const handleInquireClick = (serviceTitle: string) => {
    onSelectInquiry(`${serviceTitle} Sourcing/Supply Inquiry`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to split a long description string into smaller digestible paragraphs
  const renderParagraphs = (text: string) => {
    // Split sentences using a basic regex that keeps the punctuation index
    const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
    
    // Group every 2 sentences into a small paragraph
    const groupings = [];
    for (let i = 0; i < sentences.length; i += 2) {
      groupings.push(sentences.slice(i, i + 2).join(" ").trim());
    }

    return groupings.map((paragraphText, idx) => (
      <p key={idx} className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-2 last:mb-0">
        {paragraphText}
      </p>
    ));
  };

  return (
    <section id="services" className="py-6 sm:py-8 bg-[#FAFBFD] relative overflow-hidden">
      {/* Absolute subtle visual gradients */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-gold/[0.012] rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-navy/[0.012] rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A021]">
            Our Core Competencies
          </span>
          <h2 className="font-display font-medium text-[#0A192F] text-2xl sm:text-3xl mt-1 tracking-tight">
            OUR SERVICES
          </h2>
          <div className="w-16 h-0.5 bg-primary-gold mx-auto mt-2" />
          <p className="font-sans text-slate-500 mt-3 text-xs sm:text-sm font-light leading-relaxed">
            Operating high-performance logistics pipelines, bulk commodity sourcing networks, and dependable industrial delivery programs. We are customized to support Nigeria’s evolving infrastructure and building growth seamlessly.
          </p>
        </div>

        {/* Responsive Grid Panel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {SERVICES.map((service: Service, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-slate-200/80 rounded-none shadow-sm hover:shadow-md hover:border-primary-gold/50 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image banner with quick overlay */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#0A192F] border border-[#C5A021]/30">
                      {renderIcon(service.icon, "w-5 h-5 text-primary-gold")}
                    </div>
                    <h3 className="font-display font-medium text-white text-base sm:text-lg tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Service Details Container */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                <div>
                  {/* Sourced/Comprehensively Detailed Paragraph Breakdown */}
                  <div className="mb-4">
                    {renderParagraphs(service.longDescription)}
                  </div>

                  {/* Comprehensive Bullet Checklist */}
                  <div className="border-t border-slate-100 pt-3 mt-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C5A021] block mb-2">
                      Core Sourcing & Deliverables
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Icons.Check className="w-3.5 h-3.5 text-primary-gold flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-[11px] text-slate-600 leading-tight">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action trigger */}
                <div className="mt-5 pt-3 border-t border-slate-100/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-450 italic">
                    Reliable Supply Guaranteed
                  </span>
                  <button
                    onClick={() => handleInquireClick(service.title)}
                    className="border border-slate-200 group-hover:border-[#C5A021] hover:bg-[#C5A021] text-xs font-sans font-bold uppercase tracking-widest text-slate-700 hover:text-white px-4 py-2 hover:shadow transition-all duration-300 cursor-pointer"
                  >
                    Send Inquiry
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
