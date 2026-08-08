import { useMemo } from "react";
import "./FloatingPetals.css";

const SHAPES = ["🍃", "🌸", "🍂"];

function seededParticles(count) {
  return Array.from({ length: count }).map((_, i) => {
    const shape = SHAPES[i % SHAPES.length];
    const left = (i * 137.5) % 100;
    const delay = (i * 3.7) % 22;
    const duration = 18 + ((i * 5) % 14);
    const size = 14 + ((i * 7) % 12);
    return { id: i, shape, left, delay, duration, size };
  });
}

export default function FloatingPetals() {
  const particles = useMemo(() => seededParticles(10), []);

  return (
    <div className="petals-layer" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.shape}
        </span>
      ))}
    </div>
  );
}
