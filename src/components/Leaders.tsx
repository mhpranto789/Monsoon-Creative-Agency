import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Leader } from "../types";

const LEADERS_DATA: Leader[] = [
  {
    id: "tariqul-anam",
    name: "Tariqul Anam",
    role: "Founder & Chief Creative Strategist",
    bio: "Over 15 years designing ground-breaking campaigns for premier international brands. Head of creative direction for massive live setups like Coke Studio Bangla's grand activations.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    tag: "Strategy Architect"
  },
  {
    id: "rumana-afroze",
    name: "Rumana Afroze",
    role: "Managing Director & Partner",
    bio: "Specialist in consumer psychology and experiential brand engagement pipelines. Bridging the gap between raw local emotion and rigorous corporate execution standards.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    tag: "Brand Alchemist"
  },
  {
    id: "zubair-rahman",
    name: "Zubair Rahman",
    role: "Head of Experiential Design",
    bio: "A technologist merging modern physical mechanics, LED projection mapping, and sonic interactive triggers. Shaping unforgettable physical portals for Grameenphone & Pepsi summits.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    tag: "Spatial Maven"
  },
  {
    id: "nabila-rahman",
    name: "Nabila Rahman",
    role: "Director of Brand Services",
    bio: "Aligning deep brand objectives with beautiful, culturally rich storytelling. Over 10 years managing corporate accounts for Nestlé, Robi Axiata, and Square Food groups.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    tag: "Client Advocate"
  },
  {
    id: "ayman-shadman",
    name: "Ayman Shadman",
    role: "Head of Art Direction",
    bio: "Crafting beautiful visual systems and high-contrast scenic designs. Merges traditional Bangladeshi folk illustration with premium, international layout layout standards.",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    tag: "Visual Artisan"
  },
  {
    id: "farzana-karim",
    name: "Farzana Karim",
    role: "Director of Communication & PR",
    bio: "Specialist in public relationships, media placement networks, and regional viral distribution tunnels. Orchestrates continuous media attention and emotional civic storytelling.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    tag: "PR Sovereign"
  },
  {
    id: "adil-mahmud",
    name: "Adil Mahmud",
    role: "Lead Engineering Architect",
    bio: "Leading modular hardware layout framing and custom interactive sensors. Translates real-time sound decibels and visual projection tracking into physical realities.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&h=700&q=80",
    linkedinUrl: "https://linkedin.com",
    tag: "Hardware Specialist"
  }
];

export default function Leaders() {
  return (
    <section id="leaders" className="py-24 bg-[#FAFAF9] dark:bg-[#050505] border-t border-gray-100 dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header Section */}
        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
            Led by industry veterans, built for modern impact<span className="text-brand-primary">.</span>
          </h2>
          <p className="font-sans text-gray-500 dark:text-gray-400 text-sm font-light max-w-xl">
            Our directors hold years of experience steering high-impact campaigns across global brands, aligning creative integrity with ground activation muscle.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {LEADERS_DATA.map((leader, index) => (
            <motion.div
              key={leader.id}
              id={`leader-card-${leader.id}`}
              viewport={{ once: true, margin: "-100px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between bg-white dark:bg-[#0e0f12] border border-gray-150 dark:border-white/10 p-6 hover:border-[#1E3A8A] dark:hover:border-[#1E3A8A] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Image Placeholder Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-150 dark:border-white/5 mb-6">
                  <img
                    src={leader.imageUrl}
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                  />
                  {/* Absolute Badge corner */}
                  <div className="absolute top-4 right-4 bg-black dark:bg-[#1E3A8A] text-white text-[9px] font-mono tracking-widest font-bold uppercase px-3 py-1">
                    {leader.tag}
                  </div>
                </div>

                {/* Info and Taglines */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display font-black text-2xl text-black dark:text-white group-hover:text-[#1E3A8A] transition-colors leading-none">
                      {leader.name}
                    </h3>
                    <span className="font-mono text-[11px] text-[#1E3A8A] font-bold block mt-1 uppercase tracking-wider">
                      {leader.role}
                    </span>
                  </div>
                  
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed pt-2 border-t border-gray-100 dark:border-white/5">
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Leader Linkages Base */}
              <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-100 dark:border-white/5 text-xs font-sans">
                <span className="font-mono text-[9px] text-gray-400 dark:text-gray-550 group-hover:text-black dark:group-hover:text-white transition-colors uppercase">
                  Banani Hub Board
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
                    href="mailto:hello@monsoon.agency"
                    className="p-2 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all rounded-none"
                    aria-label={`Send an email to ${leader.name}`}
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
