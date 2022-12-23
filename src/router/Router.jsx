import { LOCAL_STORAGE, ROUTES } from 'constants';
import { useLocalStorage } from 'hooks';
import AccountPage from 'pages/AccountPage';
import TodoPage from 'pages/ToDoPage';
import { useEffect } from 'react';
import { Navigate, Outlet, createBrowserRouter, useLocation } from 'react-router-dom';

const PrivateRouter = () => {
  const { storageValue: accessToken } = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);

  return !accessToken ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};

useEffect;
const PublicRouter = () => {
  const { pathname } = useLocation();
  const { storageValue: accessToken } = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);

  if (pathname === ROUTES.HOME) {
    return accessToken ? <Navigate to={ROUTES.TODO} replace /> : <Outlet />;
  }

  return accessToken ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};

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
