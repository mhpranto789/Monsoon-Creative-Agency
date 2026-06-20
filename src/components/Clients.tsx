import { useState, useEffect, useRef } from "react";
import { Client } from "../types";

const CLIENTS_DATA: Client[] = [
  { id: "coca-cola", name: "Coca-Cola Bangladesh", logoText: "Coca-Cola", industry: "Beverage" },
  { id: "honda", name: "Honda Bangladesh", logoText: "Honda", industry: "Automotive" },
  { id: "bkash", name: "bKash Limited", logoText: "bKash", industry: "Fintech & MFS" },
  { id: "gp", name: "Grameenphone", logoText: "Grameenphone", industry: "Telecom" },
  { id: "unilever", name: "Unilever Bangladesh", logoText: "Unilever", industry: "FMCG" },
  { id: "aarong", name: "Aarong BRAC", logoText: "Aarong", industry: "Premium Fashion" },
  { id: "pepsi", name: "PepsiCo Bangladesh", logoText: "Pepsi", industry: "Beverage" },
  { id: "robi", name: "Robi Axiata", logoText: "Robi", industry: "Telecom" },
  { id: "nido", name: "Nestlé Bangladesh", logoText: "Nestlé Nido", industry: "Nutrition" },
  { id: "pathao", name: "Pathao BD", logoText: "Pathao", industry: "Logistics Tech" },
  { id: "cineplex", name: "Star Cineplex", logoText: "Cineplex", industry: "Entertainment" },
  { id: "radhuni", name: "Square Food & Beverage", logoText: "Radhuni", industry: "FMCG Food" },
  { id: "airtel", name: "Airtel Bangladesh", logoText: "Airtel", industry: "Telecom" },
  { id: "apex", name: "Apex Footwear", logoText: "Apex", industry: "Fashion Retail" },
  { id: "sheba", name: "Sheba Platform", logoText: "Sheba.xyz", industry: "Service Tech" },
  { id: "british-council", name: "British Council BD", logoText: "British Council", industry: "Culture & Ed" },
  { id: "ipdc", name: "IPDC Finance", logoText: "IPDC", industry: "Financial Services" }
];

