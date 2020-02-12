import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClassicStore from './classic/index'; // TODO Check how to remove "index"
import ToolkitStore from './reduxtoolkit/index'; // TODO Check how to remove "index"

const ReduxMain = () => {
  return (
    <>
      <h1>Redux Test</h1>
      <Paper>
        <Grid container direction="column">
          <Grid item>
            {ClassicStore()}
          </Grid>
          <Grid item>
            {ToolkitStore()}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ReduxMain;