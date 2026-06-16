import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Layers, HardHat, Truck, Wheat, Recycle, ZoomIn, X } from 'lucide-react';

export default function ProjectGallery() {
  const [filter, setFilter] = useState<'all' | 'materials' | 'logistics' | 'trading' | 'scrap'>('all');
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string; desc: string } | null>(null);

  const filterTabs = [
    { key: 'all' as const, label: 'All Projects', icon: Layers },
    { key: 'materials' as const, label: 'Materials', icon: HardHat },
    { key: 'logistics' as const, label: 'Logistics & Haulage', icon: Truck },
    { key: 'trading' as const, label: 'Commodity Trading', icon: Wheat },
    { key: 'scrap' as const, label: 'Scrap Iron', icon: Recycle }
  ];

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-6 sm:py-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-gold">
            Photo Inventory
          </span>
          <h2 className="font-display font-semibold text-navy-dark text-3xl sm:text-4xl mt-1 tracking-tight">
            Corporate Operations & Gallery
          </h2>
          <div className="w-16 h-1 bg-primary-gold mx-auto mt-2 rounded-full" />
          <p className="font-sans text-slate-500 mt-3 text-sm sm:text-base font-light leading-relaxed">
            A real-world glance at Jukes Consults Limited’s core physical materials, logistics distribution networks, sorted recycling stocks, and trade supply operations.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {filterTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = filter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-none border-2 text-xs font-sans font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-primary-navy border-primary-gold text-primary-gold' 
                    : 'bg-white border-slate-200 text-slate-500 hover:text-navy-dark hover:border-[#0A192F]'
                }`}
                id={`gallery-filter-${tab.key}`}
              >
                <TabIcon className="w-4 h-4 text-primary-gold" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Representation with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative h-80 rounded-none overflow-hidden border-2 border-slate-100 bg-slate-50 cursor-pointer hover:border-[#C5A021] transition-all duration-300"
                onClick={() => setPreviewImage({ url: item.image, title: item.title, desc: item.description })}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Backdrop dark gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Absolute Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <span className="text-[10px] font-mono uppercase text-primary-gold tracking-widest font-bold mb-1">
                    {item.category === 'materials' && 'Construction Supply'}
                    {item.category === 'logistics' && 'Haulage Logistics'}
                    {item.category === 'trading' && 'Commodity Sourcing'}
                    {item.category === 'scrap' && 'Scrap Recycling'}
                  </span>
                  <h3 className="font-display font-bold text-base text-white tracking-wide uppercase text-xs">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[11px] text-white/70 mt-1 lines-clamp-2 leading-relaxed h-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 opacity-0">
                    {item.description}
                  </p>
                </div>

                {/* Direct interactive preview zoom badge */}
                <div className="absolute top-4 right-4 p-2 rounded-none bg-[#0A192F]/80 hover:bg-primary-navy border border-primary-gold/40 shadow z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-primary-gold" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Image Overlay viewing pane */}
      <AnimatePresence>
        {previewImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
              className="absolute inset-0 bg-[#0A192F]/85 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white max-w-3xl w-full rounded-none overflow-hidden shadow-none z-10 border-2 border-primary-gold"
            >
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-3 right-3 bg-navy-dark border border-primary-gold text-white hover:text-primary-gold p-2.5 rounded-none cursor-pointer z-20"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-video bg-neutral-900">
                <img 
                  src={previewImage.url} 
                  alt={previewImage.title} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-white border-t-2 border-primary-gold">
                <h4 className="font-display font-bold text-navy-dark text-lg leading-tight uppercase tracking-wider text-xs">
                  {previewImage.title}
                </h4>
                <p className="font-sans text-xs text-slate-500 mt-1.5 font-light leading-relaxed">
                  {previewImage.desc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
