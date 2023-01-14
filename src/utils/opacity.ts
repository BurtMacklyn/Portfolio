export function opacity<T extends string>(color: T, percentage: number) {
  return (color +
    Math.round(percentage * 255)
      .toString(16)
      .padStart(2, '0')) as `${T}**`;
}
