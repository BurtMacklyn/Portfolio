import React from 'react';
import animation from 'animation';
import { motion } from 'framer-motion';
import Tag from '@components/Tag';

export default function HeaderTag({ close }: { close?: boolean }): JSX.Element {
  return (
    <motion.div
      variants={{
        from: { transform: `translateX(0%) translateY(${close ? '' : '-'}100%)`, opacity: 0 },
        to: { transform: `translateX(-50%) translateY(${close ? '' : '-'}100%)`, opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration / 2 }}
    >
      <Tag className="header__tag header__tag--1">{close && '/'}header</Tag>
    </motion.div>
  );
}
