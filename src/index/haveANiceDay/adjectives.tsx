const adjectives: string[] = [
  'radical',
  'happy',
  'nice',
  'good',
  'great',
  'unique',
  'fresh',
  'cool',
  'fair',
  'fine',
  'formal',
  'sharp',
  'wise',
  'crazy',
  'royal',
  'super',
  'sweet',
  'brave',
  'calm',
  'smart',
  'fun',
  'kind'
];

export default function random(): string {
  return adjectives[Math.floor(Math.random() * adjectives.length) + 1];
}
