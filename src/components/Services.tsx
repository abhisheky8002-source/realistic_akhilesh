import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  // Simple helper to fetch dynamic icons correctly from lucide package
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.Compass className="w-6 h-6 stroke-[1.2]" />;
    return <IconComponent className="w-6 h-6 stroke-[1.2]" />;
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative linear dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-300/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-300/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-mono text-xs text-gold-300 uppercase tracking-[0.25em] mb-4 block font-semibold">
            Real Estate Services // Tailored Solutions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
            Consultancy Services For High-Net-Worth Individuals & Investors
          </h2>
          <div className="h-[2px] w-16 bg-gold-300 mt-6" />
        </div>

        {/* Services Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-glow p-8 md:p-10 flex flex-col justify-between group cursor-pointer transition-all duration-300 border border-gold-300/10 hover:border-gold-300/30"
            >
              <div>
                {/* Header Area Icon + Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-500/5 border border-gold-300/25 text-gold-300 group-hover:bg-gold-500/15 group-hover:border-gold-300 transition-all duration-300">
                    {renderIcon(service.iconName)}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white group-hover:text-gold-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Service Description */}
                <p className="font-sans text-xs sm:text-sm text-charcoal-350 leading-relaxed font-light mb-8">
                  {service.description}
                </p>

                {/* Feature Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-450 shrink-0" />
                      <span className="font-sans text-[11px] sm:text-xs text-charcoal-200 font-medium whitespace-nowrap">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom interactive signal */}
              <div className="pt-4 border-t border-charcoal-800/40 flex items-center justify-between mt-auto">
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 font-bold">
                  Schedule Consultation
                </span>
                <LucideIcons.ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
