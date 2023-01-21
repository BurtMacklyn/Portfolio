import { Box } from '@/components/Box';

describe('Box', () => {
  it('renders', () => {
    const { unmount } = renderComponent(Box, {
      test: {
        hover: true,
        children: true,
      },
      props: {},
    });

    unmount();
  });
});
