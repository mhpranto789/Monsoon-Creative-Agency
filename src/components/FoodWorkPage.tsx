import { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  X, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Sparkles, 
  Utensils, 
  Layers, 
  Maximize2,
  FolderDown,
  ArrowLeft,
  Flame,
  MessageCircle,
  PhoneCall,
  Clock,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FOOD_WORK_ITEMS, FOOD_CATEGORIES, FoodCategory, FoodWorkItem } from "../data/foodWorkData";

interface FoodWorkPageProps {
  onBackToHome: () => void;
  onNavigateToContact?: () => void;
}

export default function FoodWorkPage({ onBackToHome, onNavigateToContact }: FoodWorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState<FoodWorkItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(16);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return FOOD_WORK_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.dishType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.filename.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Keyboard navigation for active lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;

      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % filteredItems.length;
          setActiveItem(filteredItems[nextIndex]);
        }
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
        if (currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
          setActiveItem(filteredItems[prevIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, filteredItems]);

  const activeIndex = activeItem ? filteredItems.findIndex(i => i.id === activeItem.id) : -1;

  const handleNext = () => {
    if (activeIndex !== -1) {
      const nextIndex = (activeIndex + 1) % filteredItems.length;
      setActiveItem(filteredItems[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (activeIndex !== -1) {
      const prevIndex = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveItem(filteredItems[prevIndex]);
    }
  };

  return (
    <div id="food-work-page" className="min-h-screen bg-[#050505] text-white selection:bg-[#e83e27] selection:text-white">
      {/* Top Floating Navbar for Dedicated Page */}
      <header className="sticky top-0 z-40 bg-[#060709]/85 backdrop-blur-xl border-b border-white/10 py-4 px-6 md:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Back to Home Button & Brand */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer text-white shadow-sm"
              aria-label="Back to main site"
            >
              <ArrowLeft size={14} className="text-brand-primary" />
              <span>Agency Home</span>
            </button>

            <div className="hidden sm:flex items-center space-x-2.5 pl-2 border-l border-white/10">
              <span className="font-display font-black text-sm tracking-tight text-white">
                Alt DOT <span className="text-brand-primary">Creative</span>
              </span>
              <span className="text-gray-500 text-xs font-mono">/</span>
              <span className="font-mono text-xs text-gray-300 font-semibold tracking-wide">
                Food Work Static
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://drive.google.com/drive/folders/1mIUGlHTDSlhroYU0op3ZO0k4EnzauEDt?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono font-medium text-gray-300 hover:text-white transition-colors"
            >
              <FolderDown size={13} className="text-brand-primary" />
              <span>Google Drive RAWs</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>

            <button
              onClick={() => {
                const el = document.getElementById("book-shoot");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#e83e27] to-[#f05a46] hover:from-[#c92f1b] hover:to-[#e83e27] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              <span>Let's Talk</span>
            </button>
          </div>
        </div>
      </header>

      {/* Page Hero Section */}
      <section className="relative pt-12 pb-16 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-primary/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
                <Utensils size={13} className="animate-pulse" />
                <span>Commercial Gastronomy Showcase</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                Food Work <span className="text-brand-primary">Static.</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                A dedicated archive of commercial culinary stills, studio menu cinematography, and hospitality brand staging. Captured with cinema macro optics, calibrated color reproduction, and bespoke culinary art direction.
              </p>
            </div>
          </div>

          {/* Quick Drive Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/5 via-white/[0.07] to-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                <FolderDown size={18} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-white">Complete High-Resolution RAW Archive</h4>
                <p className="text-xs text-gray-400">All uncompressed 4K master photographs and motion reels available directly on Google Drive.</p>
              </div>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1mIUGlHTDSlhroYU0op3ZO0k4EnzauEDt?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-semibold tracking-wider uppercase transition-colors"
            >
              <span>Open Google Drive</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Filter Bar: Category Tabs & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {FOOD_CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                const count = category === "All" 
                  ? FOOD_WORK_ITEMS.length 
                  : FOOD_WORK_ITEMS.filter(i => i.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setVisibleCount(16);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-sans font-semibold tracking-normal whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                      isSelected
                        ? "btn-liquid-glass-primary shadow-sm text-white"
                        : "btn-liquid-glass text-gray-400 hover:text-white"
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-white/5 text-gray-400"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80 shrink-0">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-gray-400">
                <Search size={15} />
              </div>
              <input
                type="text"
                placeholder="Search dishes, burgers, cocktails, pasta..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(16);
                }}
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs font-sans focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter status */}
          {(selectedCategory !== "All" || searchQuery) && (
            <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>
                Showing {filteredItems.length} of {FOOD_WORK_ITEMS.length} dishes
                {selectedCategory !== "All" && ` in "${selectedCategory}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-brand-primary hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Gallery Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-24 px-4 rounded-3xl bg-white/5 border border-white/10">
              <Utensils size={40} className="mx-auto text-gray-500 mb-3 opacity-50" />
              <h3 className="text-xl font-bold text-white mb-2">No matching dishes found</h3>
              <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">
                Try searching for other dish styles, burger varieties, steaks, cocktails, or clear your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 rounded-full bg-brand-primary hover:bg-[#c92f1b] text-white text-xs font-mono uppercase font-bold transition-all cursor-pointer shadow-md"
              >
                Show All 50 Dishes
              </button>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {displayedItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    id={`food-page-card-${item.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.3) }}
                    onClick={() => setActiveItem(item)}
                    className="group relative rounded-2xl bg-[#111114] border border-white/10 hover:border-brand-primary/50 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Visual Image Container */}
                    <div className="relative aspect-[4/5] w-full bg-black/60 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://drive.google.com/thumbnail?id=${item.driveId}&sz=w800`;
                        }}
                      />

                      {/* Gradient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none">
                        <span className="font-mono text-[9px] font-bold tracking-widest text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                          {item.dishType}
                        </span>
                        <span className="font-mono text-[10px] text-gray-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Hover Inspect Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                          <Maximize2 size={18} />
                        </div>
                      </div>

                      {/* Bottom Image Overlay Tag */}
                      <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                        <span className="text-[10px] font-mono text-brand-primary uppercase font-bold tracking-wider block drop-shadow">
                          {item.category}
                        </span>
                        <h3 className="font-display font-bold text-base text-white leading-snug drop-shadow line-clamp-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Footer Details */}
                    <div className="p-4 bg-[#141418] border-t border-white/5 space-y-2.5">
                      <p className="text-gray-400 text-xs font-light line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.slice(0, 2).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                        {item.tags.length > 2 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 text-gray-500">
                            +{item.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Load More Pagination */}
          {filteredItems.length > visibleCount && (
            <div className="flex justify-center pt-8">
              <button
                onClick={() => setVisibleCount(prev => Math.min(prev + 16, filteredItems.length))}
                className="flex items-center space-x-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-brand-primary text-white text-xs font-mono uppercase font-bold tracking-wider transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer border border-white/15"
              >
                <span>Load More Dishes ({filteredItems.length - visibleCount} remaining)</span>
                <Layers size={14} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Production Capabilities Banner */}
      <section className="py-16 px-6 md:px-12 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-mono text-xs text-brand-primary uppercase font-bold tracking-widest block">
              Culinary Production Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Engineered for Appetite & Conversion
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Every shoot combines specialized optical engineering, culinary styling techniques, and calibrated color workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#111114] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Camera size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Macro Texture Staging</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                High-magnification cinema lenses capture intimate crust caramelization, moisture droplets, and intricate ingredient layering.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111114] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Flame size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Live Kitchen & Flambé</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                High-speed 1/4000s shutter capture freezes sizzling embers, aromatic steam plumes, and dynamic wok tosses with razor clarity.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111114] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Sparkles size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Commercial Menu Grading</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                Calibrated color management ensures true-to-life food hues optimized for billboards, print menus, delivery apps, and social campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Shoot Booking - Direct WhatsApp Connect Section */}
      <section id="book-shoot" className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#141418] via-[#111114] to-[#180e0c] border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#e83e27]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Instant WhatsApp Production Connect</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Let's Talk About Your <span className="text-brand-primary">Food Shoot.</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                No complex forms or waiting times. Connect directly with our culinary photography team via WhatsApp for instant date availability, package rates, and creative direction.
              </p>
            </div>

            {/* Direct Connect Action Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Primary WhatsApp Card */}
              <a
                href="https://wa.me/8801310577702?text=Hello%20Alt%20DOT%20Creative%2C%20I%20want%20to%20discuss%20a%20commercial%20Food%20Photography%20%2F%20Video%20shoot%20for%20my%20brand."
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/20 via-white/5 to-white/5 border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-black flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} className="fill-current" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                      Direct Messaging
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-gray-300 text-xs font-light mt-1 leading-relaxed">
                      Instant response for shoot dates, restaurant locations, and rate cards.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#25D366]">
                  <span className="font-mono tracking-wider uppercase">Open WhatsApp (+880 1310 577702)</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>

              {/* Direct Call / Studio Card */}
              <a
                href="tel:+8801310577702"
                className="group p-6 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-brand-primary/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/20 border border-brand-primary/30 text-brand-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <PhoneCall size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-primary font-bold uppercase tracking-wider block">
                      Direct Voice Line
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      Call ADC
                    </h3>
                    <p className="text-gray-300 text-xs font-light mt-1 leading-relaxed">
                      Speak directly with our producer for urgent project turnarounds and briefing.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white group-hover:text-brand-primary transition-colors">
                  <span className="font-mono tracking-wider uppercase">+880 1310-577702</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </div>

            {/* Quick Topic Prompts for WhatsApp */}
            <div className="pt-2">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3 font-semibold">
                Or choose a quick topic to start chatting:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "🍔 Restaurant Menu Stills", text: "Hello! I need a quote for a full Restaurant Menu Still Photography shoot." },
                  { label: "🥩 Fine Dining & Steaks", text: "Hi Alt DOT! We are launching a premium grill / steakhouse and need culinary cinematography." },
                  { label: "🍸 Beverage & Bar Mixology", text: "Hello! Looking for specialized beverage / cocktail bar photography and video reels." },
                  { label: "🍰 Bakery & Dessert Menu", text: "Hi! We need high-res product and lifestyle photos for our bakery and dessert items." },
                  { label: "🎥 4K Food Reels & Motion", text: "Hello! Interested in dynamic 4K food reels and behind-the-kitchen video content." }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/8801310577702?text=${encodeURIComponent(item.text)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 hover:border-emerald-500/40 border border-white/10 text-gray-300 hover:text-white text-xs font-sans transition-all flex items-center space-x-1.5"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-400 font-mono">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={14} className="text-brand-primary shrink-0" />
                <span>On Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={14} className="text-brand-primary shrink-0" />
                <span>Fast 48h Turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} className="text-brand-primary shrink-0" />
                <span>Available 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Page Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-black/60 text-xs font-mono text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToHome}
              className="text-white hover:text-brand-primary transition-colors font-bold uppercase"
            >
              ← Back to Alt DOT Creative
            </button>
            <span>•</span>
            <a
              href="https://drive.google.com/drive/folders/1mIUGlHTDSlhroYU0op3ZO0k4EnzauEDt?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Google Drive RAWs
            </a>
          </div>

          <div>
            © {new Date().getFullYear()} Alt DOT Creative. Commercial Gastronomy & F&B Visuals.
          </div>
        </div>
      </footer>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#121216] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-brand-primary text-white transition-colors border border-white/10 cursor-pointer shadow-lg"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-brand-primary text-white transition-all border border-white/10 cursor-pointer shadow-lg hover:scale-110"
                aria-label="Previous shot"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 lg:right-[380px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-brand-primary text-white transition-all border border-white/10 cursor-pointer shadow-lg hover:scale-110"
                aria-label="Next shot"
              >
                <ChevronRight size={20} />
              </button>

              {/* Main Image Stage */}
              <div className="flex-1 bg-black flex items-center justify-center p-4 min-h-[350px] lg:min-h-[550px] relative overflow-hidden">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://drive.google.com/thumbnail?id=${activeItem.driveId}&sz=w1200`;
                  }}
                />

                {/* Filename badge */}
                <div className="absolute bottom-4 left-4 font-mono text-[11px] text-gray-400 bg-black/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                  {activeItem.filename}
                </div>
              </div>

              {/* Detail Sidebar */}
              <div className="w-full lg:w-[360px] p-6 lg:p-8 bg-[#16161c] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-full">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-mono text-[10px] font-bold uppercase tracking-wider">
                      {activeItem.category}
                    </span>
                    <span className="font-mono text-xs text-gray-400">
                      {activeIndex + 1} / {filteredItems.length}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-xl lg:text-2xl text-white leading-tight">
                      {activeItem.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-400 mt-1">
                      Dish Type: <span className="text-white font-medium">{activeItem.dishType}</span>
                    </p>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                    {activeItem.description}
                  </p>

                  {/* Food Styling & Lighting Notes */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
                    <div className="flex items-center space-x-2 text-brand-primary font-mono text-[11px] font-bold uppercase tracking-wider">
                      <Camera size={13} />
                      <span>Staging & Lighting Technique</span>
                    </div>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      {activeItem.stylingNotes}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block font-semibold">
                      Production Tags
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 text-[11px] font-mono border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-6 border-t border-white/10 space-y-2 mt-6">
                  <a
                    href={`https://drive.google.com/file/d/${activeItem.driveId}/view?usp=sharing`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>View RAW in Google Drive</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href={`https://wa.me/8801310577702?text=${encodeURIComponent(`Hello Alt DOT Creative! I am interested in booking a Food Photography shoot with the visual style of "${activeItem.title}" (${activeItem.category}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-black font-sans font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle size={15} className="fill-current" />
                    <span>Chat on WhatsApp For This Style</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
