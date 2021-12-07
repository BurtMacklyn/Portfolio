import { FormEvent } from 'react';

export default function send(e: FormEvent<HTMLFormElement>): void {
  e.preventDefault();

  const form = {
    firstname: (document.querySelector('.contact__firstname')! as HTMLInputElement).value.trim(),
    lastname: (document.querySelector('.contact__lastname')! as HTMLInputElement).value.trim(),
    email: (document.querySelector('.contact__email')! as HTMLInputElement).value.trim(),
    subject: (document.querySelector('.contact__subject')! as HTMLInputElement).value.trim(),
    body: (document.querySelectorAll('.contact__body')[1]! as HTMLTextAreaElement).value.trim(),
    date: (document.querySelector('.contact__date')! as HTMLSpanElement).innerHTML.trim()
  };

  const canMove = function (): boolean {
    if (form.firstname === '' || form.lastname === '' || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email) || form.subject === '' || form.body === '') return false;
    return true;
  };

  const clear = function (): void {
    (document.querySelector('.contact__firstname')! as HTMLInputElement).blur();
    (document.querySelector('.contact__lastname')! as HTMLInputElement).blur();
    (document.querySelector('.contact__email')! as HTMLInputElement).blur();
    (document.querySelector('.contact__subject')! as HTMLInputElement).blur();
    (document.querySelectorAll('.contact__body')[1]! as HTMLTextAreaElement).blur();

    (document.querySelector('.contact__firstname')! as HTMLInputElement).value =
      (document.querySelector('.contact__lastname')! as HTMLInputElement).value =
      (document.querySelector('.contact__email')! as HTMLInputElement).value =
      (document.querySelector('.contact__subject')! as HTMLInputElement).value =
      (document.querySelectorAll('.contact__body')[1]! as HTMLTextAreaElement).value =
        '';
  };

  const message = document.querySelector('.contact__sent-message')! as HTMLDivElement;

  if (canMove()) {
    message.classList.add('contact__sent-message--show');

    setTimeout(() => {
      clear();
      message.classList.remove('contact__sent-message--show');
    }, 3000);
  }
}
