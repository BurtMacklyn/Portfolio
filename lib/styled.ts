import { h } from 'preact';

export const styled = (x: TemplateStringsArray, ...sub: any[]) =>
  String.raw(x, ...sub);

export const blurred: h.JSX.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(8px)',
};
