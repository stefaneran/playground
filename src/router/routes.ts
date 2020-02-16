import HelloWorld from '@packages/helloworld';
import { ReduxMain } from '@packages/redux';

export default [
  {
    path: '/helloworld',
    title: 'Hello World',
    component: HelloWorld
  },
  {
    path: '/redux',
    title: 'Redux',
    component: ReduxMain
  }
]