import { NavToggleButtonIcon } from '@/components/Nav/NavToggleButtonIcon';

describe('NavToggleButtonIcon', () => {
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: class I {
      observe = jest.fn();
    },
  });

  it('can be resting', () => {
    const { unmount } = renderComponent(NavToggleButtonIcon, {
      test: {},
      props: {
        clicked: false,
      },
    });

    unmount();
  });

  it('can be clicked', () => {
    const { unmount } = renderComponent(NavToggleButtonIcon, {
      test: {},
      props: {
        clicked: true,
      },
    });

    unmount();
  });
});
