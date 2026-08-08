import { motion } from "framer-motion";
import { profile, stats } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-frame panel">
        <div className="hero-frame-header">
          <span className="chip">🌾 {profile.status.replace(/_/g, " ")}</span>
          <span className="chip">📍 {profile.location}</span>
        </div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {profile.role}
        </motion.p>

        <motion.h1
          className="hero-name font-display"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Undergraduate AI student building applied ML & NLP {" "}
           systems; from RAG-powered healthcare
          chatbots to real-time vital-signs classifiers. Currently seeking{" "}
          internships & entry-level roles in
          AI/ML, data science, and research.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <a className="btn btn-primary" href={profile.resume}>
            🌻 Download Resume
          </a>
          <a className="btn btn-ghost" href="#contact">
            ✉️ Say Hello
        </a>
        </motion.div>

        <div className="hero-stats">
          {stats.map((s, i) => (
            <motion.div
              className="hero-stat"
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
            >
              <div className="hero-stat-value font-display">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-cue font-hand">
        <span>keep scrolling</span>
        <span className="hero-scroll-arrow">↓</span>
      </div>
    </section>
  );
}
