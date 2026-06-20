import React, { useState } from "react";
import { 
  Facebook, 
  Linkedin, 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle,
  ArrowUp,
  Instagram,
  Twitter
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ContactInquiry } from "../types";

export default function Footer() {
  const [formData, setFormData] = useState<ContactInquiry>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Creative Strategy",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Soft reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "Creative Strategy",
        message: ""
      });
      
      // Clear toast after 5s
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#FAFAF9] dark:bg-[#050505] text-black dark:text-white pt-24 pb-12 relative overflow-hidden border-t border-gray-150 dark:border-transparent transition-colors duration-400">
      
      {/* Red Ambient Radial Glow */}
      <div 
        className="absolute -right-40 bottom-0 w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[150px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Core Layout Grid: Left Details, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          
          {/* Left Block: Narrative & Contact details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-6xl font-black text-black dark:text-white leading-tight">
                Let's build something awesome <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]/80">together</span>
              </h2>
              <p className="font-sans text-gray-500 dark:text-gray-400 text-sm font-light max-w-md leading-relaxed">
                Have an inquiry or want to launch Dhaka's next massive brand activation? Drop us a prompt. We answer within 12 hours with structured execution routes.
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="space-y-6 pt-4 border-t border-gray-200 dark:border-white/10 max-w-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center rounded-none text-brand-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-400 dark:text-gray-550 uppercase block tracking-wider font-semibold">
                    OUR OFFICE ADDRESS
                  </span>
                  <p className="font-sans text-sm text-gray-800 dark:text-gray-350 font-medium">
                    House 18, Road 01, Block B, Niketon
                  </p>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-455 font-light">
                    Gulshan 1, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center rounded-none text-brand-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-400 dark:text-gray-550 uppercase block tracking-wider font-semibold">
                    EMAIL INQUIRIES
                  </span>
                  <a href="mailto:mhpranto789@gmail.com" className="font-sans text-sm text-gray-800 dark:text-gray-350 font-medium hover:text-brand-primary transition-colors block">
                    mhpranto789@gmail.com
                  </a>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-455 font-light">
                    For projects, RFPs, and job applications
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center rounded-none text-brand-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-400 dark:text-gray-550 uppercase block tracking-wider font-semibold">
                    CALL OUR HOTLINE
                  </span>
                  <a href="tel:+8801634415619" className="font-sans text-sm text-gray-800 dark:text-gray-350 font-medium hover:text-brand-primary transition-colors block">
                    +8801634415619
                  </a>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-455 font-light">
                    Sun - Thu, 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Link List */}
            <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-white/10 max-w-sm">
              <span className="font-mono text-[10px] text-gray-400 dark:text-gray-550 uppercase block tracking-wider font-semibold">
                CONNECT TO NEW CORNERS
              </span>
                <div className="flex space-x-3">
                  <a 
                    href="https://facebook.com" 
                    aria-label="Follow Monsoon on Facebook"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-[#1E3A8A] dark:hover:bg-[#1E3A8A] hover:border-[#1E3A8A] dark:hover:border-[#1E3A8A] hover:text-white dark:hover:text-white flex items-center justify-center text-black dark:text-white transition-all"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    aria-label="Connect with Monsoon on LinkedIn"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-[#1E3A8A] dark:hover:bg-[#1E3A8A] hover:border-[#1E3A8A] dark:hover:border-[#1E3A8A] hover:text-white dark:hover:text-white flex items-center justify-center text-black dark:text-white transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    aria-label="Follow Monsoon on Instagram"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-15 h-10 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-[#1E3A8A] dark:hover:bg-[#1E3A8A] hover:border-[#1E3A8A] dark:hover:border-[#1E3A8A] hover:text-white dark:hover:text-white flex items-center justify-center text-black dark:text-white transition-all"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    aria-label="Follow Monsoon on Twitter"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-[#1E3A8A] dark:hover:bg-[#1E3A8A] hover:border-[#1E3A8A] dark:hover:border-[#1E3A8A] hover:text-white dark:hover:text-white flex items-center justify-center text-black dark:text-white transition-all"
                  >
                    <Twitter size={18} />
                  </a>
              </div>
            </div>
          </div>

          {/* Right Block: Inquiry interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-12 relative">
              <h3 className="font-display font-medium text-xl text-black dark:text-white mb-8 border-b border-gray-200 dark:border-white/5 pb-4">
                Partner Registration & Brief Portal
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label id="lbl-name" htmlFor="name" className="font-mono text-[10px] text-gray-550 dark:text-gray-350 uppercase tracking-widest block font-bold">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Asif Chowdhury"
                      className="w-full bg-white dark:bg-black/45 border border-gray-350 dark:border-white/10 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    />
                  </div>
                  {/* Company field */}
                  <div className="space-y-2">
                    <label id="lbl-company" htmlFor="company" className="font-mono text-[10px] text-gray-555 dark:text-gray-350 uppercase tracking-widest block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Coca-Cola BD"
                      className="w-full bg-white dark:bg-black/45 border border-gray-350 dark:border-white/10 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label id="lbl-email" htmlFor="email" className="font-mono text-[10px] text-gray-555 dark:text-gray-350 uppercase tracking-widest block font-bold">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. asif@company.com"
                      className="w-full bg-white dark:bg-black/45 border border-gray-350 dark:border-white/10 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    />
                  </div>
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label id="lbl-phone" htmlFor="phone" className="font-mono text-[10px] text-gray-555 dark:text-gray-350 uppercase tracking-widest block font-bold">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +880 1711 XXX XXX"
                      className="w-full bg-white dark:bg-black/45 border border-gray-350 dark:border-white/10 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Dropdown Project category */}
                <div className="space-y-2">
                  <label id="lbl-project-type" htmlFor="projectType" className="font-mono text-[10px] text-gray-555 dark:text-gray-350 uppercase tracking-widest block font-bold">
                    Core Campaign Target
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-white dark:bg-black border border-gray-350 dark:border-white/10 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  >
                    <option value="Creative Strategy">Creative Strategy & Brand ATL</option>
                    <option value="Experiential Activation">Experiential BTL & Venue Activation</option>
                    <option value="Digital PR & Sound Hub">Digital PR & Sounds Event Direction</option>
                    <option value="Integrated Consultancy">Integrated Agency Consultancy</option>
                  </select>
                </div>

                {/* Text Message block */}
                <div className="space-y-2">
                  <label id="lbl-message" htmlFor="message" className="font-mono text-[10px] text-gray-555 dark:text-gray-350 uppercase tracking-widest block font-bold">
                    Message / Campaign Brief details *
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly state your vision, timeframe, and major deliverables needed..."
                    className="w-full bg-white dark:bg-black/45 border border-gray-350 dark:border-white/10 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="submit-brief-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-liquid-glass-primary w-full group flex items-center justify-center space-x-2 text-sm font-sans font-bold py-4 transition-all rounded-full disabled:opacity-50 select-none cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] duration-200"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">TRANSMITTING BRIEF DATA...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Deliver Brief to Monsoon</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Toast Popup */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    id="toast-success"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute inset-0 bg-white dark:bg-black/95 flex flex-col items-center justify-center text-center p-8 z-20 border border-gray-300 dark:border-white/10"
                  >
                    <CheckCircle size={48} className="text-emerald-500 mb-4 animate-bounce" />
                    <h4 className="font-display font-black text-2xl text-black dark:text-white mb-2">
                      Brief Received Successfully!
                    </h4>
                    <p className="font-sans text-xs text-gray-550 dark:text-gray-400 max-w-sm leading-relaxed mb-6">
                      An Account Director at Monsoon Dhaka is already reviewing your details. We will touch base shortly.
                    </p>
                    <button
                      id="close-success-toast"
                      onClick={() => setSubmitSuccess(false)}
                      className="btn-liquid-glass-primary font-sans text-xs py-2.5 px-6 rounded-full font-bold transition-all duration-200 hover:scale-[1.04] active:scale-[0.96] cursor-pointer"
                    >
                      Reforge Another Form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Base Linkages and Credits */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-12 mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3 text-xs text-gray-400 dark:text-gray-550 font-mono">
            <span>© {new Date().getFullYear()} MONSOON. Dhaka, Bangladesh.</span>
            <span>|</span>
            <span className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Privacy Charter</span>
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="btn-liquid-glass group flex items-center space-x-2 text-xs font-sans text-gray-450 dark:text-gray-400 hover:text-brand-primary dark:hover:text-white transition-all font-bold uppercase tracking-wider cursor-pointer py-2 px-4 rounded-full hover:scale-105 active:scale-95 duration-200 shadow-sm"
            aria-label="Back to top"
          >
            <span>Top of Board</span>
            <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
