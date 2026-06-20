import { Sparkles, Zap, Heart, Flame, Layers, Globe } from "lucide-react";
import { motion } from "motion/react";
import { CoreValue } from "../types";

const VALUES_DATA: (CoreValue & { icon: any })[] = [
  {
    id: "creativity",
    title: "Creativity",
    description: "Authentic, raw artistic expression that strikes a deep chord inside the soul. We don't copy international recipes; we paint from the rich soil of our local landscape to reach global hearts.",
    highlightWords: ["organic", "soil", "souls"],
    icon: Sparkles
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Shattering the status quo through sensory installations, spatial engineering, and interactive digital interfaces. We merge marketing with physical technologies to build unforgettable moments.",
    highlightWords: ["status quo", "spatial", "moments"],
    icon: Zap
  },
  {
    id: "empathy",
    title: "Empathy",
    description: "Placing genuine human connection above cold, calculated transactions. We observe, we listen, and we live the spectator's heartbeat to ensure emotional authenticity is preserved.",
    highlightWords: ["human", "connection", "heartbeat"],
    icon: Heart
  },
  {
    id: "driven",
    title: "Driven",
    description: "Fuelled by an unyielding hunger to build the absolute best. We push boundaries past safety margins, converting sketchpad ideas into massive national events through pure grit.",
    highlightWords: ["boundaries", "grit", "national"],
    icon: Flame
  },
  {
    id: "transparency",
    title: "Transparency",
    description: "Fostering radical, open-book collaborations. No technical hand-waving, no marketing fluff, and no complex agency markup tricks. Just direct partnership, raw truth, and clear metrics.",
    highlightWords: ["radical", "partner", "raw truth"],
    icon: Layers
  },
  {
    id: "inclusivity",
    title: "Inclusivity",
    description: "Creating platforms that voice diverse contexts, folk heritages, and underrepresented talent. Our creative space is a loud, gorgeous mosaic of all colors, genders, and backgrounds.",
    highlightWords: ["mosaic", "folk", "colors"],
    icon: Globe
  }
];

export default function Values() {
  return (
    <section id="values" className="py-24 bg-[#FAFAF9] dark:bg-[#050505] relative border-t border-gray-150 dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block Section */}
        <motion.div 
          viewport={{ once: true, margin: "-100px" }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20"
        >
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-none">
              Shattering the Status Quo<span className="text-brand-primary">.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              We started Monsoon Creative Agency with a single, clear mission: to build a creative powerhouse that puts <strong className="font-medium text-black dark:text-white">human connections</strong> before agency margins. We believe in crafting campaigns that citizens actually want to witness — campaigns that invoke tears, laughter, and cultural pride rather than billboard noise.
            </p>
          </div>
        </motion.div>

        {/* Values Presentation - Bento Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {VALUES_DATA.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.id}
                id={`value-card-${value.id}`}
                viewport={{ once: true, margin: "-100px" }}
                initial={{ opacity: 0, y: 40, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: idx * 0.1
                }}
                className="group relative bg-white dark:bg-[#0E0F12] border border-gray-150 dark:border-white/10 p-8 flex flex-col justify-between hover:border-[#1E3A8A] dark:hover:border-[#1E3A8A] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-none overflow-hidden"
              >
                {/* Visual Background decorative stamp */}
                <div className="absolute -right-6 -top-6 text-gray-150 dark:text-white/5 font-display font-black text-8xl pointer-events-none select-none group-hover:text-brand-primary/5 dark:group-hover:text-brand-primary/10 transition-colors">
                  0{idx + 1}
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Floating Icon Box */}
                  <div className="w-12 h-12 bg-black dark:bg-[#1C1C1C] text-white dark:text-gray-250 group-hover:bg-[#1E3A8A] dark:group-hover:bg-[#1E3A8A] duration-300 flex items-center justify-center rounded-none">
                    <IconComponent size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>

                  {/* Text Container */}
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl text-black dark:text-white group-hover:text-[#1E3A8A] transition-colors">
                      {value.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Accent Tag */}
                <div className="pt-6 mt-8 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-xs font-mono text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors relative z-10">
                  <span className="uppercase tracking-widest text-[9px] font-bold">Empathetic DNA</span>
                  <span className="text-[10px]">{value.highlightWords.join(" . ")}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Creative Statement Banner */}
        <div className="mt-20 border border-neutral-200 dark:border-white/10 bg-[#121212] dark:bg-[#0E0F12] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden transition-colors shadow-lg">
          <div className="space-y-3 relative z-10 max-w-xl text-center md:text-left">
            <span className="font-mono text-[9px] text-[#1E3A8A] tracking-widest font-bold uppercase py-1 px-3 bg-white/10 dark:bg-white/5 rounded-none inline-block">
              HUMAN BRANDING MANIFESTO
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white dark:text-white leading-snug">
              "We smash the cookie-cutter templates to breathe life into original campaigns."
            </h3>
          </div>
          <div className="relative z-10">
            <button
              id="values-cta-contact"
              onClick={() => {
                const contactSec = document.getElementById("contact");
                if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-liquid-glass-primary px-8 py-4 font-sans font-bold text-xs tracking-wide transition-all duration-200 rounded-full hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              Align with our DNA
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
