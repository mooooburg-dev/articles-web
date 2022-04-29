import React from 'react';

type Props = {
  children?: any;
};

export default function Content({ children }: Props) {
  return (
    <main className="relative overflow-auto max-w-6xl h-[calc(100vh - 140px)] mx-auto my-4 p-4">
      {children}
    </main>
  );
}
