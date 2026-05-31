import { Shield, Sparkles, MessageSquare, Instagram, Linkedin, Copyright } from 'lucide-react';

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const seoKeywords = [
    'Real Estate Agent Gurgaon',
    'Luxury Property Gurgaon',
    'Property Consultant Delhi NCR',
    'Gurgaon Luxury Homes',
    'Investment Properties Gurgaon',
    'Buy Property Gurgaon',
    'Builder Floors Gurgaon'
  ];

  const quickLinks = [
    { name: 'Home Landing', id: 'home' },
    { name: 'Consultant Profile', id: 'about' },
    { name: 'Property Services', id: 'services' },
    { name: 'Featured Listings', id: 'properties' },
    { name: 'NCR Territories', id: 'areas' },
    { name: 'Secure Inquiry Desk', id: 'contact' },
  ];

  return (
    <footer className="bg-charcoal-950 text-white border-t border-charcoal-900/60 pt-20 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        
        {/* Upper footer splits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-12 border-b border-charcoal-900">
          
          {/* Identity column */}
          <div className="space-y-6">
            <div>
              <span className="font-serif text-2xl tracking-widest text-gold-50 uppercase block">
                Akhilesh Chauhan
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-300 font-bold block mt-1">
                Luxury Real Estate Advisor
              </span>
            </div>
            
            <p className="text-xs text-charcoal-400 font-light leading-relaxed">
              Bespoke, secure property consulting specializing in Golf Course Road, DLF Phase 1–5, and Gurgaon's premium residential assets.
            </p>

            <div className="flex items-center gap-4 text-gold-300">
              <a
                href="https://instagram.com/akhilesh.chauhan"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-charcoal-900/60 border border-gold-300/10 flex items-center justify-center hover:text-white hover:border-gold-300 transition-colors"
                aria-label="Instagram Handle"
                referrerPolicy="no-referrer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-charcoal-900/60 border border-gold-305/10 flex items-center justify-center hover:text-white hover:border-gold-300 transition-colors"
                aria-label="LinkedIn Profile"
                referrerPolicy="no-referrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links block */}
          <div className="space-y-4">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#caa042] font-semibold">
              Corporate Map Navigation
            </h5>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="text-xs text-charcoal-350 hover:text-gold-200 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business contact block */}
          <div className="space-y-4">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#caa042] font-semibold">
              NCR Business Coordinates
            </h5>
            <div className="space-y-3 text-xs text-charcoal-350 leading-relaxed font-light">
              <p>
                <strong className="text-white block font-sans font-semibold mb-0.5">Advisory Headquarters</strong>
                Level 11, Two Horizon Center,<br />
                Golf Course Road, Sector 43,<br />
                Gurgaon, Haryana 122002
              </p>
              <p>
                <strong className="text-white block font-sans font-semibold mb-0.5">Contact Line</strong>
                Phone: <a href="tel:+919811012345" className="hover:text-gold-200 underline">+91 98110 12345</a>
              </p>
            </div>
          </div>

          {/* Subtle Local SEO and Authority block */}
          <div className="space-y-4">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#caa042] font-semibold">
              Market Area Registry
            </h5>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold-300 shrink-0" />
                <span className="text-[10px] uppercase tracking-wider text-charcoal-200 font-bold">100% Vetted Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-300 shrink-0" />
                <span className="text-[10px] uppercase tracking-wider text-charcoal-200 font-bold">Secure Off-Market Deals</span>
              </div>
            </div>
            
            <p className="text-[10px] text-charcoal-450 leading-relaxed font-light pt-2 scale-98 origin-left">
              Licenced Delhi NCR real estate specialist under standard Indian compliance bodies. Dedicated to the ultimate execution of client privacy, direct developer negotiation, and high-yield property procurement.
            </p>
          </div>

        </div>

        {/* Dynamic SEO keywords panel */}
        <div className="mb-10 p-5 bg-charcoal-900 border border-gold-300/5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#caa042] font-semibold mb-3">
            Guaranteed Local Real Estate Indexing Coverages (Gurgaon SEO Registry):
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-charcoal-400 font-light italic">
            {seoKeywords.map((keyword, index) => (
              <span key={index} className="hover:text-gold-300 transition-colors">
                # {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Lower footer copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-charcoal-500 text-xs font-mono pt-4 border-t border-charcoal-900">
          <p className="flex items-center gap-1.5 leading-none">
            <Copyright className="w-3.5 h-3.5 text-charcoal-600" />
            <span>2026 Akhilesh Chauhan Advisory. All Rights Reserved.</span>
          </p>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider">
            <span>Corporate Compliance</span>
            <span className="w-1.5 h-1.5 bg-gold-450 rounded-full" />
            <span>Privacy Charter</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
