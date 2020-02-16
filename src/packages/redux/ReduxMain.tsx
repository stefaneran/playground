import * as React from 'react';
import { Paper, Grid } from '@material-ui/core';
import ClassicStore, { store as classicStore } from './classic/index'; // TODO Check how to remove "index"
import ToolkitStore, { store as toolkitStore } from './reduxtoolkit/index'; // TODO Check how to remove "index"

const ReduxMain = () => {
  return (
    <>
      <h1>Redux Test</h1>
      <Paper style={{padding:'1em'}}>
        <Grid container direction="column">
          <Grid item>
            <ClassicStore store={classicStore} />
          </Grid>
          <Grid item>
            <ToolkitStore store={toolkitStore} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ReduxMain;