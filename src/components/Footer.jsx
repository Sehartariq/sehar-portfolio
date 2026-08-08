import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer font-body">
      <span>🌿 © {new Date().getFullYear()} Sehar Tariq — made with care, no templates</span>
      <span className="footer-note">thanks for stopping by <span className="blink">✨</span></span>
    </footer>
  );
}
