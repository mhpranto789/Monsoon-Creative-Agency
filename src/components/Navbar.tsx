import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ onNavigate, activeSection, theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Clients", id: "clients" },
    { label: "Company Leaders", id: "leaders" },
    { label: "FAQ", id: "faq" },
    { label: "About Us", id: "values" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAFAF9]/90 dark:bg-[#0B1220]/90 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            id="navbar-logo"
            onClick={() => handleItemClick("home")}
            className="group flex items-center space-x-2 text-left cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative w-8 h-8 bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black text-lg rounded-lg transition-transform group-hover:rotate-12 duration-300 shadow-sm">
              <span className="font-display">m</span>
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-tight text-black dark:text-white block">
                Monsoon
              </span>
              <span className="font-mono text-[9px] tracking-widest text-gray-500 dark:text-gray-400 uppercase block -mt-1">
                Creative Agency
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" aria-label="Desktop navigation" className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                  activeSection === item.id
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Theme Toggle Button */}
            <button
               id="theme-toggle-desktop"
               onClick={onToggleTheme}
               className="btn-liquid-glass p-2.5 ml-2 text-black dark:text-white transition-all rounded-full hover:scale-110 active:scale-95 shadow-sm cursor-pointer flex items-center justify-center"
              title={theme === "light" ? "Switch to Pitch Black mode" : "Switch to Light mode"}
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <button
              id="nav-cta-contact"
              onClick={() => handleItemClick("contact")}
              className="btn-liquid-glass-primary group flex items-center space-x-1.5 transition-all duration-200 rounded-full cursor-pointer px-5 py-2 hover:scale-[1.04] active:scale-[0.96] shadow-sm hover:shadow-md"
            >
              <span className="text-xs font-semibold">Let's Talk</span>
              <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </nav>

          {/* Mobile Actions block */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Theme Toggle Button (Mobile) */}
            <button
              id="theme-toggle-mobile"
              onClick={onToggleTheme}
              className="btn-liquid-glass p-2.5 text-black dark:text-white transition-all rounded-full hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-liquid-glass p-2.5 text-black dark:text-white rounded-full hover:scale-110 active:scale-95 focus:outline-none cursor-pointer flex items-center justify-center shadow-sm transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#FAFAF9] dark:bg-[#0B1220] pt-28 px-8 flex flex-col justify-between"
          >
            <nav id="mobile-nav" aria-label="Mobile navigation" className="flex flex-col space-y-5">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-2xl font-display font-bold text-left cursor-pointer ${
                    activeSection === item.id 
                      ? "text-brand-primary" 
                      : "text-black dark:text-white"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="border-t border-gray-200 dark:border-white/10 py-8 mb-4 space-y-2">
              <span className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">
                Say Hello
              </span>
              <p className="text-gray-800 dark:text-gray-200 font-medium">hello@monsoon.agency</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">House 42, Road 11, Banani, Dhaka</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
