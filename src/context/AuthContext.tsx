import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import numbersOnly from 'util/numbersOnly';
import signInService from 'services/auth/signIn';
import isTokenValid from 'services/auth/isTokenValid';

import getLoggedParticipant, {
  Participant,
} from 'services/auth/getLoggedParticipant';
import { setToken } from 'services/api';
import { useToast } from './ToastContext';

interface Credentials {
  cpf: string;
  password: string;
}

interface AuthContextState {
  participant: Participant;
  signed: boolean;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [participant, setParticipant] = useState<Participant>(
    {} as Participant,
  );
  const [apiToken, setApiToken] = useState<string>(() => {
    const token = localStorage.getItem('@Vendavall:token');

    if (token) {
      setToken(token);
      return token;
    }

    return '';
  });

  const signIn = useCallback(async ({ cpf, password }: Credentials) => {
    const { token } = await signInService({
      cpf: numbersOnly(cpf),
      password,
    });

    localStorage.setItem('@Vendavall:token', token);
    setToken(token);
    setApiToken(token);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Vendavall:token');

    setToken('');
    setApiToken('');
  }, []);

  const updateParticipantData = useCallback(async () => {
    const data = await getLoggedParticipant();
    if (!data.id) {
      setTimeout(() => {
        updateParticipantData();
      }, 200000);
      return;
    }
    setParticipant(data);
  }, []);

  const { addToast } = useToast();
  useEffect(() => {
    if (!apiToken) return;
    isTokenValid().then(isValid => {
      if (!isValid) {
        signOut();
        addToast({
          title: 'Sua Sessão expirou, por favor refaça seu login',
          type: 'error',
        });
        return;
      }
      updateParticipantData();
    });
  }, [apiToken, signOut, addToast, updateParticipantData]);

  return (
    <AuthContext.Provider
      value={{
        participant,
        signed: !!apiToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
