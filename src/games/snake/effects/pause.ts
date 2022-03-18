import type { Setter } from '../types';

export function pause(playing: boolean, setPlaying: Setter<boolean>) {
  return () => {
    function handler(e: KeyboardEvent) {
      if (e.key !== 'p' && e.key !== ' ') return;
      setPlaying(!playing);
    }

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  };
}
