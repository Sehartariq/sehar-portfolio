import { motion } from "framer-motion";
import "./SectionHeading.css";

export default function SectionHeading({ icon, title, subtitle }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      <span className="section-icon">{icon}</span>
      <div>
        <h2 className="section-title font-display">{title}</h2>
        {subtitle && <p className="section-subtitle font-hand">{subtitle}</p>}
      </div>
    </motion.div>
  );
}
