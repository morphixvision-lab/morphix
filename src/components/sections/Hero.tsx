import { useRef } from "react";
import heroBlob from "@/assets/hero-blob.jpg";
import { ArrowRight, Play, MapPin } from "lucide-react";
import CountUp from "@/components/CountUp";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge row
      tl.from(".js-hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
      });

      // Headline words
      tl.from(
        ".js-hero-title",
        { opacity: 0, y: 50, duration: 0.8 },
        "-=0.3"
      );

      // Subtext
      tl.from(
        ".js-hero-sub",
        { opacity: 0, y: 30, duration: 0.7 },
        "-=0.5"
      );

      // CTA buttons
      tl.from(
        ".js-hero-cta",
        { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );

      // Stats
      tl.from(
        ".js-hero-stat",
        { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 },
        "-=0.3"
      );

      // Blob image entrance
      tl.from(
        ".js-hero-blob",
        { opacity: 0, scale: 0.88, duration: 1.1, ease: "power2.out" },
        0.15
      );

      // Floating chips entrance
      tl.from(
        ".js-hero-chip",
        { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
        "-=0.5"
      );

      // Continuous float on chips
      gsap.to(".js-hero-chip-top", {
        y: -10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".js-hero-chip-bottom", {
        y: 10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // Subtle parallax on blob while scrolling
      gsap.to(".js-hero-blob", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // Left column slight upward parallax
      gsap.to(".js-hero-left", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Subtle background glow */}
      <div aria-hidden className="absolute -top-40 -left-40 w-[42rem] h-[42rem]">
        <div className="w-full h-full rounded-full bg-primary/20 blur-[140px]" />
      </div>
      <div aria-hidden className="absolute -bottom-40 -right-32 w-[38rem] h-[38rem]">
        <div className="w-full h-full rounded-full bg-primary-glow/20 blur-[160px]" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="js-hero-left lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="js-hero-badge inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              Next-Gen Creative Studio
            </div>
            <div className="js-hero-badge inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary" />
              India
            </div>
          </div>

          <h1 className="js-hero-title font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight">
            We Create{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-brand">Digital Energy</span>{" "}
            <br className="hidden sm:block" />
            <span className="italic font-light">for Brands.</span>
          </h1>

          <p className="js-hero-sub mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Bold visuals. Smart storytelling. Creative systems that help brands grow faster and connect deeper.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="js-hero-cta group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="js-hero-cta group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-7 py-4 text-sm font-medium hover:border-primary/50 hover:bg-surface transition-all duration-300"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand">
                <Play className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
              </span>
              Discover More
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { end: 100, suffix: "+", v: "Projects Delivered" },
              { end: 5, suffix: "+", v: "Years Experience" },
              { end: 20, suffix: "+", v: "Industries Served" },
            ].map((s) => (
              <div key={s.v} className="js-hero-stat">
                <div className="font-display text-3xl font-bold text-gradient-brand">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <img
              src={heroBlob}
              alt="Abstract glowing orange fluid form"
              width={1280}
              height={1280}
              className="js-hero-blob relative w-full h-full object-cover rounded-[3rem] mix-blend-screen"
            />
            {/* Floating chips */}
            <div className="js-hero-chip js-hero-chip-top absolute -left-4 top-10">
              <div className="glass-card rounded-2xl px-4 py-3 text-xs">
                <div className="text-muted-foreground">Branding</div>
                <div className="font-display font-semibold">Identity Systems</div>
              </div>
            </div>
            <div className="js-hero-chip js-hero-chip-bottom absolute -right-2 bottom-10">
              <div className="glass-card rounded-2xl px-4 py-3 text-xs">
                <div className="text-muted-foreground">Motion</div>
                <div className="font-display font-semibold">Video & Ads</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
