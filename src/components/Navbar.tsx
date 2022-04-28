import Link from 'next/link';
import React from 'react';

type Props = {
  children?: any;
};

export default function Navbar({ children, ...args }: Props) {
  return (
    <div className={`z-10 w-full bg-teal-500`}>
      <div className={'navbarInner p-4'}>
        <h1 className="text-2xl">
          <Link href="/">
            <a>Reviewers</a>
          </Link>
        </h1>
      </div>
    </div>
  );
}
