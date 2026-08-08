import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience, education, activities, languages } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <SectionHeading icon="🧵" title="My Journey" subtitle="where I've been & what I've learned" />

      <div className="exp-grid">
        <div className="exp-col">
          {experience.length > 0 && (
            <>
              <h4 className="exp-col-title font-display">Work</h4>
              {experience.map((e) => (
                <motion.div
                  className="exp-item panel"
                  key={e.org}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="exp-item-head">
                    <span className="exp-role font-display">{e.role}</span>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <div className="exp-org">{e.org} — {e.location}</div>
                  <ul className="exp-points">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </>
          )}

          <motion.a
            href="#certificates"
            className="course-pointer panel"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: 36 }}
          >
            <span className="course-pointer-icon">🎓</span>
            <span>
              <span className="course-pointer-title font-display">Courses & Certificates</span>
              <span className="course-pointer-sub">see them all, with the actual certificates →</span>
            </span>
          </motion.a>
        </div>

        <div className="exp-col">
          <h4 className="exp-col-title font-display">Education</h4>
          {education.map((ed) => (
            <motion.div
              className="exp-item panel"
              key={ed.school}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <div className="exp-item-head">
                <span className="exp-role font-display">{ed.degree}</span>
                <span className="exp-period">{ed.period}</span>
              </div>
              <div className="exp-org">{ed.school} — {ed.location}</div>
            </motion.div>
          ))}

          <h4 className="exp-col-title font-display" style={{ marginTop: 36 }}>
            Activities & Languages
          </h4>
          <motion.ul
            className="course-list panel"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            {activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
            <li className="lang-line">{languages.join(" · ")}</li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
