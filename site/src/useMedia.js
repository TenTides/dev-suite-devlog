import { useEffect, useState } from 'react';

// Pages were designed twice: a 1440px desktop board and a 390px phone board.
export const PHONE_QUERY = '(max-width: 899px)';

export function useMedia(query) {
  const get = () => typeof window !== 'undefined' && window.matchMedia(query).matches;
  const [m, setM] = useState(get);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return m;
}
export const usePhone = () => useMedia(PHONE_QUERY);
