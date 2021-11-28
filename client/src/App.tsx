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

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  .table-rounded {
    border-collapse: separate;
    border-spacing: 0;

    thead {
      tr:first-of-type th {
        border-bottom-width: 1px;
        border-right-width: 0;

        &:first-of-type {
          border-top-left-radius: 0.25rem;
        }

        &:last-of-type {
          border-top-right-radius: 0.25rem;
          border-right-width: 1px;
        }
      }
    }

    tbody {
      tr td {
        border-width: 0px 0px 1px 1px;

        &:last-child {
          border-right-width: 1px;
        }
      }

      & tr:last-of-type {
        td {
          border-bottom-width: 1px;

          &:first-of-type {
            border-right-width: 0;
            border-bottom-left-radius: 0.25rem;
          }
          &:last-of-type {
            border-right-width: 1px;
            border-bottom-right-radius: 0.25rem;
          }
        }
      }
    }
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
