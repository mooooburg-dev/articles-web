import React from 'react';

type Props = {
  children?: any;
};

export default function Content({ children }: Props) {
  return <main className="relative mx-auto max-w-6xl p-4">{children}</main>;
}
