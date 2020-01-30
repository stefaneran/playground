import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClassicStore from './ClassicStore';

const ReduxMain = () => {
  return (
    <Paper>
      <Grid container>
        <Grid item>
          <ClassicStore />
        </Grid>
        <Grid item>
          
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ReduxMain;