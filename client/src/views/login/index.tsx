import { FormEvent, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from 'middleware/AuthProvider';
import Input from 'components/Input';
import Button from 'components/Button';
import Loader from 'components/Loader';
import styled from 'styled-components';
import { auth } from '../../middleware/base';

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 400px;

    * {
      width: 100%;
    }
  }
`;

const Login = () => {
  const { loading, currentUser } = useContext(AuthContext);

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const { username, password } = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    await signInWithEmailAndPassword(auth, username.value, password.value);
  };

  if (loading) return <Loader />;

  if (currentUser) return <Redirect to="/dashboard" />;

  return (
    <StyledLogin>
      <form onSubmit={onSubmit} autoComplete="off">
        <div>
          <Input type="text" name="username" placeholder="email" />
        </div>
        <div>
          <Input type="password" name="password" placeholder="password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </StyledLogin>
  );
};

export default Login;
