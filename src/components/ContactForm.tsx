import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, Clock, Send, ShieldCheck, Map, MapPinned } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactFormProps {
  onAddInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'isContacted'>) => void;
  prefilledProperty?: string;
}

export default function ContactForm({ onAddInquiry, prefilledProperty = '' }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budgetRange, setBudgetRange] = useState('₹10 Cr - ₹15 Cr');
  const [propertyRequirement, setPropertyRequirement] = useState(
    prefilledProperty ? `Hi Akhilesh, I'm specifically interested in scheduling a priority private viewing for: "${prefilledProperty}". Please provide additional details.` : ''
  );
  
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sync prefilled property when it updates
  React.useEffect(() => {
    if (prefilledProperty) {
      setPropertyRequirement(`Hi Akhilesh, I'm specifically interested in scheduling a priority private viewing for: "${prefilledProperty}". Please provide additional details.`);
      // Scroll to form smoothly
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [prefilledProperty]);

  const budgetOptions = [
    '₹3 Cr - ₹5 Cr',
    '₹5 Cr - ₹10 Cr',
    '₹10 Cr - ₹15 Cr',
    '₹15 Cr - ₹25 Cr',
    '₹25 Cr - ₹50 Cr',
    '₹50 Cr+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill out your Name and Contact Phone to proceed with our secure inquiry process.');
      return;
    }

    setIsLoading(true);

    // Simulate luxury API handshake delay
    setTimeout(() => {
      onAddInquiry({
        name,
        phone,
        email: email || 'No Email Provided',
        budgetRange,
        propertyRequirement: propertyRequirement || 'General luxury portfolio inquiry.'
      });

      setIsLoading(false);
      setIsSubmitSuccess(true);

      // Reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setPropertyRequirement('');
      
      // Auto-dismiss confirmation after 5 seconds
      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Visual glowing layout decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-300/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-xs text-gold-300 uppercase tracking-[0.25em] mb-4 block font-semibold">
            Inquiries Portal // Contact Form
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
            Initiate Your Private Acquisition
          </h2>
          <div className="h-[2px] w-12 bg-gold-300 mx-auto mt-6" />
        </div>

        {/* Form and Contact Detail grid split (12 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column (5/12): Contact details + Custom styled Gurgaon geometric maps representer */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <p className="font-serif text-2xl font-light text-white mb-6 tracking-tight">
                Akhilesh Chauhan Advisory Office
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-500/5 border border-gold-300/15 text-gold-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-mono text-[9px] uppercase tracking-wider text-charcoal-450 leading-none mb-1.5">Direct Secure Phone</h5>
                    <p className="font-serif text-base text-gold-100 hover:text-gold-300 transition-colors">
                      <a href="tel:+919811012345">+91 98110 12345</a>
                    </p>
                    <span className="text-[10px] text-charcoal-420 font-medium">Availability: 08:00 AM – 10:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-500/5 border border-gold-300/15 text-gold-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-mono text-[9px] uppercase tracking-wider text-charcoal-450 leading-none mb-1.5">Premium Email Desk</h5>
                    <p className="font-serif text-base text-gold-100 hover:text-gold-300 transition-colors">
                      <a href="mailto:akhilesh@ncr-specialist.luxury">akhilesh@ncr-specialist.luxury</a>
                    </p>
                    <span className="text-[10px] text-charcoal-420 font-medium">Replies within 1 hour guaranteed</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-500/5 border border-gold-300/15 text-gold-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-mono text-[9px] uppercase tracking-wider text-charcoal-450 leading-none mb-1.5">Central Advisory Boardroom</h5>
                    <p className="font-serif text-sm text-gold-100 leading-relaxed">
                      Level 11, Two Horizon Center, Golf Course Road, Sector 43, Gurgaon, Haryana 122002 (India)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Highly Styled Geometric Map Placeholder */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#caa042] font-semibold mb-3 flex items-center gap-2">
                <MapPinned className="w-4 h-4 text-gold-300" />
                NCR Coverage Mapping & Coordinates
              </p>
              
              <div className="h-56 bg-charcoal-900 border border-gold-300/15 relative overflow-hidden flex flex-col justify-between p-4 group">
                {/* Abstract geometric maps background vectors */}
                <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
                  {/* Grid Lines */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="absolute left-0 right-0 h-[10px] border-b border-gold-400" style={{ top: `${(i + 1) * 35}px` }} />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="absolute top-0 bottom-0 w-[10px] border-r border-gold-400" style={{ left: `${(i + 1) * 35}px` }} />
                  ))}
                  {/* diagonal paths */}
                  <div className="absolute w-[150%] h-[1.5px] bg-gold-200 rotate-[22deg] top-10 left-[-20px]" />
                  <div className="absolute w-[150%] h-[1.5px] bg-gold-200 rotate-[145deg] bottom-16 left-[-20px]" />
                </div>

                {/* Custom glowing map pins representers */}
                <span className="absolute left-[38%] top-[25%] flex h-3 w-3 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500 border border-white" />
                </span>
                <span className="absolute bottom-6 left-8 block text-[8px] tracking-wider uppercase bg-charcoal-950 px-2 py-0.5 border border-gold-300/15 text-gold-350 z-30 font-semibold">
                  Two Horizon Boardroom
                </span>

                <span className="absolute left-[65%] top-[55%] flex h-3.5 w-3.5 z-20">
                  <span className="absolute inline-flex rounded-full h-3.5 w-3.5 bg-gold-300/35 border border-gold-300" />
                </span>
                <span className="absolute bottom-16 left-[56%] block text-[8px] tracking-wider bg-charcoal-950 px-2 py-0.5 border border-gold-400/15 text-gold-200 z-30">
                  DLF Phase 2 Estates
                </span>

                <span className="absolute left-[15%] top-[70%] flex h-2 w-2 z-25 bg-gold-400 rounded-full" />
                <span className="absolute left-[80%] top-[40%] flex h-2.5 w-2.5 z-20 bg-gold-500 rounded-full" />

                {/* Grid Overlay Text Labels */}
                <div className="relative z-10 self-start">
                  <span className="font-mono text-[8px] text-charcoal-450 uppercase tracking-widest leading-none">
                    Map Reference Grid 01 // Sector 43 Gurgaon
                  </span>
                </div>

                <div className="relative z-10 self-end w-full flex items-center justify-between border-t border-gold-300/10 pt-2 bg-charcoal-950/90 p-2 text-[9px] font-mono uppercase tracking-widest text-[#caa042] font-semibold mt-auto">
                  <span>DLF // GOLF COURSE ROAD // SECTORS 56-79</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7/12): Real interaction lead capture form */}
          <div className="lg:col-span-1 border-l border-charcoal-800 hidden lg:block h-96 self-center" />

          <div className="lg:col-span-6 bg-charcoal-900 border border-gold-300/15 p-8 md:p-10 relative">
            <h4 className="font-serif text-2xl font-light text-white mb-2 leading-tight">
              Submit Direct Inquiry
            </h4>
            <p className="font-sans text-xs text-charcoal-350 mb-8 font-light">
              We respect your confidentiality. Our office securely indexes your requirements and contacts you directly via your specified communication method.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Phone side-to-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase font-bold text-gold-300 tracking-widest mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sanjeev Khanna"
                    className="w-full bg-charcoal-950 border border-gold-300/10 hover:border-gold-300/25 focus:border-gold-300 p-3 text-sm text-white focus:outline-none focus:ring-0 rounded-none transition-all placeholder:text-charcoal-600 font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase font-bold text-gold-300 tracking-widest mb-2">
                    Contact Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 99999 00000"
                    className="w-full bg-charcoal-950 border border-gold-300/10 hover:border-gold-300/25 focus:border-gold-300 p-3 text-sm text-white focus:outline-none focus:ring-0 rounded-none transition-all placeholder:text-charcoal-600 font-sans"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase font-bold text-gold-300 tracking-widest mb-2">
                  Email desk (optional)
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@corporation.com"
                  className="w-full bg-charcoal-950 border border-gold-300/10 hover:border-gold-300/25 focus:border-gold-300 p-3 text-sm text-white focus:outline-none focus:ring-0 rounded-none transition-all placeholder:text-charcoal-600 font-sans"
                />
              </div>

              {/* Budget options selector custom layout */}
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-gold-300 tracking-widest mb-3">
                  Capital Allocation Budget
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 font-mono">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBudgetRange(opt)}
                      className={`py-2 px-3 text-[10px] md:text-xs text-center border cursor-pointer focus:outline-none transition-all ${
                        budgetRange === opt
                          ? 'border-gold-400 bg-gold-500/10 text-gold-300 font-bold'
                          : 'border-gold-300/10 hover:border-gold-300/20 text-charcoal-350'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Requirement */}
              <div>
                <label htmlFor="propertyRequirement" className="block text-xs font-mono uppercase font-bold text-gold-300 tracking-widest mb-2">
                  Describe Your Property Criteria
                </label>
                <textarea
                  id="propertyRequirement"
                  rows={4}
                  value={propertyRequirement}
                  onChange={(e) => setPropertyRequirement(e.target.value)}
                  placeholder="Provide details about preferred sectors, size requirements, custom features (like private lifts), or a priority listing name like: 'The Crown Jewel Penthouse'..."
                  className="w-full bg-charcoal-950 border border-gold-300/10 hover:border-gold-300/25 focus:border-gold-300 p-3 text-sm text-white focus:outline-none focus:ring-0 rounded-none transition-all placeholder:text-charcoal-600 font-sans leading-relaxed"
                />
              </div>

              {/* Submit Buttons */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-gold-400 to-gold-500 hover:brightness-110 active:scale-99 text-charcoal-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin text-charcoal-950" />
                      Auditing Credentials...
                    </>
                  ) : (
                    <>
                      Secure Handshake Request
                      <Send className="w-4 h-4 text-charcoal-950" />
                    </>
                  )}
                </button>
              </div>

              {/* Security trust badge info */}
              <div className="flex items-center gap-3 justify-center pt-2">
                <ShieldCheck className="w-4 h-4 text-gold-300" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal-450">
                  Data Encrypted under Non-Disclosure Protocols
                </span>
              </div>

              {/* Successful submission banner message */}
              {isSubmitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-4 border border-gold-420/30 bg-gold-500/10 text-gold-300 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-gold-300" />
                  <div>
                    <h5 className="font-sans text-xs font-bold leading-none mb-1 text-white">Inquiry Indexed Successfully</h5>
                    <p className="font-sans text-[11px] leading-relaxed text-charcoal-300">
                      Your criteria has been prioritised. Akhilesh Chauhan will consult his private network and reach out within 30 minutes on your phone coordinate. Thank you.
                    </p>
                  </div>
                </motion.div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
