import { useState, useEffect, useRef } from "react";
import { Client } from "../types";

const CLIENTS_DATA: Client[] = [
  { 
    id: "coca-cola", 
    name: "Coca-Cola Bangladesh", 
    logoText: "Coca-Cola", 
    industry: "Beverage",
    bgImage: "https://lh3.googleusercontent.com/d/1dn5AVzuRBIwujDOMX1i50ufM4iiLzLxW" 
  },
  { 
    id: "honda", 
    name: "Honda Bangladesh", 
    logoText: "Honda", 
    industry: "Automotive",
    bgImage: "https://lh3.googleusercontent.com/d/158HYjtU3n0hdgBARyGppp4ZYS02PzpyW" 
  },
  { 
    id: "bkash", 
    name: "bKash Limited", 
    logoText: "bKash", 
    industry: "Fintech & MFS",
    bgImage: "https://lh3.googleusercontent.com/d/18hYVE2ZOQ9ZM3Vd5tOEOQVKjGVTeus6P" 
  },
  { 
    id: "gp", 
    name: "Grameenphone", 
    logoText: "Grameenphone", 
    industry: "Telecom",
    bgImage: "https://lh3.googleusercontent.com/d/17X867uw8FZdDpS5zFFVksIKVR-pz0075" 
  },
  { 
    id: "unilever", 
    name: "Unilever Bangladesh", 
    logoText: "Unilever", 
    industry: "FMCG",
    bgImage: "https://lh3.googleusercontent.com/d/1u4CQoevJs4Qu_BC8V9FZ1jSecQT5i4Hq" 
  },
  { 
    id: "aarong", 
    name: "Aarong BRAC", 
    logoText: "Aarong", 
    industry: "Premium Fashion",
    bgImage: "https://lh3.googleusercontent.com/d/18duZWdkhgK8iRTYzdTbc4a37PJNImahr" 
  },
  { 
    id: "pepsi", 
    name: "PepsiCo Bangladesh", 
    logoText: "Pepsi", 
    industry: "Beverage",
    bgImage: "https://lh3.googleusercontent.com/d/11f_YmAEcetF2zQgWVxOupjqGWqeOl2F6" 
  },
  { 
    id: "robi", 
    name: "Robi Axiata", 
    logoText: "Robi", 
    industry: "Telecom",
    bgImage: "https://lh3.googleusercontent.com/d/1JN42KgMQV_-WIDyhfnvmeCdtT0OYkvfE" 
  },
  { 
    id: "nido", 
    name: "Nestlé Bangladesh", 
    logoText: "Nestlé Nido", 
    industry: "Nutrition",
    bgImage: "https://lh3.googleusercontent.com/d/1dycqk_d5EP0KijIIyvh0UGHA02UI1W6d" 
  },
  { 
    id: "pathao", 
    name: "Pathao BD", 
    logoText: "Pathao", 
    industry: "Logistics Tech",
    bgImage: "https://lh3.googleusercontent.com/d/1lwTFZYNZhIFf-FEPBtQiKO4juKNnOsZT" 
  },
  { 
    id: "cineplex", 
    name: "Star Cineplex", 
    logoText: "Cineplex", 
    industry: "Entertainment",
    bgImage: "https://lh3.googleusercontent.com/d/1x64czdrpqn_XqPeQiBsiAqnXkdKi2GJH" 
  },
  { 
    id: "radhuni", 
    name: "Square Food & Beverage", 
    logoText: "Radhuni", 
    industry: "FMCG Food",
    bgImage: "https://lh3.googleusercontent.com/d/1nyy3E_j1K2Tsk-fVNqalYSS-HoAhsjLi" 
  },
  { 
    id: "airtel", 
    name: "Airtel Bangladesh", 
    logoText: "Airtel", 
    industry: "Telecom",
    bgImage: "https://lh3.googleusercontent.com/d/1K5eET922-sEGb4VgatxeJu6515zMNzWi" 
  },
  { 
    id: "apex", 
    name: "Apex Footwear", 
    logoText: "Apex", 
    industry: "Fashion Retail",
    bgImage: "https://lh3.googleusercontent.com/d/1vz7AjkSADvWxjJriUWJZFzHaaP92U3EY" 
  },
  { 
    id: "sheba", 
    name: "Sheba Platform", 
    logoText: "Sheba.xyz", 
    industry: "Service Tech",
    bgImage: "https://lh3.googleusercontent.com/d/1wjHZAJ9Q8_zuWqQY3DRm_FyAVvs-QX3N" 
  },
  { 
    id: "british-council", 
    name: "British Council BD", 
    logoText: "British Council", 
    industry: "Culture & Ed",
    bgImage: "https://lh3.googleusercontent.com/d/1ACpyp6H8fdQM8HekVRVWfeuaPhS-QmJm" 
  },
  { 
    id: "ipdc", 
    name: "IPDC Finance", 
    logoText: "IPDC", 
    industry: "Financial Services",
    bgImage: "https://lh3.googleusercontent.com/d/1ZOXR1zppGd5R-ykO1St3_Mox0KtlEqmf" 
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
            Our Client Roster<span className="text-[#FF2B5E] animate-pulse">.</span>
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
                className="flex items-center justify-center bg-white dark:bg-white border border-gray-200 dark:border-gray-100/20 px-6 py-3 hover:bg-[#FF2B5E]/5 hover:border-[#FF2B5E]/40 hover:shadow-md transition-all duration-300 h-16 w-36 rounded-md shadow-xs"
              >
                {client.bgImage ? (
                  <img 
                    src={client.bgImage} 
                    alt={client.name} 
                    className="h-10 w-auto object-contain max-w-full filter dark:brightness-100" 
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="font-display font-semibold text-xs tracking-widest text-black uppercase">
                    {client.logoText}
                  </span>
                )}
              </div>
            ))}
          </div>
          {/* Second duplicate loop */}
          <div className="flex justify-around items-center w-1/2 min-w-max space-x-12 px-6">
            {CLIENTS_DATA.map((client) => (
              <div
                key={`${client.id}-marquee2`}
                className="flex items-center justify-center bg-white dark:bg-white border border-gray-200 dark:border-gray-100/20 px-6 py-3 hover:bg-[#FF2B5E]/5 hover:border-[#FF2B5E]/40 hover:shadow-md transition-all duration-300 h-16 w-36 rounded-md shadow-xs"
              >
                {client.bgImage ? (
                  <img 
                    src={client.bgImage} 
                    alt={client.name} 
                    className="h-10 w-auto object-contain max-w-full filter dark:brightness-100" 
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="font-display font-semibold text-xs tracking-widest text-black uppercase">
                    {client.logoText}
                  </span>
                )}
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
              className="relative overflow-hidden bg-white dark:bg-[#0E0F12] border border-gray-150 dark:border-white/10 p-5 sm:p-6 flex flex-col justify-end aspect-[4/3] group hover:border-[#FF2B5E] dark:hover:border-[#FF2B5E] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Brand-specific Background Image */}
              {client.bgImage && (
                <div 
                  className="absolute inset-x-5 sm:inset-x-6 top-5 sm:top-6 bottom-14 sm:bottom-16 bg-contain bg-no-repeat bg-center scale-100 group-hover:scale-105 transition-transform duration-700 opacity-95 pointer-events-none z-0" 
                  style={{ 
                    backgroundImage: `url(${client.bgImage})`
                  }}
                />
              )}

              <div className="relative z-10 mt-auto">
                <p className="font-sans text-[11px] sm:text-xs text-gray-800 dark:text-gray-200 font-semibold tracking-wide">
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
