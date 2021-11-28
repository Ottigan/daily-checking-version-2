import { FormEvent, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from '@firebase/util';
import { AuthContext } from 'middleware/AuthProvider';
import Input from 'components/Input';
import Button from 'components/Button';
import Loader from 'components/Loader';
import AlertMessage from 'components/Alert';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import { auth } from '../../middleware/base';

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 350px;

    img {
      margin-bottom: 1rem;
    }

    form * {
      width: 100%;
    }
  }
`;

const Login = () => {
  const { loading, currentUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const { username, password } = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    try {
      await signInWithEmailAndPassword(auth, username.value, password.value);
    } catch (err) {
      if (err instanceof FirebaseError) {
        setLoginError('Email or Password was wrong!');
      }
    }
  };

  if (loading) return <Loader />;

  if (currentUser) return <Redirect to="/dashboard" />;

  return (
    <StyledLogin>
      <div className="container">
        <img src={logo} alt="Daily Checking Logo" />
        <form onSubmit={onSubmit} autoComplete="off">
          <Input type="text" name="username" placeholder="email" className="form-control" />
          <Input type="password" name="password" placeholder="password" className="form-control" />
          <AlertMessage message={loginError} className="alert-danger mb-3" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
