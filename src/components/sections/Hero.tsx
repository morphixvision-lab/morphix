import { useRef } from "react";
import heroBlob from "@/assets/hero-blob.jpg";
import { ArrowRight, Play, MapPin } from "lucide-react";
import CountUp from "@/components/CountUp";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Word = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <span className="word-mask">
    <span className={className} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </span>
  </span>
);

const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const trigger = {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      };

      gsap.to(".js-hero-blob", { yPercent: -18, ease: "none", scrollTrigger: trigger });
      gsap.to(".js-hero-glow-1", { yPercent: -30, ease: "none", scrollTrigger: trigger });
      gsap.to(".js-hero-glow-2", { yPercent: 25, ease: "none", scrollTrigger: trigger });
      gsap.to(".js-hero-grid", { yPercent: 18, ease: "none", scrollTrigger: trigger });

      gsap.to(".js-hero-chip-left", {
        y: -90,
        x: -20,
        ease: "none",
        scrollTrigger: { ...trigger, scrub: 0.4 },
      });
      gsap.to(".js-hero-chip-right", {
        y: 110,
        x: 20,
        ease: "none",
        scrollTrigger: { ...trigger, scrub: 0.4 },
      });

      gsap.to(".js-hero-content", {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "20% top",
          end: "80% top",
          scrub: 0.4,
        },
      });

      gsap.to(".js-hero-scroll-indicator", {
        opacity: 0,
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "20% top",
          scrub: true,
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
      {/* Animated gradient blobs */}
      <div aria-hidden className="js-hero-glow-1 absolute -top-40 -left-40 w-[42rem] h-[42rem]">
        <div className="w-full h-full rounded-full bg-primary/30 blur-[140px] blob-float pulse-glow" />
      </div>
      <div aria-hidden className="js-hero-glow-2 absolute -bottom-40 -right-32 w-[38rem] h-[38rem]">
        <div
          className="w-full h-full rounded-full bg-primary-glow/30 blur-[160px] blob-float pulse-glow"
          style={{ animationDelay: "-6s" }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(24_100%_50%/0.12),transparent_60%)]"
      />

      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="js-hero-grid absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
        }}
      />

      <div className="js-hero-content container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_hsl(var(--neon))]" />
              Premium Creative Studio
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary" />
              Bhuj, India
            </div>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight">
            <Word delay={0}>We</Word>{" "}
            <Word delay={90}>Design</Word>{" "}
            <br className="hidden sm:block" />
            <Word delay={180} className="text-gradient-brand">
              Experiences
            </Word>{" "}
            <Word delay={270}>That</Word>{" "}
            <br className="hidden sm:block" />
            <Word delay={360} className="italic font-light">
              Convert.
            </Word>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Morphix Vision helps brands stand out with powerful design &
            storytelling — branding, social, video & print, crafted with intent.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group shine inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all duration-500 hover:scale-[1.03]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group shine inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-7 py-4 text-sm font-medium hover:border-primary/50 hover:bg-surface transition-all duration-500"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand">
                <Play className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
              </span>
              View Work
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { end: 50, suffix: "+", v: "Brands Crafted" },
              { end: 3, suffix: "+", v: "Years Experience" },
              { end: 10, suffix: "+", v: "Industries" },
            ].map((s) => (
              <div key={s.v} className="group">
                <div className="font-display text-3xl font-bold text-gradient-brand transition-transform duration-500 group-hover:scale-110 origin-left inline-block">
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
        <div className="lg:col-span-5 relative animate-scale-in">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <div className="js-hero-blob absolute inset-0">
              <img
                src={heroBlob}
                alt="Abstract glowing orange fluid form"
                width={1280}
                height={1280}
                className="relative w-full h-full object-cover rounded-[3rem] mix-blend-screen blob-float"
              />
            </div>
            {/* Floating chips */}
            <div className="js-hero-chip-left absolute -left-4 top-10 animate-fade-in">
              <div className="float-slow glass-card rounded-2xl px-4 py-3 text-xs hover:border-primary/40 transition-colors duration-500">
                <div className="text-muted-foreground">Branding</div>
                <div className="font-display font-semibold">Identity Systems</div>
              </div>
            </div>
            <div
              className="js-hero-chip-right absolute -right-2 bottom-10 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="float-slow glass-card rounded-2xl px-4 py-3 text-xs hover:border-primary/40 transition-colors duration-500"
                style={{ animationDelay: "-3s" }}
              >
                <div className="text-muted-foreground">Motion</div>
                <div className="font-display font-semibold">Video & Ads</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="js-hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
