import React from 'react';
import Footer from './Footer';
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
      <main>{children}</main>
      <Footer />
    </>
  );
}
