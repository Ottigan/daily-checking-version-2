import { useContext, ElementType } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Navbar from '../components/Navbar';

interface Props {
  component: ElementType;
  exact: boolean;
  path: string;
}

const PrivateRoute = ({ component: RouteComponent, ...rest }: Props) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? (
          <>
            <Navbar />
            <RouteComponent {...routeProps} currentUser={currentUser} />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
