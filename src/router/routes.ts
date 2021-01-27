import HelloWorld from '@packages/helloworld';
import { ReduxMain } from '@packages/redux';
import { IteratorMain } from '@packages/iterators';

export default [
  {
    path: '/redux',
    title: 'Redux',
    component: ReduxMain
  },
  {
    path: '/generator',
    title: 'Generator & Iterators',
    component: IteratorMain
  }
]