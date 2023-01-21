import { Box } from '@/components/Box';

describe('Box', () => {
  it('renders', () => {
    const { unmount } = renderComponent(Box, {
      test: {
        mouse: true,
        children: true,
      },
      props: {},
    });

    unmount();
  });
});
