import Index from './index';
import MD from './markdown/demo.md';
import JSX from './jsx/index';

const routes = [
  {
    path: '/jsx',
    component: JSX,
    name: 'jsx'
  },
  {
    path: '/index',
    component: Index,
    name: 'index'
  },
  {
    path: '/markdown',
    component: MD,
    name: 'markdown-demo'
  },
  {
    path: '*',
    redirect: 'index'
  }
];

export default routes;
