export function up(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e?.preventDefault();
  e?.stopPropagation();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
