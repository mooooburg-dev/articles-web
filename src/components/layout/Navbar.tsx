import { Create, Login, Menu, Settings } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type Props = {
  onCreateClick: () => void;
  children?: any;
};

export default function Navbar({ onCreateClick, children, ...args }: Props) {
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
            <ul className="flex justify-end text-xs font-bold child:mx-2">
              <li>
                <Link href="/articles">ARTICLES</Link>
              </li>
              <li>
                <Link href="/clipboard">CLIPBOARD</Link>
              </li>
            </ul>
            <Link href="/login">
              <a>
                <IconButton color="inherit" component="span">
                  <Login />
                </IconButton>
              </a>
            </Link>
            <Link href="/settings">
              <a>
                <IconButton color="inherit" component="span">
                  <Settings />
                </IconButton>
              </a>
            </Link>
            <IconButton
              color="inherit"
              component="span"
              onClick={onCreateClick}
            >
              <Create />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
