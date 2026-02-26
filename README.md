# Portfolio in a Box

Welcome! This repository is a collection of three portfolio templates, each built with different technologies and deployment targets. Pick the stack that fits you best and follow the linked README in each folder to get started.

---

## Welcome

If you're new here—whether you're a teammate, contributor, or someone exploring the repo—thanks for stopping by. Each subdirectory is a **standalone portfolio project** you can run locally, customize, and deploy. Use the navigation below to jump to the one you care about.

---

## Portfolio projects

| Project | Tech stack | Deploy target | README |
|--------|------------|----------------|--------|
| **[next.js](./next.js)** | Next.js, React, TypeScript, Tailwind | [Vercel](https://vercel.com) | [next.js/README.md](./next.js/README.md) |
| **[melissa-portfolio](./melissa-portfolio)** | Node.js, Express | [GitHub Pages](https://pages.github.com) | [melissa-portfolio/README.md](./melissa-portfolio/README.md) |
| **[vanillajs](./vanillajs)** | HTML, CSS, JavaScript (no framework) | [Firebase Hosting](https://firebase.google.com/docs/hosting) | [vanillajs/README.md](./vanillajs/README.md) |

---

## Prerequisites by project

Before running or deploying, ensure you have what each project needs.

### [next.js](./next.js) — Next.js on Vercel

| Requirement | Details |
|-------------|---------|
| **Node.js** | **18.17** or later (LTS recommended). Check with `node -v`. |
| **npm** | Bundled with Node. Check with `npm -v`. |

Optional: [nvm](https://github.com/nvm-sh/nvm) for managing Node versions.

→ Full setup and deploy steps: [next.js/README.md](./next.js/README.md)

---

### [melissa-portfolio](./melissa-portfolio) — GitHub Pages

| Requirement | Details |
|-------------|---------|
| **Node.js** | Current LTS recommended. Check with `node -v`. |
| **npm** | Bundled with Node. Check with `npm -v`. |

Uses Express for local dev; deploy output is typically built/static assets for GitHub Pages.

→ Project details and run instructions: [melissa-portfolio/README.md](./melissa-portfolio/README.md)

---

### [vanillajs](./vanillajs) — Firebase Hosting

| Requirement | Details |
|-------------|---------|
| **Firebase CLI** | Install with `npm install -g firebase-tools`. |
| **Firebase account** | Sign in with `firebase login`. |
| **Browser** | No Node build step; open `index.html` locally or deploy with Firebase. |

→ Deploy and customization: [vanillajs/README.md](./vanillajs/README.md)

---

## Quick navigation

- **[next.js](./next.js)** — React/Next.js app with sidebar, multiple pages, light/dark theme. Deploy on Vercel.
- **[melissa-portfolio](./melissa-portfolio)** — Portfolio site served with Express; deploy on GitHub Pages.
- **[vanillajs](./vanillajs)** — Static HTML/CSS/JS portfolio; deploy with Firebase Hosting.

Each folder has its own **README.md** with install, run, and deploy instructions. Start from the project you want and follow that README.

---

## Clone and explore

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-in-a-box.git
cd portfolio-in-a-box
```

Then `cd` into `next.js`, `melissa-portfolio`, or `vanillajs` and follow that project’s README.
