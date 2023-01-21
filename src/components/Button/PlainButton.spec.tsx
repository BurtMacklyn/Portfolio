import { PlainButton } from '@/components/Button/PlainButton';

describe('PlainButton', () => {
  it('renders', () => {
    const { unmount } = renderComponent(PlainButton, {
      test: {
        click: true,
        children: true,
      },
      props: {},
    });

    unmount();
  });
});
