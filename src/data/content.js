export const profile = {
  name: "Sehar Tariq",
  handle: "@sehar.exe",
  role: "AI Student // Machine Learning & Applied Research",
  location: "Islamabad, Pakistan",
  email: "sehartariq119@gmail.com",
  phone: "+92 340 9510105",
  github: "https://github.com/Sehartariq",
  linkedin: "https://www.linkedin.com/in/sehar-tariq-170937350/",
  resume: "/SeharTariq_CV.pdf",
  tagline:
    "Undergraduate AI student building applied ML & NLP systems; from RAG-powered healthcare chatbots to real-time vital-signs classifiers. Currently seeking internships & entry-level roles in AI/ML, data science, and research.",
  status: "open to work",
};

export const stats = [
  { label: "Projects Shipped", value: "03" },
  { label: "Model Accuracy", value: "75%" },
  { label: "Certificates Earned", value: "03" },
  { label: "Grad Year", value: "2027" },
];

export const skills = [
  {
    group: "Languages & Core",
    items: ["Python", "SQL", "Git & GitHub"],
  },
  {
    group: "ML / DL",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Explainable AI (SHAP)",
    ],
  },
  {
    group: "NLP & Retrieval",
    items: ["RAG Pipelines", "FAISS", "Groq API", "Prompt Design"],
  },
  {
    group: "Data & Vision",
    items: [
      "Pandas / NumPy",
      "SPSS & R",
      "Matplotlib / Seaborn",
      "OpenCV",
    ],
  },
  {
    group: "Research",
    items: [
      "Research Methodology",
      "Scientific Writing",
      "Survey Design",
    ],
  },
  {
    group: "Tooling",
    items: ["Gradio", "Streamlit", "MS Office Suite"],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS
// To add an image: drop the file in /public/projects/ then set
//   image: "/projects/your-file.jpg"
// To add a video: drop an mp4 in /public/projects/ then set
//   video: "/projects/your-file.mp4"
// You can set BOTH, or neither (the card just won't show that part).
// Leave them as null if you don't have media yet.
// ─────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "01",
    codename: null,
    name: "Oncology RAG-based Chatbot",
    date: "Sep 2025",
    location: "Islamabad",
    image: null, // e.g. "/projects/onco-rag.jpg"
    video: null, // e.g. "/projects/onco-rag-demo.mp4"
    blurb:
      "A medical information system using Retrieval-Augmented Generation for fast, accurate healthcare data retrieval — built end-to-end and demoed live to faculty and peers.",
    points: [
      "Multi-modal ingestion pipeline combining OCR (PyTesseract) and speech-to-text for document intake",
      "FAISS vector database + Groq API for fast, accurate retrieval",
      "Real-time chatbot interface built in Gradio",
      "Presented a working end-to-end prototype to faculty and peers",
    ],
    stack: ["Python", "RAG", "FAISS", "Groq API", "OCR", "Gradio"],
    link: "https://github.com/Sehartariq/RAG-based-oncology-assistant-chatbot",
  },
  {
    id: "02",
    codename: null,
    name: "Intelligent Activity Recognition & Physiological Estimation",
    date: "Jan 2026",
    location: "Islamabad",
    image: null,
    video: null,
    blurb:
      "A real-time activity classifier and vital-signs estimator built on PPG signal data — turning raw sensor noise into readable, explainable predictions.",
    points: [
      "MLP-based deep learning model — 75% accuracy on activity classification",
      "Heart rate & SpO2 estimation from PPG signals via neural networks",
      "SHAP applied for model interpretability & feature importance",
      "Interactive Streamlit dashboard for real-time prediction visualization",
    ],
    stack: ["Python", "TensorFlow/Keras", "SHAP", "Streamlit", "Signal Processing"],
    link: "https://github.com/Sehartariq/intelligent-activity-recognition-and-physiological-monitoring-system-MLP",
  },
  {
    id: "03",
    codename: null,
    name: "Digital Stopwatch in x86 Assembly",
    date: "2025",
    location: "Islamabad",
    image: null,
    video: null,
    blurb:
      "A digital stopwatch built from scratch in x86 Assembly for EMU8086 — real-time MM:SS display driven entirely by BIOS interrupt-based timing, no libraries to lean on.",
    points: [
      "Start / Stop / Pause / Reset functionality with non-blocking keyboard input",
      "Real-time MM:SS display updated via BIOS interrupts",
      "Keyboard controls: S = start, P = pause, R = reset, Q = quit",
      "Runs in EMU8086 — open stopwatch.asm and press F5 to emulate",
    ],
    stack: ["x86 Assembly", "EMU8086", "BIOS Interrupts"],
    link: "https://github.com/Sehartariq/digital-stopwatch-Assembly",
  },
];

export const experience = [];

export const education = [
  {
    school: "Air University",
    location: "Islamabad, Pakistan",
    degree: "BS Artificial Intelligence",
    period: "Sep 2023 — Jun 2027 (expected)",
  },
  {
    school: "Govt. Post Graduate College",
    location: "Rawalakot, AJK",
    degree: "F.Sc. (Pre-Medical)",
    period: "Sep 2019 — Jun 2022",
  },
];

export const activities = [
  "Usher — Indus AI Week 2026, Pakistan",
  "Decor Team Member — Air University campus events",
  "Workshop: Vibecoding with Google Antigravity — GDGOC DevSummit 2026, Bahria University Islamabad",
];

export const languages = ["English (Fluent)", "Urdu (Native)"];