function ClientLogo({ id }: { id: string }) {
  switch (id) {
    case "coca-cola":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#F40009] dark:fill-white transition-colors duration-300">
          <path d="M2 13c3-1.5 6-2 9-1.5s5 1.5 8 1 3.5-2 5-3c-1.5 1.5-3 2-5 2s-5-1-8-1.5-6.5.5-9 3z" />
          <path d="M1 14.5c3.5-1.5 7-1.5 10-.5s5 2.5 8 2 4.5-2.5 5-3c-1 1-2.5 1.5-4.5 1.5s-5.5-1.5-8.5-2-7 1-10 2z" opacity="0.6"/>
        </svg>
      );
    case "honda":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-gray-800 dark:fill-gray-100 transition-colors duration-300">
          <path d="M4 3h16l1 15-9 3-9-3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 6v10h2v-4h4v4h2V6h-2v4H10V6z" />
        </svg>
      );
    case "bkash":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#E2136E]">
          <polygon points="12,2 4,14 11,12 11,21 20,9 13,11" />
        </svg>
      );
    case "gp":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#006E98] dark:text-[#00AEF0] fill-current transition-colors duration-300">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 6a6 6 0 0 1 6 6M12 18a6 6 0 0 1-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "pepsi":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 2a10 10 0 0 0-10 10c2-1 5-2 10-2s8 1 10 2a10 10 0 0 0-10-10z" className="fill-[#004B87] dark:fill-sky-500" />
          <path d="M12 22a10 10 0 0 0 10-10c-2 1-5 2-10 2s-8-1-10-2a10 10 0 0 0 10 10z" className="fill-[#E31B23]" />
        </svg>
      );
    case "unilever":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2 text-[#001E50] dark:text-[#5289D2] transition-colors duration-300">
          <path d="M6 4v8a6 6 0 0 0 12 0V4" strokeLinecap="round" />
          <circle cx="6" cy="4" r="1.5" className="fill-current" />
          <circle cx="18" cy="4" r="1.5" className="fill-current" />
        </svg>
      );
    case "aarong":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#A37B34] dark:text-[#E2C37F] fill-current transition-colors duration-300">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "robi":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <polygon points="12,2 20,8 12,14 4,8" className="fill-[#FF6B00]" />
          <polygon points="12,14 20,8 20,16 12,22" className="fill-[#E00000]" opacity="0.95" />
          <polygon points="4,8 12,14 12,22 4,16" className="fill-[#FF007A]" opacity="0.85" />
        </svg>
      );
    case "nido":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-1.5 text-[#5C3F24] dark:text-[#D1AE8C] transition-colors duration-300">
          <circle cx="12" cy="16" r="4" strokeDasharray="3 2" />
          <path d="M6 18c3-1 9-1 12 0" strokeLinecap="round" />
          <path d="M10 13c0-2-1-3-2-3s-1 .5-1 1.5S8 16 10 16z" className="fill-current" />
        </svg>
      );
    case "pathao":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#1E3A8A] dark:stroke-[#3B82F6] stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 4 15 12 7 20" />
          <polyline points="13 4 21 12 13 20" opacity="0.5" />
        </svg>
      );
    case "cineplex":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-[#E5A93C]">
          <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" />
          <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" rx="1" />
        </svg>
      );
    case "radhuni":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current stroke-2 text-[#E31B23] fill-none transition-colors duration-300">
          <path d="M4 10s4-4 8-4 8 4 8 4v4a8 8 0 0 1-16 0z" />
          <line x1="12" y1="2" x2="12" y2="6" />
        </svg>
      );
    case "airtel":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#E30016] stroke-2">
          <path d="M12 4a8 8 0 1 0 8 8c0-3-1.5-5-4-5s-4 2-4 4 1.5 3 3 3 2.5-1.5 2.5-3" />
        </svg>
      );
    case "apex":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-gray-800 dark:text-gray-200 transition-colors duration-300">
          <polygon points="12,4 21,20 16,20 12,12 8,20 3,20" />
        </svg>
      );
    case "sheba":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#00AEEF] stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      );
    case "british-council":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-[#006EB6]">
          <circle cx="6" cy="12" r="3" />
          <circle cx="11" cy="12" r="3" opacity="0.8" />
          <circle cx="16" cy="12" r="3" opacity="0.5" />
        </svg>
      );
    case "ipdc":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-[#1D4F91] dark:text-[#5289D2] transition-colors duration-300">
          <rect x="4" y="14" width="4" height="6" />
          <rect x="10" y="8" width="4" height="12" />
          <rect x="16" y="3" width="4" height="17" />
        </svg>
      );
    default:
      return (
        <div className="w-5 h-5 bg-black/5 dark:bg-white/10 flex items-center justify-center font-bold text-[8px] text-black dark:text-white rounded-sm">
          {id.substring(0, 2).toUpperCase()}
        </div>
      );
  }
}

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
            Our Client Roster<span className="text-[#1E3A8A]">.</span>
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
                className="flex items-center space-x-3 bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/15 px-6 py-3 hover:bg-[#1E3A8A]/5 dark:hover:bg-[#1E3A8A]/20 hover:border-[#1E3A8A]/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center justify-center">
                  <ClientLogo id={client.id} />
                </div>
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
                className="flex items-center space-x-3 bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/15 px-6 py-3 hover:bg-[#1E3A8A]/5 dark:hover:bg-[#1E3A8A]/20 hover:border-[#1E3A8A]/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center justify-center">
                  <ClientLogo id={client.id} />
                </div>
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
              className="bg-white dark:bg-[#0E0F12] border border-gray-150 dark:border-white/10 p-6 flex flex-col justify-between aspect-[4/3] group hover:border-[#1E3A8A] dark:hover:border-[#1E3A8A] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Graphic Logo representation */}
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] text-[#1E3A8A] tracking-wider uppercase font-bold">
                  {client.industry}
                </span>
                
                {/* Brand Logo icon overlay */}
                <div className="w-10 h-10 bg-gray-50 dark:bg-white/5 rounded-none overflow-hidden flex items-center justify-center group-hover:bg-[#1E3A8A]/10 transition-colors duration-300">
                  <ClientLogo id={client.id} />
                </div>
              </div>

              <div className="space-y-1 mt-6">
                <h3 className="font-display font-bold text-base text-black dark:text-white group-hover:text-[#1E3A8A] transition-colors leading-snug">
                  {client.logoText}
                </h3>
                <p className="font-sans text-xs text-gray-400 dark:text-gray-500 font-light">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Metric Counter Segment */}
        <div className="mt-20 border-t border-gray-200 dark:border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left transition-colors font-sans">
          <div className="space-y-2">
            <span className="font-display font-black text-5xl text-[#1E3A8A] block">
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
