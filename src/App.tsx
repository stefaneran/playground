import * as React from 'react';
import AppRouter from './router/AppRouter';
import { Link } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';
import routes from './router/routes';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column'
}

const buttonStyles = {
  margin: '0.3em'
}

const linkStyles = {
  color: '#fff', 
  textDecoration: 'none',
  width: '100%',
  height: '100%'
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <AppRouter>
          <Paper style={containerStyles}>
            {routes.map(route => (
              <Button style={buttonStyles} color="primary" variant="contained" key={route.path}>
                <Link style={linkStyles} to={route.path}>{route.title}</Link>
              </Button>
            ))}
          </Paper>
        </AppRouter>
      </>
    );
  }
}

export default App;