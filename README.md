# Sehar Tariq — Portfolio

A React + Vite portfolio site with a Y2K / cybercore terminal-OS aesthetic:
boot sequence intro, scanline overlay, glitch text, custom cursor, and
holographic project cards.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Edit your content

Everything text-based — name, bio, skills, projects, experience, education,
links — lives in one file:

```
src/data/content.js
```

Change the values there and every section updates automatically. No need to
touch the component files unless you want to change layout or design.

**Before you deploy, update these placeholders in `content.js`:**
- `github` and `linkedin` URLs (currently placeholder links)
- `resume` — point this at your actual resume PDF (see below)
- project `link` fields — point at live demos or repos if you have them

### Adding your resume PDF

Drop your resume PDF into the `public/` folder (e.g. `public/resume.pdf`),
then set `resume: "/resume.pdf"` in `content.js`.

### Adding certificates

Full walkthrough is in the comment block above `export const certificates`
in `content.js`. Short version: put an image in `public/certificates/`,
add an entry to the array with an `image` field pointing at it. Cards with
an image become clickable and open it in a new tab.

### Adding project images/videos

Same pattern — see the comment above `export const projects`. Drop files
in `public/projects/`, set `image` and/or `video` on that project. Leave
both `null` and the card falls back to the current icon + codename look.

### Art Corner

- `art.instagram` — your art page link (already set)
- `art.doodle.image` — set to `"/doodle-of-the-day.jpg"` after adding that
  file to `public/`. Keep reusing the same filename going forward and you
  can update your doodle without ever touching the code again.

### Thought of the Day

Just add strings to the `thoughts` array in `content.js`. One shows per day
automatically (cycles by date), and there's a shuffle button for visitors
to see more.

### "Currently..." panel

Plain text fields in the `currently` object — edit anytime.

### Inspiration Shelf

Add/remove objects in the `shelf` array — books, papers, films, anything.

### Night mode

Already wired up — the 🌙/☀️ toggle in the nav bar switches themes and
remembers the visitor's choice. Fireflies only appear in dark mode.

### Lofi background music

Add a royalty-free mp3 to `public/audio/lofi.mp3`, set `music.src` in
`content.js` to `"/audio/lofi.mp3"`. The floating toggle button in the
bottom-left only appears once a track is set.

### Guestbook (not yet added to the page)

The data scaffold for a "leave a note" guestbook using a free Formspree
endpoint already exists in `content.js` (`export const guestbook`) if you
want this later — just say the word and I'll wire up the actual component.

## Deploy it (free, ~2 minutes) — Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com, sign in with GitHub.
3. Click "Add New → Project", select your repo.
4. Vercel auto-detects Vite — just click **Deploy**.
5. You'll get a live URL like `sehar-portfolio.vercel.app` (you can add a
   custom domain later in project settings).

Every time you push to `main`, Vercel redeploys automatically.

### Alternative: Netlify
Same flow — "Add new site → Import from Git", build command `npm run build`,
publish directory `dist`.

### Alternative: GitHub Pages
```bash
npm install -D gh-pages
```
Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`,
then run `npm run deploy`. You'll also need to set `base: '/your-repo-name/'`
in `vite.config.js`.

## Tech used
- React 19 + Vite
- Framer Motion (scroll/entrance animations)
- Hand-written CSS with CSS variables (no Tailwind) for full control over the
  retro-cybercore look
- Google Fonts: Orbitron (display) + Space Mono (body/terminal)

## Structure
```
src/
  data/content.js       <- all your real content, edit this
  components/
    BootScreen.jsx        <- terminal boot animation on load
    StatusBar.jsx          <- fixed nav styled as a system status bar
    CursorGlow.jsx          <- custom neon cursor (desktop only)
    Hero.jsx                  <- name, tagline, stats
    About.jsx                   <- terminal-window bio
    Skills.jsx                    <- grouped skill modules
    Projects.jsx                   <- project cards
    Experience.jsx                   <- work / education / courses
    Contact.jsx                        <- links
    Footer.jsx
```
