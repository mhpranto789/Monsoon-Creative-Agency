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
  Eye,
  SlidersHorizontal,
  Maximize2,
  FolderDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FOOD_WORK_ITEMS, FOOD_CATEGORIES, FoodCategory, FoodWorkItem } from "../data/foodWorkData";

interface FoodWorkStaticProps {
  onNavigateToContact?: () => void;
}

export default function FoodWorkStatic({ onNavigateToContact }: FoodWorkStaticProps) {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState<FoodWorkItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

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
    <div id="food-work-section" className="w-full">
      {/* Editorial Header Banner */}
      <div className="relative mb-12 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-[#111114] to-[#1a0f0d]/80 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Subtle decorative culinary watermark grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#e83e27_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-semibold tracking-wider uppercase">
              <Utensils size={13} className="animate-pulse" />
              <span>Culinary & Hospitality Portfolio</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Food Work <span className="text-brand-primary">Static.</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              A curated catalog of commercial food photography, restaurant brand staging, and gastronomic visual engineering. Captured with cinema-grade macro lenses, calibrated continuous lighting, and bespoke culinary art direction.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                <span><strong className="text-white font-bold">{FOOD_WORK_ITEMS.length}</strong> Curated Stills</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span><strong className="text-white font-bold">7</strong> Gastronomy Categories</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span><strong className="text-white font-bold">4K</strong> High-Res Master RAWs</span>
              </div>
            </div>
          </div>

          {/* Drive Link & Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href="https://drive.google.com/drive/folders/1mIUGlHTDSlhroYU0op3ZO0k4EnzauEDt?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg backdrop-blur-md"
            >
              <FolderDown size={15} className="text-brand-primary" />
              <span>Original Google Drive</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>

            {onNavigateToContact && (
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#e83e27] to-[#f05a46] hover:from-[#c92f1b] hover:to-[#e83e27] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer"
              >
                <Sparkles size={14} />
                <span>Book F&B Shoot</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Controls: Search & Category Pills */}
      <div className="space-y-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
                    setVisibleCount(12);
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
          <div className="relative w-full md:w-72 shrink-0">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-gray-400">
              <Search size={15} />
            </div>
            <input
              type="text"
              placeholder="Search dishes, burgers, cocktails..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
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

        {/* Active Filter indicator */}
        {(selectedCategory !== "All" || searchQuery) && (
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono pt-2 border-t border-white/5">
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
      </div>

      {/* Food Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 px-4 rounded-3xl bg-white/5 border border-white/10">
          <Utensils size={36} className="mx-auto text-gray-500 mb-3 opacity-50" />
          <h3 className="text-lg font-bold text-white mb-1">No matching food stills found</h3>
          <p className="text-gray-400 text-xs max-w-sm mx-auto mb-4">
            Try adjusting your search terms or selecting another category to view dishes.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-5 py-2 rounded-full bg-white/10 text-white text-xs font-mono uppercase hover:bg-brand-primary transition-colors cursor-pointer"
          >
            Show All Dishes
          </button>
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                id={`food-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
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
                      // Fallback in case Google Drive thumbnail throttles
                      (e.target as HTMLImageElement).src = `https://drive.google.com/thumbnail?id=${item.driveId}&sz=w800`;
                    }}
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                      {item.dishType}
                    </span>
                    <span className="font-mono text-[10px] text-gray-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
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

      {/* Show More / Pagination Controls */}
      {filteredItems.length > visibleCount && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount(prev => Math.min(prev + 12, filteredItems.length))}
            className="flex items-center space-x-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-brand-primary text-white text-xs font-mono uppercase font-bold tracking-wider transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer border border-white/15"
          >
            <span>Load More Food Stills ({filteredItems.length - visibleCount} remaining)</span>
            <Layers size={14} />
          </button>
        </div>
      )}

      {/* Fullscreen Food Spotlight & Inspection Modal */}
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

                {/* Filename watermark badge */}
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

                  {onNavigateToContact && (
                    <button
                      onClick={() => {
                        setActiveItem(null);
                        onNavigateToContact();
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-brand-primary hover:bg-[#c92f1b] text-white font-sans font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Inquire About Custom Food Shoots
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
