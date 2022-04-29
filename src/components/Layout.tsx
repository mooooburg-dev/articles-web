import React from 'react';
import Bottom from './Bottom';
import Content from './Content';
import Header from './Header';
import Navbar from './Navbar';

type Props = {
  children?: any;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-full">
      <Header />
      <Navbar />
      <Content>{children}</Content>
      <Bottom />
    </div>
  );
}
