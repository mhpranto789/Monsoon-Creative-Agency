import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Philosophy" | "Services" | "Process";
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "creative-approach",
    category: "Philosophy",
    question: "How does Monsoon approach creative brand campaigns?",
    answer: "We reject boilerplates and pre-packaged international models. We begin with dense ethnographic local research—tuning into the authentic cultural codes, street semantics, and emotional frequencies that define Bangladeshi communities. We then translate these insights into highly original cinematic, digital, or physical experiences that feel deeply native yet internationally polished."
  },
  {
    id: "experiential-activations",
    category: "Services",
    question: "What exact capabilities fall under your 'Experiential Activations' service?",
    answer: "Experiential is where our engineering and art boards meet. We design custom projections (such as large-scale dynamic 3D mapping onto physical facades), immersive spatial layouts (premium red carpet systems, dome designs), local street-level installations, customized concerts / acoustic dome setups, and interactive hardware rigs powered by custom audio/visual sensor triggers."
  },
  {
    id: "design-philosophy",
    category: "Philosophy",
    question: "What defines Monsoon's specific typography and styling system?",
    answer: "We believe in high-contrast editorial minimalism. We pair elegant, high-profile modern typography (like Inter and JetBrains Mono) with crisp, monospace data labels and razor-sharp borders. We avoid low-value gradients or visual 'AI slop' so that our layout remains clean, deliberate, and premium."
  },
  {
    id: "campaign-timeline",
    category: "Process",
    question: "How long does a campaign take from initial brief to live execution?",
    answer: "Most full-scale brand strategies and high-end cinematic productions occupy 4 to 8 weeks. However, our modular engineering teams are notoriously agile: we have concepted, built, and launched historically successful ground activations for brands like Coke Studio Bangla and HondaBD in as few as 10 to 14 days without sacrificing production safety."
  },
  {
    id: "brand-partners",
    category: "Services",
    question: "Do you only partner with corporate conglomerates?",
    answer: "Not exclusively. While our core roster features multinational FMCG leaders, automotive makers, and telecom giants, we believe in supporting local innovators, direct-to-consumer labels, and cultural groups. If a brand has the ambition to speak to citizens with raw integrity, they are a fit for Monsoon."
  },
  {
    id: "onboarding-process",
    category: "Process",
    question: "How can a prospective partner initiate a project with Monsoon?",
    answer: "We bypass standard agency markup fluff. You start with a direct strategic session with our art and account directors. We discuss your real spatial constraints, emotional goals, or technical queries, and return with a razor-focused roadmap detailing honest budgets and targeted activation metrics."
  }
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("creative-approach");
  const [activeTab, setActiveTab] = useState<"all" | "Philosophy" | "Services" | "Process">("all");

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = activeTab === "all" 
    ? FAQ_DATA 
    : FAQ_DATA.filter(item => item.category === activeTab);

  return (
    <section id="faq" className="py-24 bg-[#FAFAF9] dark:bg-[#050505] relative border-t border-gray-150 dark:border-white/10 transition-colors duration-400">
      {/* Dynamic graphic backgrounds */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#FAFAF9] via-[#FAF7F2] to-[#FAFAF9] dark:from-[#050505] dark:via-[#08080A] dark:to-[#050505] opacity-40 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-none">
              Answers and Truths<span className="text-[#FF2B5E] animate-pulse">.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              We run a transparent, zero-fluff workspace. Here are our answers on how we operate, our creative guidelines, and our execution playbook.
            </p>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-100 dark:border-white/5 font-sans text-xs font-bold">
          {["all", "Philosophy", "Services", "Process"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as any);
                // Auto open the first item of the newly filtered list if items exist
                const itemsList = tab === "all" ? FAQ_DATA : FAQ_DATA.filter(item => item.category === tab);
                if (itemsList.length > 0) {
                  setOpenId(itemsList[0].id);
                } else {
                  setOpenId(null);
                }
              }}
              className={`px-5 py-2 uppercase tracking-wide transition-all duration-200 rounded-full hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-sm ${
                activeTab === tab
                  ? "btn-liquid-glass-primary"
                  : "btn-liquid-glass text-gray-550 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion Layout Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Accordion Side */}
          <div className="lg:col-span-8 space-y-3">
            <AnimatePresence initial={false}>
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    id={`faq-item-${faq.id}`}
                    className={`border transition-all duration-300 rounded-none overflow-hidden ${
                      isOpen
                        ? "border-[#FF2B5E] bg-white dark:bg-[#121212] shadow-md scale-[1.01]"
                        : "border-gray-150 dark:border-white/10 bg-white/80 dark:bg-[#121212]/65 hover:border-gray-300 dark:hover:border-white/20"
                    }`}
                  >
                    {/* Accordion Header Action button */}
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center space-x-4 pr-4">
                        <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-none border leading-none ${
                          isOpen 
                            ? "border-[#FF2B5E] text-[#FF2B5E] bg-[#FF2B5E]/5" 
                            : "border-gray-200 dark:border-white/15 text-gray-400 dark:text-gray-500"
                        }`}>
                          {faq.category}
                        </span>
                        <h3 className={`font-display font-bold text-sm md:text-base leading-snug transition-colors duration-250 ${
                          isOpen ? "text-[#FF2B5E]" : "text-black dark:text-white group-hover:text-black dark:group-hover:text-white"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      <div className={`p-1.5 transition-transform duration-300 border rounded-none shrink-0 ${
                        isOpen 
                          ? "border-[#FF2B5E] text-[#FF2B5E] rotate-180" 
                          : "border-gray-200 dark:border-white/15 text-gray-400 dark:text-gray-500"
                      }`}>
                        <ChevronDown size={14} />
                      </div>
                    </button>

                    {/* Accordion Panels content */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={
                        isOpen
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-100 dark:border-white/5">
                        <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Quick Contact / Pitch Box Side */}
          <div className="lg:col-span-4">
            <div className="bg-[#121212] dark:bg-[#0E0F12] border border-neutral-800 dark:border-white/10 p-8 text-white relative overflow-hidden shadow-lg space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-[#FF2B5E] tracking-widest font-bold uppercase block">
                  CRAFT FIRST PHILOSOPHY
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl leading-tight">
                  Have a custom or complex project?
                </h3>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                  Our spatial designers and directors represent the absolute peak of interactive layout in Bangladesh. Let's design a milestone event together.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex items-center space-x-3 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 bg-[#FF2B5E] rounded-full animate-ping" />
                  <span className="font-mono">Banani HQ Workspace Active</span>
                </div>
                
                <button
                  onClick={() => {
                    const contactSec = document.getElementById("contact");
                    if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-liquid-glass-primary w-full flex items-center justify-between px-6 py-3.5 font-sans font-bold text-xs tracking-wide transition-all duration-200 rounded-full hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Submit Briefing</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
