# Premium Developer Portfolio Website - Saif Ur Rehman

A high-performance, premium, and visually stunning developer portfolio website built for **Saif Ur Rehman**, a Senior Android and Flutter Developer with 7+ years of experience.

The design is heavily inspired by Apple, Stripe, Linear, and Vercel: showcasing dark-mode-by-default, glowing neon ambient backdrops, modern typography, canvas-based interactive elements, and glassmorphism.

---

## 🚀 Key Features

*   **Premium Visuals & Animations**: High-performance interactive background canvas particles, custom trailing cursor, and scroll progress trackers.
*   **Dynamic Theme Toggle**: Clean light/dark mode switch, stored in LocalStorage, dark-mode-by-default.
*   **Developer Showcase**: Highlights, detailed professional biography, and category-filtered skill progress indicators.
*   **Projects Gallery**: Expanded project cards showing descriptions, technologies, source code, and live demo hooks, plus detailed details modal overlays.
*   **Chronological Timeline**: Scroll-revealed career journey charting roles from junior engineer to team lead and senior Android specialist.
*   **GitHub API Integration**: Real-time listing of active repositories with custom stats grids and interactive CSS contribution mockups.
*   **Contact Form**: Input validations with built-in client EmailJS integrations, firing satisfying confetti flows upon successful delivery.
*   **SEO Optimized**: Dynamic metadata, Open Graph (OG) hooks, robot crawler rules, sitemap paths, and high accessibility standards.

---

## 🛠️ Technology Stack

*   **Core**: React (v18) + TypeScript
*   **Bundler**: Vite
*   **Styling**: Tailwind CSS (v3) + PostCSS + CSS Glassmorphism
*   **Animations**: Framer Motion
*   **Icons**: React Icons (Fa, Si, Fi, Di)
*   **Interactions**: Canvas Confetti
*   **Form Deliveries**: EmailJS

---

## 📁 Directory Structure

```text
├── .github/workflows/   # Github Actions deployment scripts
│   └── deploy.yml
├── public/              # Static files (PWA manifest, sitemap, robots, icons)
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/          # Project images & illustration assets
│   ├── components/      # Independent modular layout components
│   ├── App.tsx          # Main assembly page container
│   ├── main.tsx         # Virtual DOM hydrate bootstrap
│   ├── index.css        # Resets, scrollbars, and core glass classes
│   └── vite-env.d.ts    # Global Vite TypeScript definitions
├── index.html           # Main document entry template with SEO metatags
├── tailwind.config.js   # Custom gradients, timings, and colors settings
├── tsconfig.json        # Strict compiler rules
├── netlify.toml         # Netlify routing redirects and security configs
└── package.json         # Dependency packages manifest
```

---

## 💻 Local Setup & Development

Ensure you have [Node.js](https://nodejs.org/) (v20+ recommended) and npm installed.

1.  **Clone the workspace** and navigate into the folder:
    ```bash
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run local development server**:
    ```bash
    npm run dev
    ```
    Access the local server at `http://localhost:5173`.

4.  **Validate compiling/building for production**:
    ```bash
    npm run build
    ```
    Output builds are compiled into the `dist/` folder.

---

## ⚙️ Setting Up EmailJS

To receive contact messages directly into your inbox:

1.  Create a free account at [EmailJS](https://www.emailjs.com/).
2.  Add an Email Service (e.g., Gmail, Outlook).
3.  Create a Contact Form Template. Use the field keys: `name`, `email`, `subject`, and `message`.
4.  Create a `.env` file at the root directory of your project:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    *If these are not provided, the contact form automatically falls back to a Sandbox Simulation Mode so visitors can test inputs with visual feedback.*

---

## 🌐 Deployment Guidelines

### Option A: Deploying to Netlify (Recommended)

This project contains a pre-configured `netlify.toml` file setting up cache optimizations and SPA redirects.

1.  Push the code repository to GitHub/GitLab.
2.  Log in to [Netlify](https://www.netlify.com/) and click **Add New Site** > **Import an existing project**.
3.  Select your repository.
4.  Set build settings (configured automatically via `netlify.toml`):
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5.  Under **Site Configuration** > **Environment variables**, input your EmailJS keys if desired.
6.  Click **Deploy site**.

### Option B: Deploying to GitHub Pages

The project contains a GitHub Actions workflow in `.github/workflows/deploy.yml` that automatically builds and deploys to the `gh-pages` branch on push to the `main` branch.

1.  Create a new repository on GitHub.
2.  Go to repository **Settings** > **Actions** > **General** > **Workflow permissions**.
3.  Select **Read and write permissions** (needed to push the build to the `gh-pages` branch) and click Save.
4.  Push your code changes to the `main` branch:
    ```bash
    git init
    git remote add origin your-github-repo-url
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git push -u origin main
    ```
5.  The GitHub Actions workflow will trigger. Once completed, go to **Settings** > **Pages** and ensure the source is set to deploy from the `gh-pages` branch.
