import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={route.path}>
            {route.component}
          </Route>
        ))}
        <Route path="/">
          <div> Welcome to the Homepage! </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter;