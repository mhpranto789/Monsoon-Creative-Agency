import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Utensils, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import ProjectSpotlight from "./ProjectSpotlight";

const PROJECTS_DATA: Project[] = [
  {
    id: "adc-brand-anthem-film",
    title: "ADC Brand Anthem & Cinematic Visuals",
    category: "Digital Marketing",
    type: "Brand Anthem & Cinematic Commercial",
    year: "2024",
    description: "An evocative cinematic brand anthem combining high-fidelity motion camera choreography, stylized color grades, and evocative sound scenography designed for digital broadcast.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Audited Digital Reach", value: "3.9M" },
    campaignGoals: [
      "Craft high-contrast cinema visuals with color-calibrated anamorphic lenses",
      "Dynamic sound design and custom brand score orchestration",
      "Multi-channel broadcast campaign across streaming OTT and digital networks"
    ],
    tagline: "Framing visionary brand stories through immersive motion and cinematic lighting.",
    timeline: "3-Week Agile Production Sprint",
    channelsUsed: ["Digital Streaming", "Brand Film Mastercuts", "Broadcast OTT Ads"],
    galleryImages: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Aggregate Video Plays", value: "3.9M+", subtext: "Audited YouTube & stream impressions" },
      { label: "Completion Rate", value: "84.2%", subtext: "Full watch time duration metric" },
      { label: "Brand Resonance Uplift", value: "+42%", subtext: "Independent post-campaign survey" }
    ],
    clientQuote: {
      text: "The storytelling depth and production values established an instant emotional connect with our audience.",
      author: "Chief Marketing Officer",
      role: "Strategic Enterprise Group"
    },
    youtubeId: "bFuI8AbBFM8"
  },
  {
    id: "adc-creative-spotlight-film",
    title: "ADC Creative Spotlight & Visual Production",
    category: "Creative Graphics",
    type: "Creative Commercial & Motion Production",
    year: "2024",
    description: "A high-octane commercial visual production showcasing fluid motion dynamics, vivid lifestyle art direction, and precision sound-synced video editing.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Campaign Impressions", value: "3.2M" },
    campaignGoals: [
      "Staged high-speed camera tracking with modern lighting rigs",
      "Tailored visual color grading enhancing brand textures and human emotions",
      "Dynamic multi-format distribution optimized for mobile & desktop feeds"
    ],
    tagline: "Translating brand energy into captivating, cinema-grade commercial visuals.",
    timeline: "2-Week Rapid Production",
    channelsUsed: ["Cinema Commercial Ads", "Social Video Mastercuts", "Digital Display Campaigns"],
    galleryImages: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Total Video Views", value: "3.2M+", subtext: "Cross-platform video views" },
      { label: "Average Watch Time", value: "81.5%", subtext: "Audited video engagement index" },
      { label: "Audience Engagement Lift", value: "3.1x", subtext: "Versus standard campaign benchmarks" }
    ],
    clientQuote: {
      text: "Exceptional pacing, stunning color palette, and crisp sound design. Truly remarkable craftsmanship.",
      author: "Creative Producer",
      role: "Media & Brand Network"
    },
    youtubeId: "AVn93mewNrI"
  },
  {
    id: "honda-sp125",
    title: "Ventura Sky Villa Launch",
    category: "Real Estate",
    type: "Premium Real Estate Launch & VR Experience",
    year: "2024",
    description: "Crafted a high-octane visual identity and digital launch strategy for Gulshan's most exclusive penthouses. Redefined the premium residential tier with interactive 3D spatial mapping, high-contrast typography, and cinematic CGI walk-throughs.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Fully Booked Residences", value: "100%" },
    campaignGoals: [
      "Cinematic CGI directing of daylight spatial elements",
      "Interactive 3D walkthrough launches in regional elite private lounges",
      "OOH premium dominance targeting high-net-worth neighborhoods of Dhaka"
    ],
    tagline: "Redefining structural mechanics with premium high-contrast architectural narratives.",
    timeline: "6-Week Ultra-Premium Pipeline",
    channelsUsed: ["Cinematic CGI Production", "Interactive Sales Lounge", "High-Net-Worth targeted Digital Marketing"],
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "High-Net-Worth Reach", value: "2.4M+", subtext: "Targeted digital and exclusive private invites" },
      { label: "Direct Penthouse Bookings", value: "100%", subtext: "All 12 custom units claimed within 21 days" },
      { label: "Showroom Inquiries Uplift", value: "+340%", subtext: "Verified via Ventura CRM portal" }
    ],
    clientQuote: {
      text: "Alt DOT Creative redefined how luxury properties are launched in Bangladesh. The virtual experience was a masterpiece of storytelling.",
      author: "Chief Operations Officer",
      role: "Ventura Properties Ltd."
    },
    youtubeId: "99DVbQJQomE"
  },
  {
    id: "bkash-boishakh",
    title: "bKash Pure Bangla Boishakh",
    category: "Creative Graphics",
    type: "Creative Strategy & Brand Illustration",
    year: "2024",
    description: "A digital-first cultural art campaign combining traditional Bangladeshi folk illustrations with ultra-sleek UI elements. Included user-generated dynamic greeting generators and customized app stickers.",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "User Generated Cards Created", value: "1.2" },
    campaignGoals: [
      "Traditional Folk Art revival with celebrated local micro-illustrators",
      "Localized story prompts evoking emotional response during Bangladesh New Year",
      "Custom interface integration within the bKash core consumer app"
    ],
    tagline: "Breathe new visual life into traditional rickshaw and folk illustrations.",
    timeline: "4-Week Digital Sprint",
    channelsUsed: ["Micro-interaction UX", "Traditional Illustration", "Social Generator Applets"],
    galleryImages: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Interactive greeting creators", value: "1.2M", subtext: "Unique customized cards exported" },
      { label: "Core App Usage Uplift", value: "+22%", subtext: "Target transactional focus hours" },
      { label: "Positive organic brand love", value: "98.1%", subtext: "Filtered comments classification index" }
    ],
    clientQuote: {
      text: "Alt DOT Creative crafted an experience that merged corporate utility with genuine raw folk pride. Users felt the connection instantly on Boishakh morning.",
      author: "Corporate PR Director",
      role: "bKash Brand Core Committee"
    },
    youtubeId: "N1-9_e-d6kY"
  },
  {
    id: "adc-commercial-film",
    title: "ADC Commercial Cinema Spot",
    category: "Digital Marketing",
    type: "Commercial Film & TVC Cinematography",
    year: "2024",
    description: "High-octane commercial cinematography and brand storytelling designed for television, digital broadcast, and synchronized multi-channel social campaigns.",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Digital Broadcast Reach", value: "4.2M" },
    campaignGoals: [
      "Cinematic multi-camera production with color-calibrated cinema lenses",
      "Dynamic sound design and custom brand score orchestration",
      "Multi-format digital distribution across national broadcast and digital OTT"
    ],
    tagline: "Framing brand narratives with cinematic lighting and meticulous visual pacing.",
    timeline: "4-Week Full Production Sprint",
    channelsUsed: ["Cinema TVC Broadcast", "Digital Streaming OTT", "High-Impact YouTube Cutdowns"],
    galleryImages: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Audited Digital Reach", value: "4.2M+", subtext: "Cross-platform video views" },
      { label: "Completion Rate Index", value: "88.6%", subtext: "Above-benchmark video watch duration" },
      { label: "Brand Affinity Uplift", value: "+38%", subtext: "Independent post-campaign survey" }
    ],
    clientQuote: {
      text: "Alt DOT Creative delivered cinema-level production that gave our brand an undeniable competitive edge.",
      author: "Chief Brand Strategist",
      role: "Enterprise Brand Division"
    },
    youtubeId: "VIbneuGlnSU"
  },
  {
    id: "adc-brand-motion",
    title: "Cinematic Motion & Visual Direction",
    category: "Creative Graphics",
    type: "Motion Film Direction & Creative Production",
    year: "2024",
    description: "Dynamic visual storytelling capturing fine product craftsmanship, fluid motion dynamics, and high-contrast color styling for leading lifestyle and commercial brands.",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Social Video Impressions", value: "3.8M" },
    campaignGoals: [
      "Precision motion staging with macro optics and high-speed motion rigs",
      "Tailored color grading enhancing brand textures and product materials",
      "Bespoke motion graphic transitions for seamless viewer retention"
    ],
    tagline: "Elevating everyday product details into mesmerizing visual poetry.",
    timeline: "3-Week Creative & Motion Design",
    channelsUsed: ["Cinematic Motion Showcase", "Digital Visual Ads", "Social Video Mastercuts"],
    galleryImages: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Organic Social Shares", value: "62,000+", subtext: "Audited shares across networks" },
      { label: "Brand Recall Rate", value: "96.4%", subtext: "High visual memorability score" },
      { label: "Engagement Lift", value: "2.8x", subtext: "Versus static visual benchmarks" }
    ],
    clientQuote: {
      text: "The motion dynamics and visual texture brought our creative concepts to life beyond expectations.",
      author: "Head of Marketing",
      role: "Creative Media Group"
    },
    youtubeId: "vXW0M4euANU"
  },
  {
    id: "fb-reel-1362330277666733",
    title: "ADC Vertical Reel: Lifestyle & Story",
    category: "Digital Marketing",
    type: "Social Reel & Micro-Storytelling",
    year: "2024",
    description: "High-engagement vertical micro-content and dynamic reels production tailored for Facebook & Instagram social amplification with rapid hooks and viral pacing.",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Reel Views & Engagement", value: "2.1M" },
    campaignGoals: [
      "Fast 3-second hook optimization for vertical smartphone feeds",
      "High-definition 9:16 cinematography with vibrant lifestyle color grading",
      "Integrated soundtrack timing and punchy typography overlays"
    ],
    tagline: "Crafting vertical micro-stories that stop thumb-scrolling instantly.",
    timeline: "2-Week Rapid Content Sprint",
    channelsUsed: ["Facebook Reels", "Instagram Reels", "Short-Form Social Ads"],
    galleryImages: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Total Reel Views", value: "2.1M+", subtext: "Audited social impressions" },
      { label: "Average Retention", value: "74.2%", subtext: "Full video watch rate" },
      { label: "Direct Save / Share Rate", value: "+120%", subtext: "Organic social sharing multiplier" }
    ],
    clientQuote: {
      text: "The reel gained instant traction and delivered phenomenal viral engagement across our demographic.",
      author: "Social Media Lead",
      role: "Digital Campaign Studio"
    },
    videoType: "facebook",
    facebookUrl: "https://www.facebook.com/reel/1362330277666733"
  },
  {
    id: "fb-reel-6945254908821296",
    title: "ADC Vertical Reel: Creative Motion",
    category: "Creative Graphics",
    type: "Social Reel & Motion Graphics",
    year: "2024",
    description: "Cinematic vertical production engineered for high retention, rhythm-matched visual cuts, and seamless brand integration across modern social feeds.",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Organic Reel Impressions", value: "1.9M" },
    campaignGoals: [
      "Dynamic speed-ramped camera moves and seamless whip transitions",
      "Color-calibrated visual identity optimized for mobile OLED screens",
      "Engagement-driving calls to action and rhythmic audio syncing"
    ],
    tagline: "Transforming high-tempo motion design into thumb-stopping social moments.",
    timeline: "2-Week Agile Production",
    channelsUsed: ["Facebook Reels", "Instagram Reels", "Meta Boosted Media"],
    galleryImages: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Aggregate Plays", value: "1.9M+", subtext: "Multi-platform video plays" },
      { label: "Engagement Ratio", value: "8.4%", subtext: "High interaction and comment volume" },
      { label: "Click-Through CTR", value: "4.6%", subtext: "Direct profile traffic referrals" }
    ],
    clientQuote: {
      text: "The pacing and motion rhythm of this vertical piece were spot on. Exactly what modern audiences love.",
      author: "Creative Producer",
      role: "Visual Content Network"
    },
    videoType: "facebook",
    facebookUrl: "https://www.facebook.com/reel/6945254908821296"
  },
  {
    id: "adc-cinematic-showcase",
    title: "ADC Visual Craft & Creative Showcase",
    category: "Digital Marketing",
    type: "Cinematic Film & Brand Campaign",
    year: "2024",
    description: "An evocative cinematic showcase blending high-precision camera choreography, stylized atmospheric lighting, and high-impact visual storytelling crafted for digital broadcast and brand identity elevation.",
    imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Campaign Video Reach", value: "3.5M" },
    campaignGoals: [
      "Dynamic cinematography with tailored anamorphic lens aesthetics",
      "Atmospheric mood lighting and seamless digital post-production grading",
      "Omni-channel distribution across digital platforms and broadcast media"
    ],
    tagline: "Unfolding brand narratives through cinematic atmosphere and visual mastery.",
    timeline: "3-Week Agile Production Sprint",
    channelsUsed: ["Digital Streaming", "Brand Film Mastercuts", "Social Campaign Broadcasts"],
    galleryImages: [
      "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Total Video Views", value: "3.5M+", subtext: "Cross-platform video impressions" },
      { label: "Viewer Retention Rate", value: "82.4%", subtext: "Audited watch time benchmark" },
      { label: "Positive Brand Sentiment", value: "97.8%", subtext: "Audience sentiment analysis index" }
    ],
    clientQuote: {
      text: "The cinematic vision and visual storytelling elevated our brand identity to a whole new level.",
      author: "Executive Creative Director",
      role: "Strategic Brand Group"
    },
    youtubeId: "btLZGjscwk4"
  }
];

