import React, { useEffect, useRef, useState } from 'react';

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

// Width of the element in pixels, updated on resize.
export function useWidth(ref) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el);
    setW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
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
