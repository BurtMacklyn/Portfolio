import React from 'react';
import Tag from '@components/Tag';
import { motion } from 'framer-motion';
import animation from 'animation';

export default function HeaderTag({ close }: { close?: boolean }): JSX.Element {
  return (
    <motion.div
      className="header__tag--wrapper"
      variants={{
        from: { transform: `translateX(0%) translateY(${close ? '' : '-'}50%)`, opacity: 0 },
        to: { transform: `translateX(-50%) translateY(${close ? '' : '-'}50%)`, opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration / 2 }}
    >
      <Tag className="header__tag header__tag--open">{close ? '/header' : 'header'}</Tag>
    </motion.div>
  );
}
