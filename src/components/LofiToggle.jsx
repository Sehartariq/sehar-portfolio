import { useEffect, useRef, useState } from "react";
import { music } from "../data/content";
import "./LofiToggle.css";

export default function LofiToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  if (!music.src) return null;

  return (
    <div className="lofi-toggle-wrap">
      <audio ref={audioRef} src={music.src} loop />
      <button
        className={`lofi-btn ${playing ? "lofi-playing" : ""}`}
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause lofi music" : "Play lofi music"}
        title={playing ? "Pause lofi music" : "Play a little lofi"}
      >
        {playing ? "🎶" : "🎵"}
      </button>
    </div>
  );
}
