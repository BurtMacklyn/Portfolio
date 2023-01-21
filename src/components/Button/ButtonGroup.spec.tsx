import { ButtonGroup } from '@/components/Button/ButtonGroup';

describe('ButtonGroup', () => {
  it('renders', () => {
    const { unmount } = renderComponent(ButtonGroup, {
      test: {
        hover: true,
      },
      props: {
        buttons: [],
      },
    });

    unmount();
  });
});
