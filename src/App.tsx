import * as React from 'react';
import AppRouter from './router/AppRouter';
import routes from './router/routes';
import Menu from './Menu'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ padding: '3em 1em' }}>
        <AppRouter>
          <Menu routes={routes} />
        </AppRouter>
      </div>
    );
  }
}

export default App;