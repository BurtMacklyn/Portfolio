import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver() {
  const ref = useRef<HTMLSpanElement>(null);
  const [intersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );
    observer.observe(ref.current!);

    return () => {
      if (ref?.current) observer.unobserve(ref.current!);
    };
  }, []);

  return [ref, intersecting] as const;
}
