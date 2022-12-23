import { ROUTES } from 'constants';
import AccountPage from 'pages/AccountPage';
import TodoPage from 'pages/ToDoPage';
import { createBrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export const router = createBrowserRouter([
  {
    element: <PublicRouter />,
    children: [
      {
        path: ROUTES.HOME,
        element: <AccountPage />,
      },
    ],
  },
  {
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTES.TODO,
        element: <TodoPage />,
      },
    ],
  },
]);
