import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, ShieldCheck, Heart, MapPin, Maximize, Bed, ArrowUpRight, Check, X, ShieldAlert } from 'lucide-react';
import { PROPERTIES } from '../data';
import { Property } from '../types';

interface PropertiesListProps {
  onPropertyInquire: (propertyName: string) => void;
}

export default function PropertiesList({ onPropertyInquire }: PropertiesListProps) {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filterTabs = ['All', 'Penthouse', 'Villa', 'Builder Floor', 'Apartment'];

  const filteredProperties = PROPERTIES.filter((property) => {
    const matchesTab = activeTab === 'All' || property.type === activeTab;
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          property.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleInquireClick = (property: Property) => {
    onPropertyInquire(property.name);
    setSelectedProperty(null); // Close modal if open
  };

  return (
    <section id="properties" className="py-24 lg:py-32 bg-charcoal-900 relative">
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold-500/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Head Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-mono text-xs text-gold-300 uppercase tracking-[0.25em] mb-4 block font-semibold">
              Curated Portfolio // Featured Listings
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
              Featured Luxury Properties
            </h2>
            <div className="h-[2px] w-16 bg-gold-300 mt-6" />
          </div>

          {/* Search bar inside header */}
          <div className="w-full lg:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Golf Course Road, DLF, Penthouse..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-charcoal-950 border border-gold-300/10 hover:border-gold-300/30 focus:border-gold-300/80 p-4 pl-12 text-sm text-white rounded-none transition-all focus:outline-none focus:ring-0 font-sans"
              />
              <Search className="w-5 h-5 text-gold-300/40 absolute left-4 top-4" />
            </div>
          </div>
        </div>

        {/* Categories / Types Filtering Navigation Bar */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-charcoal-800/80 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none cursor-pointer ${
                activeTab === tab
                  ? 'bg-gold-500 text-charcoal-950 font-bold border border-gold-500'
                  : 'bg-charcoal-950 text-charcoal-300 border border-gold-300/10 hover:border-gold-300/20'
              }`}
            >
              {tab}s
            </button>
          ))}
          {filteredProperties.length === 0 && (
            <span className="ml-auto text-xs font-mono text-charcoal-450 self-center">
              0 matches found
            </span>
          )}
        </div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredProperties.map((property) => (
              <motion.div
                layout
                key={property.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-charcoal-950/70 border border-gold-300/10 hover:border-gold-300/30 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/5 relative"
              >
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-charcoal-950/90 backdrop-blur-md border border-gold-300/30 text-gold-300 px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                    {property.status}
                  </span>
                </div>

                {/* Favorite Hearth Trigger */}
                <button
                  onClick={(e) => toggleFavorite(property.id, e)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-charcoal-950/80 border border-gold-300/10 flex items-center justify-center text-white/70 hover:text-red-400 hover:border-red-400/35 transition-all focus:outline-none cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.includes(property.id) ? 'fill-red-500 text-red-500' : ''
                    }`}
                  />
                </button>

                {/* Display Image with Hover Zoom effect */}
                <div
                  className="overflow-hidden aspect-[4/3] relative cursor-pointer"
                  onClick={() => setSelectedProperty(property)}
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent" />
                </div>

                {/* Property Details Block */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Size and Bed specification */}
                    <div className="flex items-center gap-4 text-charcoal-350 font-sans text-xs tracking-wide mb-3">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Bed className="w-3.5 h-3.5 text-gold-300" />
                        {property.beds} BHK
                      </span>
                      <span className="w-[1px] h-3 bg-charcoal-850" />
                      <span className="flex items-center gap-1.5 font-medium">
                        <Maximize className="w-3.5 h-3.5 text-gold-300" />
                        {property.area}
                      </span>
                    </div>

                    {/* Property Title & Address */}
                    <h3
                      className="font-serif text-xl md:text-2xl font-light text-white mb-2 cursor-pointer hover:text-gold-300 transition-colors duration-300 leading-snug"
                      onClick={() => setSelectedProperty(property)}
                    >
                      {property.name}
                    </h3>

                    <p className="font-sans text-xs text-charcoal-400 flex items-center gap-1 mb-6">
                      <MapPin className="w-3.5 h-3.5 text-gold-300 shrink-0" />
                      {property.location}
                    </p>
                  </div>

                  {/* Pricing and CTAs */}
                  <div className="pt-4 border-t border-charcoal-800/60 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-charcoal-450 leading-none">
                        Private Valuation
                      </p>
                      <p className="font-serif text-xl font-medium text-gold-300 mt-1">
                        {property.price}
                      </p>
                    </div>

                    {/* View details button triggers detailed modal drawer */}
                    <button
                      onClick={() => setSelectedProperty(property)}
                      className="text-xs font-bold font-sans tracking-widest uppercase text-white hover:text-gold-200 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      View Details
                      <ArrowUpRight className="w-4 h-4 text-gold-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty list search guard */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 border border-gold-300/5 bg-charcoal-950/40">
            <ShieldAlert className="w-12 h-12 text-gold-300 mx-auto mb-4 stroke-[1]" />
            <p className="font-serif text-xl font-light text-white mb-2">No Private Listings Matched</p>
            <p className="font-sans text-xs text-charcoal-350 max-w-sm mx-auto leading-relaxed">
              We frequently update our offline portfolio. Connect with Akhilesh Chauhan directly to discover unlisted or off-market estates in your preferred neighborhood.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
              className="mt-6 text-xs text-gold-300 underline font-mono tracking-wider uppercase focus:outline-none"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Property Details Modal Drawer */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-50 overflow-y-auto block">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="fixed inset-0 bg-charcoal-950/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="relative bg-charcoal-900 border border-gold-300/35 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl glass-glow-dark"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-4 right-4 z-40 bg-charcoal-950/90 border border-gold-300/15 text-white hover:text-gold-300 p-2 focus:outline-none cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Hero image half */}
                  <div className="relative md:col-span-6 h-64 md:h-[480px]">
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
                    
                    {/* Status indicator on image */}
                    <span className="absolute bottom-6 left-6 block text-[10px] uppercase tracking-widest font-mono text-gold-300 bg-charcoal-950 px-3 py-1.5 border border-gold-300/20">
                      Private Treaty Portfolio
                    </span>
                  </div>

                  {/* Text descriptions content half */}
                  <div className="p-8 md:p-10 md:col-span-6 flex flex-col justify-between">
                    <div>
                      {/* Sub header */}
                      <span className="font-mono text-[10px] tracking-[0.25em] text-gold-300 uppercase block mb-3 font-semibold">
                        {selectedProperty.type} Listing // Gurgaon NCR
                      </span>

                      {/* Main Title */}
                      <h4 className="font-serif text-2xl md:text-3.5xl font-light text-white tracking-tight leading-tight mb-4">
                        {selectedProperty.name}
                      </h4>

                      {/* Pricing Tag */}
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="font-mono text-xs text-charcoal-450 uppercase tracking-widest">
                          Advisory Price:
                        </span>
                        <span className="font-serif text-2xl font-semibold text-gold-300">
                          {selectedProperty.price}
                        </span>
                      </div>

                      {/* Description Narrative */}
                      <p className="font-sans text-xs sm:text-sm text-charcoal-350 font-light leading-relaxed mb-6">
                        {selectedProperty.description}
                      </p>

                      {/* Key highlights specs */}
                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-charcoal-800/80 mb-6 font-sans">
                        <div>
                          <p className="text-[10px] text-charcoal-450 uppercase tracking-wider">Bedrooms & Living</p>
                          <p className="text-xs font-semibold text-white mt-1 flex items-center gap-1">
                            <Bed className="w-3.5 h-3.5 text-gold-300" />
                            {selectedProperty.beds} Bedrooms (En-suite)
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-charcoal-450 uppercase tracking-wider">Super Built-up Area</p>
                          <p className="text-xs font-semibold text-white mt-1 flex items-center gap-1">
                            <Maximize className="w-3.5 h-3.5 text-gold-300" />
                            {selectedProperty.area}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedProperty.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-charcoal-950 text-charcoal-300 border border-gold-300/10 px-2.5 py-1 text-[10px] tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Custom Lead Generation Action Triggers */}
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => handleInquireClick(selectedProperty)}
                        className="w-full text-center py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold-500/25 border border-gold-400"
                      >
                        Request Private Viewing
                      </button>

                      <div className="flex items-center gap-2 justify-center py-2">
                        <ShieldCheck className="w-4 h-4 text-gold-300" />
                        <span className="font-mono text-[9px] text-charcoal-400 uppercase tracking-wider">
                          100% Secure & Private Title Handling Guarantees
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
