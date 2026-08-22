import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Utensils, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import ProjectSpotlight from "./ProjectSpotlight";

const PROJECTS_DATA: Project[] = [
  {
    id: "coke-studio",
    title: "Coke Studio Bangla 2023",
    category: "Digital Marketing",
    type: "Experiential & Live Brand Campaign",
    year: "2023",
    description: "Re-imagined the live music experience across Bangladesh, executing multi-touchpoint sound stages, immersive venue setups, and cultural art fusions that gathered over 20,000 passionate music fans in-person.",
    imageUrl: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Footfall & Digital Organic Reach", value: "11M" },
    campaignGoals: [
      "Full Ground Stage Production for 20K live audience",
      "Localized Interactive Zones utilizing augmented mirrors",
      "Real-time Digital UGC Broadcasting Hub & Stream alignment"
    ],
    tagline: "Uniting 20,000 live beats under a unified, premium cultural anthem.",
    timeline: "8-Week Live Build-up",
    channelsUsed: ["Soundstage Scenography", "RFID Crowd Control", "Traditional Alpona Art Activations", "OOH Broadcasts"],
    galleryImages: [
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Direct Venue Footfall", value: "24,500+", subtext: "Audited RFID access tokens" },
      { label: "Co-Branded Social Buzz", value: "11.2M+", subtext: "Direct mentions & audio usage" },
      { label: "Earned Media Multiplier", value: "6.8x", subtext: "National news coverage value" }
    ],
    clientQuote: {
      text: "Alt DOT Creative turned our activation brief into a historic cultural milestone for music lovers in Bangladesh. Unbelievable precision on tight schedules.",
      author: "Lead Experiential Officer",
      role: "Coke Studio Bangla Portfolio"
    },
    youtubeId: "Ta943n1xZPk"
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
    id: "gp-future",
    title: "Shanta Pinnacle Experience",
    category: "Real Estate",
    type: "Premium Real Estate Spatial & VR Experience",
    year: "2023",
    description: "Designed an elite interactive sales suite and architectural presentation tunnel for Shanta's landmark commercial tower. Combined motion-triggered smart projection mapping with real-time analytics to pitch high-value spaces.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Commercial Space Leased", value: "85%" },
    campaignGoals: [
      "Design spatial 3D blueprint for complex interactive sales lounge",
      "Synchronize multi-channel directional soundscapes with high-end luxury graphics",
      "Track corporate visitor engagement to showcase architectural impacts"
    ],
    tagline: "Synthesizing spatial projection and electronic sensors for landmark real estate portals.",
    timeline: "5-Week Design & Fabrication",
    channelsUsed: ["Spatial Layout Blueprints", "Interactive Interactive Screen Guides", "Direct B2B outreach"],
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "VIP Investors Engaged", value: "1,500+", subtext: "High-net-worth leads verified" },
      { label: "Space Leased Within Month", value: "85%", subtext: "Strategic contracts closed" },
      { label: "Project Investment Pipeline", value: "$14.1M", subtext: "Direct commercial acquisition leads" }
    ],
    clientQuote: {
      text: "They designed a real estate portal that set new benchmarks for commercial property marketing in South Asia.",
      author: "Director of Asset Management",
      role: "Shanta Holdings Limited"
    },
    youtubeId: "uiIK9jQbhRA"
  },
  {
    id: "aarong-fashion",
    title: "Aarong Luxury Autumn",
    category: "Creative Graphics",
    type: "Premium Editorial Catalog & Social Strategy",
    year: "2023",
    description: "Directed an elegant, high-contrast lifestyle photoshoot for Aarong's flagship Autumn collection, utilizing deep terracotta clays and natural light profiles to capture heritage in a contemporary silhouette.",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Campaign eCommerce Conversions", value: "1.5" },
    campaignGoals: [
      "Direct heritage model photo-sessions utilizing natural Dhaka landscapes",
      "Coordinate interactive premium visual catalogs with high-end print standards",
      "Align micro-influencer channels to highlight sustainable handmade fabrics"
    ],
    tagline: "Framing contemporary visual silhouettes against Bangladesh's traditional clay landscapes.",
    timeline: "4-Week Creative Direction",
    channelsUsed: ["Editorial Art Direction", "Influencer Placement Modeling", "Eco-friendly catalogs"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Direct Sales Conversion", value: "+45%", subtext: "eCommerce tracking post-exposure" },
      { label: "Print circulation reach", value: "85,000", subtext: "Audited delivery lists" },
      { label: "Social Interactions engagement", value: "1.5M+", subtext: "Sustained engagement rate over 5%" }
    ],
    clientQuote: {
      text: "An absolute visual masterclass that combined deep root clay motifs with premium metropolitan elegance.",
      author: "Creative Director",
      role: "Aarong Luxury Division"
    },
    youtubeId: "nOreGhU2Ddw"
  },
  {
    id: "pepsi-soundwave",
    title: "Pepsi Soundwave Activations",
    category: "Digital Marketing",
    type: "Multi-City Experiential Music Tour",
    year: "2024",
    description: "Built fully sensory, branded sound-booths equipped with voice-activated light walls where festival visitors could craft custom musical beats and receive hyper-personalized digital dynamic souvenirs.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Digital UGC Shares On TikTok/FB", value: "8.5" },
    campaignGoals: [
      "Develop custom voice sensing microcontrollers translating decibel frequencies",
      "Construct robust transportable sound-booth booths for multi-city outdoor deployments",
      "Deploy localized QR-code generation pipelines for instantly downloadable digital video files"
    ],
    tagline: "Giving youth audiences the microphone to create their own branded visual soundtrack.",
    timeline: "7-Week Fabrication & Regional Deployment",
    channelsUsed: ["Electronic Sensors Fabrication", "On-the-ground Brand Ambassadors", "Automatic video encoding pipeline"],
    galleryImages: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1481162854517-d9e353af153d?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Custom Beat Tracks Designed", value: "48,200", subtext: "Unique recordings created live" },
      { label: "Social Video Shares", value: "85K+", subtext: "Audited organic reach TikTok indicators" },
      { label: "Product Sampling distribution", value: "210,000+", subtext: "Target youth campus drops" }
    ],
    clientQuote: {
      text: "The integration of physical audio microchips and prompt QR video templates generated our biggest seasonal youth engagement metric ever.",
      author: "Brand Lead BD Division",
      role: "PepsiCo International Group"
    },
    youtubeId: "hVICqoOHOPM"
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

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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
                {/* Image Wrapper */}
                <div className="relative aspect-video sm:aspect-[4/3] w-full bg-gray-100 dark:bg-zinc-805 overflow-hidden">
                  {project.id === "coke-studio" || project.id === "honda-sp125" || project.id === "bkash-boishakh" || project.id === "gp-future" || project.id === "aarong-fashion" || project.id === "pepsi-soundwave" ? (
                    <div className="w-full h-full absolute inset-0 z-0 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                      <iframe
                        src={project.id === "coke-studio" 
                          ? "https://www.youtube-nocookie.com/embed/Ta943n1xZPk?si=uqXMZ4f6za_x0Tug&modestbranding=1&rel=0&controls=1"
                          : project.id === "honda-sp125"
                            ? "https://www.youtube-nocookie.com/embed/99DVbQJQomE?si=3TtzTN5WIZOMDgm7&modestbranding=1&rel=0&controls=1"
                            : project.id === "bkash-boishakh"
                              ? "https://www.youtube-nocookie.com/embed/N1-9_e-d6kY?si=3xuxb3tkx-4vlig3&modestbranding=1&rel=0&controls=1"
                              : project.id === "gp-future"
                                ? "https://www.youtube-nocookie.com/embed/uiIK9jQbhRA?si=3fBsVSY-U_UXGU_b&modestbranding=1&rel=0&controls=1"
                                : project.id === "aarong-fashion"
                                  ? "https://www.youtube-nocookie.com/embed/nOreGhU2Ddw?si=YO5heKNTmFMgOcKm&modestbranding=1&rel=0&controls=1"
                                  : "https://www.youtube-nocookie.com/embed/hVICqoOHOPM?si=7aN2jbtHCutIEDb9&modestbranding=1&rel=0&controls=1"}
                        title="YouTube video player"
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
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
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

                {/* Info Area */}
                <div className="p-6 border-t border-gray-200 dark:border-white/10 flex justify-between items-center bg-white dark:bg-[#141414] group-hover:bg-[#FAF9F6] dark:group-hover:bg-[#1C1C1C] transition-colors">
                  <div>
                    <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500 block tracking-wider uppercase mb-1">
                      {project.type}
                    </span>
                    <h3 className="font-display font-black text-lg text-black dark:text-white group-hover:text-[#e83e27] dark:group-hover:text-[#e83e27] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className="ml-4 p-2 bg-gray-100 dark:bg-white/5 text-black dark:text-white group-hover:bg-black dark:group-hover:bg-[#e83e27] group-hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button Container */}
        {filteredProjects.length > 6 && (
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
