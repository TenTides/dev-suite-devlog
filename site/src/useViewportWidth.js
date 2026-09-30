import { useSyncExternalStore } from 'react';

// Viewport width, read live. Every render reads window.innerWidth directly (so a page that
// opens after the window was resized starts at the current width), and any of these events
// re-render the pages that use it. Resize events alone can be missed (for instance while a tab
// or pane is hidden), so visibility changes, back/forward restores and a ResizeObserver on the
// root element trigger a fresh read too.
const read = () => (typeof window === 'undefined' ? 1440 : window.innerWidth);

export function subscribeViewport(cb) {
  if (typeof window === 'undefined') return () => {};
  const events = ['resize', 'orientationchange', 'pageshow', 'focus'];
  events.forEach((e) => window.addEventListener(e, cb));
  document.addEventListener('visibilitychange', cb);
  const vv = window.visualViewport;
  if (vv) vv.addEventListener('resize', cb);
  const ro = 'ResizeObserver' in window ? new ResizeObserver(cb) : null;
  if (ro) ro.observe(document.documentElement);
  return () => {
    events.forEach((e) => window.removeEventListener(e, cb));
    document.removeEventListener('visibilitychange', cb);
    if (vv) vv.removeEventListener('resize', cb);
    if (ro) ro.disconnect();
  };
}

export function useViewportWidth() {
  return useSyncExternalStore(subscribeViewport, read, () => 1440);
}
