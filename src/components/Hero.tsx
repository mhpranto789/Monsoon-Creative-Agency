import { useState, useEffect } from "react";
import { MessageSquare, Briefcase } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onLearnMore: (sectionId: string) => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  const words = ["Monsoon", "Storytelling", "Brand Action", "Innovation"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(120);

        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(60);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
          return;
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#FAFAF9] dark:bg-[#050505] flex flex-col justify-center overflow-hidden pt-24 transition-colors duration-400"
    >
      {/* Premium custom animated background with 3 core words */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        
        {/* Modern minimal grid pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
          style={{ maskImage: "radial-gradient(circle at 50% 50%, white 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle at 50% 50%, white 40%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* Dynamic slow-morphing organic glow orbs */}
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -70, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-brand-primary/8 dark:bg-brand-primary/5 blur-[120px] pointer-events-none"
        />

        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 60, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-blue-500/6 dark:bg-blue-500/3 blur-[140px] pointer-events-none"
        />

        <motion.div
          animate={{
            x: [0, 40, -60, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-10 w-[300px] h-[300px] rounded-full bg-amber-500/6 dark:bg-amber-500/3 blur-[100px] pointer-events-none"
        />

        {/* Kinetic Typography Marquees (Innovation, Marketing, Communication) */}
        <div className="absolute inset-0 flex flex-col justify-around py-16 opacity-30 dark:opacity-20 z-0">
          
          {/* Track 1: Moving Left */}
          <div className="overflow-hidden flex w-full">
            <motion.div
              className="flex whitespace-nowrap gap-12"
              animate={{ x: [0, "-50%"] }}
              transition={{ ease: "linear", duration: 32, repeat: Infinity }}
            >
              <div className="flex gap-12 pr-12 font-display font-black text-[9vw] tracking-widest text-black/5 dark:text-white/5 uppercase select-none">
                <span>Innovation</span>
                <span className="text-brand-primary/20">•</span>
                <span>Marketing</span>
                <span className="text-brand-primary/20">•</span>
                <span>Communication</span>
                <span className="text-brand-primary/20">•</span>
              </div>
              <div className="flex gap-12 pr-12 font-display font-black text-[9vw] tracking-widest text-black/5 dark:text-white/5 uppercase select-none">
                <span>Innovation</span>
                <span className="text-brand-primary/20">•</span>
                <span>Marketing</span>
                <span className="text-brand-primary/20">•</span>
                <span>Communication</span>
                <span className="text-brand-primary/20">•</span>
              </div>
            </motion.div>
          </div>

          {/* Track 2: Moving Right */}
          <div className="overflow-hidden flex w-full">
            <motion.div
              className="flex whitespace-nowrap gap-12"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 38, repeat: Infinity }}
            >
              <div className="flex gap-12 pr-12 font-display font-black text-[9vw] tracking-widest text-black/5 dark:text-white/5 uppercase select-none">
                <span>Marketing</span>
                <span className="text-brand-primary/20">•</span>
                <span>Communication</span>
                <span className="text-brand-primary/20">•</span>
                <span>Innovation</span>
                <span className="text-brand-primary/20">•</span>
              </div>
              <div className="flex gap-12 pr-12 font-display font-black text-[9vw] tracking-widest text-black/5 dark:text-white/5 uppercase select-none">
                <span>Marketing</span>
                <span className="text-brand-primary/20">•</span>
                <span>Communication</span>
                <span className="text-brand-primary/20">•</span>
                <span>Innovation</span>
                <span className="text-brand-primary/20">•</span>
              </div>
            </motion.div>
          </div>

          {/* Track 3: Moving Left */}
          <div className="overflow-hidden flex w-full">
            <motion.div
              className="flex whitespace-nowrap gap-12"
              animate={{ x: [0, "-50%"] }}
              transition={{ ease: "linear", duration: 28, repeat: Infinity }}
            >
              <div className="flex gap-12 pr-12 font-display font-black text-[9vw] tracking-widest text-black/5 dark:text-white/5 uppercase select-none">
                <span>Communication</span>
                <span className="text-brand-primary/20">•</span>
                <span>Innovation</span>
                <span className="text-brand-primary/20">•</span>
                <span>Marketing</span>
                <span className="text-brand-primary/20">•</span>
              </div>
              <div className="flex gap-12 pr-12 font-display font-black text-[9vw] tracking-widest text-black/5 dark:text-white/5 uppercase select-none">
                <span>Communication</span>
                <span className="text-brand-primary/20">•</span>
                <span>Innovation</span>
                <span className="text-brand-primary/20">•</span>
                <span>Marketing</span>
                <span className="text-brand-primary/20">•</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Vignette & Contrast Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9]/40 via-transparent to-[#FAFAF9] dark:from-[#050505]/40 dark:via-transparent dark:to-[#050505] transition-colors duration-400" 
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 flex flex-col justify-between min-h-[calc(100vh-6rem)]">
        {/* Core Editorial Headlines */}
        <div className="my-auto py-12">
          <div className="max-w-4xl space-y-8">
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
                className="block text-black dark:text-white relative min-h-[1.15em]"
              >
                {currentText}
                <span className="text-brand-primary inline-block animate-pulse font-extrabold ml-1">.</span>
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
        </div>
      </div>
    </section>
  );
}
