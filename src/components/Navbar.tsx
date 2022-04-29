import { Menu } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type Props = {
  children?: any;
};

export default function Navbar({ children, ...args }: Props) {
  return (
    <div className={`z-10 w-full bg-teal-500`}>
      <div className={'navbarInner max-w-6xl mx-auto p-4'}>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <IconButton
              color="inherit"
              aria-label="upload picture"
              component="span"
            >
              <Menu />
            </IconButton>
          </Grid>
          <Grid item xs={10} className={'text-right'}>
            Review | News | Relationship
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
