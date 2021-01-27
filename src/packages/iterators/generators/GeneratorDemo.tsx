import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';
import { 
  basicGenerator, 
  basicCode,
  forGenerator, 
  forCode,
  infiniteGenerator,
  infiniteCode
} from './generators';
import { basicHandler, forHandler, infiniteHandler } from './handlers';

const useStyles = makeStyles((theme: Theme) => createStyles({
  module: {
    height: '220px',
    display: 'flex',
    marginBottom: '1em',
    overflow: 'hidden'
  },
  example: {
    padding: '1em',
    width: '50%',
    height: '100%'
  },
  code: {
    padding: '0 1em 0.5em 1em',
    width: '50%',
    height: '100%',
    color: '#fff',
    background: '#000',
    overflowY: 'auto'
  }
}))

const GeneratorDemo = () => {
  const classes = useStyles();

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
    <Paper style={{ padding: '0.5em' }}>
      <Typography> Generator Demo </Typography>
      <div className={classes.module}>
        <div className={classes.example}>
          <Typography> Basic Generator </Typography>
          <Button 
            variant="contained" color="primary" 
            onClick={basicHandler(basicGeneratorRef, basicOutput, setBasicOutput)}
          >
            Next
          </Button>
          <Typography> Basic Output: {basicOutput} </Typography>
        </div>
        <div className={classes.code}>
          <pre>
            {basicCode}
          </pre>
        </div>
      </div>
      <div className={classes.module}>
        <div className={classes.example}>
          <Typography> For Loop Generator </Typography>
          <Button 
            variant="contained" color="primary" 
            onClick={forHandler(forGeneratorRef, forOutput, setForOutput)}
          >
            Run
          </Button>
          <Typography> For Loop Output: {forOutput} </Typography>
        </div>
        <div className={classes.code}>
          <pre>
            {forCode}
          </pre>
        </div>
      </div>
      <div className={classes.module}>
        <div className={classes.example}>
          <Typography> Infinite Generator </Typography>
          <Button 
            variant="contained" color="primary" 
            onClick={infiniteHandler(infiniteGeneratorRef, infiniteOutput, setInfiniteOutput)}
          >
            Next Iteration
          </Button>
          <Typography> Infinite Output: {infiniteOutput} </Typography>
        </div>
        <div className={classes.code}>
          <pre>
            {infiniteCode}
          </pre>
        </div>
      </div>
    </Paper>
  )
}

export default GeneratorDemo;