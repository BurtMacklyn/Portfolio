import jokes from '@/pages/api/joke/jokes.json' assert { type: 'json' };

export function getJoke(type: 'daily' | 'random') {
  // prettier-ignore
  switch (type) {
    case 'daily': return jokes[new Date().getDate() % jokes.length];
    case 'random': return jokes[Math.floor(Math.random() * jokes.length)];
  }
}
