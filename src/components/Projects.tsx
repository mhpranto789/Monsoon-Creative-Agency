import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import ProjectSpotlight from "./ProjectSpotlight";

const PROJECTS_DATA: Project[] = [
  {
    id: "coke-studio",
    title: "Coke Studio Bangla 2023",
    category: "Experiential",
    type: "Experiential & Live Brand Campaign",
    year: "2023",
    description: "Re-imagined the live music experience across Bangladesh, executing multi-touchpoint sound stages, immersive venue setups, and cultural art fusions that gathered over 20,000 passionate music fans in-person.",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Footfall & Digital Organic Reach", value: "11M" },
    campaignGoals: [
      "Full Ground Stage Production for 20K live audience",
      "Localized Interactive Zones utilizing augmented mirrors",
      "Real-time Digital UGC Broadcasting Hub & Stream alignment"
    ],
    tagline: "Uniting 20,000 live beats under a unified, premium cultural anthem.",
    timeline: "8-Week Live Build-up",
    channelsUsed: ["Soundstage Scenography", "RFID Crowd Control", "Traditional Alpona Art Activations", "OOH Broadcasts"],
    galleryImages: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Direct Venue Footfall", value: "24,500+", subtext: "Audited RFID access tokens" },
      { label: "Co-Branded Social Buzz", value: "11.2M+", subtext: "Direct mentions & audio usage" },
      { label: "Earned Media Multiplier", value: "6.8x", subtext: "National news coverage value" }
    ],
    clientQuote: {
      text: "Monsoon turned our activation brief into a historic cultural milestone for music lovers in Bangladesh. Unbelievable precision on tight schedules.",
      author: "Lead Experiential Officer",
      role: "Coke Studio Bangla Portfolio"
    },
    youtubeId: "VNo9V7SPhYk"
  },
  {
    id: "honda-sp125",
    title: "Honda SP125 Launch",
    category: "Creative",
    type: "National ATL Launch & TVC Development",
    year: "2024",
    description: "Crafted a high-octane visual identity and television commercial highlighting speed, safety, and modern design aesthetics. Redefined the 125cc tier with bold typography and cinematic camera narratives.",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Pre-Orders & Dealer Inquiries", value: "3.4" },
    campaignGoals: [
      "Cinematic Directing in high-definition low-light environments",
      "Interactive 3D Projection mapping launches across regional dealer hubs",
      "OOH Static Dominance in major arterial roads of Dhaka and Chittagong"
    ],
    tagline: "Redefining street mechanics with premium high-contrast visual narratives.",
    timeline: "6-Week TVC & ATL Pipeline",
    channelsUsed: ["Cinematic TVC Production", "Interactive Showrooms", "Mega OOH Static Bilboards"],
    galleryImages: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Total Digital Impressions", value: "14.8M", subtext: "YouTube & Meta premium bumper spots" },
      { label: "Showroom Inquiries Uplift", value: "+340%", subtext: "Audited via dealer CRM portals" },
      { label: "Cinema Recall Accuracy", value: "88.5%", subtext: "Post-launch focus group analysis" }
    ],
    clientQuote: {
      text: "The cinematic tone paired with localized street semantics completely revolutionized the marketing playbook for our commuter line.",
      author: "Marketing Strategist",
      role: "Bangladesh Honda Private Ltd."
    },
    youtubeId: "WId_3Y7T004"
  },
  {
    id: "bkash-boishakh",
    title: "bKash Pure Bangla Boishakh",
    category: "Creative",
    type: "Creative Strategy & Brand Illustration",
    year: "2024",
    description: "A digital-first cultural art campaign combining traditional Bangladeshi folk illustrations with ultra-sleek UI elements. Included user-generated dynamic greeting generators and customized app stickers.",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "User Generated Cards Created", value: "1.2" },
    campaignGoals: [
      "Traditional Folk Art revival with celebrated local micro-illustrators",
      "Localized story prompts evoking emotional response during Bangladesh New Year",
      "Custom interface integration within the bKash core consumer app"
    ],
    tagline: "Breathe new visual life into traditional rickshaw and folk illustrations.",
    timeline: "4-Week Digital Sprint",
    channelsUsed: ["Micro-interaction UX", "Traditional Illustration", "Social Generator Applets"],
    galleryImages: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Interactive greeting creators", value: "1.2M", subtext: "Unique customized cards exported" },
      { label: "Core App Usage Uplift", value: "+22%", subtext: "Target transactional focus hours" },
      { label: "Positive organic brand love", value: "98.1%", subtext: "Filtered comments classification index" }
    ],
    clientQuote: {
      text: "Monsoon crafted an experience that merged corporate utility with genuine raw folk pride. Users felt the connection instantly on Boishakh morning.",
      author: "Corporate PR Director",
      role: "bKash Brand Core Committee"
    },
    youtubeId: "g-tSHe7gqoo"
  },
  {
    id: "gp-future",
    title: "Grameenphone Future-Ready",
    category: "Experiential",
    type: "Corporate Tech Summit & Experiential Portal",
    year: "2023",
    description: "Designed a multi-sensory interactive tunnel utilizing motion-triggered LED projections and real-time AI analytics mapping. Provided key stakeholders with an unforgettable immersion into future connectivity.",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Executive NPS Rating Score", value: "2.8" },
    campaignGoals: [
      "Design spatial 3D blueprint for complex LED physical interactive tunnel",
      "Synchronize multi-channel directional soundscapes matching visual motions",
      "Track corporate visitor engagement to showcase telecommunications impact"
    ],
    tagline: "Synthesizing spatial projection and electronic sensors for telecommunication portals.",
    timeline: "5-Week Design & Hardware Fabrication",
    channelsUsed: ["LED Spatial Blueprints", "Electronic Motion Sensors", "Spatial Audio choreography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "VIP Leader Interactions", value: "2,500+", subtext: "Validated on-board executive credentials" },
      { label: "Event NPS Score", value: "98.8%", subtext: "Verified through digital polling" },
      { label: "B2B Lead Pipeline value", value: "$4.1M", subtext: "Strategic contracts initiated" }
    ],
    clientQuote: {
      text: "They designed a portal that set new benchmarks for professional stakeholder events in Bangladesh.",
      author: "Head of Experiential Events",
      role: "Grameenphone Corporate Marketing"
    },
    youtubeId: "HkKq2eS805U"
  },
  {
    id: "aarong-fashion",
    title: "Aarong Luxury Autumn",
    category: "Creative",
    type: "Premium Editorial Catalog & Social Strategy",
    year: "2023",
    description: "Directed an elegant, high-contrast lifestyle photoshoot for Aarong's flagship Autumn collection, utilizing deep terracotta clays and natural light profiles to capture heritage in a contemporary silhouette.",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Campaign eCommerce Conversions", value: "1.5" },
    campaignGoals: [
      "Direct heritage model photo-sessions utilizing natural Dhaka landscapes",
      "Coordinate interactive premium visual catalogs with high-end print standards",
      "Align micro-influencer channels to highlight sustainable handmade fabrics"
    ],
    tagline: "Framing contemporary visual silhouettes against Bangladesh's traditional clay landscapes.",
    timeline: "4-Week Creative Direction",
    channelsUsed: ["Editorial Art Direction", "Influencer Placement Modeling", "Eco-friendly catalogs"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Direct Sales Conversion", value: "+45%", subtext: "eCommerce tracking post-exposure" },
      { label: "Print circulation reach", value: "85,000", subtext: "Audited delivery lists" },
      { label: "Social Interactions engagement", value: "1.5M+", subtext: "Sustained engagement rate over 5%" }
    ],
    clientQuote: {
      text: "An absolute visual masterclass that combined deep root clay motifs with premium metropolitan elegance.",
      author: "Creative Director",
      role: "Aarong Luxury Division"
    },
    youtubeId: "n_2Z16-a944"
  },
  {
    id: "pepsi-soundwave",
    title: "Pepsi Soundwave Activations",
    category: "Experiential",
    type: "Multi-City Experiential Music Tour",
    year: "2024",
    description: "Built fully sensory, branded sound-booths equipped with voice-activated light walls where festival visitors could craft custom musical beats and receive hyper-personalized digital dynamic souvenirs.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Digital UGC Shares On TikTok/FB", value: "8.5" },
    campaignGoals: [
      "Develop custom voice sensing microcontrollers translating decibel frequencies",
      "Construct robust transportable sound-booth booths for multi-city outdoor deployments",
      "Deploy localized QR-code generation pipelines for instantly downloadable digital video files"
    ],
    tagline: "Giving youth audiences the microphone to create their own branded visual soundtrack.",
    timeline: "7-Week Fabrication & Regional Deployment",
    channelsUsed: ["Electronic Sensors Fabrication", "On-the-ground Brand Ambassadors", "Automatic video encoding pipeline"],
    galleryImages: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1481162854517-d9e353af153d?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Custom Beat Tracks Designed", value: "48,200", subtext: "Unique recordings created live" },
      { label: "Social Video Shares", value: "85K+", subtext: "Audited organic reach TikTok indicators" },
      { label: "Product Sampling distribution", value: "210,000+", subtext: "Target youth campus drops" }
    ],
    clientQuote: {
      text: "The integration of physical audio microchips and prompt QR video templates generated our biggest seasonal youth engagement metric ever.",
      author: "Brand Lead BD Division",
      role: "PepsiCo International Group"
    },
    youtubeId: "lYfK-9p7E7g"
  },
  {
    id: "sunsilk-divas",
    title: "Sunsilk Fashion Divas",
    category: "Creative",
    type: "Digital Campaign & Custom Influencer Filters",
    year: "2024",
    description: "An interactive, digital-native beauty pageant campaign enabling Sunsilk hair-styling enthusiasts in Bangladesh to style and share virtual avatars using dynamic AR face-recognition tools.",
    imageUrl: "https://images.unsplash.com/photo-1595959183075-c1d09e510826?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Interactive Users Reach", value: "6.2" },
    campaignGoals: [
      "Develop customized hyper-real hair filters depicting Bangladeshi cultural hairstyles",
      "Deploy responsive face-recognition triggers on native social frameworks",
      "Host national fashion meetups in Banani for selected digital pageantry winners"
    ],
    tagline: "Empowering young Bangladeshi styling talent with highly interactive social avatars.",
    timeline: "5-Week Digital Pageantry Sprint",
    channelsUsed: ["AR Interactive Filters", "Micro-influencer Spotlights", "Eco-friendly Runway Meets"],
    galleryImages: [
      "https://images.unsplash.com/photo-1595959183075-c1d09e510826?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Aggregate UGC Creations", value: "320,000+", subtext: "Unique selfie configurations exported" },
      { label: "Total Campaign Impressions", value: "6.2M", subtext: "Audited YouTube/Meta short spots" },
      { label: "Superstore Sales Uplift", value: "+18.5%", subtext: "Direct category conversion checks" }
    ],
    clientQuote: {
      text: "A masterpiece in digital beauty interaction. Our customer retention during Boishakh reached an all-time record.",
      author: "Category Brand Advisor",
      role: "Unilever Bangladesh Portfolio"
    },
    youtubeId: "6Y9O_0qWpQA"
  },
  {
    id: "robi-independence",
    title: "Robi Victory Projection",
    category: "Experiential",
    type: "National Day 3D Projection Mapping",
    year: "2023",
    description: "Executed a massive night-time 3D spatial video projection mapping on heritage structures in Dhaka, highlighting independent connectivity achievements of Robi subscribers through high-lumen lasers.",
    imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Aggregate National Audience", value: "12M" },
    campaignGoals: [
      "Calibrate precise structural projections over historical solid brick surfaces",
      "Write multi-channel surround acoustic soundtrack matching volumetric visuals",
      "Deploy real-time SMS broadcasting triggers rendering subscriber names live"
    ],
    tagline: "Redefining patriotism through large-scale, interactive volumetric street cinema.",
    timeline: "7-Week Setup & Hardware Calibration",
    channelsUsed: ["3D Projection Mapping", "Surround Sound Scenography", "Real-Time Laser Cast Tech"],
    galleryImages: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "At-Plaza Live Spectators", value: "145,000+", subtext: "Estimated regional high-density crowd" },
      { label: "Broadcast Live Reach", value: "12.4M", subtext: "Multi-channel combined streams" },
      { label: "Brand Affinity Enhancement", value: "+84%", subtext: "Audited brand choice indicators" }
    ],
    clientQuote: {
      text: "A breathtaking historic event. Witnessing Dhaka residents see their own names projected on physical facades was truly unforgettable.",
      author: "Executive VP Media & Brand",
      role: "Robi Axiata Group"
    },
    youtubeId: "gNfA1i4pD4Q"
  },
  {
    id: "nido-parent",
    title: "Nestlé Nido Parent Pride",
    category: "Creative",
    type: "Premium Editorial Guide & Healthcare Portal",
    year: "2024",
    description: "Styled a warm, heritage-friendly digital handbook and high-contrast print companion celebrating early childhood milestones. Emphasized clean interior styling and interactive health parameters.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Handbook Downloads & Bookings", value: "1.4" },
    campaignGoals: [
      "Co-write pediatric nutritional roadmaps with top medical practitioners",
      "Direct contemporary lifestyle photo-shoot reflecting daylight family dynamics",
      "Build a lightweight parent tracker dashboard for custom health profiling"
    ],
    tagline: "Framing childhood care with supportive, clean layout designs and professional advice.",
    timeline: "6-Week Editorial & Design Design",
    channelsUsed: ["Bespoke Fabric Book Bindings", "Natural Daylight Photo Direction", "Interactive Parent Dashboards"],
    galleryImages: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1481162854517-d9e353af153d?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Guidebooks Downloaded", value: "140,000+", subtext: "Direct tracking links" },
      { label: "Nutrition Profile setups", value: "84,200", subtext: "Unique profiles logged" },
      { label: "In-store Booklet Handouts", value: "45,000", subtext: "Coordinated distribution networks" }
    ],
    clientQuote: {
      text: "Monsoon crafted a guide that parents kept as a true family keepsake. The design language is exceptionally comforting.",
      author: "Lead Nutrition Specialist",
      role: "Nestlé Nutrition Division"
    },
    youtubeId: "S-EbyF8kFmI"
  },
  {
    id: "pathao-ride",
    title: "Pathao Commuter Pride",
    category: "Creative",
    type: "Commuter Safety Styling & Transit Campaign",
    year: "2023",
    description: "Designed stylized protective rider clothing and commuters' gear. Blended iconic rickshaw folk geometry with high-contrast warning elements to make road safety look cool and recognizable.",
    imageUrl: "https://images.unsplash.com/photo-1444926468159-d96dbf08f19f?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Helmets Deployed & Shares", value: "3.5" },
    campaignGoals: [
      "Re-style motorcycle helmets into fashionable metropolitan accessories",
      "Publish high-impact static typography banners explaining highway safety indexes",
      "Enable instant helmet-camera photo check-ins across ride-sharing hubs"
    ],
    tagline: "Pairing protective gear with high-contrast, stylized urban typography elements.",
    timeline: "4-Week Rapid Industrial & Brand Design",
    channelsUsed: ["Aesthetic Commuter Gears", "Urban Typography Layouts", "Metropolitan Transit Posters"],
    galleryImages: [
      "https://images.unsplash.com/photo-1444926468159-d96dbf08f19f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Stylized Safety Helmets distributed", value: "15,000+", subtext: "Active courier deployments" },
      { label: "Aggregate Social Mentions", value: "3.5M+", subtext: "Street perspective snapshots" },
      { label: "Commuting Safety Rating Shift", value: "+14.6%", subtext: "Evaluated through traffic surveys" }
    ],
    clientQuote: {
      text: "Commuters actually wear our safety gear proud because the geometric typography looks like premium urban wear.",
      author: "Marketing Operations Leader",
      role: "Pathao Bangladesh Corporate"
    },
    youtubeId: "K8K_9bL7JvM"
  },
  {
    id: "cineplex-redcarpet",
    title: "Star Cineplex Dune Gala",
    category: "Experiential",
    type: "Premium Spatial Rigging & VIP Experience",
    year: "2024",
    description: "Designed and built an architectural block entry tunnel featuring physical red deserts, dramatic focus lights, and camera tracks for Dhaka's elite film premier evening.",
    imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "VIP Reach & Digital Broadcast", value: "4.5" },
    campaignGoals: [
      "Deploy deep scenic sand layouts portraying futuristic cinematic environments",
      "Assemble high-speed camera tracks to capture automated celebrity entry clips",
      "Encode slow-motion templates with dynamic musical tracks for immediate sharing"
    ],
    tagline: "Staging immersive premiere formats with elite hardware and volumetric light designs.",
    timeline: "3-Week Intensive Assembly Setup",
    channelsUsed: ["Spatial Tunnel Rigging", "Motion Camera Tracks", "Celebrity Video Portals"],
    galleryImages: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Executive & Star Guests", value: "480+", subtext: "Audited invite check-ins" },
      { label: "Co-Branded Social Buzz", value: "4.5M+", subtext: "Organic shares by VIP attendees" },
      { label: "Brand Recall Score", value: "98.2%", subtext: "Post-event questionnaires feedback" }
    ],
    clientQuote: {
      text: "Literally the premier red carpet layout Dhaka has ever witnessed. The spatial framing was majestic.",
      author: "Group PR Director",
      role: "Star Cineplex Group Bangladesh"
    },
    youtubeId: "_vQ6qV5ZJ8E"
  },
  {
    id: "radhuni-feasts",
    title: "Radhuni Boishakhi Feasts",
    category: "Creative",
    type: "Voice Interactive Cooking & Digital Portal",
    year: "2024",
    description: "Built a responsive, hands-free cooking assistant for traditional Bangladeshi home kitchens, featuring chef guides, cultural illustration backdrops, and interactive recipe checklists.",
    imageUrl: "https://images.unsplash.com/photo-1596790018505-1840ad30737a?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Interactive Recipe Checkouts", value: "1.8" },
    campaignGoals: [
      "Write comprehensive voice-command modules for humid cooking environments",
      "Direct professional cinematic food tutorials celebrating regional spices",
      "Form localized user-generated challenges with instant digital certificates"
    ],
    tagline: "Fusing traditional spice wisdom with modern voice interaction technologies.",
    timeline: "5-Week System Build",
    channelsUsed: ["No-Touch Voice Portal", "Cinematic Culinary Guides", "Custom UGC Badge Generators"],
    galleryImages: [
      "https://images.unsplash.com/photo-1596790018505-1840ad30737a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Active Co-Cooking Sessions", value: "185,000+", subtext: "No-touch triggers executed" },
      { label: "Digital Shares", value: "1.8M+", subtext: "Dishes and recipe exports" },
      { label: "Direct Checkout Uplift", value: "+32%", subtext: "Radhuni premium range sales" }
    ],
    clientQuote: {
      text: "Square Food values heritage. This campaign combined raw nostalgic taste with highly functional UX.",
      author: "Marketing Director",
      role: "Square Food & Beverage Ltd."
    },
    youtubeId: "K_Xre2LpMTY"
  },
  {
    id: "airtel-tour",
    title: "Airtel Student Campus Gigs",
    category: "Experiential",
    type: "Underground Campus Concert Series",
    year: "2023",
    description: "Coordinated a high-octane 12-campus tour showcasing localized indie music bands, high-contrast neon photography domes, and modern cloud gaming portals for university students.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Youth Campus Subscriptions", value: "5.5" },
    campaignGoals: [
      "Deploy self-standing modular neon geodomes into college grounds gracefully",
      "Promote underground independent musicians from Dhaka and Chittagong hubs",
      "Draft dynamic telemetry dashboard to stream esports tournaments live"
    ],
    tagline: "Connecting campus raw talent with electrifying sound stage executions.",
    timeline: "8-Week Regional Roadshow",
    channelsUsed: ["Modular Neon Domes", "Underground Stage Scenography", "Mobile Esports Portal"],
    galleryImages: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Student Event Check-ins", value: "58,400+", subtext: "Verified college IDs" },
      { label: "Live Broadcast views", value: "5.5M", subtext: "Audited YouTube Streams" },
      { label: "Brand Choices Shift", value: "+28%", subtext: "Youth target market survey index" }
    ],
    clientQuote: {
      text: "They managed the logistical complexity with elite security and breathtaking aesthetic designs.",
      author: "Student Segments Advisor",
      role: "Airtel Bangladesh Marketing"
    },
    youtubeId: "tT9V6-zCeg0"
  },
  {
    id: "apex-crafts",
    title: "Apex Heritage Handmade",
    category: "Creative",
    type: "Editorial Modeling & Craft Documentary",
    year: "2024",
    description: "Framed an elegant lifestyle photography session for Apex's premium leather shoes, showcasing handcrafted leather weaving and traditional sustainable methods inside histortical quarters.",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "eCommerce Conversions Rate", value: "2.4" },
    campaignGoals: [
      "Direct heritage photography sessions in high-contrast traditional environments",
      "Draft sustainable tactile packaging catalogs made of raw organic jute thread",
      "Produce a short documentary film capturing Dhaka's shoe weavers' daily stories"
    ],
    tagline: "Celebrating shoes made by hands with deep documentary-style portraits.",
    timeline: "5-Week Creative Strategy",
    channelsUsed: ["Documentary Photography", "Sustainable Fabric Packaging", "Short Video Narratives"],
    galleryImages: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Direct Online Referrals", value: "+110%", subtext: "Baseline launch conversions" },
      { label: "Weaver Film impressions", value: "2.4M+", subtext: "Combined documentary views" },
      { label: "Pre-Order stocks claimed", value: "6,200 pairs", subtext: "Sold out within 14 days" }
    ],
    clientQuote: {
      text: "They filmed our heritage and the actual hands that weave them with tremendous craft and respect.",
      author: "Creative Operations Head",
      role: "Apex Footwear Limited Bangladesh"
    },
    youtubeId: "n_2Z16-a944"
  },
  {
    id: "sheba-portraits",
    title: "Sheba Comfort Heroes",
    category: "Creative",
    type: "Transit PR & Short Cinematic Stories",
    year: "2023",
    description: "Designed a city-wide public transport transit campaign highlighting domestic electricians and technicians. Enhanced the dignity of skilled service heroes with cinema-quality close-ups.",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    stats: { label: "Service Booking Uplift index", value: "2.1" },
    campaignGoals: [
      "Stave transit poster grids in central urban metro channels",
      "Produce cinematic profiles highlighting mechanics and electrical technicians",
      "Streamline rapid digital codes correlating commuting times with service bookings"
    ],
    tagline: "Giving skilled domestic contractors the dignity of cinematic, high-contrast framing.",
    timeline: "4-Week Rapid Execution",
    channelsUsed: ["Cinematic Portraits", "City Transit Posters", "Time-Based Digital Vouchers"],
    galleryImages: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
    ],
    metricsDetail: [
      { label: "Domestic Bookings growth", value: "+44%", subtext: "Active metropolitan service area" },
      { label: "Transit Ad Impressions", value: "2.1M", subtext: "Dhaka Transit audited traffic" },
      { label: "Service Net Income uplift", value: "1.4x", subtext: "Direct tracking feedback" }
    ],
    clientQuote: {
      text: "The dignity and cinematic focus Monsoon placed on our service heroes was profoundly inspiring.",
      author: "VP Core Strategy",
      role: "Sheba Platform Ltd. Bangladesh"
    },
    youtubeId: "b-FstjK8q3U"
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Creative' | 'Experiential'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#FAFAF9] dark:bg-[#050505] border-t border-gray-100 dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
         {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white leading-none">
              Featured Projects<span className="text-brand-primary">.</span>
            </h2>
            <p className="font-sans text-gray-500 dark:text-gray-400 max-w-lg text-sm font-light">
              We connect brands to audiences through outstanding storytelling, impactful visuals, and multi-sensory ground setups. Explore our campaigns.
            </p>
          </div>

          {/* Tab Filters */}
          <div className="flex items-center space-x-1 border border-gray-200 dark:border-white/10 p-1 bg-white dark:bg-[#121212] inline-flex self-start md:self-auto rounded-full shadow-sm transition-all duration-200">
            {(['All', 'Creative', 'Experiential'] as const).map((cat) => (
              <button
                key={cat}
                id={`filter-${cat}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs font-sans font-semibold tracking-normal rounded-full cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${
                  (selectedCategory === cat) 
                    ? "btn-liquid-glass-primary shadow-sm" 
                    : "btn-liquid-glass text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white dark:bg-[#121212] border border-gray-200/80 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Wrapper */}
                <div className="relative aspect-video sm:aspect-[4/3] w-full bg-gray-100 dark:bg-zinc-805 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Category Badge & Year */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-white bg-black dark:bg-[#1E3A8A] px-2.5 py-1 z-10">
                      {project.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs font-bold text-white drop-shadow-md z-10">
                      {project.year}
                    </span>
                  </div>

                  {project.youtubeId && (
                    <div className="absolute bottom-4 right-4 bg-[#1E3A8A] text-white text-[8px] font-mono font-black tracking-widest uppercase py-1.5 px-3.5 z-10 flex items-center space-x-1.5 shadow-md border border-white/10 rounded-none">
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>CAMP_VIDEO</span>
                    </div>
                  )}
                </div>

                {/* Info Area */}
                <div className="p-6 border-t border-gray-200 dark:border-white/10 flex justify-between items-center bg-white dark:bg-[#141414] group-hover:bg-[#FAF9F6] dark:group-hover:bg-[#1C1C1C] transition-colors">
                  <div>
                    <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500 block tracking-wider uppercase mb-1">
                      {project.type}
                    </span>
                    <h3 className="font-display font-black text-lg text-black dark:text-white group-hover:text-[#1E3A8A] dark:group-hover:text-[#1E3A8A] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className="ml-4 p-2 bg-gray-100 dark:bg-white/5 text-black dark:text-white group-hover:bg-black dark:group-hover:bg-[#1E3A8A] group-hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Immersive Case Study Spotlight Portal */}
        <AnimatePresence>
          {selectedProject && (() => {
            const index = PROJECTS_DATA.findIndex(p => p.id === selectedProject.id);
            return (
              <ProjectSpotlight
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                allProjectsCount={PROJECTS_DATA.length}
                currentIndex={index}
                onNext={() => {
                  const nextIdx = (index + 1) % PROJECTS_DATA.length;
                  setSelectedProject(PROJECTS_DATA[nextIdx]);
                }}
                onPrev={() => {
                  const prevIdx = (index - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
                  setSelectedProject(PROJECTS_DATA[prevIdx]);
                }}
              />
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
