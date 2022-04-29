import React from 'react';
import Bottom from './Bottom';
// import Content from './Content';
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
      <main className="relative overflow-auto max-w-6xl h-[calc(100vh - 140px)] mx-auto my-4 p-4">
        {children}
      </main>
      <Bottom />
    </div>
  );
}
