import { useRef, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logoRoyalBlush from "@/assets/portfolio/logo-royal-blush.jpg";
import logoSis from "@/assets/portfolio/logo-sis-mug.jpg";
import logoEhouse from "@/assets/portfolio/logo-e-house.jpg";
import logoEnvy from "@/assets/portfolio/logo-envy.jpg";
import logoRadhe from "@/assets/portfolio/logo-radhe.jpg";
import logoFabie from "@/assets/portfolio/logo-fabie.jpg";

import socialEndeavour from "@/assets/portfolio/social-endeavour.jpg";
import socialHulk from "@/assets/portfolio/social-hulk.jpg";
import socialHulkPost from "@/assets/portfolio/social-hulk-post.jpg";

import videoBridal from "@/assets/portfolio/video-bridal.jpg";
import videoSaree from "@/assets/portfolio/video-saree.jpg";
import videoPhysio from "@/assets/portfolio/video-physio.jpg";
import videoWomen from "@/assets/portfolio/video-women.jpg";

import printRudraj from "@/assets/portfolio/print-rudraj-card.jpg";
import printBrochure from "@/assets/portfolio/print-brochure.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Cat = "All" | "Logo" | "Social" | "Video" | "Print";

type Item = {
  src: string;
  title: string;
  client: string;
  cat: Cat;
  tall?: boolean;
  caseStudy?: string;
};

const items: Item[] = [
  { src: logoRoyalBlush, title: "Royal Blush", client: "Identity & Logo", cat: "Logo", tall: true },
  { src: socialEndeavour, title: "Manali · Leh · Srinagar", client: "Endeavour Ladakh", cat: "Social", caseStudy: "endeavour-ladakh" },
  { src: videoPhysio, title: "7 Benefits of Physiotherapy", client: "Swasthya Clinic", cat: "Video", caseStudy: "swasthya-physiotherapy" },
  { src: printRudraj, title: "Business Card System", client: "Rudraj Immigration", cat: "Print", tall: true },
  { src: socialHulk, title: "Muscle 8 Iso Hydro", client: "Hulk Nutrition", cat: "Social", caseStudy: "hulk-nutrition" },
  { src: logoSis, title: "SIS Brand Mug", client: "Brand Identity", cat: "Logo" },
  { src: videoBridal, title: "Bridal Wedding Lehenga", client: "Saree Collection", cat: "Video" },
  { src: logoEhouse, title: "e — House Mark", client: "Real Estate Logo", cat: "Logo" },
  { src: socialHulkPost, title: "Nutrition Facts Carousel", client: "Hulk Nutrition", cat: "Social", tall: true, caseStudy: "hulk-nutrition" },
  { src: videoWomen, title: "8 Factors · Women Health", client: "Wellness Reel", cat: "Video", caseStudy: "swasthya-physiotherapy" },
  { src: printBrochure, title: "Hazardous Waste Brochure", client: "The Leela Corporation", cat: "Print" },
  { src: logoEnvy, title: "Envy Designs", client: "Architecture Logo", cat: "Logo" },
  { src: logoRadhe, title: "Radhe Jewellery", client: "Jewellery Branding", cat: "Logo" },
  { src: videoSaree, title: "Party Wear Saree", client: "Saree Collection", cat: "Video" },
  { src: logoFabie, title: "Fabie Fashion", client: "Apparel Branding", cat: "Logo" },
];

const cats: Cat[] = ["All", "Logo", "Social", "Video", "Print"];

const onTiltMove = (e: MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rx = ((y / rect.height) - 0.5) * -8;
  const ry = ((x / rect.width) - 0.5) * 8;
  el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
  el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
  el.style.setProperty("--lift", `-6px`);
  el.style.setProperty("--mx", `${((x / rect.width) * 100).toFixed(2)}%`);
  el.style.setProperty("--my", `${((y / rect.height) * 100).toFixed(2)}%`);
};

const onTiltLeave = (e: MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
  el.style.setProperty("--lift", "0px");
};

const Portfolio = () => {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".js-portfolio-card");

      // Staggered entrance triggered when the grid scrolls into view
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        scale: 0.92,
        duration: 0.9,
        ease: "power3.out",
        stagger: { each: 0.08, from: "start" },
        scrollTrigger: {
          trigger: ".js-portfolio-grid",
          start: "top 85%",
          once: true,
        },
      });

      // Scroll-tied parallax on each card image
      cards.forEach((card) => {
        const inner = card.querySelector(".js-portfolio-img-inner");
        if (!inner) return;
        gsap.fromTo(
          inner,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });

      // Section title scrubbed reveal — based on the title's own position
      gsap.fromTo(
        ".js-portfolio-title",
        { opacity: 0, y: 60, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".js-portfolio-title",
            start: "top 90%",
            end: "top 55%",
            scrub: 0.6,
          },
        }
      );

      // Recalc after lazy-loaded images settle
      const refresh = () => ScrollTrigger.refresh();
      const refreshTimeout = window.setTimeout(refresh, 300);
      window.addEventListener("load", refresh);

      return () => {
        window.clearTimeout(refreshTimeout);
        window.removeEventListener("load", refresh);
      };
    },
    { scope: root, dependencies: [active] }
  );

  return (
    <section id="work" ref={root} className="relative py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div className="js-portfolio-title">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ◇ Selected Work
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Crafted with <span className="text-gradient-brand">intent</span>, built to perform.
            </h2>
          </div>

          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                    active === c
                      ? "bg-gradient-brand text-primary-foreground border-transparent shadow-glow-soft"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div
          key={active}
          className="js-portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 [grid-auto-flow:dense]"
        >
          {filtered.map((item, i) => {
            const content = (
              <>
                <div className="js-portfolio-img-wrap absolute inset-0 overflow-hidden rounded-[inherit]">
                  <div
                    className="js-portfolio-img-inner absolute"
                    style={{ inset: "-12%" }}
                  >
                    <img
                      src={item.src}
                      alt={`${item.title} — ${item.client}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500" />

                {item.caseStudy && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full bg-gradient-brand text-primary-foreground shadow-glow-soft z-10">
                    Case Study
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                )}

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item.cat}
                  </div>
                  <div className="font-display text-xl md:text-2xl font-semibold leading-tight">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {item.client}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs text-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {item.caseStudy ? "Read case study →" : "Start a similar project →"}
                  </div>
                </div>
              </>
            );

            const linkCls = `group tilt-card spotlight shine relative block overflow-hidden rounded-3xl border border-border bg-surface ${
              item.tall ? "min-h-[34rem]" : "h-80"
            }`;

            const tiltStyle = {
              transform:
                "perspective(1100px) translateY(var(--lift, 0px)) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
            };

            const wrapperCls = `js-portfolio-card ${item.tall ? "sm:row-span-2" : ""}`;

            return (
              <div key={`${item.title}-${item.client}-${i}`} className={wrapperCls}>
                {item.caseStudy ? (
                  <Link
                    to={`/case-study/${item.caseStudy}`}
                    className={linkCls}
                    style={tiltStyle}
                    onMouseMove={onTiltMove}
                    onMouseLeave={onTiltLeave}
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={linkCls}
                    style={tiltStyle}
                    onMouseMove={onTiltMove}
                    onMouseLeave={onTiltLeave}
                  >
                    {content}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
