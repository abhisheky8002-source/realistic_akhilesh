/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PropertiesList from './components/PropertiesList';
import WhyChooseUs from './components/WhyChooseUs';
import AreaSpecialties from './components/AreaSpecialties';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';
import LeadDashboard from './components/LeadDashboard';
import Footer from './components/Footer';

import { Inquiry } from './types';
import { SEED_INQUIRIES } from './data';
import { Award, Lock, Sparkles, MessageSquare } from 'lucide-react';

export default function App() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);
  const [prefilledProperty, setPrefilledProperty] = useState<string>('');

  // 1. Initialize local inquiries database (CRM simulation) with mock entries
  useEffect(() => {
    const saved = localStorage.getItem('akhilesh_chauhan_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Error reading localStorage queries, resetting with seed properties', e);
        setInquiries(SEED_INQUIRIES);
        localStorage.setItem('akhilesh_chauhan_inquiries', JSON.stringify(SEED_INQUIRIES));
      }
    } else {
      setInquiries(SEED_INQUIRIES);
      localStorage.setItem('akhilesh_chauhan_inquiries', JSON.stringify(SEED_INQUIRIES));
    }
  }, []);

  // Save changes to localStorage helper
  const saveInquiriesToStore = (newInquiries: Inquiry[]) => {
    setInquiries(newInquiries);
    localStorage.setItem('akhilesh_chauhan_inquiries', JSON.stringify(newInquiries));
  };

  // 2. Add new visitor lead inquiry
  const handleAddInquiry = (newInq: Omit<Inquiry, 'id' | 'createdAt' | 'isContacted'>) => {
    const fresh: Inquiry = {
      ...newInq,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      isContacted: false,
      notes: ''
    };
    const updated = [fresh, ...inquiries];
    saveInquiriesToStore(updated);
  };

  // 3. Mark lead contacted status
  const handleToggleContacted = (id: string) => {
    const updated = inquiries.map((item) =>
      item.id === id ? { ...item, isContacted: !item.isContacted } : item
    );
    saveInquiriesToStore(updated);
  };

  // 4. Delete client inquiry
  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((item) => item.id !== id);
    saveInquiriesToStore(updated);
  };

  // 5. Update agency notes logs
  const handleUpdateNotes = (id: string, notesText: string) => {
    const updated = inquiries.map((item) =>
      item.id === id ? { ...item, notes: notesText } : item
    );
    saveInquiriesToStore(updated);
  };

  // Trigger scroll to specific section id
  const scrollSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset navbar height
      const navbarOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(id);
  };

  // Scroll active window monitor
  useEffect(() => {
    const handleScrollMonitor = () => {
      const sectionIds = ['home', 'about', 'services', 'properties', 'areas', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollMonitor);
    return () => window.removeEventListener('scroll', handleScrollMonitor);
  }, []);

  const handlePropertyInquire = (propertyName: string) => {
    setPrefilledProperty(propertyName);
    scrollSection('contact');
  };

  const pendingInquiryCount = inquiries.filter(item => !item.isContacted).length;

  return (
    <div className="relative min-h-screen bg-charcoal-950 text-charcoal-100 overflow-x-hidden selection:bg-gold-500 selection:text-charcoal-950 selection:font-bold">
      
      {/* 1. STICKY GLASSMORPHIC NAVBAR */}
      <Navbar
        onNavClick={scrollSection}
        activeSection={activeSection}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        inquiryCount={pendingInquiryCount}
      />

      {/* 2. FULL-SCREEN LUXURY HERO COVERAGE */}
      <Hero
        onExploreProperties={() => scrollSection('properties')}
        onBookConsultation={() => scrollSection('contact')}
      />

      {/* 3. ETHICAL PROFILE ABOUT SECTION */}
      <About />

      {/* 4. REAL ESTATE CONSULTANCY SERVICES SECTION */}
      <Services />

      {/* 5. GURGAON LUXURY LISTINGS (SEARCH & FILTER ACTIVE) */}
      <PropertiesList onPropertyInquire={handlePropertyInquire} />

      {/* 6. ETHICAL TRUST BLOCK (ELITE HIGH-CONTRAST LIGHT BACKGROUND LAYER) */}
      <WhyChooseUs />

      {/* 7. GEOGRAPHICAL FOCUS & TERRITORY SPECIALTY */}
      <AreaSpecialties />

      {/* 8. HIGH-NET-WORTH TESTIMONIALS SLIDER SECTION */}
      <Testimonials />

      {/* 9. HIGH CONVERSIONS CALL TO ACTIONS CONTAINER */}
      <CallToAction onBookClick={() => scrollSection('contact')} />

      {/* 10. CLASSIFIED SECURE INQUIRIES & LEAD CAPTURE BLOCK */}
      <ContactForm
        onAddInquiry={handleAddInquiry}
        prefilledProperty={prefilledProperty}
      />

      {/* 11. LUXURY EDITORIAL FOOTER SECTION */}
      <Footer onLinkClick={scrollSection} />

      {/* 12. IMMERSIVE SECURE AGENT CRM DRAWER */}
      <LeadDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        inquiries={inquiries}
        onToggleContacted={handleToggleContacted}
        onDeleteInquiry={handleDeleteInquiry}
        onUpdateNotes={handleUpdateNotes}
      />

      {/* FLOATING ACTION UTILITY: Quick access back to portal */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2">
        <button
          onClick={() => setIsDashboardOpen(true)}
          className="flex items-center gap-2 p-3 bg-charcoal-950/90 hover:bg-gold-500 text-gold-300 hover:text-charcoal-950 border border-gold-300/35 hover:border-gold-300 shadow-2xl transition-all duration-300 cursor-pointer text-xs uppercase font-mono font-bold tracking-wider"
          title="Agent CRM portal"
        >
          <Award className="w-4 h-4" />
          <span className="hidden sm:inline">Lead Desk</span>
          {pendingInquiryCount > 0 && (
            <span className="bg-red-500 text-white font-bold h-4 w-4 rounded-full font-sans text-[9px] flex items-center justify-center animate-bounce">
              {pendingInquiryCount}
            </span>
          )}
        </button>
      </div>

    </div>
  );
}
