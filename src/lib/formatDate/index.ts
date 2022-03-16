export function formatDate(date: string | Date) {
  date = new Date(date);

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(date);
}
