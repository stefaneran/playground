import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ClassicStore } from './classic';
import { ToolkitStore } from './reduxtoolkit';

const ReduxMain = () => {
  return (
    <>
      <h1>Redux Test</h1>
      <Paper>
        <Grid container>
          <Grid item>
            <ClassicStore />
          </Grid>
          <Grid item>
            <ToolkitStore />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ReduxMain;