const prefices: ((day: string) => string)[] = [
  (day: string) => `Have a radical ${day}!`,
  (day: string) => `Freshen up your ${day}!`,
  (day: string) => `Have an enlightening ${day}!`,
  (day: string) => `Enjoy your ${day}!`,
  (day: string) => `Make this ${day} great!`,
  (day: string) => `Have a fun ${day}!`,
  (day: string) => `Make it a good ${day}!`,
  (day: string) => `Make your ${day} amazing!`,
  (day: string) => `Make your ${day} fun!`,
  (day: string) => `Make your ${day} unique!`,
  (day: string) => `Make today a ${day} to remember!`,
  (day: string) => `Have a memorable ${day}!`,
  (day: string) => `Have an exciting ${day}!`,
  (day: string) => `Have a crazy ${day}!`
];

function random(day: string): string {
  return (prefices[Math.round(Math.random() * (prefices.length - 1))] as (day: string) => string)(day);
}

export default function sentence(): string {
  const day = new Date().toLocaleString('en-us', { weekday: 'long' });
  return random(day);
}
