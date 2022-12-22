import { ROUTES } from 'constants';
import { useLocalStorage } from 'hooks';
import AccountPage from 'pages/AccountPage';
import TodoPage from 'pages/ToDoPage';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const PrivateRouter = () => {
  const { storageValue } = useLocalStorage('access_token');

  return storageValue === undefined || storageValue === null ? <Navigate to="/" /> : <TodoPage />;
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <AccountPage />,
  },
  {
    path: ROUTES.TODO,
    element: <PrivateRouter />,
  },
]);
