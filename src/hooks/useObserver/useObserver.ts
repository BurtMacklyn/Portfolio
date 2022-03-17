import { type RefObject, useState, useEffect } from 'react';

export function useObserver(element: RefObject<HTMLElement>) {
  const [alive, setAlive] = useState(true);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!alive) return;

      if (!entry.isIntersecting) setIntersecting(true);
      else setIntersecting(false);
    }, {});

    observer.observe(element.current!);

    return setAlive(false);
  }, []);

  return intersecting;
}
