import { FormEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../middleware/base';
import StyledLogin from './index.styled';
import InputText from '../../components/styled/InputText';
import Button from '../../components/styled/Button';

const Login = () => {
  const [authorized, setAuthorized] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const { username, password } = e.target as typeof e.target & {
      username: { value: string },
      password: { value: string },
    };

    await signInWithEmailAndPassword(auth, username.value, password.value);

    setAuthorized(true);
  };

  if (authorized) return <Redirect to="/dashboard" />;

  return (
    <StyledLogin>
      <form onSubmit={onSubmit} autoComplete="off">
        <div>
          <InputText type="text" name="username" placeholder="email" />
        </div>
        <div>
          <InputText type="password" name="password" placeholder="password" />
        </div>
        <Button color="white" backgroundColor="slategray" type="submit">Login</Button>
      </form>
    </StyledLogin>
  );
};

export default Login;
