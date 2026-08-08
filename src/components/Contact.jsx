import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";
import "./Contact.css";

const LINKS = [
  { label: "Email", icon: "✉️", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", icon: "🐙", value: "github.com/Sehartariq", href: profile.github },
  { label: "LinkedIn", icon: "💼", value: "linkedin.com/in/sehar-tariq", href: profile.linkedin },
  { label: "Phone", icon: "📞", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <SectionHeading icon="🏡" title="Say Hello" subtitle="my door's always open" />

      <motion.div
        className="contact-panel panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="contact-headline font-display">
          Let's build <span className="text-gradient">something real.</span>
        </h3>
        <p className="contact-sub">
          Open to AI/ML internships, research collaborations, and entry-level
          roles. Reach out — I reply fast.
        </p>

        <div className="contact-links">
          {LINKS.map((l) => (
            <a
              className="contact-link"
              href={l.href}
              key={l.label}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span className="contact-link-icon">{l.icon}</span>
              <span className="contact-link-text">
                <span className="contact-link-label">{l.label}</span>
                <span className="contact-link-value">{l.value}</span>
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
