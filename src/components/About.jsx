import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Currently from "./Currently";
import { profile } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <SectionHeading icon="📖" title="A Little About Me" subtitle="from my field notes" />

      <div className="about-layout">
        <motion.div
          className="about-window panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-body">
            <p className="about-answer">
              I'm an AI student, ML & Applied Research enthusiast based in {profile.location}. I like
              turning messy, real-world signals, scanned medical documents, raw
              sensor noise, survey spreadsheets, into systems that actually
              answer a <span className="doodle">question</span>.
            </p>
            <p className="about-answer">
              That's shown up as a RAG chatbot for oncology data, a deep-learning
              pipeline that reads vital signs off a PPG waveform, and a
              co-authored research paper built from a wide student survey.
            </p>
            <p className="about-answer about-answer-last">
              Currently finishing my BS in Artificial Intelligence at Air
              University (2027) and looking for internships or entry-level
              roles in AI, ML, and applied research.{" "}
              <span className="about-highlight">Ready to grow something new.</span>
            </p>
          </div>
        </motion.div>

        <Currently />
      </div>
    </section>
  );
}
