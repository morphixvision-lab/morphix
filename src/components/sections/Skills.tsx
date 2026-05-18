import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const skills = [
  { name: "Graphic Design", value: 95 },
  { name: "Branding", value: 90 },
  { name: "Video Editing", value: 88 },
  { name: "Photography", value: 82 },
];

const SkillBar = ({ name, value }: { name: string; value: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-display text-lg font-medium transition-colors duration-300 group-hover:text-primary">
          {name}
        </span>
        <span className="text-sm text-primary font-mono">
          <CountUp end={value} suffix="%" duration={1600} />
        </span>
      </div>
      <div className="relative h-1.5 rounded-full bg-surface-elevated overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-[1600ms] ease-out shadow-[0_0_20px_hsl(var(--primary)/0.6)]"
          style={{
            width: active ? `${value}%` : "0%",
            background:
              "linear-gradient(90deg, hsl(24 100% 50%), hsl(36 100% 60%), hsl(14 100% 50%), hsl(24 100% 50%))",
            backgroundSize: "200% 100%",
            animation: active ? "text-shimmer 4s linear infinite" : undefined,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full bg-primary-glow/15 blur-[120px] blob-float"
        style={{ animationDelay: "-4s" }}
      />

      <div className="container grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            ◇ Capabilities
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Skills sharpened over <span className="text-gradient-brand">thousands of frames</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            From logo grids to color grading — every craft I use day in, day out
            to deliver work that holds up next to the best.
          </p>
        </Reveal>

        <div className="lg:col-span-7 space-y-10">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <SkillBar {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
