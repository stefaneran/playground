import HelloWorld from 'packages/helloworld';
import { ReduxMain } from 'packages/redux';

export default [
  {
    path: '/helloworld',
    component: HelloWorld
  },
  {
    path: '/redux',
    component: ReduxMain
  }
]