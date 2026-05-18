import endeavourLogo from "@/assets/clients/endeavour.jpg";
import swasthyaLogo from "@/assets/clients/swasthya.jpg";
import socialEndeavour from "@/assets/portfolio/social-endeavour.jpg";
import socialHulk from "@/assets/portfolio/social-hulk.jpg";
import socialHulkPost from "@/assets/portfolio/social-hulk-post.jpg";
import videoPhysio from "@/assets/portfolio/video-physio.jpg";
import videoWomen from "@/assets/portfolio/video-women.jpg";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: "Logo" | "Social" | "Video" | "Print" | "Branding";
  year: string;
  hero: string;
  logo?: string;
  summary: string;
  services: string[];
  problem: string;
  approach: string[];
  results: { label: string; value: string; note?: string }[];
  deliverables: { title: string; src: string }[];
  quote?: { text: string; author: string };
  next?: { slug: string; title: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "endeavour-ladakh",
    title: "Scaling a Himalayan travel brand to 29K+ followers",
    client: "Endeavour Ladakh",
    category: "Social",
    year: "2024",
    hero: socialEndeavour,
    logo: endeavourLogo,
    summary:
      "Designing a visual language for a Leh-based motorbiking company that turns circuit maps and rider stories into scroll-stopping creatives.",
    services: ["Social Media Creatives", "Story Ads", "Route Illustrations"],
    problem:
      "Endeavour Ladakh runs premium Himalayan bike expeditions but was relying on raw photography and inconsistent templates. Feed lacked a signature style, and story ads weren't converting scrolls into inquiries.",
    approach: [
      "Built a grid system around illustrated route maps — the Manali–Leh–Srinagar circuit, Umling-La expedition, and 7N/8D adventures — so every creative tells a tour at a glance.",
      "Developed a typographic hierarchy that reads on a phone: massive destination names, pricing anchors, and a consistent header lockup.",
      "Ran story ads in a cinematic 9:16 format with a clear CTA — Book Your Sukoon — instead of passive awareness posts.",
    ],
    results: [
      { label: "Followers", value: "29.3K", note: "on Instagram" },
      { label: "Posts Shipped", value: "625+", note: "feed + stories" },
      { label: "Tours Marketed", value: "10+", note: "incl. Zanskar, Pangong, Umling-La" },
      { label: "Style Consistency", value: "100%", note: "unified grid system" },
    ],
    deliverables: [
      { title: "Manali–Leh–Srinagar Circuit Creative", src: socialEndeavour },
    ],
    quote: {
      text: "The creative for our Manali–Leh–Srinagar circuit tour was a scroll-stopper. Inquiries jumped within days of posting.",
      author: "Team · Endeavour Ladakh",
    },
    next: { slug: "hulk-nutrition", title: "Hulk Nutrition — Social carousel that sells" },
  },
  {
    slug: "hulk-nutrition",
    title: "A nutrition-facts carousel that actually gets saved",
    client: "Hulk Nutrition",
    category: "Social",
    year: "2024",
    hero: socialHulk,
    summary:
      "Launch creative for Muscle 8 Iso Hydro — turning a protein SKU into a scroll-saving carousel that reads like a product page.",
    services: ["Product Launch Creative", "Social Carousel", "Spec Callouts"],
    problem:
      "Fitness brands blur together on Instagram — product-on-colored-background loops that nobody remembers. Hulk needed creative that communicated the protein's specs fast and held the viewer through 4+ slides.",
    approach: [
      "Opened with a single hero slide that communicates the hook in one glance — product + headline claim.",
      "Layered spec callouts (27g protein, 5.9g BCAA, 4.73g glutamine, 71 servings) on the nutrition slide so saves convert into repeat viewing.",
      "Kept the color story tight — amber + cream — so every Hulk asset is recognizable at thumbnail size in the feed.",
    ],
    results: [
      { label: "Format", value: "Carousel", note: "optimized for saves + shares" },
      { label: "Slides", value: "4+", note: "hero → specs → benefits → CTA" },
      { label: "Product Line", value: "Muscle 8 Iso Hydro", note: "full launch creative" },
      { label: "Brand Recognition", value: "High", note: "consistent color story" },
    ],
    deliverables: [
      { title: "Muscle 8 Iso Hydro — Hero", src: socialHulk },
      { title: "Nutrition Facts Carousel", src: socialHulkPost },
    ],
    quote: {
      text: "Premium, on-brand, and crisp. Exactly the kind of creative our SKU launches needed.",
      author: "Marketing · Hulk Nutrition",
    },
    next: { slug: "swasthya-physiotherapy", title: "Swasthya Physiotherapy — Video content that educates" },
  },
  {
    slug: "swasthya-physiotherapy",
    title: "Explainer reels that turn a clinic into authority",
    client: "Swasthya Physiotherapy",
    category: "Video",
    year: "2024",
    hero: videoPhysio,
    logo: swasthyaLogo,
    summary:
      "Clinical explainer reels — 7 Benefits of Physiotherapy, 8 Factors Affecting Women's Health — built to educate first, convert second.",
    services: ["Video Editing", "Reel Ads", "Motion Graphics", "Captioning"],
    problem:
      "Healthcare content on Instagram is either too promotional or too clinical. Swasthya needed reels that build trust with patients without sounding like ads — and that rank in Reels search for physiotherapy-related queries.",
    approach: [
      "Structured every reel around a numbered listicle — 7 Benefits, 8 Factors — because list formats out-perform free-form content in Reels retention.",
      "Added on-screen captions styled as bold yellow-white chromatic accents over a clinical blue backdrop — readable muted, brand-consistent across the clinic's feed.",
      "Cut every reel to <60s with a hook in the first 2 seconds, list payoff in the middle, and a soft CTA at the end (book a consultation).",
    ],
    results: [
      { label: "Reels Shipped", value: "Multiple", note: "listicle format" },
      { label: "Retention Hook", value: "<2s", note: "list number + benefit" },
      { label: "Caption Coverage", value: "100%", note: "for muted-autoplay viewers" },
      { label: "Content Series", value: "Benefits + Factors", note: "repeatable format" },
    ],
    deliverables: [
      { title: "7 Benefits of Physiotherapy", src: videoPhysio },
      { title: "8 Factors · Women's Health", src: videoWomen },
    ],
    quote: {
      text: "Our explainer reels genuinely changed how patients find us. Crisp, clinical, shareable.",
      author: "Clinic Lead · Swasthya Physiotherapy",
    },
    next: { slug: "endeavour-ladakh", title: "Endeavour Ladakh — Scaling a travel brand on social" },
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
