import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Values from "./components/Values";
import Faq from "./components/Faq";
import Leaders from "./components/Leaders";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Read from localStorage on mount
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  // Apply theme class to document element on changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  // Track active scroll sections to update Navbar highlighting dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "clients", "leaders", "faq", "values", "contact"];
      const scrollPos = window.scrollY + 200; // Offset trigger point

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler targeting elements directly
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div 
      id="app-root" 
      className="bg-[#FAFAF9] dark:bg-[#050505] min-h-screen text-black dark:text-gray-150 antialiased selection:bg-[#FF2B5E] selection:text-white transition-colors duration-400"
    >
      {/* 
        React 19 Native Metadata Hoisting
        These tags will automatically move to the HTML <head> for clean SEO indexing
      */}
      <title>Monsoon Creative Agency | Modern Creative Agency Dhaka</title>
      <meta 
        name="description" 
        content="Monsoon Creative Agency is Dhaka's premier creative brand communications and experiential activation agency. Specialized in brand strategy, high-octane launch events, design and cinematic TVCs." 
      />
      <meta name="keywords" content="Creative Agency Dhaka, Brand Marketing Bangladesh, Coke Studio Bangla agency, Experiential Marketing Banani, Monsoon Creative Agency, Monsoon" />
      <meta name="author" content="Monsoon Creative Agency" />
      
      {/* Open Graph Meta tags */}
      <meta property="og:title" content="Monsoon Creative Agency | Modern Creative Brand & Experiential Agency" />
      <meta property="og:description" content="Shattering cookie-cutter templates to deliver beautiful, emotional and high-impact campaigns across Bangladesh." />
      <meta property="og:type" content="website" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Monsoon Creative Agency | Creative Agency" />

      {/* Structured Nav Header with Theme Toggler */}
      <Navbar 
        onNavigate={handleNavigation} 
        activeSection={activeSection} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Agency Content Showcase */}
      <main id="main-content">
        <Hero onLearnMore={handleNavigation} />
        <Projects />
        <Clients />
        <Leaders />
        <Faq />
        <Values />
      </main>

      {/* Footer and Inquiry capture area */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Support Team Popup */}
        <AnimatePresence>
          {isWhatsAppOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30, x: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="mb-4 w-[290px] sm:w-[320px] bg-white dark:bg-[#121B2B] rounded-3xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.18)] border border-gray-100 dark:border-white/10 select-none relative text-left"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsWhatsAppOpen(false)}
                className="absolute top-4 right-4 text-gray-450 hover:text-gray-700 dark:hover:text-white transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="flex items-center space-x-3">
                {/* Support Team Avatar Container */}
                <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-[#FF2B5E] to-[#FF5C8A] flex items-center justify-center shadow-inner">
                  {/* Chat speech bubble icon */}
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {/* Online dot indicator right on the avatar edge */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#121B2B] rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-sans font-extrabold text-[#0F172A] dark:text-white text-[15px] leading-tight">
                    Support Team
                  </h4>
                  <div className="flex items-center space-x-1 mt-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-sans font-bold text-emerald-500 tracking-wider uppercase">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Message text with emoji */}
              <p className="text-gray-600 dark:text-gray-300 font-sans font-medium text-xs mt-3.5 mb-4 leading-relaxed">
                Hi there! 👋 How can we help you today?
              </p>

              {/* Connect Button inside popup */}
              <a
                href="https://wa.me/8801634415619"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 px-4 text-center rounded-2xl bg-gradient-to-r from-[#FF2B5E] to-[#FF5C8A] hover:from-[#E01042] hover:to-[#FF2B5E] text-white font-sans font-extrabold text-xs tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular Floating WhatsApp Trigger Button */}
        <motion.button
          id="floating-whatsapp-trigger"
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(37,211,102,0.4)] cursor-pointer transition-colors duration-200 focus:outline-none"
          title="Chat with Support Team"
        >
          <svg 
            className="w-7 h-7 fill-current text-white transition-transform duration-300" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
