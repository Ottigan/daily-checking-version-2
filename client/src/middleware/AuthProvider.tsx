import { useEffect, useState, createContext, ReactNode } from 'react';
import { CurrentUserContext } from '../definitions';
import { auth } from './base';

interface Props {
  children: ReactNode;
}

interface AuthContextInterface {
  loading: boolean;
  currentUser: CurrentUserContext;
}

export const AuthContext = createContext<AuthContextInterface>({
  loading: true,
  currentUser: null,
});

const AuthProvider = ({ children }: Props) => {
  const [authState, setAuthState] = useState<AuthContextInterface>({
    loading: true,
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setAuthState({ loading: false, currentUser });
    });
  }, []);

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
