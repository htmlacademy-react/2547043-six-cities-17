import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthStatus;
}

function PrivateRoute ({ authStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
