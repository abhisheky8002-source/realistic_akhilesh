import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Menu, X, Award } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
  onOpenDashboard: () => void;
  inquiryCount: number;
}

export default function Navbar({ onNavClick, activeSection, onOpenDashboard, inquiryCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Properties', id: 'properties' },
    { name: 'Expertise', id: 'areas' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md py-4 border-b border-gold-300/15 shadow-xl'
            : 'bg-gradient-to-b from-charcoal-950/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Title */}
          <div className="flex flex-col cursor-pointer" onClick={() => handleLinkClick('home')}>
            <span className="font-serif text-xl md:text-2xl tracking-widest text-gold-50 md:leading-6 uppercase flex items-center gap-2">
              Akhilesh Chauhan
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
              Luxury Property Advisor
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-gold-300'
                    : 'text-charcoal-300 hover:text-gold-100'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-300"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Direct Admin Inquiries Link */}
            <button
              onClick={onOpenDashboard}
              className="mr-2 text-[11px] font-mono tracking-widest uppercase text-gold-200/50 hover:text-gold-300 transition-colors flex items-center gap-1.5 focus:outline-none"
              title="Agent Lead Portal"
            >
              <Award className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
              Portal
              {inquiryCount > 0 && (
                <span className="bg-gold-500 text-charcoal-950 text-[9px] font-bold px-1.5 py-0.5 rounded-full font-sans">
                  {inquiryCount}
                </span>
              )}
            </button>

            <a
              href="https://wa.me/919999999999?text=Hello%20Akhilesh,%20I'm%20interested%20in%20high-end%20properties%20in%20Gurgaon."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 text-charcoal-950 font-sans text-xs font-semibold uppercase tracking-wider rounded-none hover:shadow-lg hover:shadow-gold-500/20 active:scale-95 transition-all duration-300 border border-gold-300 hover:brightness-110"
              referrerPolicy="no-referrer"
            >
              <MessageSquare className="w-4 h-4 fill-charcoal-950 stroke-none" />
              WhatsApp Inquiry
            </a>
          </div>

          {/* Quick Access Mobile Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Visual indicator for portal on mobile */}
            <button
              onClick={onOpenDashboard}
              className="p-1 px-2.5 border border-gold-300/20 text-[10px] font-mono tracking-wider uppercase text-gold-300 focus:outline-none rounded flex items-center gap-1"
            >
              Portal
              {inquiryCount > 0 && (
                <span className="bg-gold-500 text-charcoal-950 font-bold px-1 rounded-full font-sans">
                  {inquiryCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gold-50 hover:text-gold-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-charcoal-950 border-b border-gold-300/25 px-6 py-8 block lg:hidden focus:outline-none"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-sm tracking-widest uppercase font-sans text-left transition-colors ${
                    activeSection === item.id ? 'text-gold-300 font-semibold' : 'text-charcoal-350 hover:text-gold-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-t border-charcoal-800 flex flex-col gap-4">
                <a
                  href="https://wa.me/919999999999?text=Hello%20Akhilesh,%20I'm%20interested%2520in%20properties%2520in%20Gurgaon."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-widest hover:bg-gold-300 transition-all text-center"
                  referrerPolicy="no-referrer"
                >
                  <MessageSquare className="w-4 h-4 fill-charcoal-950 stroke-none" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919999999999"
                  className="w-full flex items-center justify-center gap-2 py-3 border border-gold-300/35 text-gold-50 text-xs font-bold uppercase tracking-widest hover:bg-gold-500/10 transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-gold-300" />
                  Call Agent
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
