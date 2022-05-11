import { Create, Menu } from '@mui/icons-material';
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
        <Grid container alignItems="center">
          <Grid item xs={2} className="xs:block md:hidden">
            <IconButton
              color="inherit"
              aria-label="upload picture"
              component="span"
            >
              <Menu />
            </IconButton>
          </Grid>
          <Grid item xs={9} className={'text-right'}>
            <ul className="flex justify-end text-sm font-bold child:mx-2">
              <li>
                <Link href={'/articles'}>
                  <a>
                    <span>ARTICLES</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/saved'}>
                  <a>
                    <span>SAVED</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/settings'}>
                  <a>
                    <span>SETTINGS</span>
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={1} className={'text-right'}>
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
