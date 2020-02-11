import React from 'react';
import ClassicStore from './ClassicStore';
import configureStore from './configStore';

const store = configureStore();

export default () => <ClassicStore store={store} />;

