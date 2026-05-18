import { Instagram, Linkedin, Youtube, Mail, MessageCircle, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/morphix-logo-dark.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const go = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: target } });
    }
  };
  return (
    <footer className="relative border-t border-border bg-surface/40 py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <img src={logo} alt="Morphix Vision" className="h-10 w-auto" width={200} height={62} />
            <p className="text-sm text-muted-foreground max-w-xs">
              We design experiences that convert. Branding, social, video & print
              — premium, on time, on brand.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Bhuj, Gujarat · India
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {[
                { l: "Work", t: "work" },
                { l: "About", t: "about" },
                { l: "Services", t: "services" },
                { l: "Contact", t: "contact" },
              ].map((i) => (
                <li key={i.t}>
                  <a
                    href={`/#/?to=${i.t}`}
                    onClick={(e) => go(e, i.t)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Connect</div>
            <div className="flex gap-3">
              {[
                { Icon: MessageCircle, href: "https://wa.me/917359740765" },
                { Icon: Instagram, href: "https://www.instagram.com/morphixvision?igsh=bDRpNW1xMnZobnJs" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "https://youtube.com/@morphixvision?si=Wb2qP0fZoKvvbR8O" },
                { Icon: Mail, href: "mailto:hiranimanish56@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label="social link"
                  className="group h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-gradient-brand hover:border-transparent hover:shadow-glow-soft hover:-translate-y-1 hover:scale-110 transition-all duration-500"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <Icon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              +91 73597 40765 <br />
              hiranimanish56@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col items-center gap-3 text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© {new Date().getFullYear()} Morphix Vision. All rights reserved.</span>
            <span className="hidden sm:inline text-border">·</span>
            <span>Crafted with obsession by Manish Hirani.</span>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Developed by{" "}
            <span className="text-gradient-brand font-semibold tracking-wide">Anshu Rupaliya</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
