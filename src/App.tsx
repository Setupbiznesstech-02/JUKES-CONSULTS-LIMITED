import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeHero from './components/HomeHero';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import OurTeam from './components/OurTeam';
import OurServices from './components/OurServices';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import OurPartners from './components/OurPartners';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [inquirySubject, setInquirySubject] = useState('');

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // height of fixed header approx
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Dynamic intersection observer to detect current visible section
  useEffect(() => {
    const sections = ['home', 'about', 'team', 'services', 'gallery', 'testimonials', 'contact', 'partners'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset to trigger early

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectInquiry = (subject: string) => {
    setInquirySubject(subject);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between font-sans selection:bg-primary-gold/20 selection:text-navy-dark">
      {/* Header bar */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Corporate layout segments */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <HomeHero scrollToSection={scrollToSection} />

        {/* Dynamic numerical outcomes tracker */}
        <StatsCounter />

        {/* About Jukes Consults */}
        <About />

        {/* Our Executive Board / Team */}
        <OurTeam />

        {/* Our Custom Corporate Services */}
        <OurServices onSelectInquiry={handleSelectInquiry} />

        {/* Projects / physical stock gallery */}
        <ProjectGallery />

        {/* Reviews segment */}
        <Testimonials />

        {/* Interactive email form and office map */}
        <ContactForm inquirySubject={inquirySubject} setInquirySubject={setInquirySubject} />

        {/* Corporate client & partner brands segment */}
        <OurPartners />
      </main>

      {/* Footer landmarks layout */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
