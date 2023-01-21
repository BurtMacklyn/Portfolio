import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { renderHook } from '@testing-library/react';

describe('useIntersectionObserver', () => {
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: class I {
      constructor(callback: any, options?: any) {
        callback([{ isIntersecting: false } as any], undefined as any);
      }
      observe = jest.fn();
      unobserve = jest.fn();
    },
  });

  it('renders', () => {
    const { result, unmount } = renderHook(useIntersectionObserver);
    const [ref, intersecting] = result.current;

    (result.current[0] as any).current = true;

    expect(ref).toHaveProperty('current');
    expect(typeof intersecting).toStrictEqual('boolean');

    unmount();
  });
});
