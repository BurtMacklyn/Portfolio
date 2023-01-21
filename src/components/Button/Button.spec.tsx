import { Button, ButtonProps } from '@/components/Button/Button';
import { randomUUID } from 'crypto';

const testList: ButtonProps[] = [
  { label: 'testbutton', animationSpeedModifier: 4 },
  { label: 'testbutton', fillX: true },
  { label: 'testbutton', fillY: true },
  { label: 'testbutton', hover: true },
  { label: 'testbutton', href: randomUUID() },
  { label: 'testbutton', href: randomUUID(), new: true },
  { label: 'testbutton', new: true },
  { label: 'testbutton', large: true },
  { label: 'testbutton', static: true },
  { label: 'testbutton', static: false },
  { label: 'testbutton', target: undefined },
  { label: 'testbutton', target: { x: 1, y: 1 } },
];

describe('Button', () => {
  for (const props of testList) {
    it(`renders prop ${Object.keys(props).join(', ')}`, () => {
      const { unmount } = renderComponent(Button, {
        test: {
          click: !props.href,
          children: true,
          mouse: true,
        },
        props,
      });

      unmount();
    });
  }
});
