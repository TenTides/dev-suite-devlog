import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { subscribeViewport } from '../useViewportWidth.js';

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// A frame counter that only runs while `ref` is on screen (and never with reduced motion).
export function useTick(ref, ms = 70) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (reduced()) return undefined;
    let iv = null;
    const start = () => { if (!iv) iv = setInterval(() => setT((x) => x + 1), ms); };
    const stop = () => { clearInterval(iv); iv = null; };
    const el = ref && ref.current;
    if (!el || !('IntersectionObserver' in window)) { start(); return stop; }
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    io.observe(el);
    return () => { io.disconnect(); stop(); };
  }, [ref, ms]);
  return t;
}

// Width of the element in pixels. Measured when the element mounts, whenever it resizes, on any
// viewport change, and re-checked after each render (the animated sections re-render every frame),
// so a section never keeps a width captured earlier.
export function useWidth(ref) {
  const [w, setW] = useState(0);
  const measure = () => { const el = ref.current; if (el) { const x = el.getBoundingClientRect().width; setW((p) => (p === x ? p : x)); } };
  useLayoutEffect(measure);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const ro = 'ResizeObserver' in window ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(el);
    const off = subscribeViewport(measure);
    return () => { if (ro) ro.disconnect(); off(); };
  }, [ref]);
  return w;
}

// Stacked text layers (dim / mid / hi / acc), each a <pre> of rows, behind a section.
export function AsciiLayers({ layers, colors, fontSize = 12, lineHeight = 16, label, glow }) {
  const keys = ['dim', 'mid', 'hi', 'acc'];
  return (
    <div className="ascii" aria-hidden="true" style={{ fontSize, lineHeight: lineHeight + 'px' }}>
      {keys.map((k, i) => (colors[i] && layers && layers[k] ? (
        <pre key={k} style={{ color: colors[i], textShadow: glow && i >= 2 ? glow : 'none' }}>{layers[k].join('\n')}</pre>
      ) : null))}
      {label ? <span className="ascii-label">{label}</span> : null}
    </div>
  );
}
