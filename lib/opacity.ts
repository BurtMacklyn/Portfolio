export const opacity = (percentage: number) => {
  const v = Math.round(percentage * 255).toString(16);
  if (v.length === 2) return v;
  if (v.length === 1) return '0' + v;
  if (v.length === 0) return '00';
  return v;
};
