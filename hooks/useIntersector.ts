import { useEffect, useRef, useState } from 'preact/hooks';

export function useIntersector() {
  const ref = useRef<HTMLSpanElement>(null);
  const [intersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current!);

    return () => observer.unobserve(ref.current!);
  }, []);

  return [ref, intersecting] as const;
}
