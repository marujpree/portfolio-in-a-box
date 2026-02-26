# Portfolio in a Box

A ready-to-use personal portfolio built with **Next.js**, featuring a collapsible sidebar, multiple pages (About, Experience, Projects, Contact), and a warm, distinctive design that respects light and dark mode.

---

## What’s included

- **Collapsible sidebar** – Menu/Close toggle, nav links, and version block
- **Pages** – About, Experience (timeline), Projects (cards), Contact (placeholder)
- **Styling** – Accent colors, subtle gradients, dot pattern, and smooth transitions
- **Responsive** – Sidebar overlays on small screens; content shifts on desktop when open

---

## Prerequisites

Before you run or deploy this project, make sure you have:

| Requirement | Details |
|-------------|---------|
| **Node.js** | Version **18.17** or later (LTS recommended). Check with `node -v`. |
| **npm** | Comes with Node.js. Check with `npm -v`. |

Optional: [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.

---

## How to download the project

### Option 1: Clone with Git

If you have the repo URL (e.g. from GitHub):

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-in-a-box.git
cd portfolio-in-a-box
```

### Option 2: Download as ZIP

1. Open the repo on GitHub.
2. Click the green **Code** button → **Download ZIP**.
3. Unzip the file and open a terminal in the project folder:

```bash
cd /path/to/portfolio-in-a-box
```

---

## Install and run locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser. The app redirects to `/about` by default.

4. **Build for production** (optional)

   ```bash
   npm run build
   npm start
   ```

---

## Project structure (relevant parts)

```
app/
  components/     # Sidebar, PortfolioLayout
  about/          # About page
  experience/     # Experience / timeline page
  projects/       # Projects page
  contact/        # Contact placeholder
  layout.tsx      # Root layout
  globals.css     # Theme and layout styles
```

Edit the copy and data (e.g. timeline entries, project list) in the corresponding `page.tsx` files and in `app/components/Sidebar.tsx` for the sidebar label and version.

---

## Deploy on Vercel

Vercel is the simplest way to deploy this Next.js app (and it’s made by the Next.js team).

### One-time setup

1. **Create a Vercel account**  
   Go to [vercel.com](https://vercel.com) and sign up (e.g. with GitHub).

2. **Push your code to GitHub** (if you haven’t already)

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-in-a-box.git
   git push -u origin main
   ```

### Deploy from the Vercel dashboard

1. Go to [vercel.com/new](https://vercel.com/new).
2. **Import** your `portfolio-in-a-box` repository (grant Vercel access to GitHub if asked).
3. Leave the default settings as-is:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (or leave default)
   - **Output Directory:** (default)
   - **Install Command:** `npm install`
4. Click **Deploy**.
5. Wait for the build to finish. Vercel will give you a URL like `https://portfolio-in-a-box-xxx.vercel.app`.

Every push to `main` will trigger a new deployment. You can add a custom domain in the project’s **Settings → Domains** on Vercel.

### Deploy from the command line (optional)

1. Install the Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. From the project folder, run:

   ```bash
   vercel
   ```

3. Log in and follow the prompts (link to existing project or create new one). Use `vercel --prod` when you’re ready to deploy to production.

---

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server (port 3000)   |
| `npm run build`| Build for production           |
| `npm start`    | Run production build locally   |
| `npm run lint` | Run ESLint                     |

---

## Customization

- **Colors and theme:** Edit CSS variables in `app/globals.css` (e.g. `--accent`, `--background`). Dark mode is driven by `prefers-color-scheme`.
- **Content:** Update copy and data in `app/about/page.tsx`, `app/experience/page.tsx`, `app/projects/page.tsx`, and `app/contact/page.tsx`.
- **Sidebar:** Change the site title, “Let’s work together!”, and version text in `app/components/Sidebar.tsx`.

---

## Learn more

- [Next.js docs](https://nextjs.org/docs)
- [Deploying Next.js on Vercel](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel dashboard](https://vercel.com/dashboard)
