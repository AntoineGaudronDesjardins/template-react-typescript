import { RouteObject } from 'react-router-dom';
import Layout from 'routes/layout';
import Root from 'routes/index';
import PageNotFound from 'routes/page-not-found';

export const routesConfig: RouteObject[] = [
  {
    path: '/',

    element: <Layout />,
    children: [
      {
        index: true,

        element: <Root />,
      },
      {
        path: ':pathParameter',

        lazy: () => import('routes/[pathParameter]/layout'),
        children: [
          {
            index: true,

            lazy: () => import('routes/[pathParameter]/index'),
          },
          {
            path: ':secondPathParameter',

            lazy: () => import('routes/[pathParameter]/[secondPathParameter]'),
          },
        ],
      },
      {
        path: '*',

        element: <PageNotFound />,
      },
    ],
  },
];
