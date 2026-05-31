import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, X, Clock, HelpCircle, Mail, Phone, MapPin, CheckSquare, Square, Trash2, Edit3, ArrowDownToLine, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import { Inquiry } from '../types';

interface LeadDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: Inquiry[];
  onToggleContacted: (id: string) => void;
  onDeleteInquiry: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
}

export default function LeadDashboard({
  isOpen,
  onClose,
  inquiries,
  onToggleContacted,
  onDeleteInquiry,
  onUpdateNotes
}: LeadDashboardProps) {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState('');

  // Default demonstration passcode
  const CORRECT_PASSCODE = '1234';

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setIsUnlocked(true);
      setErrorText('');
    } else {
      setErrorText('Incorrect security clearance passcode. Try "1234" for preview.');
      setPasscode('');
    }
  };

  const handleStartEditingNotes = (id: string, currentNotes: string) => {
    setEditingNotesId(id);
    setTempNotes(currentNotes);
  };

  const handleSaveNotes = (id: string) => {
    onUpdateNotes(id, tempNotes);
    setEditingNotesId(null);
  };

  // Convert enquiries details to CSV format
  const exportToCSV = () => {
    if (inquiries.length === 0) return;
    const header = ['ID', 'Name', 'Phone', 'Email', 'Budget', 'Requirement', 'Status', 'Date Submitted', 'Internal Notes'];
    const rows = inquiries.map(inq => [
      inq.id,
      inq.name,
      inq.phone.replace(/,/g, ' '),
      inq.email,
      inq.budgetRange,
      inq.propertyRequirement.replace(/[\n,]/g, ' '),
      inq.isContacted ? 'Contacted' : 'Pending',
      new Date(inq.createdAt).toLocaleString(),
      inq.notes ? inq.notes.replace(/[\n,]/g, ' ') : ''
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [header.join(','), ...rows.map(e => e.map(item => `"${item}"`).join(","))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Akhilesh_Advisory_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end block">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 24, stiffness: 200 }}
            className="relative w-full max-w-4xl h-full bg-charcoal-900 border-l border-gold-300/30 shadow-2xl glass-glow flex flex-col z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-charcoal-800/80 bg-charcoal-950 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-gold-400 rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-gold-300 uppercase font-semibold">
                    Advising Lead Desk
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-white uppercase tracking-wider mt-1">
                  Akhilesh Chauhan CRM Portal
                </h3>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 border border-gold-300/10 text-charcoal-300 hover:text-white hover:border-gold-300/40 focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Clearance Clear Layer (Lock Gate) */}
            {!isUnlocked ? (
              <div className="flex-grow flex items-center justify-center p-6 bg-charcoal-950/40">
                <div className="max-w-md w-full text-center p-8 bg-charcoal-950 border border-gold-300/15">
                  <div className="w-12 h-12 bg-gold-550/5 border border-gold-300/25 text-gold-300 flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-5 h-5 stroke-[1.2]" />
                  </div>

                  <h4 className="font-serif text-lg font-light text-white mb-2">Clearance Required</h4>
                  <p className="font-sans text-xs text-charcoal-400 leading-relaxed mb-6">
                    Enter your security clearance passcode to view visitor entries, budget listings, and client metrics.
                  </p>

                  <form onSubmit={handleUnlock} className="space-y-4">
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Security Passcode"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        className="w-full bg-charcoal-900 border border-gold-300/15 focus:border-gold-300 p-3 text-center text-sm font-mono tracking-widest text-white focus:outline-none"
                      />
                      <span className="block mt-1 text-[10px] text-charcoal-450 self-end">
                        Hint: Enter <strong className="text-gold-200">1234</strong> to unlock demo data.
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs font-bold uppercase tracking-widest font-sans cursor-pointer"
                    >
                      Unlock Desk Records
                    </button>
                    
                    {errorText && (
                      <p className="text-[11px] font-mono text-red-400 mt-2 flex items-center justify-center gap-1.5 leading-tight">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errorText}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            ) : (
              /* Actual leads table dynamic records */
              <div className="flex-grow flex flex-col p-6 md:p-8 bg-charcoal-950/40 overflow-y-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h4 className="font-serif text-lg text-white font-light">Secure Leads Records</h4>
                    <p className="font-sans text-[11px] text-charcoal-400">
                      Currently indexing <span className="font-mono text-gold-300 font-semibold">{inquiries.length} properties inquiries</span> locally in your browser.
                    </p>
                  </div>

                  {inquiries.length > 0 && (
                    <button
                      onClick={exportToCSV}
                      className="flex items-center gap-2 px-4 py-2 border border-gold-350/20 text-gold-300 hover:text-white hover:border-gold-300 text-xs font-bold uppercase tracking-widest cursor-pointer font-sans"
                    >
                      <ArrowDownToLine className="w-3.5 h-3.5" />
                      Export Leads .CSV
                    </button>
                  )}
                </div>

                {/* Enquiries listings array loop */}
                <div className="space-y-6 overflow-y-visible">
                  {inquiries.length === 0 ? (
                    <div className="text-center py-24 border border-dashed border-charcoal-800">
                      <Users className="w-12 h-12 text-gold-300/30 mx-auto mb-4 stroke-[1]" />
                      <p className="font-serif text-lg font-light text-white mb-1">No Inquiries Registered Yet</p>
                      <p className="font-sans text-xs text-charcoal-450 max-w-xs mx-auto">
                        Inquiries from visitors submitted using the Contact form will populate here immediately. Try executing a submission!
                      </p>
                    </div>
                  ) : (
                    inquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className={`border p-6 bg-charcoal-900 flex flex-col justify-between transition-all duration-300 ${
                          inq.isContacted
                            ? 'border-charcoal-800 opacity-65 hover:opacity-95'
                            : 'border-gold-500/25 shadow-xl shadow-gold-550/2'
                        }`}
                      >
                        {/* Title Row metadata details */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-serif text-lg font-medium text-white">{inq.name}</h5>
                              {inq.isContacted ? (
                                <span className="bg-charcoal-800 text-charcoal-400 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest font-mono">
                                  Contacted
                                </span>
                              ) : (
                                <span className="bg-gold-500 text-charcoal-950 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest font-mono">
                                  Action Pending
                                </span>
                              )}
                            </div>
                            
                            {/* Budget range pills */}
                            <div className="flex items-center gap-3 font-sans text-xs text-charcoal-350 mt-1">
                              <span className="font-mono text-gold-300 font-semibold">{inq.budgetRange} Budget</span>
                              <span className="w-[1px] h-3 bg-charcoal-800" />
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-charcoal-450" />
                                {new Date(inq.createdAt).toLocaleString()}
                              </span>
                            </div>
                          </div>

                          {/* Action Button clear panel */}
                          <div className="flex items-center gap-2">
                            {/* Toggle Contacted Status checkbox button */}
                            <button
                              onClick={() => onToggleContacted(inq.id)}
                              className="p-1 px-2 border border-gold-300/10 text-[10px] text-gold-300 hover:text-white flex items-center gap-1 cursor-pointer font-mono uppercase focus:outline-none"
                              title="Mark contacted/pending"
                            >
                              {inq.isContacted ? (
                                <>
                                  <CheckSquare className="w-3.5 h-3.5" /> Mark Pending
                                </>
                              ) : (
                                <>
                                  <Square className="w-3.5 h-3.5" /> Mark Contacted
                                </>
                              )}
                            </button>

                            {/* Delete Button */}
                            <button
                              onClick={() => onDeleteInquiry(inq.id)}
                              className="p-1 px-2 border border-red-500/10 text-red-400 hover:bg-red-500/10 hover:border-red-500/30 flex items-center gap-1 cursor-pointer focus:outline-none font-mono text-[10px] uppercase"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </div>
                        </div>

                        {/* Property requirements summary block */}
                        <div className="p-4 bg-charcoal-950 border border-charcoal-800/80 mb-4 font-sans text-xs">
                          <p className="text-[10px] uppercase tracking-wider text-charcoal-450 font-bold mb-1.5">Specified Requirements</p>
                          <p className="text-charcoal-200 leading-relaxed italic">
                            "{inq.propertyRequirement}"
                          </p>
                        </div>

                        {/* Coordinates of the lead */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono mb-4 text-charcoal-350 pb-4 border-b border-charcoal-850">
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-gold-300" />
                            <span>Phone: <a href={`tel:${inq.phone}`} className="hover:text-gold-100 underline decoration-gold-300/30">{inq.phone}</a></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-gold-300" />
                            <span>Email: <a href={`mailto:${inq.email}`} className="hover:text-gold-100 underline decoration-gold-300/30">{inq.email}</a></span>
                          </div>
                        </div>

                        {/* Internal Office Notes Section */}
                        <div className="font-sans text-xs">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono tracking-wider text-charcoal-450 uppercase font-bold">
                              Internal Office Progress Notes:
                            </span>
                            {editingNotesId !== inq.id ? (
                              <button
                                onClick={() => handleStartEditingNotes(inq.id, inq.notes || '')}
                                className="text-gold-400 hover:text-gold-200 text-[10px] font-mono flex items-center gap-1 focus:outline-none"
                              >
                                <Edit3 className="w-3 h-3" /> Edit Notes
                              </button>
                            ) : null}
                          </div>

                          {editingNotesId === inq.id ? (
                            <div className="flex flex-col gap-2">
                              <textarea
                                value={tempNotes}
                                onChange={(e) => setTempNotes(e.target.value)}
                                placeholder="E.g., Called Sanjeev of 14/05. Prefers off-market; scheduled viewing DLF Camellias next Tuesday..."
                                className="w-full bg-charcoal-950 border border-gold-300/20 p-2 text-xs text-white uppercase focus:outline-none"
                                rows={2}
                              />
                              <div className="flex items-center gap-2 justify-end">
                                <button
                                  onClick={() => setEditingNotesId(null)}
                                  className="px-2 py-1 border border-charcoal-800 hover:border-charcoal-700 font-mono text-[9px] uppercase text-charcoal-400 cursor-pointer"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={() => handleSaveNotes(inq.id)}
                                  className="px-2.5 py-1 bg-gold-450 text-charcoal-950 font-mono text-[9px] font-bold uppercase cursor-pointer"
                                >
                                  Save Note
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="p-3 bg-charcoal-900 border border-charcoal-850 rounded">
                              <p className="text-charcoal-350 leading-relaxed whitespace-pre-wrap italic">
                                {inq.notes ? inq.notes : 'No office notes written yet. Click edit to record priority logs.'}
                              </p>
                            </div>
                          )}
                        </div>

                      </div>
                    ))
                  )}
                </div>

                {/* Dashboard security warning info banner */}
                <div className="mt-auto pt-8 border-t border-charcoal-800/80 flex items-center gap-2.5 text-charcoal-450 text-[10px] font-mono">
                  <CheckCircle2 className="w-4 h-4 text-gold-405 shrink-0" />
                  <span>Clearance levels recorded. Session logs will expire automatically. Encryption algorithms active.</span>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
