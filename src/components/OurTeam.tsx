import { useState } from "react";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: "Strategy" | "Creative" | "Production";
  bio: string;
  imageUrl: string;
  linkedinUrl: string;
  mailUrl: string;
  signatureQuote: string;
}

const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: "tasmia-rahman",
    name: "Tasmia Rahman",
    role: "Senior Brand Producer",
    specialty: "Production",
    bio: "The operational wizard behind our massive physical brand setups. Coordinates multiple vendors, complex logistics, and live broadcast integrations to flawless execution.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    mailUrl: "mailto:hello@monsoon.agency",
    signatureQuote: "Precision in execution is where strategy meets reality."
  },
  {
    id: "adnan-chowdhury",
    name: "Adnan Chowdhury",
    role: "Senior Copywriter & Concept Lead",
    specialty: "Creative",
    bio: "Shapes the deep cultural storytelling and verbal architecture of all campaigns. Infusing authentic local insights into premium corporate messaging pipelines.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    mailUrl: "mailto:hello@monsoon.agency",
    signatureQuote: "Words should make you feel before they make you think."
  },
  {
    id: "zarin-subah",
    name: "Zarin Subah",
    role: "Lead Creative Strategist",
    specialty: "Strategy",
    bio: "Decodes complex market metrics and consumer behaviors. Crafts core conceptual directions for high-octane experiential events, creating genuine empathy.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    mailUrl: "mailto:hello@monsoon.agency",
    signatureQuote: "Data gives you the blueprint, but empathy is the engine."
  },
  {
    id: "safwan-karim",
    name: "Safwan Karim",
    role: "Technical Director",
    specialty: "Production",
    bio: "Brings spatial conceptual designs to life with LED projection mapping, mechanical triggers, and real-time custom electronic integrations.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    mailUrl: "mailto:hello@monsoon.agency",
    signatureQuote: "Any sufficiently advanced technology is indistinguishable from magic."
  },
  {
    id: "tanvir-ahmed",
    name: "Tanvir Ahmed",
    role: "Senior Event Architect",
    specialty: "Creative",
    bio: "Translates abstract brand concepts into awe-inspiring physical installations, structural layouts, and customized stage structures.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    mailUrl: "mailto:hello@monsoon.agency",
    signatureQuote: "Space is not passive; it should command attention."
  },
  {
    id: "mehnaz-kabir",
    name: "Mehnaz Kabir",
    role: "Lead PR Specialist",
    specialty: "Strategy",
    bio: "Navigates newsrooms, digital portals, and influencer networks. Secures national and local coverage, building credible resonance for our partner brands.",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    mailUrl: "mailto:hello@monsoon.agency",
    signatureQuote: "An honest story travels faster than any marketing campaign."
  }
];

export default function OurTeam() {
  const [filter, setFilter] = useState<"All" | "Strategy" | "Creative" | "Production">("All");

  const filteredMembers = filter === "All" 
    ? TEAM_MEMBERS_DATA 
    : TEAM_MEMBERS_DATA.filter(member => member.specialty === filter);

  const specialties = ["All", "Strategy", "Creative", "Production"] as const;

  return (
    <section 
      id="our-team" 
      className="py-24 bg-transparent text-black dark:text-white border-t border-gray-100 dark:border-white/10 transition-colors duration-400 relative overflow-hidden"
    >
      {/* Subtle background graphic */}
      <div 
        className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-[#FAF9F6] to-transparent dark:via-[#09090b] opacity-40 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF2B5E] tracking-widest uppercase block">
              The Minds Behind Monsoon
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
              Meet the Creative Fire starters<span className="text-[#FF2B5E]">.</span>
            </h2>
            <p className="font-sans text-gray-500 dark:text-gray-400 text-sm font-light max-w-lg">
              A diverse ecosystem of storytellers, event builders, copy alchemists, and production engineers working in sync to shatter templates.
            </p>
          </div>

          {/* Dynamic Specialty Tabs */}
          <div className="flex flex-wrap gap-2 border border-gray-150 dark:border-white/10 p-1 rounded-xl bg-gray-50 dark:bg-[#121215] max-w-max">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setFilter(spec)}
                className={`px-4 py-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 relative ${
                  filter === spec
                    ? "text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {/* Background pill layer */}
                {filter === spec && (
                  <motion.div
                    layoutId="activeTeamSpecialtyPill"
                    className="absolute inset-0 bg-black dark:bg-[#FF2B5E] rounded-lg z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{spec}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Responsive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                id={`team-member-card-${member.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between bg-[#FAFAF9] dark:bg-[#0E0F12] border border-gray-150 dark:border-white/10 p-6 hover:border-[#FF2B5E] dark:hover:border-[#FF2B5E] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200 dark:bg-white/5 border border-gray-150 dark:border-white/5 mb-6">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Specialty overlay tag */}
                    <div className="absolute top-4 left-4 bg-black dark:bg-[#FF2B5E] text-white text-[9px] font-mono tracking-widest font-bold uppercase px-3 py-1 z-10">
                      {member.specialty}
                    </div>

                    {/* Gradient shading overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 pointer-events-none">
                      <span className="font-mono text-[10px] text-[#FF2B5E] font-bold tracking-wider uppercase mb-1">
                        Perspective
                      </span>
                      <p className="font-sans italic text-xs text-white leading-relaxed">
                        &ldquo;{member.signatureQuote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Metadata and narrative */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-display font-black text-2xl text-black dark:text-white group-hover:text-[#FF2B5E] transition-colors leading-none">
                        {member.name}
                      </h3>
                      <span className="font-mono text-[11px] text-gray-450 dark:text-gray-400 font-bold block mt-1.5 uppercase tracking-wider">
                        {member.role}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-gray-550 dark:text-gray-400 font-light leading-relaxed pt-2 border-t border-gray-150 dark:border-white/5">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Social Actions Base */}
                <div className="flex justify-between items-center pt-5 mt-6 border-t border-gray-150 dark:border-white/5 text-xs font-sans">
                  <a 
                    href={member.mailUrl}
                    className="flex items-center space-x-1.5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase">Get in Touch</span>
                    <ArrowRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <div className="flex items-center space-x-2">
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all border border-gray-200 dark:border-white/5 rounded-lg"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin size={13} />
                    </a>
                    <a
                      href={member.mailUrl}
                      className="p-2 bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all border border-gray-200 dark:border-white/5 rounded-lg"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
