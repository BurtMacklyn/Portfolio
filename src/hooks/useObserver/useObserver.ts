import { type RefObject, useState, useEffect } from 'react';

export function useObserver(element: RefObject<HTMLElement>) {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setIntersecting(true);
      else setIntersecting(false);
    }, {});

    observer.observe(element.current!);
  }, []);

  return intersecting;
}
