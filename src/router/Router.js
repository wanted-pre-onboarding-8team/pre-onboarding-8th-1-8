import { Navigate, createBrowserRouter } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';
import AccountPage from '../pages/AccountPage';
import ToDoPage from '../pages/ToDoPage';

export const PrivateRouter = () => {
  const { storageValue } = useLocalStorage('access_token');

  return storageValue === undefined || storageValue === null ? <Navigate to='/' /> : <ToDoPage />;
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
