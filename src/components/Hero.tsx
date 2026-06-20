import { MessageSquare, Briefcase } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onLearnMore: (sectionId: string) => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#FAFAF9] dark:bg-[#050505] flex flex-col justify-center overflow-hidden pt-24 transition-colors duration-400"
    >
      {/* High-contrast fluid background optimized across devices */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Ambient premium background image */}
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80"
          alt="Monsoon Fluid Flow Backdrop"
          className="w-full h-full object-cover scale-[1.03] select-none transition-opacity duration-1000 grayscale-[30%] opacity-15 dark:opacity-25"
          referrerPolicy="no-referrer"
        />

        {/* Ambient color gradient mesh overlays */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9]/90 via-[#FAF8F5]/50 to-[#FAFAF9] dark:from-[#050505]/90 dark:via-[#0E0B0B]/60 dark:to-[#050505] transition-colors duration-400" 
          aria-hidden="true"
        />
      </div>
      
      {/* Warm custom soft light highlights */}
      <div 
        className="absolute -right-40 top-1/4 w-[600px] h-[600px] rounded-full bg-brand-primary/4 dark:bg-brand-primary/3 blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute -left-40 bottom-1/4 w-[600px] h-[600px] rounded-full bg-brand-primary/[0.03] dark:bg-brand-primary/[0.02] blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 flex flex-col justify-between min-h-[calc(100vh-6rem)]">
        {/* Core Editorial Headlines */}
        <div className="my-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Headline and Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <h1 id="hero-title" className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-black dark:text-white leading-[1.05]">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="block text-gray-400 dark:text-gray-500 font-light"
                >
                  Welcome to
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-black dark:text-white relative"
                >
                  Monsoon<span className="text-brand-primary">.</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-sans text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-2xl leading-relaxed"
              >
                We provide <strong className="font-medium text-black dark:text-white">innovative, integrated brand marketing</strong> and <strong className="font-medium text-black dark:text-white">communication solutions</strong> designed to spark human connections, shatter expectations, and rewrite brand narratives from the ground up.
              </motion.p>

              {/* Responsive CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              >
                <button
                  id="hero-cta-projects"
                  onClick={() => onLearnMore("projects")}
                  className="btn-liquid-glass-primary group flex items-center justify-center space-x-3 transition-all duration-200 rounded-full cursor-pointer px-8 py-4 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97]"
                >
                  <Briefcase size={16} />
                  <span>Explore Case Studies</span>
                </button>
                <button
                  id="hero-cta-contact"
                  onClick={() => onLearnMore("contact")}
                  className="btn-liquid-glass group flex items-center justify-center space-x-3 text-black dark:text-white text-sm font-semibold px-8 py-4 transition-all duration-200 rounded-full cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
                >
                  <MessageSquare size={16} />
                  <span>Start a Partnership</span>
                </button>
              </motion.div>
            </div>

            {/* Visual Block / Interactive Mini-stat frame */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-full max-w-sm aspect-square bg-[#121212] p-8 flex flex-col justify-between text-white border-2 border-black dark:border-white/10 shadow-[8px_8px_0_0_#1E3A8A] group hover:shadow-[12px_12px_0_0_#1E3A8A] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="font-mono text-[9px] text-[#1E3A8A] tracking-widest uppercase font-bold px-2 py-1 bg-white/10">
                    Dhaka, BD
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl leading-snug">
                    Reshaping Dhaka’s Creative Landscape
                  </h3>
                </div>

                <div className="pt-8 border-t border-white/10 space-y-6 font-sans">
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Monsoon delivers end-to-end strategy, massive experiential activation, and digital-first creative masterpieces that stand out in crowded industries.
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-[#1E3A8A] font-mono">
                    <span>99% Client Trust</span>
                    <span>150+ Mil Views</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
