import {
  useEffect, useState, createContext, ReactNode,
} from 'react';
import { currentUserContext } from '../definitions';
import { auth } from './base';

interface Props {
  children: ReactNode
}

export const AuthContext = createContext<currentUserContext>(null);

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<currentUserContext>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user));
  }, []);

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
