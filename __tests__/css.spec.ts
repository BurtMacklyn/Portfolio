import { randomUUID } from 'crypto';

import * as css from '@/css';

describe('CSS', () => {
  it('converts px to rem', () => {
    const input = Math.random() * 16000;
    expect(css.rem(input as any)).toStrictEqual(`${input / 16}rem`);
  });

  it('converts to px ems', () => {
    const input = Math.random() * 16000;
    expect(css.em(input)).toStrictEqual(`${input / 16}em`);
  });

  it('outputs the correct variable', () => {
    const input = randomUUID();
    expect(css.variable(input)).toStrictEqual(`var(--${input})`);
  });

  it('Modifies a hex color to have a certain opacity', () => {
    const colors = [
      '#ff013f',
      '#34de12',
      '#f93053',
      '#230593',
      '#321054',
      '#395839',
    ];

    const opacities = [
      [50, '80'],
      [1, '03'],
      [0, '00'],
    ] as const;

    for (const color of colors)
      for (const [opacity, result] of opacities)
        expect(css.opacity(color, opacity)).toStrictEqual(color + result);
  });
});
