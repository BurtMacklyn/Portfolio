/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Header from '../islands/Header.tsx';

export default function Home() {
  return (
    <div class={tw`bg-black text-white mx-auto flex flex-col items-center`}>
      <div class={tw`w-full min-h-screen flex flex-col px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 max-w-[112.5rem]`}>
        <Header />
      </div>
    </div>
  );
}
