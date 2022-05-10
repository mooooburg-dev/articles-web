import { Button, Grid, TextField } from '@mui/material';
import React from 'react';

export default function Create() {
  return (
    <div>
      <h2 className="mb-4">Create</h2>
      <Grid container spacing={2}>
        <Grid item sm={1} className="my-auto">
          Label
        </Grid>
        <Grid item sm={11}>
          <TextField className="w-full" />
        </Grid>
        <Grid item sm={1} className="my-auto">
          Label
        </Grid>
        <Grid item sm={11}>
          <TextField className="w-full" />
        </Grid>
        <Grid item sm={1} className="my-auto">
          Label
        </Grid>
        <Grid item sm={11}>
          <TextField className="w-full" />
        </Grid>
        <Grid item sm={12} className="text-right">
          <Button variant="outlined">등록</Button>
        </Grid>
      </Grid>
    </div>
  );
}
