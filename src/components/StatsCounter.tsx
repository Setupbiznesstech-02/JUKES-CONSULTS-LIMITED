import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 1800 }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl block text-primary-gold mb-1 filter drop-shadow">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const statsList = [
    { label: 'Years of Experience', end: 12, suffix: '+' },
    { label: 'Projects Completed', end: 320, suffix: '+' },
    { label: 'Satisfied Clients', end: 150, suffix: '+' },
    { label: 'Deliveries Made', end: 4200, suffix: '+' }
  ];

  return (
    <div className="bg-[#0A192F] py-6 px-6 sm:py-8 md:py-10 relative overflow-hidden border-y-2 border-primary-gold">
      {/* Dynamic graphic background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(197,160,33,0.05)_0%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statsList.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-none bg-navy-light/40 border border-primary-gold/20 backdrop-blur-sm transition-all duration-300 hover:border-primary-gold relative group"
              id={`stat-card-${idx}`}
            >
              {/* Corner accent boxes for geometric flavor */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary-gold opacity-60" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary-gold opacity-60" />
              
              <Counter end={stat.end} suffix={stat.suffix} />
              <p className="text-white/60 text-[10px] font-mono tracking-widest uppercase font-bold mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
