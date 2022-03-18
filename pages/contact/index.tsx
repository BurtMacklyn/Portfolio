import Head from 'next/head';
import { useState } from 'react';
import { Portfolio, Center, Nav, Footer } from '~/components';
import { pallette } from '~/config';
import style from '~/style/components/Contact.module.scss';
import { Ellipsis } from 'react-awesome-spinners';
import { Form } from './Form';

export default function Contact() {
  const [hooray, setHooray] = useState(false);
  const [loading, setLoading] = useState(false);

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
        {/* Hooray page */}
        {hooray && (
          <div className={style.hooray}>
            <h1>Message Sent!</h1>
          </div>
        )}

        {/* Loading page */}
        {loading && (
          <div className={style.loading}>
            <Ellipsis color={pallette.white} />
          </div>
        )}
      </>
      <Footer />
    </Portfolio>
  );
}

function Svg(props: any) {
  return (
    <svg width="841" height="841" viewBox="0 0 841 841" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="420.5" cy="420.5" r="420.5" fill={pallette.grey} />
    </svg>
  );
}
