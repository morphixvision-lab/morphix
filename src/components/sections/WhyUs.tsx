import Reveal from "@/components/Reveal";
import { Zap, Star, Target, MessageCircle, RefreshCw, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Deadlines are sacred. We deliver on time, every time — without cutting corners.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Every pixel, frame and word is crafted to the highest standard.",
  },
  {
    icon: Target,
    title: "Brand Strategy First",
    desc: "We don't just make things look good — we make them work for your growth.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    desc: "No middlemen, no delays. You talk directly to the creative.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions",
    desc: "We iterate until you love it. Your satisfaction is non-negotiable.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    desc: "Everything we create is designed to attract, convert and retain your audience.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-[130px] blob-float"
      />
      <div className="container">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">◇ Why Morphix</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              What makes us{" "}
              <span className="text-gradient-brand">different</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="group glass-card rounded-3xl p-8 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
