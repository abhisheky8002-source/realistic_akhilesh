import { motion } from 'motion/react';
import { Compass, ShieldCheck, Eye, Award, Sparkles, FolderHeart, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const trustPillars = [
    {
      title: 'Deep Market Knowledge',
      desc: 'Native command of Gurgaon & Delhi NCR sectors, including master development plans, upcoming arterial roads, and historic price trends.',
      icon: Compass
    },
    {
      title: '100% Verified Private Listings',
      desc: 'Each villa, penthouse, and builder floor in our portfolio undergoes rigorous title legalities clearance before introduction.',
      icon: ShieldCheck
    },
    {
      title: 'Absolute Dealing Transparency',
      desc: 'Committed to transparent direct builder-buyer conversations without hidden markups, broker loops, or opaque contracts.',
      icon: Eye
    },
    {
      title: 'Elite Negotiation Expertise',
      desc: 'Securing the most premium terms and values. Years of representing high-profile CEOs, NRIs, and business families.',
      icon: Award
    },
    {
      title: 'Personalized Client Support',
      desc: 'One-on-one direct continuous representation. No handovers to junior agents. Akhilesh personally manages your requirements.',
      icon: Sparkles
    },
    {
      title: 'End-to-End Assistance',
      desc: 'Complete coverage from private chauffeur site tours to home registries, tax structures support, and premium designer handshakes.',
      icon: FolderHeart
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-charcoal-50 text-charcoal-900 relative overflow-hidden" id="why-choose-us">
      {/* Decorative vector grid elements for minimal elegance */}
      <div className="absolute inset-0 noise-bg opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Head text block */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="font-mono text-xs text-gold-600 uppercase tracking-[0.25em] mb-4 block font-bold">
            Ethos & Integrity // Why Clients Trust Us
          </span>
          <h2 className="font-serif text-3xl md:text-5.5xl font-light text-charcoal-950 tracking-tight leading-tight">
            An Uncompromising Commitment To Elite Real Estate Representation
          </h2>
          <div className="h-[2.5px] w-16 bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Icons Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-16">
          {trustPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="flex gap-5 group"
              >
                {/* Custom glowing rounded light box for icon */}
                <div className="shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-500/10 border border-gold-500/20 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5.5 h-5.5 stroke-[1.2]" />
                  </div>
                </div>

                {/* Text Block */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-charcoal-950 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality statement footer banner */}
        <div className="mt-20 pt-12 border-t border-charcoal-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 stroke-[1.5]" />
            <span className="font-serif text-base sm:text-lg text-charcoal-800 italic">
              "Providing absolute representation for high-value portfolios since 2014."
            </span>
          </div>
          
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-bold uppercase tracking-widest font-sans border-b border-gold-500 pb-1 text-charcoal-950 hover:text-gold-600 hover:border-gold-600 cursor-pointer transition-colors"
          >
            Learn More About Our Safeguards →
          </button>
        </div>

      </div>
    </section>
  );
}
