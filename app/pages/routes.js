const routes = [
  {
    path: '/jsx',
    component: () => import('./jsx/index'),
    name: 'jsx'
  },
  {
    path: '/index',
    component: () => import('./index'),
    name: 'index'
  },
  {
    path: '/markdown',
    component: () => import('./markdown/datepicker-demo.md'),
    name: 'markdown-demo'
  },
  {
    path: '*',
    redirect: 'index'
  }
];

export default routes;
