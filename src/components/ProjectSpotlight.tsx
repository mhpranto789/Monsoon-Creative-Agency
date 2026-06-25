import { useState, useEffect } from "react";
import { 
  X, 
  TrendingUp, 
  Target, 
  Calendar, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Sliders, 
  Quote, 
  CheckCircle2, 
  Search, 
  ExternalLink,
  Users,
  Eye,
  Share2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project, ProjectMetric } from "../types";

interface ProjectSpotlightProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  allProjectsCount: number;
  currentIndex: number;
}

export default function ProjectSpotlight({
  project,
  onClose,
  onNext,
  onPrev,
  allProjectsCount,
  currentIndex
}: ProjectSpotlightProps) {
  // Tabs for structured documentation
  const [activeTab, setActiveTab] = useState<"strategy" | "execution" | "outcomes">("strategy");
  
  // Interactive gallery selection state
  const defaultGallery = project.galleryImages && project.galleryImages.length > 0 
    ? project.galleryImages 
    : [
        project.imageUrl,
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
      ];
  
  const [activeImage, setActiveImage] = useState(defaultGallery[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Dynamic Metrics Reach Simulator state
  const [multiplier, setMultiplier] = useState(1); // multiplier slider for local vs regional scale
  const [estimatedReach, setEstimatedReach] = useState(0);

  // Reset selected image and video when project changes
  useEffect(() => {
    setActiveImage(defaultGallery[0]);
    setShowVideo(false);
  }, [project]);

  // Compute interactive reach calculation
  useEffect(() => {
    const baseValue = parseFloat(project.stats?.value.replace(/[^0-9.]/g, '') || "1") || 1;
    const isMillion = project.stats?.value.includes("M") || project.stats?.value.includes("m");
    const suffix = isMillion ? "M+" : "+";
    
    let simulatedResult = baseValue * multiplier;
    if (multiplier === 0.5) {
      simulatedResult = baseValue * 0.4;
    } else if (multiplier === 1.5) {
      simulatedResult = baseValue * 1.8;
    } else if (multiplier === 2.5) {
      simulatedResult = baseValue * 3.2;
    }
    
    setEstimatedReach(parseFloat(simulatedResult.toFixed(1)));
  }, [multiplier, project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Fallback metric block values if not defined explicitly in JSON
  const metricsDetail: ProjectMetric[] = project.metricsDetail || [
    { label: "Direct Engaging Footprint", value: project.stats?.value || "10K+", subtext: "Audited brand response" },
    { label: "Campaign Virality Index", value: "98.4%", subtext: "Social share metrics score" },
    { label: "Positive Audience Sentiment", value: "94.2%", subtext: "Based on 3rd-party user polls" },
  ];

  const defaultQuote = {
    text: "Monsoon didn't just meet our brand brief; they shattered the usual expectations, creating an emotional bridge that Dhaka actually stopped to look at.",
    author: "Senior Brand Director",
    role: "National FMCG Division"
  };

  const quote = project.clientQuote || defaultQuote;
  const timeline = project.timeline || "6-Week Full Production Lifecycle";
  const tagline = project.tagline || `Transforming ordinary touchpoints into extraordinary digital & physical ${project.category === "Experiential" ? "summits" : "storytelling"}.`;
  const channels = project.channelsUsed || [
    "Experiential BTL Venues", 
    "Cinematic TVC", 
    "Digital Native UGC Campaign", 
    "OOH Giant Projections"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#FAFAF9]/95 dark:bg-[#050505]/98 backdrop-blur-lg flex justify-center py-6 sm:py-12 px-4 transition-all duration-405 select-text">
      <div className="max-w-6xl w-full bg-white dark:bg-[#0E0F12] border border-gray-150 dark:border-white/10 shadow-2xl relative flex flex-col justify-between my-auto">
        
        {/* TOP STATUS BAR CONTAINER */}
        <div className="p-4 sm:px-8 border-b border-gray-100 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-black/40">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 bg-[#FF2B5E] animate-pulse" />
            <span className="font-mono text-[9px] font-bold tracking-widest text-gray-400 dark:text-gray-550 uppercase">
              CASE SPOTLIGHT . STUDY {currentIndex + 1} OF {allProjectsCount}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onPrev}
              className="btn-liquid-glass p-1 px-3.5 text-[10px] font-sans font-bold flex items-center space-x-1 cursor-pointer rounded-full shadow-sm"
              aria-label="Previous Project"
            >
              <ChevronLeft size={12} />
              <span>PREV</span>
            </button>
            <button
              onClick={onNext}
              className="btn-liquid-glass p-1 px-3.5 text-[10px] font-sans font-bold flex items-center space-x-1 cursor-pointer rounded-full shadow-sm"
              aria-label="Next Project"
            >
              <span>NEXT</span>
              <ChevronRight size={12} />
            </button>
            <button
              onClick={onClose}
              id="close-spotlight-button"
              className="btn-liquid-glass-primary ml-3 p-1 px-4 text-[10px] font-sans font-bold flex items-center space-x-1 cursor-pointer rounded-full shadow-md"
              aria-label="Close Spotlight view"
            >
              <X size={12} />
              <span>EXIT CASE</span>
            </button>
          </div>
        </div>

        {/* MAIN BODY LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* LEFT 7 COLUMNS: IMAGERY, GALLERY & INTERACTIVE SIMULATOR */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 border-r border-gray-100 dark:border-white/5">
            
            {/* LARGE HERO VIEW PORT */}
            <div className="space-y-3">
              {project.youtubeId && showVideo ? (
                <div className="relative aspect-[16/10] w-full bg-black border border-gray-150 dark:border-white/10 overflow-hidden group">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                    title={`${project.title} Video Campaign`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full absolute inset-0 min-h-full"
                  ></iframe>
                  
                  <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
                    <button
                      onClick={() => setShowVideo(false)}
                      className="btn-liquid-glass-primary text-[9px] font-sans tracking-wide uppercase px-3.5 py-1.5 flex items-center space-x-1.5 cursor-pointer transition-all duration-200 hover:scale-105 shadow-md font-bold rounded-full"
                    >
                      <span>Show Photos</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div 
                  className="relative aspect-[16/10] w-full bg-slate-900/10 dark:bg-slate-900/50 border border-gray-150 dark:border-white/10 overflow-hidden cursor-zoom-in group"
                  onClick={() => setIsZoomed(true)}
                >
                  <img
                    src={activeImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  
                  <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
                    {project.youtubeId && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowVideo(true);
                        }}
                        className="btn-liquid-glass-primary text-[9px] font-sans tracking-wide uppercase px-3.5 py-1.5 flex items-center space-x-1.5 cursor-pointer transition-all duration-200 hover:scale-105 shadow-md font-bold rounded-full"
                      >
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                        </svg>
                        <span>PLAY CAMPAIGN</span>
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsZoomed(true);
                      }}
                      className="btn-liquid-glass text-white text-[9px] font-sans tracking-wide uppercase px-3.5 py-1.5 flex items-center space-x-1.5 cursor-pointer transition-all duration-200 hover:scale-105 font-bold rounded-full shadow-md"
                    >
                      <Search size={10} />
                      <span>ZOOM</span>
                    </button>
                  </div>

                  {project.youtubeId && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowVideo(true);
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/15 hover:bg-black/35 transition-colors group cursor-pointer"
                      aria-label="Play Video Campaign"
                    >
                      <div className="btn-liquid-glass-primary w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 relative text-[#FF2B5E]">
                        <div className="absolute inset-0 rounded-full border border-white/35 animate-ping opacity-60 pointer-events-none" />
                        <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}

                  <div className="absolute bottom-4 left-4 bg-[#FF2B5E] text-white text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 pointer-events-none z-10">
                    {project.category} / {project.year}
                  </div>
                </div>
              )}

              {/* THUMBNAIL TRACK */}
              <div className="grid grid-cols-4 gap-2">
                {defaultGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImage(img);
                      setShowVideo(false);
                    }}
                    className={`relative aspect-video overflow-hidden border transition-all duration-200 hover:scale-105 rounded-lg cursor-pointer ${
                      !showVideo && activeImage === img 
                        ? "border-[#FF2B5E] ring-1 ring-[#FF2B5E]" 
                        : "border-gray-200 dark:border-white/10 hover:border-gray-400 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Thumbnail view" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent" />
                  </button>
                ))}
              </div>
            </div>

            {/* DYNAMIC PERFORMANCE METRICS DASHBOARD */}
            <div className="border border-gray-150 dark:border-white/10 bg-[#FAF9F6] dark:bg-[#0E0F12] p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-250/50 dark:border-white/5 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF2B5E] uppercase block font-bold">
                    AUDITED CAMPAIGN FOOTPRINT
                  </span>
                  <h4 className="font-display font-black text-lg text-black dark:text-white leading-none">
                    High-Octane Core Indicators
                  </h4>
                </div>
                <div className="flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 border border-emerald-250/50 dark:border-emerald-500/10">
                  <TrendingUp size={12} className="text-emerald-500" />
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">VERIFIED METRIC</span>
                </div>
              </div>

              {/* Metric Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {metricsDetail.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider block font-medium">
                      {metric.label}
                    </span>
                    <span className="font-display font-black text-2xl text-black dark:text-white block leading-none">
                      {metric.value}
                    </span>
                    <span className="font-sans text-[10px] text-gray-500 dark:text-gray-450 block font-light">
                      {metric.subtext}
                    </span>
                  </div>
                ))}
              </div>

              {/* DYNAMIC INTERACTIVE VISUALIZER: REACH SIMULATOR */}
              <div className="bg-white dark:bg-[#0B0C0E] border border-gray-200/50 dark:border-white/5 p-5 space-y-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <Sliders size={13} className="text-[#FF2B5E]" />
                      <span className="font-mono text-[10px] text-black dark:text-white uppercase font-bold tracking-wider">
                        Interactive Reach Simulator
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-gray-500 dark:text-gray-400 font-light">
                      Adjust regional multiplier to estimate real-time target scale variables
                    </p>
                  </div>
                </div>

                {/* SLIDER COMPONENT */}
                <div className="space-y-3">
                  <div className="flex justify-between font-mono text-[10px] text-gray-400">
                    <span>Local (Dhaka City)</span>
                    <span className="text-[#FF2B5E] font-bold">Value: {multiplier === 0.5 ? "Sub-Metro" : multiplier === 1 ? "Selected Campaign" : multiplier === 1.5 ? "Regional Reach" : "Bangladesh Wide"} ({multiplier}x)</span>
                    <span>National Scope</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.5"
                    value={multiplier}
                    onChange={(e) => setMultiplier(parseFloat(e.target.value))}
                    className="w-full accent-[#FF2B5E] h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg cursor-pointer appearance-none transition-all"
                  />
                </div>

                {/* THE RESULTING SIMULATOR KPI */}
                <div className="p-4 bg-[#FF2B5E]/5 border border-[#FF2B5E]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div>
                    <span className="font-mono text-[9px] text-[#FF2B5E] tracking-widest block font-bold uppercase">
                      ESTIMATED BRAND INTERACTION SCALE
                    </span>
                    <span className="font-sans text-xs text-black dark:text-gray-300 font-light mt-0.5 block">
                      Projected impressions depending on distribution scope
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-display font-black text-3xl text-emerald-600 dark:text-emerald-400 block tracking-tight leading-none">
                      {estimatedReach}{project.stats?.value.includes("M") || project.stats?.value.includes("m") ? "M" : ""}+
                    </span>
                    <span className="font-mono text-[9px] text-gray-400 block tracking-widest uppercase mt-0.5">
                      Target Audience
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT 5 COLUMNS: DATA STUDY DETAILS, WORKSPACE CONTEXT & CALLS */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-8 bg-white dark:bg-[#0E0F12]">
            
            {/* TEXT HEADERS */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#FF2B5E] tracking-widest uppercase bg-[#FF2B5E]/10 py-1 px-3 rounded-none inline-block">
                  {project.type.toUpperCase()}
                </span>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-black dark:text-white leading-tight">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed italic">
                  "{tagline}"
                </p>
              </div>

              {/* TIMELINE & CORE METRIC SMALL DETAILS */}
              <div className="grid grid-cols-2 gap-4 border-y border-gray-150 dark:border-white/5 py-4 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-gray-400 uppercase block text-[9px]">LIFECYCLE DURATION</span>
                  <span className="text-black dark:text-white font-bold flex items-center space-x-1.5">
                    <Calendar size={13} className="text-[#FF2B5E]" />
                    <span>{timeline}</span>
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 uppercase block text-[9px]">LAUNCH BASE</span>
                  <span className="text-black dark:text-white font-bold flex items-center space-x-1.5">
                    <Award size={13} className="text-[#FF2B5E]" />
                    <span>Banani Hub, Dhaka</span>
                  </span>
                </div>
              </div>

              {/* INTERACTIVE TEXT TAB CONTAINER */}
              <div className="space-y-4">
                {/* Visual Tab Headers */}
                <div className="flex border-b border-gray-200 dark:border-white/5 text-xs font-mono font-bold">
                  {(["strategy", "execution", "outcomes"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 pr-6 tracking-wide relative pt-1 uppercase cursor-pointer ${
                        activeTab === tab 
                          ? "text-[#FF2B5E]" 
                          : "text-gray-400 dark:text-gray-550 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div 
                           layoutId="activeTabUnderline" 
                          className="absolute bottom-0 left-0 right-6 h-0.5 bg-[#FF2B5E]" 
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content displays (with different strategic items) */}
                <div className="min-h-[140px]">
                  <AnimatePresence mode="wait">
                    {activeTab === "strategy" && (
                      <motion.div
                        key="strategy"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed"
                      >
                        <p>
                          We approached {project.title} by researching hyper-local cultural symbols. The challenge was integrating traditional pride with cutting-edge visual technologies.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {channels.map((chan, idx) => (
                            <span key={idx} className="font-mono text-[9px] px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 uppercase font-medium">
                              #{chan.replace(/\s+/g, '')}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "execution" && (
                      <motion.div
                        key="execution"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <ul className="space-y-2.5">
                          {project.campaignGoals?.map((g, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs text-gray-700 dark:text-gray-300">
                              <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="font-sans font-light">{g}</span>
                            </li>
                          )) || (
                            <li className="text-xs text-gray-500 italic">No execution targets defined templates.</li>
                          )}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === "outcomes" && (
                      <motion.div
                        key="outcomes"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed"
                      >
                        <p>
                          The resulting data represents a paradigm shift. On-site engagement scored unprecedented retention, making it one of Bangladesh's most viral brand stories of the year.
                        </p>
                        <div className="bg-[#FF2B5E]/5 p-3 border-l-2 border-[#FF2B5E] space-y-1 mt-2">
                          <span className="font-mono text-[10px] text-gray-400 uppercase block font-medium">ORGANIC SCALE INDEX</span>
                          <span className="font-display font-extrabold text-sm text-[#FF2B5E] block">
                            Outperformed typical brand benchmarks by {multiplier === 1.5 ? "+64%" : "+42%"}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* RADICAL QUOTE TESTIMONIAL DISPLAY */}
              <div className="bg-[#FAF9F6] dark:bg-[#0B0C0E] p-5 border border-gray-150 dark:border-white/5">
                <Quote size={20} className="text-[#FF2B5E] opacity-50 mb-2" />
                <p className="font-sans text-xs text-slate-700 dark:text-gray-300 font-light leading-relaxed italic">
                  "{quote.text}"
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#FF2B5E]" />
                  <span className="font-mono text-[10px] text-gray-400 font-bold uppercase">
                    {quote.author} . <strong className="font-semibold">{quote.role}</strong>
                  </span>
                </div>
              </div>

            </div>

            {/* CALL TO ACTION BOT-PORTAL BUTTON */}
            <div className="pt-6 border-t border-gray-200 dark:border-white/5 space-y-3">
              <button
                id="spotlight-cta-contact"
                onClick={() => {
                  onClose();
                  const contactSec = document.getElementById("contact");
                  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-liquid-glass-primary w-full flex items-center justify-center space-x-2 text-sm font-sans font-bold py-4 transition-all rounded-full cursor-pointer hover:scale-[1.01] active:scale-[0.99] shadow-md hover:shadow-lg duration-200"
              >
                <span>Partner with Monsoon on similar brief</span>
                <ExternalLink size={13} />
              </button>
              
              <p className="font-mono text-[9px] text-gray-400 dark:text-gray-550 text-center uppercase tracking-widest">
                Banani Office Open: Sun-Thu 10:00 - 18:00
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* FULL-IMAGE IMMERSIVE ZOOM OVERLAY (PORTAL-LIKE) */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 select-none cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            {/* Top Close indicator */}
            <div className="flex justify-between items-center text-white px-4">
              <span className="font-mono text-[10px] tracking-widest text-[#FF2B5E] font-bold">
                {project.title.toUpperCase()} // DETAILED PERSPECTIVE
              </span>
              <button 
                onClick={() => setIsZoomed(false)}
                className="btn-liquid-glass-primary font-sans text-[11px] py-1.5 px-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center shadow-sm"
              >
                ✕ Close Zoom
              </button>
            </div>

            {/* Main Immersive High resolution image representation */}
            <div className="max-w-5xl mx-auto w-full my-auto flex justify-center items-center">
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: "spring", damping: 20 }}
                src={activeImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="max-h-[80vh] max-w-full object-contain border border-white/10"
              />
            </div>

            {/* Bottom help bar */}
            <div className="text-center font-mono text-[10px] text-gray-500 uppercase">
              Click anywhere outside or hit ESC to exit zoom viewer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
