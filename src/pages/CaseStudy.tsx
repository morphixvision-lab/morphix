import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";
import NotFound from "./NotFound";
import { getCaseStudy } from "@/data/caseStudies";

const PHONE = "917359740765";

const CaseStudy = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const study = getCaseStudy(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!study) return <NotFound />;

  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hi Manish! I saw the ${study.client} case study on Morphix Vision. I'd like to discuss a similar project.`
  )}`;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-primary/25 blur-[140px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-primary-glow/20 blur-[140px]"
          />

          <div className="container relative z-10">
            <Reveal>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Work
              </Link>
            </Reveal>

            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <Reveal delay={80}>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-gradient-brand text-primary-foreground">
                      {study.category}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {study.client} · {study.year}
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={160}>
                  <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                    {study.title}
                  </h1>
                </Reveal>
                <Reveal delay={240}>
                  <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    {study.summary}
                  </p>
                </Reveal>
              </div>

              <Reveal delay={280} className="lg:col-span-4">
                <div className="glass-card rounded-3xl p-6 space-y-4">
                  <div className="text-xs uppercase tracking-[0.25em] text-primary">
                    ◇ Scope of Work
                  </div>
                  <ul className="space-y-2">
                    {study.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={320}>
              <div className="relative mt-16 rounded-[2rem] overflow-hidden border border-border shadow-elevated">
                <div
                  aria-hidden
                  className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl -z-10"
                />
                <img
                  src={study.hero}
                  alt={`${study.client} hero creative`}
                  className="w-full h-auto object-cover max-h-[34rem]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Problem + Approach */}
        <section className="relative py-24">
          <div className="container grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                ◇ The Challenge
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6">
                What the brand was up against.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {study.problem}
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                  ◇ Our Approach
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-8">
                  How we solved it.
                </h2>
              </Reveal>
              <ol className="space-y-5">
                {study.approach.map((step, i) => (
                  <Reveal key={i} delay={180 + i * 80}>
                    <li className="glass-card rounded-2xl p-6 flex gap-5">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-gradient-brand-soft border border-primary/30 flex items-center justify-center font-display font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                        {step}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="relative py-24 border-y border-border bg-surface/40">
          <div className="container">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                  ◇ Results
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                  The <span className="text-gradient-brand">outcome</span> in numbers.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
              {study.results.map((r, i) => (
                <Reveal key={r.label} delay={i * 80}>
                  <div className="bg-surface/80 backdrop-blur p-8 text-center h-full">
                    <div className="font-display text-3xl md:text-4xl font-bold text-gradient-brand">
                      {r.value}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                      {r.label}
                    </div>
                    {r.note && (
                      <div className="mt-1 text-[11px] text-muted-foreground/80">
                        {r.note}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {study.deliverables.length > 0 && (
          <section className="relative py-24">
            <div className="container">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                  ◇ Selected Work
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-10">
                  The deliverables.
                </h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-6">
                {study.deliverables.map((d, i) => (
                  <Reveal key={d.title} delay={i * 100}>
                    <figure className="group relative overflow-hidden rounded-3xl border border-border bg-surface">
                      <img
                        src={d.src}
                        alt={d.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      <figcaption className="p-5 bg-surface/80 backdrop-blur border-t border-border">
                        <div className="font-display font-semibold">{d.title}</div>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Quote */}
        {study.quote && (
          <section className="relative py-24">
            <div className="container max-w-3xl">
              <Reveal>
                <figure className="glass-card glow-border rounded-3xl p-10 md:p-12 text-center">
                  <Quote className="h-10 w-10 text-primary/60 mx-auto mb-6" />
                  <blockquote className="font-display text-2xl md:text-3xl leading-snug">
                    "{study.quote.text}"
                  </blockquote>
                  <figcaption className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
                    {study.quote.author}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </section>
        )}

        {/* CTA + Next */}
        <section className="relative py-24">
          <div className="container">
            <Reveal>
              <div className="relative rounded-[2rem] border border-border bg-surface/60 backdrop-blur p-10 md:p-14 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -inset-10 bg-gradient-brand opacity-15 blur-3xl"
                />
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                      ◇ Ready to build yours?
                    </div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                      Let's craft work that <span className="text-gradient-brand">converts</span>.
                    </h3>
                    <p className="mt-4 text-muted-foreground max-w-md">
                      Tell us about your brand — reply typically within an hour.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 md:justify-end">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Us
                    </a>
                    <Link
                      to="/"
                      state={{ scrollTo: "contact" }}
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all"
                    >
                      Start a Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            {study.next && (
              <Reveal delay={120}>
                <Link
                  to={`/case-study/${study.next.slug}`}
                  className="group mt-12 flex items-center justify-between gap-6 p-6 md:p-8 rounded-3xl border border-border hover:border-primary/50 bg-surface/40 hover:bg-surface transition-all"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                      Next Case Study
                    </div>
                    <div className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {study.next.title}
                    </div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </Link>
              </Reveal>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
