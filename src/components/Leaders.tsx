import { useState } from "react";
import { Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Leader } from "../types";

const LEADERS_DATA: Leader[] = [
  {
    id: "tariqul-anam",
    name: "Mahamudul Hasan",
    role: "Founder & Chief Creative Strategist",
    bio: "Over 15 years designing ground-breaking campaigns for premier international brands. Head of creative direction for massive live setups and experiential grand activations.",
    imageUrl: "https://lh3.googleusercontent.com/d/1bS5yEcU5BjhWz9BU0KihTCTxO0wB8pKl",
    linkedinUrl: "https://linkedin.com",
    tag: "Strategy Architect",
    location: "Niketon, Dhaka"
  },
  {
    id: "kaiser-hamid",
    name: "Kaiser Hamid",
    role: "HEAD OF DIGITAL STRATEGY",
    bio: "Expert in navigating complex digital segments to elevate brands. Leveraging meticulous market research, competitive intelligence, and compelling copywriting to build end-to-end digital strategies that ensure sustainable brand expansion and market leadership.",
    imageUrl: "https://lh3.googleusercontent.com/d/1AW6rJ9dU9Jo4C26faHut1yANOMXd0RVH",
    linkedinUrl: "https://linkedin.com",
    tag: "GROWTH ARCHITECT"
  },
  {
    id: "fazle-rabbi",
    name: "Fazle Rabbi",
    role: "HEAD OF MARKETING & STRATEGY",
    bio: "Pioneering high-impact marketing initiatives, consumer psychology frameworks, and scalable go-to-market strategies. Translating visionary creative ideas into measurable brand growth and market dominance across regional and global channels.",
    imageUrl: "https://lh3.googleusercontent.com/d/1Ia2OO2feecEU7Jm9Ucx-zC6GwzqN34Yw",
    linkedinUrl: "https://linkedin.com",
    tag: "MARKETING STRATEGIST"
  },
  {
    id: "ataur-rahaman",
    name: "Ataur Rahaman",
    role: "HEAD OF EDITING DEPARTMENT",
    bio: "Mastering the rhythm of visual storytelling, high-precision cinematic pacing, sound synchronization, and advanced color grading across commercial films, brand narratives, and digital broadcast campaigns.",
    imageUrl: "https://lh3.googleusercontent.com/d/1SxY-t5uDQ4zY0L23XiI-oe9m4rWYe7eu",
    linkedinUrl: "https://linkedin.com",
    tag: "EDITING DIRECTOR"
  }
];

export default function Leaders() {
  const [showAll, setShowAll] = useState(false);
  const displayedLeaders = showAll ? LEADERS_DATA : LEADERS_DATA.slice(0, 4);

  return (
    <section id="leaders" className="py-24 bg-transparent border-t border-gray-100 dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header Section */}
        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
            Led by industry veterans, built for modern impact<span className="text-brand-primary animate-pulse">.</span>
          </h2>
          <p className="font-sans text-gray-500 dark:text-gray-400 text-sm font-light max-w-xl">
            Our directors hold years of experience steering high-impact campaigns across global brands, aligning creative integrity with ground activation muscle.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedLeaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                id={`leader-card-${leader.id}`}
                viewport={{ once: true, margin: "-100px" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col justify-between bg-white dark:bg-[#0e0f12] border border-gray-150 dark:border-white/10 p-6 hover:border-[#e83e27] dark:hover:border-[#e83e27] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Image Placeholder Frame */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-150 dark:border-white/5 mb-6">
                    <img
                      src={leader.imageUrl}
                      alt={leader.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                    />
                  </div>

                  {/* Info and Role */}
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-display font-black text-2xl text-black dark:text-white group-hover:text-[#e83e27] transition-colors leading-none">
                        {leader.name}
                      </h3>
                      <span className="font-mono text-[11px] text-[#e83e27] font-bold block mt-1 uppercase tracking-wider">
                        {leader.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Leader Linkages Base */}
                <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-100 dark:border-white/5 text-xs font-sans">
                  <span className="font-mono text-[9px] text-gray-400 dark:text-gray-550 group-hover:text-black dark:group-hover:text-white transition-colors uppercase">
                    {leader.location || "Niketon Hub Board"}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all rounded-none"
                      aria-label={`Connect with ${leader.name} on LinkedIn`}
                    >
                      <Linkedin size={14} />
                    </a>
                    <a
                      href="mailto:connect.altdotcreative@gmail.com"
                      className="p-2 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all rounded-none"
                      aria-label={`Send an email to ${leader.name}`}
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button Container */}
        {LEADERS_DATA.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center space-x-2 bg-white dark:bg-[#121212] hover:bg-black dark:hover:bg-[#e83e27] text-black dark:text-white hover:text-white border border-gray-200 dark:border-white/10 px-8 py-3.5 font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-sm hover:shadow-md active:scale-98"
            >
              <span>{showAll ? "Show Less" : "Show More Leaders"}</span>
              {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
