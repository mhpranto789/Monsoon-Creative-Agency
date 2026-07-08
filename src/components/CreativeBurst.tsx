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
  "#FF2B5E", // Brand Pink/Rose
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
    const totalCount = 28; // Reduced count for pristine, non-cluttered visuals

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
    <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] flex items-center justify-center select-none">
      
      {/* Decorative background glow for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-primary/10 via-transparent to-transparent blur-3xl opacity-60 pointer-events-none" />

      {/* Main composition frame */}
      <div className="relative w-[360px] h-[460px] sm:w-[440px] sm:h-[540px]">
        
        {/* Colorful Human Brain Vector Base */}
        <div className="absolute left-2 bottom-16 w-[280px] h-[245px] sm:w-[360px] sm:h-[315px] z-10">
          <svg
            viewBox="0 0 320 280"
            className="w-full h-full drop-shadow-[0_12px_40px_rgba(255,43,94,0.35)] filter"
            aria-label="Vibrant Creative Brain"
          >
            <defs>
              {/* Gradients matching the premium, vibrant theme */}
              <linearGradient id="frontal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF2B5E" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient id="parietal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
              <linearGradient id="occipital-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="temporal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
              <linearGradient id="cerebellum-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="stem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#312E81" />
              </linearGradient>
              
              {/* Outer soft glowing aura */}
              <filter id="brain-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing Ambient Backdrop Aura */}
            <g filter="url(#brain-glow)" opacity="0.4">
              <path
                d="M 120 40 C 40 40, 30 160, 70 200 C 100 240, 160 260, 200 250 C 240 240, 300 240, 300 170 C 300 100, 240 40, 180 40 Z"
                fill="#FF2B5E"
              />
            </g>

            {/* MAIN BRAIN STRUCTURE GROUP */}
            <g stroke="#08080a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              
              {/* Brain Stem */}
              <path
                d="M 155 210 Q 155 260 150 265 C 145 270 135 268 135 255 Q 140 220 140 205"
                fill="url(#stem-grad)"
              />

              {/* Cerebellum (Bottom Back) */}
              <path
                d="M 170 190 C 190 190 225 195 240 210 C 255 225 250 245 230 250 C 210 255 175 250 165 225 C 160 210 165 195 170 190 Z"
                fill="url(#cerebellum-grad)"
              />
              {/* Cerebellum Internal folds */}
              <path d="M 185 205 Q 215 210 230 220" fill="none" />
              <path d="M 175 220 Q 200 225 220 235" fill="none" />
              <path d="M 180 235 Q 195 240 210 242" fill="none" />

              {/* Temporal Lobe (Lower Front/Center) */}
              <path
                d="M 85 160 C 60 160 55 185 65 205 C 75 225 125 225 145 210 C 165 195 155 170 135 165 C 115 160 100 160 85 160 Z"
                fill="url(#temporal-grad)"
              />
              {/* Temporal internal folds */}
              <path d="M 75 180 C 90 175 115 180 130 195" fill="none" />
              <path d="M 80 195 C 95 195 110 205 125 200" fill="none" />

              {/* Frontal Lobe (Top Left / Front) */}
              <path
                d="M 140 70 C 100 70 55 90 45 130 C 35 170 70 185 105 180 C 140 175 150 140 145 110 C 140 80 145 70 140 70 Z"
                fill="url(#frontal-grad)"
              />
              {/* Frontal internal gyri lines */}
              <path d="M 65 105 Q 85 110 95 95" fill="none" />
              <path d="M 55 130 C 75 125 90 140 115 125" fill="none" />
              <path d="M 70 155 Q 95 150 110 165" fill="none" />
              <path d="M 115 100 Q 125 125 140 135" fill="none" />

              {/* Parietal Lobe (Top Center) */}
              <path
                d="M 140 70 C 175 55 235 60 255 95 C 270 120 260 145 230 150 C 200 155 155 140 145 110 C 138 80 140 70 140 70 Z"
                fill="url(#parietal-grad)"
              />
              {/* Parietal internal gyri lines */}
              <path d="M 160 80 Q 185 95 210 80" fill="none" />
              <path d="M 155 105 C 180 110 195 125 220 115" fill="none" />
              <path d="M 175 130 Q 200 135 220 145" fill="none" />

              {/* Occipital Lobe (Back Right) */}
              <path
                d="M 255 95 C 280 110 295 135 295 160 C 295 185 270 200 240 190 C 220 180 225 155 230 150 C 255 145 265 120 255 95 Z"
                fill="url(#occipital-grad)"
              />
              {/* Occipital internal folds */}
              <path d="M 270 120 Q 255 135 275 150" fill="none" />
              <path d="M 285 145 Q 260 160 270 175" fill="none" />
              <path d="M 250 165 Q 240 175 255 182" fill="none" />

            </g>

            {/* GLOSSY HIGHLIGHTS / BUBBLE SHINES (Matching the cute/modern look) */}
            <g fill="white" opacity="0.32" pointerEvents="none">
              {/* Frontal shines */}
              <ellipse cx="65" cy="100" rx="10" ry="4" transform="rotate(-35 65 100)" />
              <circle cx="50" cy="125" r="3" />
              
              {/* Parietal shines */}
              <ellipse cx="180" cy="72" rx="18" ry="5" transform="rotate(-10 180 72)" />
              <circle cx="215" cy="76" r="4" />

              {/* Occipital shines */}
              <ellipse cx="282" cy="125" rx="10" ry="4" transform="rotate(40 282 125)" />
              
              {/* Temporal shines */}
              <ellipse cx="80" cy="180" rx="10" ry="3" transform="rotate(-15 80 180)" />

              {/* Cerebellum shines */}
              <ellipse cx="210" cy="202" rx="12" ry="4" transform="rotate(-5 210 202)" />
            </g>

            {/* Sparkles / Creative stars around the brain */}
            <g fill="#FF2B5E" opacity="0.8">
              {/* Sparkle 1 */}
              <path d="M 35 75 Q 35 85 45 85 Q 35 85 35 95 Q 35 85 25 85 Q 35 85 35 75 Z" />
              {/* Sparkle 2 */}
              <path d="M 305 215 Q 305 223 313 223 Q 305 223 305 231 Q 305 223 297 223 Q 305 223 305 215 Z" fill="#00F2FE" />
              {/* Sparkle 3 */}
              <path d="M 280 65 Q 280 71 286 71 Q 280 71 280 77 Q 280 71 274 71 Q 280 71 280 65 Z" fill="#FBBF24" />
            </g>
          </svg>
        </div>

        {/* Dynamic Flying Particles Container */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute"
              style={{
                left: `${(p.startX / 440) * 100}%`,
                top: `${(p.startY / 540) * 100}%`,
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
