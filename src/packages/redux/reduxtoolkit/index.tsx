import React from 'react';
import ToolkitStore from './components/ToolkitStore';
import configureStore from './store/configStore';

const store = configureStore();

export default () => <ToolkitStore store={store} />