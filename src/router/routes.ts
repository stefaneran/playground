import HelloWorld from '@packages/helloworld';
import { ReduxMain } from '@packages/redux';
import { GeneratorMain } from '@packages/generators';

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
  },
  {
    path: '/generator',
    title: 'Generator & Iterators',
    component: GeneratorMain
  }
]