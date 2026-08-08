import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { shelf } from "../data/content";
import "./InspirationShelf.css";

export default function InspirationShelf() {
  return (
    <section className="shelf-section" id="shelf">
      <SectionHeading icon="📚" title="Inspiration Shelf" subtitle="things that shaped how I think" />

      <div className="shelf-row">
        {shelf.map((item, i) => (
          <motion.div
            className="shelf-item panel"
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
          >
            <span className="shelf-icon">{item.icon}</span>
            <h4 className="shelf-title font-display">{item.title}</h4>
            <p className="shelf-by">{item.by}</p>
            <p className="shelf-note font-hand">{item.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
