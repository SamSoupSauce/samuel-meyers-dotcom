---
title: 'Bare-Metal Aesthetics: Web Audio Procedural Synthesis & CRT Vector Graphics'
description: 'Building SynthJS and Hunt the Wumpus using pure Web Audio API synthesis, 3D vector canvas rendering, and custom CRT shader effects.'
pubDate: 'Jul 02 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

Modern web applications often rely on heavy external media files — loading megabytes of MP3/OGG audio files and heavy raster graphics assets. **SynthJS** and **Hunt the Wumpus** explore a zero-dependency alternative: **procedural Web Audio API sound synthesis and real-time 2D vector canvas rendering with CRT monitor aesthetics.**

```
┌──────────────────────────────────────────────────────────┐
│                   Web Audio Synthesis                    │
│ OscillatorNode ──► GainNode ──► BiquadFilter ──► Output  │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│                    CRT Vector Canvas                     │
│ 3D Vector Math ──► Wireframe Projection ──► Scanlines    │
└──────────────────────────────────────────────────────────┘
```

## 1. Procedural Web Audio Synthesis (SynthJS)

Rather than embedding static audio samples, SynthJS constructs custom audio graph nodes at runtime:

```javascript
// Web Audio API procedural sound generation
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function triggerLaserSound() {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(880, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 0.15);

  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.15);
}
```

By controlling frequency ramps, wave shapes (sawtooth, square, triangle), and envelope gain curves dynamically in JavaScript, complex sound effects and synth leads are synthesized with zero HTTP network requests.

---

## 2. CRT Vector Rendering (Hunt the Wumpus)

In **Hunt the Wumpus**, retro wireframe graphics are projected onto an HTML5 Canvas using vector projection mathematics and styled with CRT phosphor effects:

* **Phosphor Glow:** Layered semi-transparent stroke rendering with `shadowBlur` and `shadowColor` properties.
* **Scanline Overlay:** CSS radial gradients and subtle scanline pattern overlays mimicking analog Cathode-Ray Tube monitors.
* **Procedural Vector Mesh:** 3D coordinates projected into 2D screen space using perspective transformation matrices.

---

## Conclusion

Combining procedural Web Audio synthesis with vector canvas rendering allows building rich, immersive web games and graphics demos with lightweight code footprint and instant load times.
