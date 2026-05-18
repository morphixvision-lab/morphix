import Reveal from "@/components/Reveal";

const tools = [
  { name: "Figma", category: "UI / Branding" },
  { name: "Photoshop", category: "Photo & Graphics" },
  { name: "Illustrator", category: "Vector & Identity" },
  { name: "Premiere Pro", category: "Video Editing" },
  { name: "After Effects", category: "Motion & VFX" },
  { name: "Lightroom", category: "Photography" },
  { name: "DaVinci Resolve", category: "Color Grading" },
  { name: "Blender", category: "3D & Renders" },
];

const Tools = () => {
  return (
    <section className="relative py-32 border-y border-border bg-surface/40 overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">◇ Our Toolkit</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Crafted with{" "}
              <span className="text-gradient-brand">industry-leading tools</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 60}>
              <div className="group glass-card rounded-2xl p-6 text-center hover:border-primary/40 hover:-translate-y-1 transition-all duration-500">
                <div className="font-display text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {tool.name}
                </div>
                <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  {tool.category}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
