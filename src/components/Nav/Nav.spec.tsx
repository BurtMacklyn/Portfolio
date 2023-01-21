import { Nav } from '@/components/Nav/Nav';

describe('Nav', () => {
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: class I {
      observe = jest.fn();
    },
  });

  it('renders', () => {
    const { unmount } = renderComponent(Nav, {
      test: {},
      props: {},
    });

    unmount();
  });
});
