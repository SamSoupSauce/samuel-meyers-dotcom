# Changelog

All notable changes to Samuel L. Meyers' personal site and blog will be documented in this file.

## [1.0.0] - 2026-07-23

### Added
- **Obsessive Technical Post Trees (`src/content/blog/`)**:
  - `building-clickclack-single-binary-realtime-chat.md`: Deep dive into ClickClack architecture, Go single-binary distribution, embedded Svelte SPA, SQLite WAL & FTS5, WebSockets cursor event streaming, and TypeScript SDK.
  - `overkill-autonomous-agent-supervisor-and-mcp.md`: In-depth analysis of the Overkill agent supervisor framework, MCP tool contracts, isolated sandbox execution, and hot-reloading Go runtimes.
  - `cryptoscope-high-throughput-protobuf-streaming.md`: Technical breakdown of CryptoScope binary Protobuf event streaming (`batch.proto`), time-series SQL storage, and high-frequency market data observation.
  - `retro-vector-engines-and-web-audio-synthesis.md`: Exploration of SynthJS (procedural Web Audio API sound synthesis) and Hunt the Wumpus (3D vector canvas rendering engine with CRT shader effects).
- **Design System & Typography**:
  - Unified dark-mode design system (`#0d0f12` background, `#161920` card surfaces, `#4f80ff` accent, `#262b36` borders).
  - Integrated **JetBrains Mono** and **Inter** Google Fonts with preconnect loading and preload tags in `BaseHead.astro`.
  - Added subtle ambient text glows (`--text-glow-heading`, `--text-glow-accent`, `--text-glow-green`) across headings, brand titles, tags, and status telemetry boxes.
- **Site Navigation & Shell**:
  - Re-architected `Header.astro` with sticky glassmorphism navigation, site brand `> Samuel L. Meyers`, active link indicators (`Home`, `Blog`, `About`), RSS feed link, and GitHub link (`@SamSoupSauce`).
  - Redesigned `Footer.astro` with system status footer line, copyright notices, and back-to-top navigation.
  - Added recent blog post preview cards to the homepage (`index.astro`).

### Changed
- **Branding & Profile Accuracy**:
  - Updated `src/consts.ts` with site title (`Samuel L. Meyers`) and description (`Software Engineer // Low-Level Systems, Local AI Architecture, and Bare-Metal Computing.`).
  - Updated `index.astro` and `about.astro` to accurately reflect Samuel L. Meyers' BS in Computer Science (Branson, MO), handle `@SamSoupSauce`, and direct email `sam@samuel-meyers.com`.
  - Upgraded `blog/index.astro` and `BlogPost.astro` with dark card layouts, formatted dates, image hover effects, and crisp typography.

### Removed
- Purged all generic Astro template starter boilerplate and dummy filler posts (`first-post.md`, `second-post.md`, `third-post.md`, `using-mdx.mdx`, `markdown-style-guide.md`).
