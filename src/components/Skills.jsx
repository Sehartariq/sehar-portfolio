import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/content";
import "./Skills.css";

const ICONS = ["🌱", "🧺", "🍄", "🪻", "🐝", "🧶"];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <SectionHeading icon="🧺" title="Things I've Grown" subtitle="skills, tended over time" />

      <div className="skills-grid">
        {skills.map((group, i) => (
          <motion.div
            className="skill-card panel"
            key={group.group}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <div className="skill-card-head">
              <span className="skill-icon">{ICONS[i % ICONS.length]}</span>
              <h3 className="font-display">{group.group}</h3>
            </div>
            <div className="skill-items">
              {group.items.map((item) => (
                <span className="chip skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
