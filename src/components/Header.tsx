import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Award, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyDropdownItems = [
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Our Team' },
    { id: 'partners', label: 'Our Partners' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary-navy/95 shadow-lg backdrop-blur-md py-3 border-b-2 border-primary-gold' : 'bg-transparent py-5'}`}>
      {/* Top micro bar for corporate identity */}
      <div className={`border-b border-white/10 pb-2 mb-2 hidden md:block transition-all duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-sans text-white/70">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5 text-primary-gold" />
              <a href="mailto:jukesconsultsltd@gmail.com" className="hover:text-primary-gold transition-colors">jukesconsultsltd@gmail.com</a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/50 uppercase font-mono tracking-widest text-[10px]">
            <span>Corporate Address: No 38, Opebi Road, Ikeja, Lagos, Nigeria</span>
            <span className="text-primary-gold font-bold">● ACTIVE</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Branding */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group cursor-pointer text-left"
          id="nav-logo"
        >
          <div className="w-10 h-10 bg-primary-gold text-primary-navy flex items-center justify-center font-bold text-2xl rounded-sm transition-transform duration-300 group-hover:scale-105">
            J
          </div>
          <div>
            <span className="font-display font-bold text-white tracking-tight text-xl block leading-none">
              JUKES <span className="text-primary-gold">CONSULTS</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#C5A021] block mt-1.5 uppercase font-bold">
              Limited
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <li>
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer relative py-1.5 ${activeSection === 'home' ? 'text-primary-gold' : 'text-gray-300 hover:text-white'}`}
              >
                Home
                {activeSection === 'home' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold" />
                )}
              </button>
            </li>

            {/* Dropdown for Company */}
            <li 
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                className={`text-xs font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer relative py-1.5 flex items-center gap-1.5 ${['about', 'team', 'partners', 'testimonials'].includes(activeSection) ? 'text-primary-gold' : 'text-gray-300 hover:text-white'}`}
              >
                Company
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180' : ''}`} />
                {['about', 'team', 'partners', 'testimonials'].includes(activeSection) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold" />
                )}
              </button>

              {companyDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 z-50">
                  <div className="bg-primary-navy border border-white/10 shadow-2xl py-2 text-left rounded-sm backdrop-blur-md">
                    {companyDropdownItems.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleNavClick(subItem.id)}
                        className={`w-full text-left px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200 hover:bg-white/5 block ${
                          activeSection === subItem.id ? 'text-primary-gold' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Rest of items */}
            {['services', 'gallery', 'contact'].map((id) => {
              const label = id === 'services' ? 'Services' : id === 'gallery' ? 'Projects & Gallery' : 'Contact Us';
              return (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`text-xs font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer relative py-1.5 ${activeSection === id ? 'text-primary-gold' : 'text-gray-300 hover:text-white'}`}
                  >
                    {label}
                    {activeSection === id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => handleNavClick('contact')}
            className="bg-primary-gold hover:bg-gold-dark text-navy-dark px-6 py-2.5 rounded-none font-sans text-xs font-bold uppercase tracking-widest hover:text-white transition-all duration-300 cursor-pointer"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary-gold p-2 cursor-pointer focus:outline-none"
            aria-label="Toggle Menu"
            id="mobile-nav-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-dark/95 border-b-2 border-primary-gold backdrop-blur-lg animate-fade-in shadow-xl max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col px-6 py-4 gap-3">
            <li className="border-b border-white/5 pb-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left w-full block py-1.5 font-sans font-bold uppercase tracking-wider text-xs transition-colors ${activeSection === 'home' ? 'text-primary-gold' : 'text-white/80 hover:text-white'}`}
              >
                Home
              </button>
            </li>

            {/* Mobile Dropdown Header for Company */}
            <li className="border-b border-white/5 pb-2">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`flex items-center justify-between w-full py-1.5 font-sans font-bold uppercase tracking-wider text-xs transition-colors ${['about', 'team', 'partners', 'testimonials'].includes(activeSection) ? 'text-primary-gold' : 'text-white/80 hover:text-gold-light'}`}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileDropdownOpen && (
                <ul className="pl-4 mt-2 mb-1 border-l border-white/10 space-y-2">
                  {companyDropdownItems.map((subItem) => (
                    <li key={subItem.id}>
                      <button
                        onClick={() => handleNavClick(subItem.id)}
                        className={`text-left w-full block py-1 font-sans font-bold uppercase tracking-wider text-[11px] transition-colors ${activeSection === subItem.id ? 'text-primary-gold' : 'text-white/60 hover:text-white'}`}
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {['services', 'gallery', 'contact'].map((id) => {
              const label = id === 'services' ? 'Services' : id === 'gallery' ? 'Projects & Gallery' : 'Contact Us';
              return (
                <li key={id} className="border-b border-white/5 pb-2 last:border-none">
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`text-left w-full block py-1.5 font-sans font-bold uppercase tracking-wider text-xs transition-colors ${activeSection === id ? 'text-primary-gold' : 'text-white/80 hover:text-white'}`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}

            <li className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center bg-primary-gold hover:bg-gold-dark text-navy-dark font-sans font-bold text-xs uppercase tracking-widest py-3 rounded-none shadow"
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
