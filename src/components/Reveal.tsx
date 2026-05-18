import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "scale" | "blur";

const Reveal = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  direction?: Direction;
}) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const dirClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
      ? "reveal-right"
      : direction === "scale"
      ? "reveal-scale"
      : direction === "blur"
      ? "reveal-blur"
      : "";

  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      className={`reveal ${dirClass} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
