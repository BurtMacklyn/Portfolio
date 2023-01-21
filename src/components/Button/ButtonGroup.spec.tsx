import { ButtonGroup } from '@/components/Button/ButtonGroup';
import { randomUUID } from 'crypto';

describe('ButtonGroup', () => {
  it('renders', () => {
    const { unmount } = renderComponent(ButtonGroup, {
      test: {
        mouse: true,
      },
      props: {
        buttons: [
          {
            href: '/',
            new: true,
            children: randomUUID(),
            label: 'testbutton1',
          },
          { onClick: () => '', children: randomUUID(), label: 'testbutton2' },
        ],
      },
    });

    unmount();
  });
});
