"use client";

import { useEffect, useRef } from "react";

// Procedural ASCII jellyfish: 3D points (bell, oral arms, tentacles) are
// projected onto a character grid with a depth buffer, then drawn as glyphs.

const TAU = Math.PI * 2;
const RAMP = " .,:;=+*#%@";
const FONT_PX = 9;
const LINE_PX = 10;
const PERIOD = 3.2; // seconds per bell pulse
const BELL_R = 1;
const BELL_H = 0.85;
const TILT = -0.3; // look up at the bell from slightly below
const N_ARMS = 5;
const N_TENT = 14;
const N_PLANKTON = 46;
const HUE_STEPS = 36;
const LUM_STEPS = 8;

const smooth = (x: number) => x * x * (3 - 2 * x);

// 0 = relaxed, 1 = fully contracted. Fast squeeze, slow release.
function squeeze(t: number) {
  const p = (((t / PERIOD) % 1) + 1) % 1;
  return p < 0.25 ? smooth(p / 0.25) : 1 - smooth((p - 0.25) / 0.75);
}

export default function Jellyfish() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    let cols = 0;
    let rows = 0;
    let cellW = 6;
    let scale = 1;
    let depth = new Float32Array(0);
    let lum = new Float32Array(0);
    let hue = new Float32Array(0);
    let glyph = new Uint16Array(0);
    let raf = 0;

    const plankton = Array.from({ length: N_PLANKTON }, (_, i) => ({
      x: (Math.sin(i * 12.9898) * 43758.5453) % 1,
      y: (Math.sin(i * 78.233) * 12345.678) % 1,
      v: 0.004 + 0.008 * ((i * 7) % 5) / 5,
      ph: i * 1.7,
    }));

    const sinT = Math.sin(TILT);
    const cosT = Math.cos(TILT);

    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (!w || !h) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${FONT_PX}px ui-monospace, "SF Mono", Menlo, Consolas, monospace`;
      ctx.textBaseline = "top";
      cellW = ctx.measureText("M").width || 5.4;
      cols = Math.floor(w / cellW);
      rows = Math.floor(h / LINE_PX);
      scale = Math.min(w / 2.7, h / 4.6);
      const n = cols * rows;
      depth = new Float32Array(n);
      lum = new Float32Array(n);
      hue = new Float32Array(n);
      glyph = new Uint16Array(n);
    };

    // Returns the screen cell position (float) so callers can derive slopes.
    let px = 0;
    let py = 0;
    let ox = 0;
    let oy = 0;
    const plot = (x: number, y: number, z: number, l: number, h: number, g: number) => {
      const yy = y * cosT - z * sinT;
      const zz = y * sinT + z * cosT;
      px = ox + (x * scale) / cellW;
      py = oy + (yy * scale) / LINE_PX;
      const c = Math.round(px);
      const r = Math.round(py);
      if (c < 0 || c >= cols || r < 0 || r >= rows) return;
      const i = r * cols + c;
      if (zz <= depth[i]) return;
      depth[i] = zz;
      lum[i] = l;
      hue[i] = h;
      glyph[i] = g;
    };

    const render = (t: number) => {
      if (!cols || !rows) return;
      depth.fill(-Infinity);
      lum.fill(0);
      glyph.fill(0);

      const baseHue = 205 + 40 * Math.sin(t * 0.08);
      const spin = t * 0.15;
      const phase = (t / PERIOD) * TAU;
      ox = cols / 2 + (0.16 * Math.sin(t * 0.21) * scale) / cellW;
      oy = rows * 0.3 + ((-0.22 * Math.sin(phase - 1.1) * scale) / LINE_PX);

      // Bell
      const NU = 44;
      for (let i = 0; i <= NU; i++) {
        const u = i / NU;
        const sq = squeeze(t - u * 0.35);
        const r = BELL_R * Math.pow(Math.sin((u * Math.PI) / 2), 0.95) * (1 - 0.28 * sq * u * u);
        const y0 = -BELL_H * Math.cos((u * Math.PI) / 2) * (1 + 0.12 * sq);
        const nTh = Math.round(20 + 150 * u);
        for (let k = 0; k < nTh; k++) {
          const th = (k / nTh) * TAU;
          const a = th + spin;
          const x = r * Math.cos(a);
          const z = r * Math.sin(a);
          const stripe = 0.5 + 0.5 * Math.cos(8 * th);
          const y = u > 0.9 ? y0 + 0.05 * (u - 0.9) * 10 * Math.cos(16 * th) : y0;
          const shade = 0.55 + 0.45 * (Math.sin(a) * 0.5 + 0.5);
          let l = (0.38 + 0.62 * stripe * stripe * (0.4 + 0.6 * u)) * shade;
          if (u > 0.96) l = 0.5 + 0.5 * shade;
          plot(x, y, z, l, baseHue + 38 * stripe, 0);
        }
      }

      // Oral arms
      for (let j = 0; j < N_ARMS; j++) {
        const ang = (j / N_ARMS) * TAU + spin;
        const ca = Math.cos(ang);
        const sa = Math.sin(ang);
        for (let i = 0; i <= 90; i++) {
          const s = i / 90;
          const sq = squeeze(t - 0.35 - s * 0.5);
          const rad = 0.08 + 0.2 * s;
          const wave = 0.13 * s * Math.sin(s * 7 - t * 1.8 + j * 1.3);
          const y = 0.02 + s * 1.9 * (1 - 0.1 * sq);
          const w = 0.17 * (1 - 0.65 * s);
          for (let k = -2; k <= 2; k++) {
            const frill = (k / 2) * w * (1 + 0.35 * Math.sin(s * 20 + j - t * 3));
            const x = ca * rad + wave - sa * frill;
            const z = sa * rad + ca * frill;
            const l = (0.5 + 0.35 * Math.sin(s * 22 - t * 3 + k)) * (1 - 0.45 * s);
            plot(x, y, z, l, baseHue + 95, 0);
          }
        }
      }

      // Tentacles, drawn with line glyphs that follow their slope
      for (let j = 0; j < N_TENT; j++) {
        const ang = (j / N_TENT) * TAU + spin;
        const ca = Math.cos(ang);
        const sa = Math.sin(ang);
        const len = 2.7 + 0.5 * Math.sin(j * 1.7);
        const rim = BELL_R * (1 - 0.28 * squeeze(t - 0.35));
        let lx = 0;
        let ly = 0;
        const STEPS = 110;
        for (let i = 0; i <= STEPS; i++) {
          const s = i / STEPS;
          const rad = rim * (1 - 0.4 * s * squeeze(t - 0.5 - s * 0.9));
          const sway =
            0.2 * s * Math.sin(s * 5 - t * 1.4 + j * 1.3) + 0.12 * s * s * Math.sin(t * 0.5 + j);
          const x = ca * rad + sway;
          const z = sa * rad;
          const y = s * len;
          // probe position first to pick the glyph
          const yy = y * cosT - z * sinT;
          const cx = ox + (x * scale) / cellW;
          const cy = oy + (yy * scale) / LINE_PX;
          let g = 124; // |
          if (i > 0) {
            const dx = (cx - lx) * cellW;
            const dy = (cy - ly) * LINE_PX;
            if (Math.abs(dx) > 0.45 * Math.abs(dy)) g = dx * dy > 0 ? 92 : 47; // \ or /
          }
          lx = cx;
          ly = cy;
          plot(x, y, z, 0.75 * (1 - 0.6 * s) + 0.1, baseHue + 15, g);
        }
      }

      // Draw
      const light = document.documentElement.classList.contains("light");
      ctx.clearRect(0, 0, wrap.clientWidth, wrap.clientHeight);

      ctx.fillStyle = light ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.22)";
      for (const p of plankton) {
        const fx = Math.abs(p.x) + 0.02 * Math.sin(t * 0.3 + p.ph);
        const fy = (((Math.abs(p.y) - t * p.v) % 1) + 1) % 1;
        const c = Math.floor(fx * cols);
        const r = Math.floor(fy * rows);
        if (c < 0 || c >= cols || r < 0 || r >= rows) continue;
        if (lum[r * cols + c] > 0) continue;
        ctx.fillText(Math.sin(t * 0.9 + p.ph) > 0.8 ? "+" : ".", c * cellW, r * LINE_PX);
      }

      let last = "";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const l = lum[i];
          if (l <= 0) continue;
          const lc = Math.min(1, l);
          const hb = Math.round((((hue[i] % 360) + 360) % 360) / (360 / HUE_STEPS));
          const lb = Math.round(lc * LUM_STEPS);
          const lightness = light ? 56 - 34 * (lb / LUM_STEPS) : 36 + 44 * (lb / LUM_STEPS);
          const color = `hsl(${hb * (360 / HUE_STEPS)} ${light ? 70 : 85}% ${lightness}%)`;
          if (color !== last) {
            ctx.fillStyle = color;
            last = color;
          }
          const ch = glyph[i]
            ? String.fromCharCode(glyph[i])
            : RAMP[Math.max(1, Math.min(RAMP.length - 1, Math.round(lc * (RAMP.length - 1))))];
          ctx.fillText(ch, c * cellW, r * LINE_PX);
        }
      }
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    const loop = (now: number) => {
      render((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) render(2);
    });
    ro.observe(wrap);

    if (reduced) render(2);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <aside className="jelly" aria-hidden="true">
      <div className="jelly-canvas" ref={wrapRef}>
        <canvas ref={canvasRef} />
      </div>
    </aside>
  );
}
