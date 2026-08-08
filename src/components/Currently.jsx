import { motion } from "framer-motion";
import { currently } from "../data/content";
import "./Currently.css";

const ROWS = [
  { icon: "📖", label: "reading", key: "reading" },
  { icon: "🛠️", label: "making", key: "making" },
  { icon: "🎧", label: "listening to", key: "listening" },
  { icon: "🌤️", label: "feeling", key: "feeling" },
];

export default function Currently() {
  return (
    <motion.div
      className="currently panel"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <p className="currently-heading font-hand">right now, I'm...</p>
      <ul className="currently-list">
        {ROWS.map((r) => (
          <li key={r.key}>
            <span className="currently-icon">{r.icon}</span>
            <span>
              <span className="currently-label">{r.label}</span> {currently[r.key]}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
