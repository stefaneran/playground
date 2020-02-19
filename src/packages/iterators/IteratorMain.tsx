import * as React from 'react';
import { Paper, Grid } from '@material-ui/core';
import GeneratorDemo from './generators/GeneratorDemo';
import IteratorDemo from './iterators/IteratorDemo';

const IteratorMain = () => {
  return (
    <Paper>
      <Grid container direction="column">
        <Grid item>
          <GeneratorDemo />
        </Grid>
        <Grid item>
          <IteratorDemo />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default IteratorMain;