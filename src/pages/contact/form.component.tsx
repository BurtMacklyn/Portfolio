import { useRef, useEffect, useState } from 'react';
import * as emailjs from '@emailjs/browser';
import type { State } from '~/types';

emailjs.init(process.env.NEXT_PUBLIC_EMAIL_USER!);

// eslint-disable-next-line no-undef
export const ContactForm: React.FC<{ hooray: State<boolean>; loading: State<boolean> }> = ({ hooray: [hooray, setHooray], loading: [loading, setLoading] }) => {
  const [alive, setAlive] = useState(true); // to make sure asyncronous code isn't ran while component is not mounted

  const name = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    form.current!.onsubmit = e => {
      e.preventDefault();

      if (loading || hooray) return;
      if (!name.current?.value || !subject.current?.value || !email.current?.value || !body.current?.value) return;

      const sendPromise = emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE!, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!, {
        body: body.current?.value,
        email: email.current?.value,
        name: name.current?.value,
        subject: subject.current?.value,
      });

      setLoading(true);

      sendPromise.then(res => {
        if (!alive) return;
        if (res.text === 'OK') {
          setHooray(true);
          setLoading(false);

          setTimeout(() => {
            setHooray(false);
          }, 2000);

          Array.from(form.current!.children).forEach((child: any) => {
            if (child.value) child.value = '';
          });
        }
      });
    };

    return () => setAlive(false);
  }, []);

  return (
    <form ref={form}>
      <input type="text" name="name" placeholder="Name" ref={name} />
      <input type="text" name="subject" placeholder="Subject" ref={subject} />
      <input type="text" name="email" placeholder="Email" ref={email} />
      <textarea name="body" placeholder="Body" ref={body} />
      <button type="submit">Send</button>
    </form>
  );
};
