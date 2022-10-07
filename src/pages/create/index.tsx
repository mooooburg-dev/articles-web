import { Button, Grid, TextField } from '@mui/material';
import React from 'react';

export default function Create() {
  return (
    <div>
      <h2 className="mb-4">Add Article</h2>
      <Grid container spacing={2}>
        <Grid
          container
          item
          xs={12}
          spacing={2}
          className="column flex items-center"
        >
          <Grid item>제목</Grid>
          <Grid item xs>
            <TextField className="w-full" />
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2} className="items-center">
          <Grid item>주소</Grid>
          <Grid item xs>
            <TextField className="w-full" />
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2} className="items-center">
          <Grid item>태그</Grid>
          <Grid item xs>
            <TextField className="w-full" />
          </Grid>
        </Grid>
        <Grid item xs={12} className="text-right">
          <Button variant="outlined">등록</Button>
        </Grid>
      </Grid>
    </div>
  );
}
