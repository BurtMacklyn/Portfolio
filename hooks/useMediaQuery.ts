import { useEffect, useState } from 'preact/hooks';

export function useMediaQuery(mq: string) {
  const [alive, setAlive] = useState(true);
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mq);

    setMatches(media.matches);

    media.addEventListener('change', e => {
      if (alive) setMatches(media.matches);
    });

    return () => setAlive(false);
  });

  return matches;
}
