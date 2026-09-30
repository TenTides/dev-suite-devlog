import { useCallback, useSyncExternalStore } from 'react';
import { subscribeViewport } from './useViewportWidth.js';

// Pages were designed twice: a 1440px desktop board and a 390px phone board.
export const PHONE_QUERY = '(max-width: 899px)';

// Read live on every render, re-read on the query's change event and on any viewport change.
export function useMedia(query) {
  const subscribe = useCallback((cb) => {
    const mq = window.matchMedia(query);
    mq.addEventListener('change', cb);
    const off = subscribeViewport(cb);
    return () => { mq.removeEventListener('change', cb); off(); };
  }, [query]);
  const get = () => typeof window !== 'undefined' && window.matchMedia(query).matches;
  return useSyncExternalStore(subscribe, get, () => false);
}
export const usePhone = () => useMedia(PHONE_QUERY);
