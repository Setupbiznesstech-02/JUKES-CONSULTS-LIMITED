import { Mail, MapPin, ArrowUp, Award } from 'lucide-react';
import { COMPANY_CONTACT } from '../data';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = 2026; // Match system current local date 2026

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-white pt-12 pb-8 relative overflow-hidden border-t border-primary-gold/15">
      {/* Absolute glow design */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-gold/[0.02] rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        {/* Brand Summary Column */}
        <div className="lg:col-span-5 space-y-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
            id="footer-logo"
          >
            <div className="w-8 h-8 bg-primary-gold text-primary-navy flex items-center justify-center font-bold text-lg rounded-sm transition-transform duration-300 group-hover:scale-105">
              J
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-tight text-base block leading-none">
                JUKES <span className="text-primary-gold">CONSULTS</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#C5A021] block mt-1 uppercase font-bold">
                Limited
              </span>
            </div>
          </button>
          
          <p className="font-sans text-xs text-white/50 leading-relaxed font-light max-w-sm">
            Incorporated under the Federal Republic of Nigeria, delivering reliable multi-sector trading solutions, heavy aggregates supply, and logistics management across the federation.
          </p>

          <div className="space-y-3 pt-2 text-xs font-sans text-white/70">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary-gold flex-shrink-0 mt-0.5" />
              <span>{COMPANY_CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary-gold flex-shrink-0" />
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-primary-gold transition-colors">{COMPANY_CONTACT.email}</a>
            </div>
          </div>
        </div>

        {/* Navigation Quick Links Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary-gold">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs font-sans text-white/70">
            <li>
              <button onClick={() => scrollToSection('home')} className="hover:text-primary-gold hover:underline transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary-gold hover:underline transition-colors cursor-pointer">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('team')} className="hover:text-primary-gold hover:underline transition-colors cursor-pointer">
                Our Team
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary-gold hover:underline transition-colors cursor-pointer">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary-gold hover:underline transition-colors cursor-pointer">
                Projects & Gallery
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary-gold hover:underline transition-colors cursor-pointer">
                Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary-gold hover:underline transition-colors cursor-pointer">
                Contact Us
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('partners')} className="hover:text-primary-gold hover:underline transition-colors cursor-pointer">
                Partners
              </button>
            </li>
          </ul>
        </div>

        {/* Services Quick Links Column */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary-gold">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-xs font-sans text-white/70">
            <li>
              <button onClick={() => { scrollToSection('services'); }} className="hover:text-primary-gold hover:underline transition-colors text-left cursor-pointer">
                Commodity Trading Solutions
              </button>
            </li>
            <li>
              <button onClick={() => { scrollToSection('services'); }} className="hover:text-primary-gold hover:underline transition-colors text-left cursor-pointer">
                Construction Materials Supply
              </button>
            </li>
            <li>
              <button onClick={() => { scrollToSection('services'); }} className="hover:text-primary-gold hover:underline transition-colors text-left cursor-pointer">
                Scrap Iron Trading & Aggregation
              </button>
            </li>
            <li>
              <button onClick={() => { scrollToSection('services'); }} className="hover:text-primary-gold hover:underline transition-colors text-left cursor-pointer">
                Logistics & Haulage services
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Copy & Back to Top Area */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-white/55">
        <p className="text-center sm:text-left">
          © {currentYear} JUKES CONSULTS LIMITED. All Rights Reserved.
        </p>

        <button
          onClick={handleBackToTop}
          className="flex items-center gap-1.5 p-2 px-3.5 rounded-none border-2 border-primary-gold/40 hover:border-primary-gold bg-transparent hover:text-primary-gold transition-all text-[10px] uppercase tracking-widest cursor-pointer"
          id="scroll-to-top"
        >
          Back to Top
          <ArrowUp className="w-3.5 h-3.5 text-primary-gold" />
        </button>
      </div>
    </footer>
  );
}
