import React from 'react';
import Bottom from './Bottom';
import Header from './Header';
import Navbar from './Navbar';

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Navbar />
      <main className={'p-4 h-full'}>{children}</main>
      <Bottom />
    </>
  );
}
