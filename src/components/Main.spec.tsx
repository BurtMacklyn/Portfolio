import { Main } from '@/components/Main';

describe('Main', () => {
  it('renders', () => {
    const { unmount } = renderComponent(Main, {
      test: {
        children: true,
      },
      props: {},
    });

    unmount();
  });
});
