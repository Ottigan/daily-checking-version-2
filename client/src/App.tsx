import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './views/login';
import Dashboard from './views/dashboard';
import AuthProvider from './middleware/AuthProvider';
import PrivateRoute from './middleware/PrivateRoute';
import GlobalStyles from './components/styled/global';

const App = () => (
  <AuthProvider>
    <GlobalStyles />
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;
