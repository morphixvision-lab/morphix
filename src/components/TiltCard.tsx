import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  lift?: number;
  spotlight?: boolean;
  as?: "div" | "article" | "li";
};

const TiltCard = ({ children, className = "", as = "div" }: Props) => {
  const Tag = as as any;
  return <Tag className={className}>{children}</Tag>;
};

export default TiltCard;
