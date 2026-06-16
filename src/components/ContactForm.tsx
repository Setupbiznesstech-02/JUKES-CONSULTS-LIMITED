import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { Mail, MapPin, Send, AlertCircle, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY_CONTACT } from '../data';

interface ContactFormProps {
  inquirySubject: string;
  setInquirySubject: (subject: string) => void;
}

export default function ContactForm({ inquirySubject, setInquirySubject }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'err'>('idle');

  // Sync inquiry subject when chosen from service modals
  useEffect(() => {
    if (inquirySubject) {
      setFormData((prev) => ({ ...prev, subject: inquirySubject }));
    }
  }, [inquirySubject]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please provide a valid phone contact';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Use FormSubmit fetch endpoint to post content directly
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        _subject: `New Corporate Inquiry: ${formData.subject}`,
        _honey: '' // Anti-spam honeypot field
      };

      const response = await fetch("https://formsubmit.co/ajax/jukesconsultsltd@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      if (response.ok && result.success === "true") {
        setSubmitStatus('success');
        // Clear Form fields
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setInquirySubject('');
      } else {
        setSubmitStatus('err');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('err');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-6 sm:py-8 bg-[#fafbfd] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Coordinates & Embedded Google Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-gold block mb-2">
                Get In Touch
              </span>
              <h2 className="font-display font-medium text-navy-dark text-3xl sm:text-4xl tracking-tight leading-tight">
                Corporate Location
              </h2>
              <div className="w-16 h-1 bg-primary-gold mt-2" />
              <p className="font-sans text-slate-500 mt-3 text-sm sm:text-base font-light leading-relaxed">
                Visit our head office in Lagos or drop a secure message below. We process requests instantly to deliver fast estimates and dispatch terms.
              </p>
            </div>

            {/* Address & Email Information Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-none bg-white border-2 border-slate-100 flex items-start gap-4 hover:border-primary-gold transition-all duration-300">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-none text-primary-gold flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-dark text-xs uppercase tracking-wider">Office Address</h4>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mt-1">
                    {COMPANY_CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-none bg-white border-2 border-slate-100 flex items-start gap-4 hover:border-primary-gold transition-all duration-300">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-none text-primary-gold flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-dark text-xs uppercase tracking-wider">Corporate Email</h4>
                  <a 
                    href={`mailto:${COMPANY_CONTACT.email}`} 
                    className="font-sans text-xs text-slate-600 hover:text-primary-gold transition-colors mt-1 block"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Map Frame Card */}
            <div className="rounded-none overflow-hidden border-2 border-primary-navy h-72 relative bg-slate-100">
              <iframe
                title="Jukes Consults Limited Office Map Address, Ikeja Lagos"
                src={COMPANY_CONTACT.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] saturate-[110%] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Column: High-End Validated Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-none border-2 border-[#0A192F] space-y-8">
            <div>
              <h3 className="font-display font-bold text-navy-dark text-xl sm:text-2xl tracking-tight uppercase tracking-wide text-sm">
                Send Direct Inquiry Message
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-1 font-light">
                Fill the fields below to dispatch an automated memo to our corporate registry at <span className="text-primary-navy font-semibold">{COMPANY_CONTACT.email}</span>
              </p>
            </div>

            {/* Form submit states notices */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-none border-l-4 border-l-green-600 border border-green-200 bg-green-50 text-xs sm:text-sm flex items-start gap-3 animate-scale-up" id="success-alert">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-bold text-green-900 mb-0.5 uppercase tracking-wider text-xs">Inquiry Dispatched Successfully</h5>
                  <p className="font-sans text-xs text-green-700 leading-normal font-light">Thank you. Your message has been compiled and emailed to the JUKES CONSULTS LIMITED team. Our operators will respond shortly.</p>
                </div>
              </div>
            )}

            {submitStatus === 'err' && (
              <div className="p-4 rounded-none border-l-4 border-l-red-600 border border-red-200 bg-red-50 text-xs sm:text-sm flex items-start gap-3 animate-scale-up" id="error-alert">
                <AlertCircle className="w-5 h-5 text-red-650 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-bold text-red-900 mb-0.5 uppercase tracking-wider text-xs">Transmission Fault</h5>
                  <p className="font-sans text-xs text-red-700 leading-normal font-light">We encountered an issue submitting your request directly through AJAX. Please email us manually at <b className="font-semibold">{COMPANY_CONTACT.email}</b> or try again.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate id="contact-form-node">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-sans text-slate-650 font-bold uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-none border-2 text-xs bg-slate-50 font-sans tracking-wide outline-none transition-all ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-primary-gold focus:bg-white'
                    }`}
                    placeholder="Alhaji Ahmed Banjo"
                  />
                  {errors.name && <p className="text-red-500 font-sans text-[11px] mt-0.5">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-sans text-slate-650 font-bold uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-none border-2 text-xs bg-slate-50 font-sans tracking-wide outline-none transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-primary-gold focus:bg-white'
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-red-500 font-sans text-[11px] mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-[10px] font-sans text-slate-650 font-bold uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-none border-2 text-xs bg-slate-50 font-sans tracking-wide outline-none transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-primary-gold focus:bg-white'
                    }`}
                    placeholder="+234 803 123 4567"
                  />
                  {errors.phone && <p className="text-red-500 font-sans text-[11px] mt-0.5">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[10px] font-sans text-slate-650 font-bold uppercase tracking-wider block">
                    Subject / Project
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-none border-2 text-xs bg-slate-50 font-sans tracking-wide outline-none transition-all ${
                      errors.subject ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-primary-gold focus:bg-white'
                    }`}
                    placeholder="Material Order / Haulage Contract"
                  />
                  {errors.subject && <p className="text-red-500 font-sans text-[11px] mt-0.5">{errors.subject}</p>}
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-sans text-slate-650 font-bold uppercase tracking-wider block">
                  Detailed Message
                  {inquirySubject && (
                    <span className="text-[10px] text-primary-gold ml-2 lowercase italic">(pre-set for selected service)</span>
                  )}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-3 rounded-none border-2 text-xs bg-slate-50 font-sans tracking-wide outline-none transition-all ${
                    errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-primary-gold focus:bg-white'
                  }`}
                  placeholder="Provide specifications of materials, volumes needed, transit source and target destination coordinates, etc."
                />
                {errors.message && <p className="text-red-500 font-sans text-[11px] mt-0.5">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0A192F] hover:bg-[#C5A021] text-white disabled:bg-slate-400 hover:text-[#0A192F] p-4 rounded-none mt-4 font-sans font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 border-2 border-primary-gold transition-all duration-300 cursor-pointer"
                id="submit-contact-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/35 border-t-[#000] rounded-none animate-spin" />
                    Transmitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-primary-gold" />
                    Transmit Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
