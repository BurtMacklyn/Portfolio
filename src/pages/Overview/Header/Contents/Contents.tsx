import type React from 'react';
import { Motion, Tag } from 'src/components';

export function Contents() {
  return (
    <div className='contents'>
      <Tag>header</Tag>
      <String>'Hello world, I am'</String>
      <h1 className='title'>
        Cooper <br className='break' /> Runyan
      </h1>
      <String close>'A web designer and developer'</String>
      <Tag close>header</Tag>
    </div>
  );
}

const String = ({ children, close }: { children: React.ReactNode; close?: boolean }) => {
  return <code className={`string ${close ? 'close' : ''}`}>{children}</code>;
};
