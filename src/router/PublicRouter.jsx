import { LOCAL_STORAGE } from 'constants';
import { ROUTES, useLocalStorage } from 'hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PublicRouter = () => {
  const { pathname } = useLocation();
  const { storageValue: accessToken } = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN);

  if (pathname === ROUTES.HOME) {
    return accessToken ? <Navigate to={ROUTES.TODO} replace /> : <Outlet />;
  }

  return accessToken ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};

export default PublicRouter;
