import { useRef, MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  lift?: number;
  spotlight?: boolean;
  as?: "div" | "article" | "li";
};

/**
 * Wraps content with mouse-tracked 3D tilt and an optional cursor spotlight.
 * Sets --mx/--my CSS vars so the `.spotlight::after` glow follows the pointer.
 */
const TiltCard = ({
  children,
  className = "",
  intensity = 7,
  lift = 6,
  spotlight = true,
  as = "div",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -intensity * 2;
    const ry = ((x / rect.width) - 0.5) * intensity * 2;
    el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    el.style.setProperty("--lift", `-${lift}px`);
    el.style.setProperty("--mx", `${((x / rect.width) * 100).toFixed(2)}%`);
    el.style.setProperty("--my", `${((y / rect.height) * 100).toFixed(2)}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--lift", "0px");
  };

  const Tag = as as any;

  return (
    <Tag
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card ${spotlight ? "spotlight" : ""} ${className}`.trim()}
      style={{
        transform:
          "perspective(1000px) translateY(var(--lift, 0px)) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
      }}
    >
      {children}
    </Tag>
  );
};

export default TiltCard;
