import { useContext, ElementType } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthContext } from './AuthProvider';

interface Props {
  component: ElementType,
  exact: boolean,
  path: string
}

const PrivateRoute = ({ component: RouteComponent, ...rest }: Props) => {
  const currentUser = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => (currentUser ? <RouteComponent {...routeProps} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
