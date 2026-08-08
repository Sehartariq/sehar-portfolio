import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";
import "./Projects.css";

const ICONS = ["🩺", "💗", "⏱️"];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <SectionHeading icon="🗺️" title="Projects" subtitle="a few things I've built & studied" />

      <div className="projects-list">
        {projects.map((p, i) => (
          <motion.article
            className="project-card panel"
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
          >
            <div className="project-visual">
              {p.video ? (
                <video
                  className="project-media"
                  src={p.video}
                  poster={p.image || undefined}
                  controls
                  playsInline
                />
              ) : p.image ? (
                <img className="project-media" src={p.image} alt={p.name} />
              ) : (
                <>
                  <span className="project-emoji">{ICONS[i % ICONS.length]}</span>
                  <span className="project-codename font-hand">{p.codename}</span>
                </>
              )}
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="chip">{p.date}</span>
                <span className="chip">{p.location}</span>
              </div>
              <h3 className="project-name font-display">{p.name}</h3>
              <p className="project-blurb">{p.blurb}</p>
              <ul className="project-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="chip stack-chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <a
                className="btn btn-ghost project-link"
                href={p.link}
                target={p.link && p.link !== "#" ? "_blank" : undefined}
                rel="noreferrer"
              >
                See the source →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
