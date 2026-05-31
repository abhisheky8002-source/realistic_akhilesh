import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-charcoal-900 border-t border-b border-charcoal-800/60 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-[5%] w-72 h-72 bg-gold-500/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold-300 uppercase tracking-[0.25em] mb-4 block font-semibold">
            References // Client Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
            Client Stories & Endorsements
          </h2>
          <div className="h-[2px] w-12 bg-gold-300 mx-auto mt-6" />
        </div>

        {/* Cinematic Slider Container */}
        <div
          className="max-w-4xl mx-auto relative px-4 md:px-12"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="glass-glow p-8 md:p-14 relative border border-gold-300/15"
            >
              {/* Backdrops massive Quote asset */}
              <Quote className="absolute right-8 top-8 w-24 h-24 text-gold-300/5 stroke-[0.4] pointer-events-none" />

              <div className="flex flex-col gap-6 md:gap-8">
                
                {/* Gold Rating Stars */}
                <div className="flex items-center gap-1 text-gold-300">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-300 stroke-none" />
                  ))}
                  <span className="font-mono text-[9px] text-charcoal-450 uppercase tracking-[0.15em] ml-2 font-bold">
                    Direct Verified Review
                  </span>
                </div>

                {/* Review Text content details */}
                <p className="font-serif text-lg md:text-2xl text-gold-50 font-light leading-relaxed italic">
                  "{TESTIMONIALS[currentIndex].reviewText}"
                </p>

                {/* Speaker author info row */}
                <div className="flex items-center gap-4 pt-6 border-t border-charcoal-800/60 mt-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold-550/10 border border-gold-300/30 text-gold-300 relative rounded-none shrink-0">
                    <UserCheck className="w-5 h-5 stroke-[1.2]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-white">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="font-sans text-xs text-gold-300 font-medium tracking-wide mt-0.5">
                      {TESTIMONIALS[currentIndex].role} — <span className="text-charcoal-400 font-light">{TESTIMONIALS[currentIndex].location}</span>
                    </p>
                    <span className="inline-block mt-2 font-mono text-[9px] bg-gold-300/10 text-gold-200 border border-gold-300/10 px-2 py-0.5 uppercase tracking-wide">
                      {TESTIMONIALS[currentIndex].propertyType}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrow buttons absolute positions */}
          <div className="flex items-center justify-center mt-10 gap-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-charcoal-950 border border-gold-300/15 hover:border-gold-300 text-gold-300 hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slider Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all focus:outline-none ${
                    currentIndex === idx ? 'w-6 bg-gold-300' : 'w-1.5 bg-charcoal-700 hover:bg-gold-300/40'
                  }`}
                  aria-label={`Go to slider ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-charcoal-950 border border-gold-300/15 hover:border-gold-300 text-gold-300 hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
