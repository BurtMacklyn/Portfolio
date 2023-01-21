import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('renders', () => {
    const { unmount } = renderComponent(Footer, {
      test: {},
      props: {},
    });

    unmount();
  });
});
