import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/morphix-logo-dark.png";

const links = [
  { target: "work", label: "Work" },
  { target: "about", label: "About" },
  { target: "services", label: "Services" },
  { target: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: target } });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Morphix Vision home">
          <img
            src={logo}
            alt="Morphix Vision logo"
            className="h-9 w-auto"
            width={180}
            height={56}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <li key={l.target}>
              <a
                href={`/#/?to=${l.target}`}
                onClick={(e) => go(e, l.target)}
                className="nav-underline text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#/?to=contact"
          onClick={(e) => go(e, "contact")}
          className="group hidden md:inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all duration-500 hover:scale-105 shine relative overflow-hidden"
        >
          <span className="relative z-10">Start a Project</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
