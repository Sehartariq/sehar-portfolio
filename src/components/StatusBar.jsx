import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "./StatusBar.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "art", label: "Art" },
  { id: "contact", label: "Say Hello" },
];

export default function StatusBar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="status-bar">
      <div className="status-left" onClick={() => scrollTo("hero")} role="button" tabIndex={0}>
        <span className="status-leaf">🌿</span>
        <span className="status-name font-display">Sehar Tariq</span>
      </div>

      <nav className="status-nav">
        {LINKS.map((l) => (
          <button key={l.id} className="status-link" onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
        ))}
      </nav>

      <div className="status-right">
        <ThemeToggle />
        <button className="status-menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="status-mobile-menu">
          {LINKS.map((l) => (
            <button key={l.id} className="status-mobile-link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
