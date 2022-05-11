import React from 'react';

type Props = {
  children?: any;
};

export default function Content({ children }: Props) {
  return (
    <main className="relative mx-auto min-h-[calc(100vh-92px)] max-w-6xl p-4">
      {children}
    </main>
  );
}
