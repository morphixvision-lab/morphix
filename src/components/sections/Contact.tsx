import { useState } from "react";
import { Phone, Mail, ArrowRight, Send, MessageCircle, MapPin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";

const PHONE = "917359740765";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80, "Name too long"),
  email: z.string().trim().email("Invalid email").max(160, "Email too long"),
  projectType: z.string().min(1, "Pick what you need"),
  budget: z.string().min(1, "Pick a budget range"),
  timeline: z.string().min(1, "Pick a timeline"),
  message: z.string().trim().min(5, "Tell me a little more").max(1000, "Message too long"),
});

type FormState = z.infer<typeof schema>;

const projectTypes = [
  "Logo & Brand Identity",
  "Social Media Creatives",
  "Video Editing / Reels",
  "Print (Cards, Brochures, Invites)",
  "Full Branding Package",
  "Not sure yet",
];

const budgets = [
  "Under ₹10,000",
  "₹10,000 – ₹30,000",
  "₹30,000 – ₹75,000",
  "₹75,000 – ₹1.5L",
  "₹1.5L+",
  "Let's discuss",
];

const timelines = [
  "ASAP (under 1 week)",
  "2–4 weeks",
  "1–2 months",
  "Flexible",
];

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const buildMessage = (f: FormState) =>
    `Hi Manish! 👋%0A%0A` +
    `*Name:* ${f.name}%0A` +
    `*Email:* ${f.email}%0A` +
    `*Need:* ${f.projectType}%0A` +
    `*Budget:* ${f.budget}%0A` +
    `*Timeline:* ${f.timeline}%0A%0A` +
    `*Project details:*%0A${f.message}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const waUrl = `https://wa.me/${PHONE}?text=${buildMessage(result.data)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp — send the message to complete.");
    setTimeout(() => setSubmitting(false), 600);
  };

  const selectCls =
    "mt-2 w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors [color-scheme:dark]";

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full bg-primary/20 blur-[140px] blob-float pulse-glow"
      />

      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              ◇ Let's Talk
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Have a project in <span className="text-gradient-brand">mind</span>?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Tell us about your brand. We'll respond within a few hours with a
              clear path forward — no pressure, no fluff.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
                  "Hi Manish! I'd like to discuss a project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group shine flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                  <div className="font-display font-semibold">Chat instantly</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="tel:+917359740765"
                className="group shine flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand-soft border border-primary/30 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                  <div className="font-display font-semibold">+91 73597 40765</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="mailto:hiranimanish56@gmail.com"
                className="group shine flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand-soft border border-primary/30 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-display font-semibold truncate">hiranimanish56@gmail.com</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex items-center gap-3 p-5 rounded-2xl border border-dashed border-border">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Based in <span className="text-foreground">Bhuj, Gujarat</span> — working with brands across India.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="relative glass-card rounded-3xl p-8 md:p-10 shadow-elevated"
          >
            <div
              aria-hidden
              className="absolute -inset-px rounded-3xl bg-gradient-brand opacity-20 blur-2xl -z-10"
            />

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={80}
                    required
                    className="mt-2 w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={160}
                    required
                    className="mt-2 w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="you@brand.com"
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">What you need</span>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    required
                    className={selectCls}
                  >
                    <option value="" disabled>Select…</option>
                    {projectTypes.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Budget</span>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    required
                    className={selectCls}
                  >
                    <option value="" disabled>Select…</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Timeline</span>
                  <select
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    required
                    className={selectCls}
                  >
                    <option value="" disabled>Select…</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Project</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  maxLength={1000}
                  required
                  className="mt-2 w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                  placeholder="Tell me about your brand and what you need…"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group shine inline-flex items-center gap-3 rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all duration-500 hover:scale-[1.03] disabled:opacity-60"
                >
                  {submitting ? "Opening…" : "Send via WhatsApp"}
                  <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-muted-foreground">
                  Opens WhatsApp with your details pre-filled — reply typically within an hour.
                </span>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
