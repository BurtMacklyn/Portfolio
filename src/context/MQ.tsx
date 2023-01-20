import { style } from '@/config/style';
import { createContext, useContext, useEffect, useState } from 'react';

const initial = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xxl: false,
  touchscreen: false,
};

type MediaQueries = typeof initial;

const MQContext = createContext<MediaQueries>(initial);

export const MQProvider = ({ children }: any) => {
  const [queries, setQueries] = useState<MediaQueries>(initial);

  const xs = useMediaQuery(`(max-width: ${style.breakpoints.xs})`);
  const sm = useMediaQuery(`(max-width: ${style.breakpoints.sm})`);
  const md = useMediaQuery(`(max-width: ${style.breakpoints.md})`);
  const lg = useMediaQuery(`(max-width: ${style.breakpoints.lg})`);
  const xxl = useMediaQuery(`(min-width: ${style.maxWidth})`);
  const touchscreen = useMediaQuery(
    `(hover: none) or (pointer: none) or (not(hover: hover))`,
  );

  useEffect(
    () =>
      setQueries({
        xs,
        sm,
        md,
        lg,
        xxl,
        touchscreen,
      }),
    [xs, sm, md, lg, xxl, touchscreen],
  );

  return <MQContext.Provider value={queries}>{children}</MQContext.Provider>;
};

export const useMQ = () => useContext(MQContext);

function useMediaQuery(mq: string) {
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
