# ⚡ Samuel L. Meyers (samuel-meyers.com)

> Personal site, systems telemetry dashboard, and engineering blog for **Samuel L. Meyers** ([@SamSoupSauce](https://github.com/SamSoupSauce)).

Live Site: **[samuel-meyers.com](https://samuel-meyers.com)**

---

## 🚀 Overview

Built lean with [Astro 5](https://astro.build), this personal platform presents low-level systems projects, local AI architecture, single-binary tools, and raw AI agent status reports.

### Key Features
* **Dark Engineering Theme:** Custom palette (`#0d0f12`, `#161920`, `#4f80ff`) with ambient text glows (`--text-glow-heading`, `--text-glow-accent`, `--text-glow-green`).
* **AI Telemetry & System Reports:** Raw agent status reports authored by **Antigravity** (Google DeepMind AI agent) auditing real codebases (**ClickClack**, **Overkill**, **CryptoScope**, **SynthJS & Hunt the Wumpus**).
* **Typography:** Pre-connected **JetBrains Mono** & **Inter** font stack.
* **Navigation Shell:** Sticky glassmorphism header with active route detection, RSS feed (`/rss.xml`), and GitHub link (`@SamSoupSauce`).
* **Zero Boilerplate:** Cleaned with extreme prejudice — 0% filler text, 100% custom content.

---

## 🛠️ Project Structure

```text
├── public/                 # Static assets & favicons
├── src/
│   ├── assets/             # Hero images & fonts
│   ├── components/         # Header, HeaderLink, Footer, BaseHead, FormattedDate
│   ├── content/
│   │   └── blog/           # AI Telemetry status report markdown files
│   ├── layouts/            # BlogPost layout component
│   ├── pages/              # index.astro, about.astro, blog/index.astro, rss.xml.js
│   ├── styles/             # global.css (design system tokens & text glows)
│   └── consts.ts           # Global site title & description constants
├── astro.config.mjs        # Astro configuration & site metadata
├── CHANGELOG.md            # Version & overhaul changelog
└── package.json            # Dependencies & scripts
```

---

## 🧞 Local Development

Manage background dev server as specified in project workflows:

```bash
# Install dependencies
npm install

# Run dev server in background mode
astro dev --background

# Server controls
astro dev status      # Check server status
astro dev logs        # Tail dev server logs
astro dev stop        # Stop background dev server

# Static Production Build
npm run build         # Compiles static site to ./dist/
```

---

## 📊 Highlighted Projects Featured

* **💬 ClickClack ([clickclack.chat](https://clickclack.chat)):** Single-binary Go + Svelte SPA realtime team chat for OpenClaw agents & humans with SQLite (WAL & FTS5) and WebSockets cursor recovery.
* **🤖 Overkill Agent Supervisor:** Autonomous agent supervisor with sandbox isolation (`sandbox.sh`), Model Context Protocol (`mcp.json`), and hot-reloading Go binaries.
* **📊 CryptoScope Data Pipeline:** Binary Protocol Buffers (`batch.proto`) event streaming, time-series SQL observers, and high-frequency calculation.
* **🕹️ Retro Audio & Vector Engines:** SynthJS Web Audio API procedural synthesis and Hunt the Wumpus 3D vector canvas engine with CRT phosphor shaders.

---

## 📄 License & Contact

* **Developer:** Samuel L. Meyers (Sam / `mrovkill`)
* **Email:** [sam@samuel-meyers.com](mailto:sam@samuel-meyers.com)
* **GitHub:** [@SamSoupSauce](https://github.com/SamSoupSauce)
* **License:** [MIT](LICENSE)
