import { Palette, Share2, Film, Printer, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const services = [
  {
    icon: Palette,
    title: "Branding & Logo Design",
    desc: "Identity systems, logos & brand guidelines that capture the essence of your business.",
    tags: ["Logo", "Identity", "Guidelines"],
    from: "₹8,000",
    unit: "per project",
  },
  {
    icon: Share2,
    title: "Social Media Creatives",
    desc: "Scroll-stopping posts, stories & carousels that build engaged communities.",
    tags: ["Posts", "Stories", "Carousels"],
    from: "₹12,000",
    unit: "per month",
  },
  {
    icon: Film,
    title: "Video Editing & Ads",
    desc: "Cinematic edits, motion graphics & high-converting video ads that perform.",
    tags: ["Reels", "Ads", "Motion"],
    from: "₹3,500",
    unit: "per reel",
  },
  {
    icon: Printer,
    title: "Creative Prints",
    desc: "Brochures, business cards, wedding invites — premium print-ready design.",
    tags: ["Print", "Cards", "Brochures"],
    from: "₹2,500",
    unit: "per design",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ◇ Services
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Everything your <span className="text-gradient-brand">brand</span> needs to be seen.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-muted-foreground">
              Four core disciplines, one obsession: design that moves the needle.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80} direction="scale">
                <TiltCard intensity={6} lift={8} className="h-full">
                  <article className="group glow-border shine relative h-full rounded-3xl bg-surface/60 backdrop-blur p-7 border border-border hover:bg-surface transition-colors duration-500">
                    <div className="flex items-start justify-between">
                      <div className="relative inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-brand-soft border border-primary/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                        <Icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                    </div>

                    <h3 className="mt-6 font-display text-xl font-semibold leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-background/60 border border-border text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-border flex items-baseline justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting at</div>
                        <div className="font-display text-xl font-bold text-gradient-brand leading-tight">
                          {s.from}
                        </div>
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {s.unit}
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
