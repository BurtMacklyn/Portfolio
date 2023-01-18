import { useEffect, useState } from 'react';

export function useMediaQuery(mq: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window?.matchMedia(mq);

    const listener = () => setMatches(!!media?.matches);
    media?.addEventListener('change', listener);

    // Call the listener() function immediately to set the local
    // state as soon as possible.
    listener();

    return () => {
      media?.removeEventListener('change', listener);
    };
  }, [mq]);

  return matches;
}
