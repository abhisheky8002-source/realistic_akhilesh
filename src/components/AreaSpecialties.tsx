import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, DollarSign, Building } from 'lucide-react';
import { AREAS } from '../data';

export default function AreaSpecialties() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  return (
    <section id="areas" className="py-24 lg:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Backdrops glowing ambient lights */}
      <div className="absolute top-1/2 right-[15%] w-80 h-80 bg-gold-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Head Block */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-mono text-xs text-gold-300 uppercase tracking-[0.25em] mb-4 block font-semibold">
            Geographical Specialization // Area Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
            Elite Developments We Specialize In Gurgaon & NCR
          </h2>
          <div className="h-[2px] w-16 bg-gold-300 mt-6" />
        </div>

        {/* Dynamic Split Layout: Areas Selector Left, High-Definition Showcase Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Areas Lists Selector Column (Client Navigation Panel) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#caa042] font-semibold mb-2">
              Select Sector Domain
            </p>
            {AREAS.map((area, index) => (
              <button
                key={area.id}
                onClick={() => setActiveAreaIndex(index)}
                className={`w-full text-left p-5 md:p-6 transition-all duration-300 flex items-center justify-between border cursor-pointer focus:outline-none ${
                  activeAreaIndex === index
                    ? 'bg-charcoal-900 border-gold-300/60 shadow-xl'
                    : 'bg-transparent border-charcoal-800 hover:border-gold-300/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-xs ${activeAreaIndex === index ? 'text-gold-300 font-bold' : 'text-charcoal-450'}`}>
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className={`font-serif text-lg font-medium transition-colors ${activeAreaIndex === index ? 'text-gold-100' : 'text-charcoal-300'}`}>
                      {area.name}
                    </h3>
                    <p className="font-sans text-[10px] text-charcoal-400 uppercase tracking-widest mt-1">
                      {area.tagline.split(' ').slice(0, 3).join(' ')}
                    </p>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 transition-all ${activeAreaIndex === index ? 'text-gold-300 translate-x-1' : 'text-charcoal-450'}`} />
              </button>
            ))}
          </div>

          {/* Interactive Cinematic Display Details Block (7/12) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAreaIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-glow overflow-hidden relative border border-gold-300/15"
              >
                {/* Splendid area thumbnail image with dark linear shadow overlay */}
                <div className="h-64 sm:h-80 md:h-[320px] overflow-hidden relative">
                  <img
                    src={AREAS[activeAreaIndex].image}
                    alt={AREAS[activeAreaIndex].name}
                    className="w-full h-full object-cover transform scale-102 hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                  
                  {/* Floating Geographical location marker tag */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-charcoal-950/95 backdrop-blur-md px-4 py-2 border border-gold-300/30">
                    <MapPin className="w-3.5 h-3.5 text-gold-305" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white font-bold">
                      Gurgaon Micro-Market Zone
                    </span>
                  </div>
                </div>

                {/* Text descriptions and details of selected area */}
                <div className="p-8 md:p-10 bg-charcoal-900/90 font-sans">
                  <h4 className="font-serif text-2xl md:text-3.5xl font-light text-white mb-2 tracking-tight">
                    {AREAS[activeAreaIndex].name}
                  </h4>
                  <p className="font-mono text-xs text-gold-300 uppercase tracking-widest mb-6 font-semibold">
                    {AREAS[activeAreaIndex].tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-charcoal-350 leading-relaxed font-light mb-8">
                    {AREAS[activeAreaIndex].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-charcoal-800/80 mb-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-charcoal-450 flex items-center gap-1.5 mb-1">
                        <DollarSign className="w-3.5 h-3.5 text-gold-300" />
                        Average Capital Range
                      </p>
                      <p className="font-serif text-lg font-medium text-gold-300">
                        {AREAS[activeAreaIndex].propertiesRange}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-charcoal-450 flex items-center gap-1.5 mb-1">
                        <Building className="w-3.5 h-3.5 text-gold-300" />
                        Dominant Configuration
                      </p>
                      <p className="text-xs font-semibold text-white mt-1">
                        Elite Estates & Off-market Builder Floors
                      </p>
                    </div>
                  </div>

                  {/* Highlights section */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#caa042] font-semibold mb-4">
                      Primary Location Advantages
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {AREAS[activeAreaIndex].keyHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-3 bg-gold-400 shrink-0" />
                          <span className="text-[11px] sm:text-xs text-charcoal-200">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to inquire about this area */}
                  <div className="mt-8 pt-6 border-t border-charcoal-850 flex items-center justify-between">
                    <span className="text-[10px] text-charcoal-400">
                      Interested in acquisitions here?
                    </span>
                    <button
                      onClick={() => {
                        const contactSec = document.getElementById('contact');
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: 'smooth' });
                          // Prefill request input with the sector location as well.
                          const requestInput = document.getElementById('propertyRequirement') as HTMLTextAreaElement;
                          if (requestInput) {
                            requestInput.value = `I'm highly interested in exploring premium luxury options around ${AREAS[activeAreaIndex].name} with capital starting from ${AREAS[activeAreaIndex].propertiesRange}. Please contact me.`;
                          }
                        }
                      }}
                      className="text-xs font-bold uppercase tracking-widest text-gold-300 hover:text-gold-200 focus:outline-none cursor-pointer transition-colors"
                    >
                      Connect In {AREAS[activeAreaIndex].name.split(' ')[0]} →
                    </button>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
