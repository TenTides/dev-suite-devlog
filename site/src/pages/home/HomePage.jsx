import React from 'react';
import { useDC } from '../../dc/runtime.js';
import { usePhone } from '../../useMedia.js';
import { articles } from '../../content/posts.js';
import { useViewportWidth } from '../../useViewportWidth.js';
import DeskLogic, { defaults as dd } from './HomeDesktopLogic.js';
import PhoneLogic, { defaults as pd } from './HomePhoneLogic.js';
import DeskView from './HomeDesktopView.jsx';
import PhoneView from './HomePhoneView.jsx';

// The desktop board is laid out on a 1440px grid (the carousel and architecture explorer use fixed
// widths), so between the phone breakpoint and 1440px it is scaled down rather than reflowed.
function Desk() {
  const vw = useViewportWidth();
  const zoom = Math.min(1, vw / 1440);
  // Below 1440px the board is zoomed, so its fields keep their designed 200 columns.
  const v = useDC(DeskLogic, { ...dd, articles, width: zoom < 1 ? 1440 : vw });
  return <div style={zoom < 1 ? { zoom } : undefined}><DeskView v={v} /></div>;
}
function Phone() {
  const vw = useViewportWidth();
  return <PhoneView v={useDC(PhoneLogic, { ...pd, articles, width: vw })} />;
}

export default function HomePage() {
  return usePhone() ? <Phone /> : <Desk />;
}
