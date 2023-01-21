import { color, style, setCSSVariables } from '@/config/style';

describe('Color Palette', () => {
  for (const [k, v] of Object.entries(style.color)) {
    it(`has valid property: ${k}`, () => {
      expect(v).toMatch(/^\#[0-9|a-f]{6}$/i);
    });
  }
});

describe('color()', () => {
  for (const [k, v] of Object.entries(style.color)) {
    it(`returns correct value for: ${k}`, () => {
      expect(color(k as any)).toStrictEqual(v);
    });
  }
});

describe('style.breakpoints', () => {
  for (const [mq, value] of Object.entries(style.breakpoints)) {
    it(`has valid breakpoint for: ${mq}`, () => {
      expect(value).toMatch(/^\S*em$/);
      expect(+value.replace(/px|rem|em/, '')).not.toBeNaN();
      expect(+value.replace(/px|rem|em/, '')).toBeGreaterThan(0);
    });
  }
});

describe('setCSSVariables', () => {
  it('should run without error', () => {
    expect(setCSSVariables()).toBeTruthy();
  });
});
