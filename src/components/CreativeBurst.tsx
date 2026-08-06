import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Particle {
  id: number;
  kind: "shape" | "word";
  word?: string;
  type?: { name: string; path: string };
  color: string;
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  scale: number;
  rotateAmount: number;
}

const PARTICLE_TYPES = [
  {
    name: "idea", // Lightbulb
    path: "M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm3 18H9v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1z"
  },
  {
    name: "marketing-rocket", // Rocket
    path: "M12 2s-8 3-8 12c0 3 2.5 4.5 4.5 4.5.5 0 1-.5 1-1v-1.5h1V15c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1h1v1.5c0 .55.45 1 1 1 2 0 4.5-1.5 4.5-4.5 0-9-8-12-8-12zm-2 15c-1.5 0-3.5 1-4.5 2.5 0 0 2.5 1 4.5.5v-3zm8 2.5c-1-1.5-3-2.5-4.5-2.5v3c2 .5 4.5-.5 4.5-.5zM12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
  },
  {
    name: "marketing-megaphone", // Megaphone
    path: "M11 5L6 9H2v6h4l5 4V5zm9 7c0-2.21-1.3-4.1-3.2-5l-.8 1.8c1.2.6 2 1.8 2 3.2s-.8 2.6-2 3.2l.8 1.8c1.9-.9 3.2-2.8 3.2-5zm2.8 5l-.8-1.8c2.1-1 3.5-3.1 3.5-5.4s-1.4-4.4-3.5-5.4l.8-1.8c2.9 1.3 4.9 4.1 4.9 7.2s-2 5.9-4.9 7.2z"
  },
  {
    name: "innovation-lightning", // Lightning Bolt
    path: "M11 15H6l7-13v8h5l-7 13v-8z"
  },
  {
    name: "innovation-spark", // Creative Spark / Star
    path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  }
];

const WORDS = [
  "Innovation",
  "Strategy",
  "Growth",
  "Creativity",
  "Marketing",
  "Engagement"
];

const PREMIUM_COLORS = [
  "#e83e27", // Brand Red
  "#00F2FE", // Electric Cyan
  "#FBBF24", // Gold
  "#A78BFA", // Pastel Violet
  "#34D399", // Emerald Green
  "#FB923C", // Tangerine
  "#F472B6", // Soft Pink
  "#60A5FA"  // Soft Blue
];

export default function CreativeBurst() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const list: Particle[] = [];
    const totalCount = 14; // Optimized count for high performance and clean visual flow

    for (let i = 0; i < totalCount; i++) {
      const kind = i % 2 === 0 ? "shape" : "word";
      const type = PARTICLE_TYPES[i % PARTICLE_TYPES.length];
      const word = WORDS[i % WORDS.length]; // Stably cycle through words so all are represented
      const color = PREMIUM_COLORS[Math.floor(Math.random() * PREMIUM_COLORS.length)];
      
      // Emitter region aligned beautifully with the top lobes of the brain (X: 110-260, Y: 190-230)
      const startX = 110 + Math.random() * 150;
      const startY = 190 + Math.random() * 40;
      
      // Group particles into 3 elegant, organized flow streams for professional artistic direction
      const streamId = i % 3;
      let endX = 200;
      let endY = -200;

      if (streamId === 0) {
        // Stream 0: Skyward / Ascending High
        endX = 160 + Math.random() * 90;
        endY = -320 - Math.random() * 80;
      } else if (streamId === 1) {
        // Stream 1: Dynamic Centered Arc
        endX = 250 + Math.random() * 80;
        endY = -200 - Math.random() * 70;
      } else {
        // Stream 2: Horizontal Drift / Deep Space
        endX = 330 + Math.random() * 90;
        endY = -90 - Math.random() * 70;
      }
      
      // More generous staggering delay so they emerge one-by-one clearly
      const delay = i * 0.85;
      
      // Slower, graceful floating duration for high premium aesthetic and legibility
      const duration = 6.5 + Math.random() * 2.0;
      const scale = kind === "word" ? (0.55 + Math.random() * 0.25) : (0.5 + Math.random() * 0.5);
      
      // Gentle rotation to keep text perfectly readable and aligned
      const rotateAmount = kind === "word"
        ? (Math.random() > 0.5 ? 1 : -1) * (8 + Math.random() * 12)
        : (Math.random() > 0.5 ? 1 : -1) * (120 + Math.random() * 180);

      list.push({
        id: i,
        kind,
        word,
        type,
        color,
        delay,
        duration,
        startX,
        startY,
        endX,
        endY,
        scale,
        rotateAmount
      });
    }
    setParticles(list);
  }, []);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] flex items-center justify-center select-none">
      
      {/* Decorative background glow for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-primary/10 via-transparent to-transparent blur-3xl opacity-60 pointer-events-none" />

      {/* Main composition frame */}
      <div className="relative w-[400px] h-[500px] sm:w-[500px] sm:h-[600px] lg:w-[600px] lg:h-[700px]">
        
        {/* Colorful Human Brain Vector Base */}
        <motion.div 
          className="absolute left-4 bottom-6 w-[340px] h-[310px] sm:w-[450px] sm:h-[410px] lg:w-[540px] lg:h-[490px] z-10 cursor-pointer origin-bottom"
          whileHover={{ 
            scale: 1.05,
            y: -8,
            rotate: 2,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
        >
          <motion.img
            src="https://lh3.googleusercontent.com/d/1Mrc0IVEDVeYsh7w8THAYnKE4nBiD5QlF"
            alt="Alt DOT Creative Visual"
            referrerPolicy="no-referrer"
            animate={{
              y: [0, -18, 0],
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ willChange: "transform" }}
            className="w-full h-full object-contain transition-all duration-500 filter drop-shadow-[0_12px_40px_rgba(255,43,94,0.35)] hover:drop-shadow-[0_20px_60px_rgba(255,43,94,0.75)] hover:brightness-110"
            aria-label="Vibrant Creative Reference visual"
          />
        </motion.div>

        {/* Dynamic Flying Particles Container */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute"
              style={{
                left: `${(p.startX / 440) * 100}%`,
                top: `${(p.startY / 540) * 100}%`,
                willChange: "transform, opacity",
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                // Curve flow to the right & upwards
                x: [0, p.endX * 0.35, p.endX * 0.75, p.endX],
                y: [0, p.endY * 0.45, p.endY * 0.8, p.endY],
                opacity: [0, 1, 1, 0.8, 0],
                scale: [0, p.scale, p.scale * 1.15, p.scale * 0.9, 0],
                rotate: [0, p.rotateAmount],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeOut",
              }}
            >
              {p.kind === "shape" && p.type ? (
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md"
                  fill={p.color}
                  style={{ filter: `drop-shadow(0 0 6px ${p.color}aa)` }}
                >
                  <path d={p.type.path} />
                </svg>
              ) : (
                <span
                  className="font-display font-black tracking-widest text-[8px] sm:text-[9.5px] uppercase whitespace-nowrap block select-none px-2 py-0.5 border border-white/5 bg-[#08080a]/80 backdrop-blur-xs rounded shadow-xs"
                  style={{
                    color: p.color,
                    borderColor: `${p.color}33`,
                    textShadow: `0 0 10px ${p.color}aa, 0 0 3px ${p.color}55`,
                    boxShadow: `0 0 8px ${p.color}15`
                  }}
                >
                  {p.word}
                </span>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
