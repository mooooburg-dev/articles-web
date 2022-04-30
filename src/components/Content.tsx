import React from 'react';

type Props = {
  children?: any;
};

export default function Content({ children }: Props) {
  return (
    <main className="relative overflow-auto h-[calc(100vh-140px)] p-4 max-w-6xl mx-auto">
      {children}
    </main>
  );
}
