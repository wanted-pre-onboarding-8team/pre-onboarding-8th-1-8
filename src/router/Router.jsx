import { ROUTES } from 'constants';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AccountPage = lazy(() => import('pages/AccountPage'));
const TodoPage = lazy(() => import('pages/ToDoPage'));

export const router = createBrowserRouter([
  {
    element: <PublicRouter />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <AccountPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTES.TODO,
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <TodoPage />
          </Suspense>
        ),
      },
    ],
  },
]);
