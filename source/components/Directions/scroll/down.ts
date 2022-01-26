export function down(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e?.preventDefault();
  e?.stopPropagation();
  window.scrollTo({
    top: Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
    ),
    behavior: 'smooth',
  });
}
