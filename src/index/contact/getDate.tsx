export default function getDate(): string {
  const date: string = new Date().toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return date;
}
