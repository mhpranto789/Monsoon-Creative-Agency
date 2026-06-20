import { useState, useEffect } from "react";
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
      className="bg-[#FAFAF9] dark:bg-[#050505] min-h-screen text-black dark:text-gray-150 antialiased selection:bg-[#1E3A8A] selection:text-white transition-colors duration-400"
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
    </div>
  );
}
