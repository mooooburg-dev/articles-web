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
        className={'navbarInner max-w-6xl mx-auto h-12 flex align-middle pr-4'}
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
            <ul className="flex justify-end child:mx-2 text-sm font-bold">
              <li>
                <span>ARTICLES</span>
              </li>
              <li>
                <span>SAVED</span>
              </li>
              <li>
                <span>SETTINGS</span>
              </li>
            </ul>
          </Grid>
          <Grid item xs={1} className={'text-right'}>
            <IconButton color="inherit" component="span">
              <Create />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
