import type React from 'react';
import { Tag as StaticTag, Motion } from 'source/components';

export function Contents() {
  return (
    <div className='contents'>
      <Motion.Tag options={tagOptions}>header</Motion.Tag>
      <String>'Hello world, I am'</String>
      <h1 className='title'>Science Exchange</h1>
      <String close>'A web designer and developer'</String>
      <Motion.Tag options={tagOptions} close>
        header
      </Motion.Tag>
    </div>
  );
}

const tagOptions = {
  from: {
    transform: `translate(50%)`,
  },
  to: {
    transform: `translate(-50%)`,
  },
  settings: {
    nth: 1,
  },
};

const String = ({ children, close }: { children: React.ReactNode; close?: boolean }) => {
  const openOptions = {
    from: {
      transform: 'translate(100%)',
    },
    to: {
      transform: 'translate(0%)',
    },
    settings: {
      nth: 1,
    },
  };

  const closeOptions = {
    from: {
      transform: 'translate(-100%)',
    },
    to: {
      transform: 'translate(0%)',
    },
    settings: {
      nth: 1,
    },
  };
  return (
    <Motion.Code className={`string ${close ? 'close' : ''}`} options={close ? closeOptions : openOptions}>
      {children}
    </Motion.Code>
  );
};
