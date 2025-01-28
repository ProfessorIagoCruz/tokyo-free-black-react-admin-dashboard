import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Auth
const SignIn = Loader(lazy(() => import('src/content/pages/Auth/SignIn')));



// Status
const Status404 = Loader(lazy(() => import('src/content/pages/Status/Status404')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/employees" replace />
      },
      {
        path: 'overview',
        element: <Navigate to="/employees" replace />
      },
      {
        path: '*',
        element: <Status404 />
      },

      // Auth
      {
        path: '/signin',
        element: <SignIn />
      }
    ]
  }
];

export default routes;