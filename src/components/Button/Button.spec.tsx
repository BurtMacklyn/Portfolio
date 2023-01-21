import { Button } from '@/components/Button/Button';

describe('Button', () => {
  it('renders', () => {
    const { unmount } = renderComponent(Button, {
      test: {
        click: true,
        children: true,
        hover: true,
      },
      props: {},
    });

    unmount();
  });
});
