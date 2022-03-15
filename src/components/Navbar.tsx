import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className="z-10 w-full py-4 bg-blue-500">
        <button className="ml-4 bg-orange-400">
          <Link href="/">
            <a>HOME</a>
          </Link>
        </button>
        <button className="ml-4">
          <Link href="/profile">PROFILE</Link>
        </button>
        <button className="ml-4">CONTACT</button>
      </div>
    </div>
  );
}
