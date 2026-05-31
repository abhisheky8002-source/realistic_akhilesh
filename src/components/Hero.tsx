import { motion } from 'motion/react';
import { ArrowRight, Compass, Shield } from 'lucide-react';

interface HeroProps {
  onExploreProperties: () => void;
  onBookConsultation: () => void;
}

export default function Hero({ onExploreProperties, onBookConsultation }: HeroProps) {
  // Use our magnificent generated villa image path
  const heroImage = 'https://res.cloudinary.com/dr5obadvt/image/upload/v1780234851/pexels-photo-6292341_aimxju.jpg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-[100vh] flex items-center justify-center overflow-hidden bg-charcoal-950"
    >
      {/* Immersive Background Image with Premium Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={heroImage}
          alt="Luxury Mansion in Gurgaon"
          className="w-full h-full object-cover scale-[1.02] transform transition-transform duration-[8000ms] ease-out object-center"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic dark linear & radial gradient overlay to guarantee copy legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/50 md:hidden block" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-charcoal-950/90" />
      </div>

      {/* Decorative Elegant Accents */}
      <div className="absolute bottom-10 right-12 z-10 hidden xl:flex items-center gap-4">
        <div className="h-[1px] w-16 bg-gold-300" />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold-300">
          Exclusive Portfolio
        </span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-16 h-full flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Tagline / Introduction */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="inline-block p-1 px-2 text-[10px] sm:text-xs font-mono font-medium uppercase tracking-[0.25em] text-gold-300 bg-gold-500/10 border border-gold-300/20 backdrop-blur-sm">
              AKHILESH CHAUHAN ADVISORY
            </span>
            <div className="h-[1px] w-12 bg-gold-350/40 hidden sm:block" />
            <span className="text-xs uppercase tracking-widest text-charcoal-350 hidden sm:inline-block font-sans font-semibold">
              01 // Exclusive Portfolio
            </span>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] mb-6"
          >
            Luxury Homes.<br />
            <span className="italic text-gold-200">Smart Investments.</span><br />
            Trusted advisory.
          </motion.h1>

          {/* Premium Subheadline */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-charcoal-300 font-light tracking-wide leading-relaxed mb-10 max-w-2xl"
          >
            Helping you procure, market, and invest in the finest luxury villas, super-penthouses, and ultra-high-yield residential assets across Bangalore Road, DLF, Golf Course Road, and the wider Delhi NCR luxury micro-markets.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 mb-12"
          >
            <button
              onClick={onExploreProperties}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 text-charcoal-950 font-sans text-xs font-bold uppercase tracking-widest hover:bg-gold-400 active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-xl hover:shadow-gold-500/30 border border-gold-400/30"
            >
              Explore Properties
              <Compass className="w-4 h-4" />
            </button>

            <button
              onClick={onBookConsultation}
              className="flex items-center justify-center gap-3 px-8 py-4 border border-gold-300/40 text-white font-sans text-xs font-bold uppercase tracking-widest hover:border-gold-300 hover:bg-white/5 active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-charcoal-800/60 max-w-xl"
          >
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-gold-100 font-medium tracking-tight">₹1,200 Cr+</p>
              <p className="font-sans text-[10px] text-charcoal-420 font-semibold tracking-wider uppercase">Transactions Advised</p>
            </div>
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-gold-100 font-medium tracking-tight">12+ Years</p>
              <p className="font-sans text-[10px] text-charcoal-420 font-semibold tracking-wider uppercase"> NCR Market Tenure</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center gap-2">
              <Shield className="w-8 h-8 text-gold-300 stroke-[1.2] shrink-0" />
              <div>
                <p className="font-sans text-xs text-gold-200 font-semibold uppercase tracking-wider">100% Vetted</p>
                <p className="font-sans text-[10px] text-charcoal-405 leading-none">Off-Market Titles Only</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
