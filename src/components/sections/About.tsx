import portrait from "@/assets/manish-portrait.jpg";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] rounded-full bg-primary/15 blur-[120px] blob-float"
      />

      <div className="container grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-5" direction="left">
          <TiltCard intensity={5} lift={4} className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-30 blur-2xl rounded-[2rem] animate-pulse" style={{ animationDuration: "5s" }} />
            <div className="group relative rounded-[2rem] overflow-hidden border border-border shadow-elevated">
              <img
                src={portrait}
                alt="Manish Hirani — Founder of Morphix Vision"
                width={960}
                height={1280}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="text-xs uppercase tracking-[0.25em] text-primary">
                  Founder
                </div>
                <div className="font-display text-2xl font-bold mt-1">
                  Manish Hirani
                </div>
              </div>
            </div>
            {/* Floating tag */}
            <div className="absolute -top-4 -right-4 float-slow glass-card rounded-2xl px-5 py-3 shadow-glow-soft">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Available for</div>
              <div className="text-sm font-display font-semibold">New Projects 2026</div>
            </div>
          </TiltCard>
        </Reveal>

        <div className="lg:col-span-7 space-y-8">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ◇ About the Studio
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A passionate creative <br />
              crafting{" "}
              <span className="text-gradient-brand">impactful visuals</span>.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm Manish — a self-made designer & video editor who pauses at
              every billboard, imagining how to elevate it. Morphix Vision is
              built on that obsession: creating designs that bring smiles,
              build trust, and convert audiences into customers.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: "Websocial · 2024", role: "Creative Designer" },
                { title: "Shreeji Films · '22–'23", role: "Junior Designer" },
              ].map((x) => (
                <TiltCard key={x.title} intensity={5} lift={4}>
                  <div className="glass-card shine rounded-2xl p-5 hover:border-primary/40 transition-colors duration-500">
                    <div className="text-xs uppercase tracking-widest text-primary">
                      {x.title}
                    </div>
                    <div className="mt-2 font-display font-semibold">{x.role}</div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "Corel Draw", "InDesign"].map((t, i) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-gradient-brand-soft hover:-translate-y-0.5 transition-all duration-300"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
