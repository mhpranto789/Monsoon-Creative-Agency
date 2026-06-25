import { useState, useEffect, useRef } from "react";
import { Client } from "../types";

const CLIENTS_DATA: Client[] = [
  { 
    id: "coca-cola", 
    name: "Coca-Cola Bangladesh", 
    logoText: "Coca-Cola", 
    industry: "Beverage",
    bgImage: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "honda", 
    name: "Honda Bangladesh", 
    logoText: "Honda", 
    industry: "Automotive",
    bgImage: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "bkash", 
    name: "bKash Limited", 
    logoText: "bKash", 
    industry: "Fintech & MFS",
    bgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "gp", 
    name: "Grameenphone", 
    logoText: "Grameenphone", 
    industry: "Telecom",
    bgImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "unilever", 
    name: "Unilever Bangladesh", 
    logoText: "Unilever", 
    industry: "FMCG",
    bgImage: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "aarong", 
    name: "Aarong BRAC", 
    logoText: "Aarong", 
    industry: "Premium Fashion",
    bgImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "pepsi", 
    name: "PepsiCo Bangladesh", 
    logoText: "Pepsi", 
    industry: "Beverage",
    bgImage: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "robi", 
    name: "Robi Axiata", 
    logoText: "Robi", 
    industry: "Telecom",
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "nido", 
    name: "Nestlé Bangladesh", 
    logoText: "Nestlé Nido", 
    industry: "Nutrition",
    bgImage: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "pathao", 
    name: "Pathao BD", 
    logoText: "Pathao", 
    industry: "Logistics Tech",
    bgImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "cineplex", 
    name: "Star Cineplex", 
    logoText: "Cineplex", 
    industry: "Entertainment",
    bgImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "radhuni", 
    name: "Square Food & Beverage", 
    logoText: "Radhuni", 
    industry: "FMCG Food",
    bgImage: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "airtel", 
    name: "Airtel Bangladesh", 
    logoText: "Airtel", 
    industry: "Telecom",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "apex", 
    name: "Apex Footwear", 
    logoText: "Apex", 
    industry: "Fashion Retail",
    bgImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "sheba", 
    name: "Sheba Platform", 
    logoText: "Sheba.xyz", 
    industry: "Service Tech",
    bgImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "british-council", 
    name: "British Council BD", 
    logoText: "British Council", 
    industry: "Culture & Ed",
    bgImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "ipdc", 
    name: "IPDC Finance", 
    logoText: "IPDC", 
    industry: "Financial Services",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
  }
];



interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    let observer: IntersectionObserver;

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            startRef.current = null;
            
            const animate = (timestamp: number) => {
              if (!startRef.current) startRef.current = timestamp;
              const progress = timestamp - startRef.current;
              const percentage = Math.min(progress / duration, 1);
              
              // Ease out quad
              const easeOutPercentage = percentage * (2 - percentage);
              const currentCount = Math.floor(easeOutPercentage * end);
              
              setCount(currentCount);
              
              if (percentage < 1) {
                animationFrameId = requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };
            
            animationFrameId = requestAnimationFrame(animate);
          } else {
            setCount(0);
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    } else {
      // Fallback if IntersectionObserver is not supported
      setCount(end);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-[#FAFAF9] dark:bg-[#050505] text-black dark:text-white overflow-hidden relative border-t border-gray-100 dark:border-white/10 transition-colors duration-400">
      {/* Soft color highlights instead of harsh dot-grid */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#FAFAF9] via-[#FAF7F2] to-[#FAFAF9] dark:from-[#050505] dark:via-[#08080A] dark:to-[#050505] opacity-50" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-xl space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-none">
            Our Client Roster<span className="text-[#FF2B5E]">.</span>
          </h2>
          <p className="font-sans text-gray-500 dark:text-gray-400 text-sm font-light">
            We are trusted by global conglomerates and high-impact local giants to disrupt markets, trigger emotions, and execute massive ground activations.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden bg-gray-50/80 dark:bg-[#121212]/30 border-y border-gray-150 dark:border-white/10 py-10 mb-16 select-none transition-colors duration-300">
        {/* Shadow Overlays to hide edge clips */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAF9] dark:from-[#050505] to-transparent z-15 pointer-events-none transition-all" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAF9] dark:from-[#050505] to-transparent z-15 pointer-events-none transition-all" />

        <div className="flex w-[200%] animate-infinite-scroll hover:[animation-play-state:paused] whitespace-nowrap">
          {/* First loop of clients */}
          <div className="flex justify-around items-center w-1/2 min-w-max space-x-12 px-6">
            {CLIENTS_DATA.map((client) => (
              <div
                key={`${client.id}-marquee1`}
                className="flex items-center bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/15 px-6 py-3 hover:bg-[#FF2B5E]/5 dark:hover:bg-[#FF2B5E]/20 hover:border-[#FF2B5E]/40 hover:shadow-sm transition-all duration-300"
              >
                <span className="font-display font-medium text-xs tracking-widest text-black dark:text-white uppercase">
                  {client.logoText}
                </span>
              </div>
            ))}
          </div>
          {/* Second duplicate loop */}
          <div className="flex justify-around items-center w-1/2 min-w-max space-x-12 px-6">
            {CLIENTS_DATA.map((client) => (
              <div
                key={`${client.id}-marquee2`}
                className="flex items-center bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/15 px-6 py-3 hover:bg-[#FF2B5E]/5 dark:hover:bg-[#FF2B5E]/20 hover:border-[#FF2B5E]/40 hover:shadow-sm transition-all duration-300"
              >
                <span className="font-display font-medium text-xs tracking-widest text-black dark:text-white uppercase">
                  {client.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Responsive Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {CLIENTS_DATA.map((client) => (
            <div
              key={client.id}
              id={`client-card-${client.id}`}
              className="relative overflow-hidden bg-white dark:bg-[#0E0F12] border border-gray-150 dark:border-white/10 p-6 flex flex-col justify-between aspect-[4/3] group hover:border-[#FF2B5E] dark:hover:border-[#FF2B5E] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Brand-specific Background Image */}
              {client.bgImage && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700 opacity-95 pointer-events-none z-0" 
                    style={{ backgroundImage: `url(${client.bgImage})` }}
                  />
                  {/* Smooth card-wide gradient to guarantee text readability without boxed overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10 dark:from-[#0E0F12] dark:via-[#0E0F12]/70 dark:to-[#0E0F12]/10 pointer-events-none z-1" />
                </>
              )}

              {/* Graphic Logo representation - elevated above background with crisp high-contrast glassmorphic containers */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono text-[9px] text-[#FF2B5E] tracking-wider uppercase font-bold bg-white/90 dark:bg-[#0E0F12]/90 border border-gray-200 dark:border-white/10 px-2.5 py-1 rounded-sm shadow-sm backdrop-blur-md">
                  {client.industry}
                </span>
              </div>

              <div className="relative z-10 space-y-1 mt-6">
                <h3 className="font-display font-bold text-base text-black dark:text-white group-hover:text-[#FF2B5E] transition-colors leading-snug">
                  {client.logoText}
                </h3>
                <p className="font-sans text-xs text-gray-800 dark:text-gray-200 font-medium">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Metric Counter Segment */}
        <div className="mt-20 border-t border-gray-200 dark:border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left transition-colors font-sans">
          <div className="space-y-2">
            <span className="font-display font-black text-5xl text-[#FF2B5E] block">
              42+
            </span>
            <span className="font-mono text-xs tracking-wider text-gray-500 dark:text-gray-400 uppercase block font-medium font-sans">Massive activations executed</span>
          </div>
          <div className="space-y-2">
            <span className="font-display font-black text-5xl text-black dark:text-white block">
              100%
            </span>
            <span className="font-mono text-xs tracking-wider text-gray-500 dark:text-gray-400 uppercase block font-medium font-sans">Bangladesh audience empathy</span>
          </div>
          <div className="space-y-2">
            <span className="font-display font-black text-5xl text-black dark:text-white block">
              10B+
            </span>
            <span className="font-mono text-xs tracking-wider text-gray-500 dark:text-gray-400 uppercase block font-medium font-sans">Combined client monetization</span>
          </div>
        </div>
      </div>
    </section>
  );
}
