import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { art } from "../data/content";
import "./ArtCorner.css";

export default function ArtCorner() {
  return (
    <section className="art-corner" id="art">
      <SectionHeading icon="🎨" title="My Art Corner" subtitle="the non-technical side of me" />

      <motion.div
        className="art-panel panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <div className="art-doodle-frame">
          {art.doodle.image ? (
            <img src={art.doodle.image} alt={art.doodle.caption} className="art-doodle-img" />
          ) : (
            <div className="art-doodle-placeholder">
              <span>🖍️</span>
              <p>drop today's doodle at /public/doodle-of-the-day.jpg</p>
            </div>
          )}
          <p className="art-doodle-caption font-hand">{art.doodle.caption}</p>
        </div>

        <div className="art-cta">
          <p className="art-cta-text">
            I draw for fun between debugging sessions & assignments. Sketches, little
            doodles, whatever's on my mind. More of it lives on my art
            Instagram.
          </p>
          <a className="btn btn-primary" href={art.instagram} target="_blank" rel="noreferrer">
            📷 See more on Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}
