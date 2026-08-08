import { useState } from "react";
import { motion } from "framer-motion";
import { thoughts } from "../data/content";
import "./ThoughtOfDay.css";

function dayIndex() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const diff = new Date() - start;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayOfYear % thoughts.length;
}

export default function ThoughtOfDay() {
  const [index, setIndex] = useState(dayIndex());

  const shuffle = () => {
    setIndex((prev) => {
      let next = Math.floor(Math.random() * thoughts.length);
      if (next === prev && thoughts.length > 1) next = (next + 1) % thoughts.length;
      return next;
    });
  };

  return (
    <section className="thought" id="thought">
      <motion.div
        className="thought-note"
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="thought-pin">📌</span>
        <p className="thought-label font-hand">thought of the day</p>
        <p className="thought-text font-display">"{thoughts[index]}"</p>
        <button className="thought-shuffle" onClick={shuffle}>
          🦋 another one
        </button>
      </motion.div>
    </section>
  );
}
