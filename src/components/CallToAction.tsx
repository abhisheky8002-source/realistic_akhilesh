import { motion } from 'motion/react';
import { MessageSquare, Phone, CalendarRange, Sparkles } from 'lucide-react';

interface CallToActionProps {
  onBookClick: () => void;
}

export default function CallToAction({ onBookClick }: CallToActionProps) {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white relative overflow-hidden border-t border-b border-gold-300/10">
      
      {/* Decorative luxury gold ambient background blur */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold-400/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute left-10 bottom-0 w-80 h-32 bg-gold-300/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 noise-bg opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-350/20 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-300 font-bold">
              Private Allocation Gate
            </span>
          </motion.div>

          {/* Core Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-light leading-tight mb-6">
            Looking for Your <span className="italic text-gold-200">Dream Property?</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Connect with Akhilesh Chauhan for a highly personalized, secure real estate consultation. Unlock off-market penthouses, private developer listings, and secure premium investment deals in Gurgaon before they reach typical broker channels.
          </p>

          {/* Dynamic Buttons - High Conversion */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-5 max-w-xl mx-auto">
            {/* Call Now */}
            <a
              href="tel:+919999999999"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-gold-300/50 hover:border-gold-300 hover:bg-white/5 text-xs text-white uppercase font-bold tracking-widest transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-gold-300" />
              Call Specialist
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999?text=Hello%20Akhilesh,%20I'm%20interested%20in%20high-value%20luxury%20real%20estate%20deals%20in%20Gurgaon."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-gold-450 to-gold-500 hover:brightness-110 active:scale-98 text-xs text-charcoal-950 font-bold uppercase tracking-widest transition-all duration-300 border border-gold-400"
              referrerPolicy="no-referrer"
            >
              <MessageSquare className="w-4 h-4 fill-charcoal-950 stroke-none" />
              WhatsApp Inquiry
            </a>

            {/* Book Consultation */}
            <button
              onClick={onBookClick}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 border border-neutral-800 hover:border-gold-300/30 text-xs text-gold-300 uppercase font-bold tracking-widest transition-all duration-300 cursor-pointer"
            >
              <CalendarRange className="w-4 h-4 text-gold-300" />
              Book Advising Session
            </button>
          </div>

          <p className="mt-8 font-mono text-[9px] text-charcoal-450 uppercase tracking-widest">
            *Strict compliance, data safety, and immediate callbacks within 30 minutes.
          </p>

        </div>

      </div>
    </section>
  );
}
