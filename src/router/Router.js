import { Navigate, createBrowserRouter } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';
import AccountPage from '../pages/AccountPage';
import TmpPage from '../pages/TMP';

export const PrivateRouter = () => {
  const { storedValue } = useLocalStorage('access_token');

  return storedValue === undefined || storedValue === null ? <Navigate to="/" /> : <TmpPage />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AccountPage />,
  },
  {
    path: '/todo',
    element: <PrivateRouter />,
  },
]);
