import { TESTIMONIALS } from '../data';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-6 sm:py-8 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Visual embellishment */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-gold/[0.01] rounded-full blur-3xl -ml-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-gold">
            Client Dividends
          </span>
          <h2 className="font-display font-medium text-navy-dark text-3xl sm:text-4xl mt-1 tracking-tight">
            Client Success Stories
          </h2>
          <div className="w-16 h-1 bg-primary-gold mx-auto mt-2" />
          <p className="font-sans text-slate-500 mt-3 text-sm sm:text-base font-light leading-relaxed">
            See how major industrial corporations, building experts, and trade operators across Lagos, Kaduna, and Ogun evaluate our supply delivery speed and operational commitment.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="p-8 rounded-none bg-white border-2 border-slate-100 relative overflow-hidden group hover:border-[#C5A021] transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-card-${test.id}`}
            >
              {/* Massive ambient decorative quotation mark */}
              <div className="absolute top-2 right-4 text-slate-100/50 group-hover:text-primary-gold/10 transition-colors pointer-events-none">
                <MessageSquareQuote className="w-24 h-24" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Gold Stars */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A021] text-[#C5A021]" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed italic font-light relative">
                  "{test.content}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 relative z-10">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-12 h-12 rounded-none object-cover border-2 border-[#C5A021]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-navy-dark text-sm leading-tight text-xs uppercase tracking-wider">
                    {test.name}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-500 mt-0.5">
                    {test.position}, <span className="text-primary-gold font-bold">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
