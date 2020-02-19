import * as React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { basicGenerator, forGenerator, infiniteGenerator } from './generators';
import { basicHandler, forHandler, infiniteHandler } from './handlers';

const GeneratorDemo = () => {

  // Super basic example
  const [basicOutput, setBasicOutput] = React.useState('');
  const basicGeneratorRef = React.useRef(basicGenerator());

  // For Loop example
  const [forOutput, setForOutput] = React.useState('');
  const forGeneratorRef = React.useRef(forGenerator());

  // Infinite example
  const [infiniteOutput, setInfiniteOutput] = React.useState('');
  const infiniteGeneratorRef = React.useRef(infiniteGenerator());

  return (
    <Paper>
      <Typography> Generator Demo </Typography>
      <Paper>
        <Typography> Basic Generator </Typography>
        <Button 
          variant="contained" color="primary" 
          onClick={basicHandler(basicGeneratorRef, basicOutput, setBasicOutput)}
        >
          Next
        </Button>
        <Typography> Basic Output: {basicOutput} </Typography>
      </Paper>
      <Paper>
        <Typography> For Loop Generator </Typography>
        <Button 
          variant="contained" color="primary" 
          onClick={forHandler(forGeneratorRef, forOutput, setForOutput)}
        >
          Run
        </Button>
        <Typography> For Loop Output: {forOutput} </Typography>
      </Paper>
      <Paper>
        <Typography> Infinite Generator </Typography>
        <Button 
          variant="contained" color="primary" 
          onClick={infiniteHandler(infiniteGeneratorRef, infiniteOutput, setInfiniteOutput)}
        >
          Next Iteration
        </Button>
        <Typography> Infinite Output: {infiniteOutput} </Typography>
      </Paper>
    </Paper>
  )
}

export default GeneratorDemo;