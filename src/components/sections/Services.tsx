import { Palette, Share2, Film, Printer, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const services = [
  {
    icon: Palette,
    title: "Branding & Logo Design",
    desc: "Logos, strategy, visual systems & premium branding crafted to make your business instantly recognizable.",
    tags: ["Identity", "Strategy", "Guidelines"],
  },
  {
    icon: Share2,
    title: "Social Media Creatives",
    desc: "High-performing social media creatives, reels, stories & campaigns designed for engagement.",
    tags: ["Posts", "Reels", "Stories", "Campaigns", "Carousels"],
  },
  {
    icon: Film,
    title: "Video Editing & Ads",
    desc: "Cinematic edits, motion graphics, ads & transitions that bring brands to life visually.",
    tags: ["Cinematic", "Motion", "Ads"],
  },
  {
    icon: Printer,
    title: "Creative Prints",
    desc: "Premium brochures, menus, packaging & print designs that feel modern and professional.",
    tags: ["Packaging", "Flyers", "Menus", "Brochures"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ◇ Our Capabilities
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Where <span className="text-gradient-brand">Strategy, Creativity</span> & Motion Come Together.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-muted-foreground">
              Creative systems crafted for modern brands that want to stand out online and offline.
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
