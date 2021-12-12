import React from 'react';

import send from './send';

import getDate from './getDate';
import validateEmail from './validateEmail';

import { motion } from 'framer-motion';
import animation from 'animation';

import { contact } from '@content/index';

export default function Main(): JSX.Element {
  return (
    <motion.section
      variants={{
        from: { opacity: 0 },
        to: { opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration }}
      className="contact"
    >
      <div className="contact__content">
        <div className="contact__box contact__box--1">
          <h2 className="contact__title">{contact.box1.title}</h2>
          <p className="contact__description">{contact.box1.description}</p>
        </div>
        <form className="contact__box contact__box--2" autoComplete="nope" onSubmit={send}>
          <div className="contact__box contact__box--1 contact__sent-message">
            <p className="contact__title">{contact.sent.title}</p>
            <p className="contact__description">{contact.sent.description}</p>
          </div>
          <div className="contact__row">
            <input type="text" className="contact__input contact__firstname contact__bg" placeholder="Firstname" autoComplete="nope" />
            <input type="text" className="contact__input contact__lastname contact__bg" placeholder="Lastname" autoComplete="nope" />
          </div>
          <div className="contact__row contact__bg">
            <input type="text" className="contact__input contact__email" placeholder="Email" autoComplete="nope" onInput={validateEmail} />
          </div>
          <div className="contact__row contact__bg">
            <input type="text" className="contact__input contact__subject" placeholder="Subject" autoComplete="nope" />
          </div>
          <div className="contact__row contact__body contact__bg">
            <textarea className="contact__input contact__body" placeholder="Body" autoComplete="nope"></textarea>
          </div>
          <div className="contact__row">
            <p className="contact__date contact__input">{getDate()}</p>
            <button type="submit" className="contact__send contact__input">
              {contact.sendBtn}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
