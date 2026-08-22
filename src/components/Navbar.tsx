import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenFoodWork?: () => void;
}

export default function Navbar({ onNavigate, activeSection, onOpenFoodWork }: NavbarProps) {
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
    { label: "About Us", id: "values" },
    { label: "Company Leaders", id: "leaders" },
    { label: "FAQ", id: "faq" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "food-work" && onOpenFoodWork) {
      onOpenFoodWork();
      return;
    }
    onNavigate(id);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060709]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            id="navbar-logo"
            onClick={() => handleItemClick("home")}
            className="group flex items-center space-x-3 text-left cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10 bg-white/10 dark:bg-black/40 border border-white/20 rounded-lg p-1 flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-sm overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1bhLdxR_M7FNQRzx93QDXM2nnKB2-kNuL" 
                alt="Alt DOT Creative Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logo.png";
                }}
              />
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-tight text-white block">
                Alt <span className="text-brand-primary">DOT</span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase block -mt-1">
                Creative
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
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
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
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-liquid-glass p-2.5 text-white rounded-full hover:scale-110 active:scale-95 focus:outline-none cursor-pointer flex items-center justify-center shadow-sm transition-all duration-200"
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
            className="fixed inset-0 z-40 bg-[#060709]/95 backdrop-blur-xl pt-28 px-8 flex flex-col justify-between"
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
                      : "text-white"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
 
            <div className="border-t border-white/10 py-6 mb-4 space-y-3">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block mb-1">
                Say Hello & Inquiries
              </span>
              <div>
                <a 
                  href="mailto:connect.altdotcreative@gmail.com" 
                  className="text-white hover:text-brand-primary font-medium transition-colors block text-base"
                >
                  connect.altdotcreative@gmail.com
                </a>
              </div>
              <div className="pt-1">
                <p className="text-gray-300 text-sm font-medium">House-12, Road-1, Niketon</p>
                <p className="text-gray-400 text-xs font-light">Gulshan-1, Dhaka, Bangladesh</p>
              </div>
              <div className="pt-1">
                <a 
                  href="tel:+8801310577702" 
                  className="text-gray-300 hover:text-white text-xs font-mono transition-colors block"
                >
                  +880 1310-577702
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
