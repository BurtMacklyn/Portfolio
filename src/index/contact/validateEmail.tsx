import type { FormEvent } from 'react';

export default function validateEmail(e: FormEvent<HTMLInputElement>): void {
  const input = e.target as HTMLInputElement;
  const value = input.value;
  const valid = /^[^@]+@[^@]+\.[^@]+$/.test(value);

  if (valid) {
    input.classList.remove('contact__invalid');
  } else {
    input.classList.add('contact__invalid');
  }
}
