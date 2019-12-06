import React from 'react';
import AppRouter from './router/AppRouter.tsx';

interface IProps {
}

interface IState {
}

class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;