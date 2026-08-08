import { useMemo } from "react";
import "./Fireflies.css";

function seededFlies(count) {
  return Array.from({ length: count }).map((_, i) => {
    const left = (i * 61.8) % 100;
    const top = (i * 37.2) % 100;
    const delay = (i * 1.9) % 12;
    const duration = 9 + ((i * 3) % 8);
    const size = 3 + ((i * 5) % 4);
    return { id: i, left, top, delay, duration, size };
  });
}

export default function Fireflies() {
  const flies = useMemo(() => seededFlies(16), []);

  return (
    <div className="fireflies-layer" aria-hidden="true">
      {flies.map((f) => (
        <span
          key={f.id}
          className="firefly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
