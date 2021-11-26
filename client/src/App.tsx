import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import * as styled from 'styled-components';
import Login from './views/login';
import Dashboard from './views/dashboard';
import AuthProvider from './middleware/AuthProvider';
import PrivateRoute from './middleware/PrivateRoute';

const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  html,
  body,
  #root {
    height: 100%;
  }
`;

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
