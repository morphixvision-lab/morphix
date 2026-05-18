import heroBlob from "@/assets/hero-blob.jpg";
import { ArrowRight, Play, MapPin } from "lucide-react";
import CountUp from "@/components/CountUp";

const Hero = () => {
  return (
    <section
      id="top"
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
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              Next-Gen Creative Studio
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary" />
              India
            </div>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight">
            We Create{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-brand">Digital Energy</span>{" "}
            <br className="hidden sm:block" />
            <span className="italic font-light">for Brands.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Bold visuals. Smart storytelling. Creative systems that help brands grow faster and connect deeper.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
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
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-7 py-4 text-sm font-medium hover:border-primary/50 hover:bg-surface transition-all duration-300"
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
              <div key={s.v}>
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
              className="relative w-full h-full object-cover rounded-[3rem] mix-blend-screen"
            />
            {/* Floating chips */}
            <div className="absolute -left-4 top-10">
              <div className="glass-card rounded-2xl px-4 py-3 text-xs">
                <div className="text-muted-foreground">Branding</div>
                <div className="font-display font-semibold">Identity Systems</div>
              </div>
            </div>
            <div className="absolute -right-2 bottom-10">
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
