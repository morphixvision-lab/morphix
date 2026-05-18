import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

import csc from "@/assets/clients/csc.jpg";
import rosewood from "@/assets/clients/rosewood.jpg";
import endeavour from "@/assets/clients/endeavour.jpg";
import villaNova from "@/assets/clients/villa-nova.jpg";
import discoverThrill from "@/assets/clients/discover-thrill.jpg";
import saAir from "@/assets/clients/sa-air.jpg";
import aurevi from "@/assets/clients/aurevi.jpg";
import uniqueSquare from "@/assets/clients/unique-square.jpg";
import dellure from "@/assets/clients/dellure.jpg";
import custech from "@/assets/clients/custech.jpg";
import dilaGroup from "@/assets/clients/dila-group.jpg";
import aapoSathe from "@/assets/clients/aapo-sathe.jpg";
import dineClouds from "@/assets/clients/dine-clouds.jpg";
import amrutam from "@/assets/clients/amrutam.jpg";
import divu from "@/assets/clients/divu.jpg";
import airBistro from "@/assets/clients/air-bistro.jpg";
import elysium from "@/assets/clients/elysium.jpg";
import bhagwati from "@/assets/clients/bhagwati.jpg";
import fusionarry from "@/assets/clients/fusionarry.jpg";
import friskyDough from "@/assets/clients/frisky-dough.jpg";
import friskySlime from "@/assets/clients/frisky-slime.jpg";
import vividham from "@/assets/clients/vividham.jpg";
import kamals from "@/assets/clients/kamals.jpg";
import arihant from "@/assets/clients/arihant.jpg";
import mivaante from "@/assets/clients/mivaante.jpg";
import superia from "@/assets/clients/superia.jpg";
import podiAnna from "@/assets/clients/podi-anna.jpg";
import aps from "@/assets/clients/aps.jpg";
import rasa from "@/assets/clients/rasa.jpg";
import travelBeo from "@/assets/clients/travel-beo.jpg";

const clients = [
  { src: csc, name: "City Sports Center" },
  { src: rosewood, name: "Rosewood Bungalows" },
  { src: endeavour, name: "Endeavour Ladakh" },
  { src: villaNova, name: "Villa Nova" },
  { src: discoverThrill, name: "Discover The Thrill" },
  { src: saAir, name: "S.A. Air Conditioning" },
  { src: aurevi, name: "Aurevi" },
  { src: uniqueSquare, name: "Unique Square" },
  { src: dellure, name: "Dêllure Cafe & Dessert Studio" },
  { src: custech, name: "CusTech" },
  { src: dilaGroup, name: "Dila Group" },
  { src: aapoSathe, name: "Aapo Sathe Besie" },
  { src: dineClouds, name: "Dine In The Clouds" },
  { src: amrutam, name: "Amrutam" },
  { src: divu, name: "Consultancy By Divu" },
  { src: airBistro, name: "Air Bistro" },
  { src: elysium, name: "Elysium Restaurant & Banquet" },
  { src: bhagwati, name: "Bhagwati Designer" },
  { src: fusionarry, name: "Fusionarry" },
  { src: friskyDough, name: "Frisky Dough" },
  { src: friskySlime, name: "Frisky Slime" },
  { src: vividham, name: "Vividham — The Authentic Gujarati Restaurant" },
  { src: kamals, name: "Kamal's Restaurant & Banquets" },
  { src: arihant, name: "Arihant Group of Companies" },
  { src: mivaante, name: "Hotel Mivaante" },
  { src: superia, name: "Superia 4BHK Apartments" },
  { src: podiAnna, name: "Podi Anna" },
  { src: aps, name: "Ahmedabad Public School International" },
  { src: rasa, name: "Rasa Restro Cafe" },
  { src: travelBeo, name: "Travel Wid Beo" },
];

const Clients = () => {
  return (
    <section className="relative py-24 border-y border-border bg-surface/40">
      <div className="container">
        <Reveal>
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              ◇ Trusted By
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-muted-foreground">
              Brands that chose to{" "}
              <span className="text-foreground">stand out</span>.
            </h2>
          </div>
        </Reveal>

        {/* Logo marquee — row 1 (forward) */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] mb-4">
          <div className="flex gap-4 marquee-track w-max items-center">
            {[...clients.slice(0, 15), ...clients.slice(0, 15)].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                title={c.name}
                className="group shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-background/80 border border-border p-2.5 flex items-center justify-center hover:border-primary/50 hover:shadow-glow-soft transition-all duration-500"
              >
                <img
                  src={c.src}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Logo marquee — row 2 (reverse) */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex gap-4 marquee-track-reverse w-max items-center">
            {[...clients.slice(15), ...clients.slice(15)].map((c, i) => (
              <div
                key={`${c.name}-r-${i}`}
                title={c.name}
                className="group shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-background/80 border border-border p-2.5 flex items-center justify-center hover:border-primary/50 hover:shadow-glow-soft transition-all duration-500"
              >
                <img
                  src={c.src}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats below */}
        <Reveal delay={150}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {[
              { end: 30, suffix: "+", v: "Brands" },
              { end: 100, suffix: "+", v: "Projects" },
              { end: 60, suffix: "K+", v: "Followers Reached" },
              { end: 100, suffix: "%", v: "On-time Delivery" },
            ].map((s) => (
              <div
                key={s.v}
                className="group bg-surface/80 backdrop-blur p-8 text-center transition-colors duration-500 hover:bg-surface"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-brand transition-transform duration-500 group-hover:scale-110 inline-block">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Clients;
