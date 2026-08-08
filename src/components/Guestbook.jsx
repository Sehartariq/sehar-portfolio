import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { guestbook } from "../data/content";
import "./Guestbook.css";

export default function Guestbook() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  if (!guestbook.formEndpoint) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(guestbook.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="guestbook" id="guestbook">
      <SectionHeading icon="✉️" title="Leave a Note" subtitle="the guestbook is open" />

      <motion.div
        className="guestbook-panel panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        {status === "sent" ? (
          <div className="guestbook-thanks">
            <span className="guestbook-thanks-icon">🌸</span>
            <p>Thank you for stopping by — your note means a lot.</p>
          </div>
        ) : (
          <form className="guestbook-form" onSubmit={handleSubmit}>
            <div className="guestbook-row">
              <input
                type="text"
                name="name"
                placeholder="your name"
                required
                className="guestbook-input"
              />
              <input
                type="email"
                name="email"
                placeholder="your email (optional)"
                className="guestbook-input"
              />
            </div>
            <textarea
              name="message"
              placeholder="say hello, leave a thought, whatever you like..."
              required
              rows={4}
              className="guestbook-textarea"
            />
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "sending..." : "🌿 sign the guestbook"}
            </button>
            {status === "error" && (
              <p className="guestbook-error">
                Something went wrong — please try again in a moment.
              </p>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
}