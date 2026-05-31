import { motion } from 'motion/react';
import { Award, ShieldCheck, Target, Users, Check } from 'lucide-react';

export default function About() {
  const portraitPath = 'https://res.cloudinary.com/dr5obadvt/image/upload/v1780233982/660066742_17985785789975171_8550791002515577021_n.jpg_xt5xam.jpg';

  const badges = [
    { title: 'Luxury Property Specialist', icon: Award, desc: 'Curating the top 1% elite estates.' },
    { title: 'Investment Advisor', icon: Target, desc: 'Maximizing high-ROI portfolio gains.' },
    { title: 'Gurgaon Market Expert', icon: ShieldCheck, desc: 'Deep native micro-market insights.' },
    { title: 'Client-Focused Consultant', icon: Users, desc: 'Committed to ultimate confidentiality.' }
  ];

  const valuePillars = [
    'Direct high-fidelity off-market property scouting',
    'Rigorously audited legal/zoning documentation checking',
    'Strict absolute client privacy & data protection agreements',
    'Custom tailored portfolio growth roadmaps'
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-charcoal-900 overflow-hidden relative">
      {/* Decorative clean ambient lighting background blotch */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Column (5/12 grid layout for spacious architectural balance) */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative z-10"
            >
              {/* Image Frame with gold borders */}
              <div className="relative border border-gold-300/30 p-3 bg-charcoal-950/40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-[0.5px] border-gold-300/10 pointer-events-none z-[-1]" />
                <div className="overflow-hidden">
                  <img
                    src={portraitPath}
                    alt="Akhilesh Chauhan Portrait"
                    className="w-full object-cover aspect-[3/4] filter grayscale-[15%] hover:grayscale-0 transition-all duration-[1.5s]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Float floating statistics tag */}
              <div className="absolute -bottom-6 -right-6 glass-glow px-6 py-5 z-20 shadow-2xl">
                <p className="font-serif text-3xl font-light text-gold-300">12+</p>
                <p className="font-sans text-[9px] uppercase tracking-widest text-charcoal-300 font-semibold">
                  Years of Trust in Gurgaon
                </p>
              </div>
            </motion.div>
          </div>

          {/* About Narrative Column (7/12 grid layout) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="font-mono text-xs text-gold-300 uppercase tracking-[0.25em] mb-4 block font-semibold">
                About the Consultant
              </span>
              
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight mb-8 leading-tight">
                Akhilesh Chauhan
                <span className="block text-xl md:text-2xl text-gold-200 mt-2 font-light italic">
                  Defining Premium Real Estate Advisories
                </span>
              </h2>

              <p className="font-sans text-base text-charcoal-300 font-light leading-relaxed mb-6">
                Akhilesh Chauhan is a professional real estate consultant specializing in luxury residential properties, high-value investments, and premium housing across Gurgaon and Delhi NCR. He provides personalized guidance to clients looking to buy, sell, or invest in top-tier properties with complete transparency and market expertise.
              </p>

              <p className="font-sans text-base text-charcoal-300 font-light leading-relaxed mb-10">
                With a deep architectural grasp and robust local networks, Akhilesh guarantees access to off-market properties on Golf Course Road, specialized low-frequency DLF builder floors, and highly promising commercial corridor estates before they hit typical listings.
              </p>

              {/* Value list items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {valuePillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-0.5 bg-gold-450/10 border border-gold-300/35 mt-1 shrink-0">
                      <Check className="w-3.5 h-3.5 text-gold-300" />
                    </div>
                    <span className="font-sans text-sm text-charcoal-200 font-medium tracking-wide">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>

              {/* Badges Display */}
              <div className="border-t border-charcoal-800/80 pt-8">
                <p className="font-sans text-[11px] uppercase tracking-widest text-gold-300 font-bold mb-6">
                  Agent Credentials & Competencies
                </p>
                <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-6">
                  {badges.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <div key={index} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2 text-gold-300">
                          <Icon className="w-4 h-4 stroke-[1.5]" />
                          <p className="font-sans text-xs font-bold uppercase tracking-wider text-white">
                            {badge.title.split(' ')[0]}
                          </p>
                        </div>
                        <p className="font-sans text-[10px] text-charcoal-400">
                          {badge.title} — {badge.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
