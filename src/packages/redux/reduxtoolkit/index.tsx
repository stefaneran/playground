import React from 'react';
import ToolkitStore from './ToolkitStore';
import configureStore from './configStore';

const store = configureStore();

export default () => <ToolkitStore store={store} />