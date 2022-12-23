import { LOCAL_STORAGE, ROUTES } from 'constants';
import { useLocalStorage } from 'hooks';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { storageValue: accessToken } = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);

  return !accessToken ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};

export default PrivateRouter;
