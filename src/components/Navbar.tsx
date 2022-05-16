import { Create, Login, Menu, Settings } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type Props = {
  children?: any;
};

export default function Navbar({ children, ...args }: Props) {
  return (
    <div className={`z-10 w-full bg-teal-400`}>
      <div
        className={'navbarInner mx-auto flex h-12 max-w-6xl pr-4 align-middle'}
      >
        <Grid container className="column flex justify-between">
          <Grid item>
            <IconButton
              color="inherit"
              component="span"
              className="xs:block sm:hidden"
            >
              <Menu />
            </IconButton>
          </Grid>
          <Grid item className={'flex items-center justify-end'}>
            <ul className="flex justify-end text-sm font-bold child:mx-2">
              <li>
                <Link href={'/articles'}>
                  <a>
                    <span>ARTICLES</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/clipboard'}>
                  <a>
                    <span>CLIPBOARD</span>
                  </a>
                </Link>
              </li>
            </ul>
            <Link href={'/login'}>
              <IconButton color="inherit" component="span">
                <Login />
              </IconButton>
            </Link>
            <Link href={'/settings'}>
              <IconButton color="inherit" component="span">
                <Settings />
              </IconButton>
            </Link>
            <Link href={'/create'}>
              <IconButton color="inherit" component="span">
                <Create />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
