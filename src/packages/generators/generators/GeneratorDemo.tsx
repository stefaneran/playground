import * as React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { basicGenerator } from './basicGenerator';

const GeneratorDemo = () => {

  const [basicOutput, setBasicOutput] = React.useState('');

  const handleBasic = () => {
    const output = basicGenerator.next().value;
    setBasicOutput(`${basicOutput} ${output}`);
  }

  return (
    <Paper>
      <Typography> Generator Demo </Typography>
      <Paper>
        <Typography> Basic Generator </Typography>
        <Button variant="contained" color="primary" onClick={handleBasic}>Next</Button>
        <Typography> Basic Output: {basicOutput} </Typography>
      </Paper>
    </Paper>
  )
}

export default GeneratorDemo;