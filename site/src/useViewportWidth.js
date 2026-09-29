import { useEffect, useState } from 'react';

// Viewport width, updated on resize (used to size the ASCII fields on the board pages).
export function useViewportWidth() {
  const get = () => (typeof window === 'undefined' ? 1440 : window.innerWidth);
  const [w, setW] = useState(get);
  useEffect(() => {
    const on = () => setW(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return w;
}
