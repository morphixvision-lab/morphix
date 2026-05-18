import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const PHONE = "917359740765";
const DEFAULT_MSG =
  "Hi Manish! I saw Morphix Vision and I'd like to discuss a project.";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(DEFAULT_MSG)}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {open && (
        <div className="glass-card rounded-2xl p-4 max-w-xs shadow-elevated animate-fade-in">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-display font-semibold text-sm">Chat on WhatsApp</div>
              <div className="text-xs text-muted-foreground mt-1">
                Typical reply within an hour — Mon–Sat.
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-4 w-4" />
            Start Chat
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        className="group relative h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        <MessageCircle className="relative h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
