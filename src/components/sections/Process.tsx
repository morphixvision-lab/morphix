import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We listen, research and deeply understand your brand, audience and goals.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We map out your brand direction, messaging and creative roadmap.",
  },
  {
    number: "03",
    title: "Design",
    desc: "Pixels, motion and stories crafted to make your brand impossible to ignore.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "On time, polished and launch-ready. We stay until it's perfect.",
  },
];

const Process = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full bg-primary/8 blur-[140px]"
      />
      <div className="container">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">◇ How We Work</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              From Brief to Brand —{" "}
              <span className="text-gradient-brand">Our Process</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="group relative glass-card rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="font-display text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500 mb-6 leading-none">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30 text-xl z-10">
                    →
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
