import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember } from '../types';

export default function OurTeam() {
  // Helper to dynamically render corresponding Lucide Icon
  const renderIcon = (iconName: string, classNameValue: string = "w-4 h-4") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={classNameValue} />;
    }
    return <Icons.User className={classNameValue} />;
  };

  return (
    <section id="team" className="py-6 sm:py-8 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Absolute ambient accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-gold/[0.012] rounded-full blur-3xl -ml-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-navy/[0.012] rounded-full blur-3xl -mr-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A021]">
            Our Executive Board
          </span>
          <h2 className="font-display font-medium text-[#0A192F] text-2xl sm:text-3xl mt-1 tracking-tight">
            OUR TEAMS
          </h2>
          <div className="w-16 h-0.5 bg-primary-gold mx-auto mt-2" />
          <p className="font-sans text-slate-500 mt-3 text-xs sm:text-sm font-light leading-relaxed">
            Led by dedicated experts with deep industrial credentials. Our structured executive team guarantees regulatory conformity, flawless financial administration, and elite-tier client-care operations.
          </p>
        </div>

        {/* Grid Container for Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member: TeamMember, index: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-slate-200 shadow-sm rounded-none overflow-hidden flex flex-col justify-between group hover:border-[#C5A021] hover:shadow transition-all duration-300"
            >
              
              {/* Profile Image Area with high-quality proportions */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-150 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Floating Badge & Rank Icon */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className={`px-2.5 py-1 text-[9px] font-mono font-semibold tracking-wider uppercase border rounded-none shadow-sm flex items-center gap-1.5 ${member.badgeColor} bg-white/95 backdrop-blur-sm`}>
                    {renderIcon(member.iconName, "w-3 h-3 text-[#C5A021] flex-shrink-0")}
                    {member.badge}
                  </span>
                </div>
              </div>

              {/* Information / Bio Section */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between bg-white border-t border-slate-100">
                <div>
                  
                  {/* Name and Professional Designation */}
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-navy-dark text-sm sm:text-base tracking-tight mb-1 group-hover:text-[#C5A021] transition-colors">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-0.5 bg-primary-gold" />
                      <span className="font-sans text-[11px] sm:text-xs text-slate-550 font-bold uppercase tracking-wider block">
                        {member.position}
                      </span>
                    </div>
                  </div>

                  {/* BIO Paragraphs - clearly broken down into small paragraphs */}
                  <div className="space-y-2.5 text-slate-600">
                    {member.paragraphs.map((para, idx) => (
                      <p key={idx} className="font-sans text-[11px] sm:text-xs leading-relaxed font-light">
                        {para}
                      </p>
                    ))}
                  </div>

                </div>

                {/* Footer details marking status */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span className="uppercase tracking-widest font-bold text-[#C5A021]">Verified Executive</span>
                  <span>Active JCL Member</span>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
