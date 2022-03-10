import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { Portfolio, Center, Nav, Footer } from '~/components';
import style from './Contact.module.scss';
import { Svg } from './Svg';
import * as emailjs from '@emailjs/browser';
import type { Setter } from '~/types';
import { Ellipsis } from 'react-awesome-spinners';
import { pallette } from '~/config';

emailjs.init('user_1NdUAd48w5wUCDmGHc48j');

export function Contact() {
  const [hooray, setHooray] = useState(false);
  const [loading, setLoading] = useState(false);

  const test = true;

  return (
    <Portfolio>
      <Head>
        <title>Contact</title>
      </Head>
      <Center>
        <Nav />
        <section className={style.Contact}>
          <h2>Contact</h2>
          <Form hooray={[hooray, setHooray]} loading={[loading, setLoading]} />
          <Svg className={style.circle} />
        </section>
      </Center>
      <>
        {loading && (
          <div className={style.loading}>
            <Ellipsis color={pallette.white} />
          </div>
        )}
      </>
      <>
        {hooray && (
          <div className={style.hooray}>
            <h1>Message Sent!</h1>
          </div>
        )}
      </>
      <Footer />
    </Portfolio>
  );
}

function Form({ hooray: [hooray, setHooray], loading: [loading, setLoading] }: { hooray: [boolean, Setter<boolean>]; loading: [boolean, Setter<boolean>] }) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (form.current)
      form.current!.onsubmit = (e) => {
        const data = JSON.parse(JSON.stringify({ name, subject, body, email }));

        e.preventDefault();

        if (loading || hooray) return;

        if (!data.name || !data.subject || !data.email || !data.body) {
          data.name = nameRef.current!.value;
          data.subject = subjectRef.current!.value;
          data.email = emailRef.current!.value;
          data.body = bodyRef.current!.value;
        }

        if (!data.name || !data.subject || !data.email || !data.body) {
          console.log({ ...data });
          return;
        }

        const sendPromise = emailjs.send('service_swmbn4l', 'template_5rvoya8', {
          body: data.body,
          email: data.email,
          name: data.name,
          subject: data.subject,
        });

        setLoading(true);

        sendPromise.then((res) => {
          if (res.text === 'OK') {
            setHooray(true);
            setLoading(false);
            setBody('');
            setEmail('');
            setName('');
            setSubject('');

            setTimeout(() => {
              setHooray(false);
            }, 2000);

            Array.from(form.current!.children).forEach((child: any) => {
              if (child.value) child.value = '';
            });
          }
        });
      };
  }, []);

  return (
    <form ref={form}>
      <input type="text" name="name" placeholder="Name" ref={nameRef} onChange={(e) => setName(nameRef.current!.value)} />
      <input type="text" name="subject" placeholder="Subject" ref={subjectRef} onChange={(e) => setSubject(subjectRef.current!.value)} />
      <input type="text" name="email" placeholder="Email" ref={emailRef} onChange={(e) => setEmail(emailRef.current!.value)} />
      <textarea name="body" placeholder="Body" ref={bodyRef} onChange={(e) => setBody(bodyRef.current!.value)}></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
