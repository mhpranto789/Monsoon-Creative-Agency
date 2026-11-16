import { ArrowUpRight, FileDown } from "lucide-react";
import { motion } from "motion/react";
import { ServiceCategory } from "../types";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "content-creation",
    number: "01",
    title: "Content Creation",
    leftItems: [
      "Brand Content Creation",
      "Product Photography",
      "Lifestyle Photography",
      "Promotional Content",
    ],
    rightItems: [
      "Social Media Content",
      "UGC-style Content",
      "AI-powered Content",
    ],
  },
  {
    id: "video-production",
    number: "02",
    title: "Video Pre & Post Production",
    leftItems: [
      "Concept Development",
      "Scriptwriting & Storyboarding",
      "Creative Direction",
      "Video Editing",
      "Motion Graphics & Animation",
    ],
    rightItems: [
      "Color Correction & Grading",
      "Sound Design",
      "Visual Effects (VFX)",
      "Reels, Shorts & YouTube",
    ],
  },
  {
    id: "graphic-design",
    number: "03",
    title: "Graphic Design",
    leftItems: [
      "Social Media Graphics",
      "Advertising Creatives",
      "Marketing Materials",
      "Thumbnail Design",
    ],
    rightItems: [
      "Packaging & Label Design",
      "Brochure, Flyer & Poster",
      "Presentation Design",
      "Infographic Design",
    ],
  },
  {
    id: "branding-logo-design",
    number: "04",
    title: "Branding & Logo Design",
    leftItems: [
      "Brand Identity Development",
      "Logo Design & Redesign",
      "Logo Variations & Brand Marks",
      "Colour Palette & Typography",
    ],
    rightItems: [
      "Brand Guidelines & Usage Rules",
      "Business Card & Stationery",
      "Visual Brand Assets",
      "Brand Refresh & Rebranding",
    ],
  },
  {
    id: "web-design-development",
    number: "05",
    title: "Web Design & Development",
    leftItems: [
      "Custom Website Design",
      "Responsive Design (All Devices)",
      "UI/UX Design & Prototyping",
      "Business & Corporate Sites",
      "Landing Page Design",
      "E-commerce Website Design",
    ],
    rightItems: [
      "Development & Integration",
      "CMS Setup",
      "Redesign & Optimization",
      "Basic On-page SEO",
      "Maintenance & Support",
    ],
  },
  {
    id: "social-media-marketing",
    number: "06",
    title: "Social Media Marketing",
    leftItems: [
      "Social Media Strategy",
      "Social Media Management",
      "Content Planning & Scheduling",
      "Community Management",
    ],
    rightItems: [
      "Paid Social Advertising",
      "Audience Research",
      "Campaign Management",
      "Analytics & Reporting",
    ],
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-24 bg-transparent relative border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Editorial Header matching Service Menu PDF */}
        <motion.div
          viewport={{ once: true, margin: "-80px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16"
        >
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-2.5 text-xs font-bold tracking-[0.22em] text-gray-400 dark:text-gray-300">
              <span className="text-[#e83e27]" aria-hidden="true">
                ●
              </span>
              <span>Service Menu</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-black dark:text-white leading-none [text-wrap:balance]">
              Our Services<span className="text-[#e83e27]">.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
              We bring creative thinking, strategic planning and digital expertise
              together to help businesses build a strong identity, communicate
              clearly and grow online.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-6">
            <div className="text-left lg:text-right space-y-1">
              <p className="font-display text-xs sm:text-sm font-semibold tracking-[0.18em] text-gray-500 dark:text-gray-300">
                Creative Solutions.
              </p>
              <p className="font-display text-xs sm:text-sm font-bold tracking-[0.18em] text-black dark:text-white">
                Strategic Growth.
              </p>
            </div>

            <a
              id="download-service-menu-pdf"
              href="/assets/aistudio/Alt_Dot_Creative_Service_Menu__1__3ca94a3c.pdf"
              download="Alt-DOT-Creative-Service-Menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-liquid-glass group inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-xs font-bold text-black dark:text-white cursor-pointer whitespace-nowrap shrink-0"
            >
              <FileDown
                size={15}
                className="text-[#e83e27] transition-transform duration-200 group-hover:translate-y-0.5"
              />
              <span>Download Service Menu (PDF)</span>
            </a>
          </div>
        </motion.div>

        {/* 2-Column Numbered Service Cards Grid matching PDF Menu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => (
            <motion.article
              key={service.id}
              id={`service-card-${service.id}`}
              viewport={{ once: true, margin: "-60px" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: (index % 2) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white dark:bg-[#111215] border border-gray-200 dark:border-white/10 hover:border-[#e83e27]/60 dark:hover:border-[#e83e27]/60 rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                {/* Card Header: Vermilion Number Circle + Bold Service Title */}
                <div className="flex items-center space-x-4 mb-7">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#e83e27] text-white font-display font-bold text-sm sm:text-base tabular-nums flex items-center justify-center shrink-0 shadow-sm">
                    {service.number}
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-black dark:text-white tracking-tight leading-snug group-hover:text-[#e83e27] transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>

                {/* 2-Column Deliverable List matching Official PDF */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  <ul className="space-y-3">
                    {service.leftItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start space-x-2.5 text-sm text-gray-700 dark:text-gray-300 font-normal leading-snug"
                      >
                        <span
                          className="text-[#e83e27] text-xs leading-5 select-none shrink-0"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-3">
                    {service.rightItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start space-x-2.5 text-sm text-gray-700 dark:text-gray-300 font-normal leading-snug"
                      >
                        <span
                          className="text-[#e83e27] text-xs leading-5 select-none shrink-0"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Conversion Footer Action */}
              <div className="pt-6 mt-8 border-t border-gray-100 dark:border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-normal tabular-nums">
                  {service.leftItems.length + service.rightItems.length} specialized deliverables
                </span>

                <button
                  type="button"
                  id={`inquire-service-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-black dark:text-white group-hover:text-[#e83e27] hover:text-[#e83e27] transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 py-1.5 px-3 rounded-lg hover:bg-[#e83e27]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e83e27]"
                >
                  <span>Request Service Brief</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