// ─────────────────────────────────────────────────────────────
// CERTIFICATES — how to add your own:
//
// 1. Put the certificate image or PDF-exported-as-image in
//    /public/certificates/  (e.g. public/certificates/spss.jpg)
//    Tip: if you only have a PDF, screenshot it or export page 1
//    as a .jpg/.png — much faster to load than embedding a PDF.
//
// 2. Add a new object to the array below, copy-paste one of the
//    existing ones and just change the four fields:
//      title  -> name of the course/certificate
//      issuer -> who issued it
//      date   -> when you got it
//      image  -> the path from step 1, starting with "/certificates/"
//
// That's it — the Certificates section on the site reads this
// array automatically and adds a new card for each entry.
// ─────────────────────────────────────────────────────────────
export const certificates = [
  {
    title: "Systematic Review and Meta-Analysis",
    issuer: "Multiomics",
    date: "Oct 2025",
    image: "/certificates/systematicReview.png", // e.g. "/certificates/systematic-review.jpg"
  },
  {
    title: "Scientific Writing Internship Program (Cohort 6)",
    issuer: "Multiomics",
    date: "Aug – Nov 2025",
    image: "/certificates/ScientificWriting.png",
  },
  {
    title: "Data Analysis Through SPSS & R",
    issuer: "Multiomics",
    date: "Aug – Sep 2025",
    image: "/certificates/DataAnalysis_certificate.png",
  },
];

// ─────────────────────────────────────────────────────────────
// ART CORNER
// - instagram: your art page link
// - doodle.image: path to today's doodle. To update it yourself:
//     1. Export/save your new doodle as an image
//     2. Replace the file at public/doodle-of-the-day.jpg
//        (keep the exact same filename — then you never have to
//        touch the code again, just overwrite the file)
//     3. Update doodle.caption and doodle.date below if you want
// ─────────────────────────────────────────────────────────────
export const art = {
  instagram: "https://www.instagram.com/_s3hr.x/",
  doodle: {
    image: "/doodle-of-the-day.jpeg", // set to "/doodle-of-the-day.jpg" once you add the file
    caption: "a little something I sketched today",
    date: "today",
  },
};

// ─────────────────────────────────────────────────────────────
// "CURRENTLY..." PANEL — edit anytime, it's just text
// ─────────────────────────────────────────────────────────────
export const currently = {
  reading: "a few research papers on LLMs and RAG pipelines",
  making: "a tiny Streamlit dashboard for fun",
  listening: "lofi beats while I debug",
  feeling: "curious 🌱",
};

// ─────────────────────────────────────────────────────────────
// THOUGHT OF THE DAY — add as many as you like, one shows per
// day (it cycles automatically based on the date, so it changes
// on its own — no need to update it daily unless you want to).
// ─────────────────────────────────────────────────────────────
export const thoughts = [
  "Obsession beats Talent.",
  "Create before you critique.",
  "Make it. Then make it better.",
  "Debug. Draw. Repeat.",
  "Nothing is wasted if it teaches you what not to do next.",
  "But why did curiosity killed the cat?",
  "You are allowed to make things nobody asked for.",
  "Rest is part of the process, not a break from it.",
  "Maybe I AM a robot",
  "Plotting secret World Domination.",
  "Make it weird. Make it yours. Make it slightly concerning.",
  "Your next idea might be the good one.",
  "Go make something unnecessarily cool.",
  "Be sure to touch some grass today",
  "Stay weird.",
  "Ask the question you're afraid sounds too simple.",
  "Somewhere out there, a semicolon is missing and she doesn't know it yet."
];

// ─────────────────────────────────────────────────────────────
// INSPIRATION SHELF — books, papers, artists, anything that
// inspires you. Edit freely, any length.
// ─────────────────────────────────────────────────────────────
export const shelf = [
  {
    title: "Attention Is All You Need",
    by: "Vaswani et al.",
    note: "the paper that keeps giving",
    icon: "📄",
  },
  {
    title: "Howl's Moving Castle",
    by: "Studio Ghibli",
    note: "the reason this site looks like this",
    icon: "🎬",
  },
  {
    title: "The Alignment Problem",
    by: "Brian Christian",
    note: "made me think differently about ML ethics",
    icon: "📚",
  },
  {
    title: "Sketchbook doodles",
    by: "me, always",
    note: "half my ideas start as a margin drawing",
    icon: "✏️",
  },
];

// ─────────────────────────────────────────────────────────────
// GUESTBOOK / LEAVE-A-NOTE
// Uses Formspree (free) to email messages straight to you —
// no database needed. To activate:
//   1. Go to https://formspree.io, sign up free
//   2. Create a new form, copy the endpoint it gives you
//      (looks like "https://formspree.io/f/xxxxxxxx")
//   3. Paste it below as formEndpoint
// Until you do that, the form will show a friendly "not set up
// yet" message instead of failing silently.
// ─────────────────────────────────────────────────────────────
export const guestbook = {
  formEndpoint: "https://formspree.io/f/xwlevvjj", // e.g. "https://formspree.io/f/abcdwxyz"
};

// ─────────────────────────────────────────────────────────────
// LOFI MUSIC TOGGLE
// Add a royalty-free lofi mp3 (Pixabay Music and YouTube Audio
// Library both have free tracks you can download) to
// /public/audio/lofi.mp3 — the toggle button will pick it up
// automatically. Leave as null to hide the button.
// ─────────────────────────────────────────────────────────────
export const music = {
  src: null, // e.g. "/audio/lofi.mp3"
};
