import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import CertificateLightbox from "./CertificateLightbox";
import { certificates } from "../data/content";
import "./Certificates.css";

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section className="certificates" id="certificates">
      <SectionHeading icon="🎓" title="Certificates" subtitle="little proofs of the learning" />

      <div className="cert-grid">
        {certificates.map((c, i) => (
          <motion.div
            className={`cert-card panel ${c.image ? "cert-clickable" : ""}`}
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            whileHover={c.image ? { scale: 1.045, y: -6 } : undefined}
            onClick={() => c.image && setActive(c)}
            role={c.image ? "button" : undefined}
            tabIndex={c.image ? 0 : undefined}
          >
            <div className="cert-image-wrap">
              {c.image ? (
                <img className="cert-image" src={c.image} alt={c.title} />
              ) : (
                <div className="cert-placeholder">
                  <span>📜</span>
                  <p>add image in content.js</p>
                </div>
              )}
            </div>
            <div className="cert-body">
              <h3 className="cert-title font-display">{c.title}</h3>
              <p className="cert-meta">{c.issuer} · {c.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <CertificateLightbox cert={active} onClose={() => setActive(null)} />
    </section>
  );
}