interface ProjectsProps {
  onNavigateToContact?: () => void;
  onOpenFoodWork?: () => void;
}

export default function Projects({ onNavigateToContact, onOpenFoodWork }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Digital Marketing' | 'Creative Graphics' | 'Real Estate'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9);

  return (
    <section id="projects" className="py-24 bg-transparent border-t border-gray-100 dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header & Dedicated Food Work Promotion Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
          <div className="space-y-4">
            <span className="font-mono text-xs text-brand-primary uppercase font-bold tracking-widest block">
              Portfolio & Campaigns
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-none">
              Featured Projects<span className="text-brand-primary animate-pulse">.</span>
            </h2>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap items-center gap-1 border border-gray-200 dark:border-white/10 p-1 bg-white dark:bg-[#121212] rounded-full shadow-sm transition-all duration-200">
            {(['All', 'Digital Marketing', 'Creative Graphics', 'Real Estate'] as const).map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`px-5 py-2 text-xs font-sans font-semibold tracking-normal rounded-full cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${
                  (selectedCategory === cat) 
                    ? "btn-liquid-glass-primary shadow-sm" 
                    : "btn-liquid-glass text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dedicated Food Work Portal Card */}
        <div className="mb-12 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#16161c] via-[#121216] to-[#1f110f] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
          <div className="flex items-center space-x-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 group-hover:scale-110 transition-transform">
              <Utensils size={24} />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-mono text-[10px] text-brand-primary uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                  Specialized Division
                </span>
                <span className="font-mono text-xs text-gray-400">50 High-Res Stills</span>
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                Food Work Static Showcase
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-light mt-1 max-w-xl leading-relaxed">
                Explore our dedicated gastronomic studio gallery featuring artisan burgers, dry-aged steaks, Asian fusion, craft cocktails, and menu cinematography.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenFoodWork}
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#e83e27] to-[#f05a46] hover:from-[#c92f1b] hover:to-[#e83e27] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            <span>Open Food Work Page</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white dark:bg-[#121212] border border-gray-200/80 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image / Video Wrapper */}
                <div className="relative aspect-video sm:aspect-[4/3] w-full bg-gray-100 dark:bg-zinc-805 overflow-hidden">
                  {project.videoType === 'facebook' && project.facebookUrl ? (
                    <div className="w-full h-full absolute inset-0 z-0 overflow-hidden bg-black flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                      <iframe
                        src={`https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(project.facebookUrl)}&show_text=false&t=0`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full absolute inset-0 opacity-95 transition-opacity duration-300 hover:opacity-100"
                      ></iframe>
                      {/* Premium physical glass overlay (clicks pass through) */}
                      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-tr from-white/10 via-transparent to-white/5 border border-white/20 shadow-[inset_0_0_15px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-[0.5px]"></div>
                      <a
                        href={project.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/70 hover:bg-[#1877F2] text-white text-[10px] font-mono flex items-center space-x-1.5 backdrop-blur-md border border-white/20 transition-all hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>FB Reel</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  ) : project.youtubeId ? (
                    <div className="w-full h-full absolute inset-0 z-0 overflow-hidden bg-black" onClick={(e) => e.stopPropagation()}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?modestbranding=1&rel=0&controls=1`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full absolute inset-0 opacity-90 transition-opacity duration-300 hover:opacity-100"
                      ></iframe>
                      {/* Premium physical glass overlay (clicks pass through) */}
                      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-tr from-white/10 via-transparent to-white/5 border border-white/20 shadow-[inset_0_0_15px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-[0.5px]"></div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        style={{ filter: "none", WebkitFilter: "none" }}
                        className="w-full h-full object-cover filter-none grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Category Badge & Year */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                        <span className="font-mono text-[9px] font-bold tracking-widest text-white bg-black dark:bg-[#e83e27] px-2.5 py-1 z-10">
                          {project.category.toUpperCase()}
                        </span>
                        <span className="font-mono text-xs font-bold text-white drop-shadow-md z-10">
                          {project.year}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button Container */}
        {filteredProjects.length > 9 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center space-x-2 bg-white dark:bg-[#121212] hover:bg-black dark:hover:bg-[#e83e27] text-black dark:text-white hover:text-white border border-gray-200 dark:border-white/10 px-8 py-3.5 font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "Show More Projects"}</span>
              {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        )}

        {/* Immersive Case Study Spotlight Portal */}
        <AnimatePresence>
          {selectedProject && (() => {
            const index = PROJECTS_DATA.findIndex(p => p.id === selectedProject.id);
            return (
              <ProjectSpotlight
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                allProjectsCount={PROJECTS_DATA.length}
                currentIndex={index}
                onNext={() => {
                  const nextIdx = (index + 1) % PROJECTS_DATA.length;
                  setSelectedProject(PROJECTS_DATA[nextIdx]);
                }}
                onPrev={() => {
                  const prevIdx = (index - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
                  setSelectedProject(PROJECTS_DATA[prevIdx]);
                }}
              />
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
