import Head from 'next/head';
import React from 'react';

export default function Header() {
  return (
    <header>
      <Head>
        <title>articles.day</title>
        <meta name="description" content="articles.day" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </header>
  );
}
