import type { FormEvent } from 'react';
import { App, Footer, Nav, Tag, Wave } from 'src/components';

export function Contact() {
  return (
    <App className='contact'>
      <Nav />
      <span className='glow'></span>
      <header>
        <Tag>header</Tag>
        <String>"Let's get in touch"</String>
        <h2 className='white'>Contact</h2>
        <Tag close>header</Tag>
      </header>
      <Wave up />
      <section>
        <div className='section-content'>
          <div className='info'>
            <h5 className='white'>(760) 707-9291</h5>
            <h5 className='white'>cooperrunyan@gmail.com</h5>
          </div>
          <Form />
        </div>
      </section>
      <Footer noWave />
    </App>
  );
}

const String = ({ children, close }: { children: React.ReactNode; close?: boolean }) => {
  return <code className={`string ${close ? 'close' : ''}`}>{children}</code>;
};

function Form() {
  return (
    <form onSubmit={send}>
      <div className='row'>
        <input className='inp' type='text' id='firstname' placeholder='Firstname' />
        <input className='inp' type='text' id='lastname' placeholder='Lastname' />
      </div>
      <div className='row'>
        <input className='inp' type='text' id='mail' placeholder='Email' />
      </div>
      <div className='row'>
        <input className='inp' type='text' id='subject' placeholder='Subject' />
      </div>
      <div className='row'>
        <textarea className='inp' id='body' placeholder='Body'></textarea>
      </div>
      <div className='row'>
        <div className='date inp'>
          {new Date().toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <button type='submit' className='send inp'>
          Send
        </button>
      </div>
    </form>
  );
}

// function send(e: FormEvent<HTMLFormElement>) {
async function send(e: any) {
  e.preventDefault();
  const children = Array.from(e.target.children!) as any;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (children[i]?.children[j]) children[i].children[j].value = '';
    }
  }

  const form = {
    firstname: children[0].children[0].value,
    lastname: children[0].children[1].value,
    email: children[1].children[0].value,
    subject: children[2].children[0].value,
    body: (children[3].children[0] as HTMLTextAreaElement).value,
  };

  const res = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: form.email,
      name: form.firstname + ' ' + form.lastname,
      subject: form.subject,
      body: form.body,
    }),
  });

  const data = await res.json();
  console.log(data);
}
