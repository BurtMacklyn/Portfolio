import { Button, ButtonProps } from '@/components/Button/Button';
import { randomUUID } from 'crypto';

const testList: ButtonProps[] = [
  { animationSpeedModifier: 4 },
  { fillX: true },
  { fillY: true },
  { hover: true },
  { href: randomUUID() },
  { href: randomUUID(), new: true },
  { new: true },
  { large: true },
  { static: true },
  { static: false },
  { target: undefined },
  { target: { x: 1, y: 1 } },
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
