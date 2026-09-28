import React, { useRef } from 'react';
import { eyeFrame } from '../ascii/engines.js';
import { useTick } from '../ascii/Ascii.jsx';

// The animated green eye used as the author avatar.
export default function Eye({ size = 44 }) {
  const ref = useRef(null);
  const t = useTick(ref);
  const f = eyeFrame(t);
  const big = size >= 44;
  const fs = big ? 7 : 6.4, lh = big ? 8 : 7.4;
  const layer = (rows, color, shadow) => (
    <pre style={{ left: big ? 2 : 1.5, top: big ? 1 : 0.5, color, textShadow: shadow }}>{rows.join('\n')}</pre>
  );
  return (
    <span ref={ref} className="eye" role="img" aria-label="Animated green eye" style={{ width: size, height: size, fontSize: fs, lineHeight: lh + 'px' }}>
      {layer(f.dim, '#2a8a60', 'none')}
      {layer(f.mid, '#1fbf7f', 'none')}
      {layer(f.hi, '#c9f5e0', '0 0 3px #1fbf7f, 0 0 6px #1fbf7f')}
    </span>
  );
}
