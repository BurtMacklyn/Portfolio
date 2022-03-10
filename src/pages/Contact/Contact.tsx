import Head from 'next/head';
import { useState } from 'react';
import { Portfolio, Center, Nav, Footer } from '~/components';
import style from './Contact.module.scss';
import { Svg } from './Svg';
import { Form } from './Form';
import { Hooray } from './Hooray';
import { Loading } from './Loading';

export function Contact() {
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
        <Hooray hooray={!!hooray} />
        <Loading loading={!!loading} />
      </>
      <Footer />
    </Portfolio>
  );
}
