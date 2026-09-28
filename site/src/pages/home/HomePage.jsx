import React, { useEffect, useState } from 'react';
import { useDC } from '../../dc/runtime.js';
import { usePhone } from '../../useMedia.js';
import { articles } from '../../content/posts.js';
import DeskLogic, { defaults as dd } from './HomeDesktopLogic.js';
import PhoneLogic, { defaults as pd } from './HomePhoneLogic.js';
import DeskView from './HomeDesktopView.jsx';
import PhoneView from './HomePhoneView.jsx';

// The desktop board is laid out on a 1440px grid (the carousel and architecture explorer use fixed
// widths), so between the phone breakpoint and 1440px it is scaled down rather than reflowed.
function useDeskZoom() {
  const get = () => (typeof window === 'undefined' ? 1 : Math.min(1, window.innerWidth / 1440));
  const [z, setZ] = useState(get);
  useEffect(() => {
    const on = () => setZ(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return z;
}

function Desk() {
  const v = useDC(DeskLogic, { ...dd, articles });
  const zoom = useDeskZoom();
  return <div style={zoom < 1 ? { zoom } : undefined}><DeskView v={v} /></div>;
}
function Phone() { return <PhoneView v={useDC(PhoneLogic, { ...pd, articles })} />; }

export default function HomePage() {
  return usePhone() ? <Phone /> : <Desk />;
}
