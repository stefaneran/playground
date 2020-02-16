import React from 'react';
import ClassicStore from './components/ClassicStore';
import configureStore from './store/configStore';

const store = configureStore();

export default () => <ClassicStore store={store} />;

