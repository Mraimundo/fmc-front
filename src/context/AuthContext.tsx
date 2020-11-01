import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import signInService from 'services/auth/signIn';
import isTokenValid from 'services/auth/isTokenValid';
import isThereAnyRegulationToAccept from 'services/register/regulation/isThereAnyRegulationToAccept';

import getLoggedParticipant from 'services/auth/getLoggedParticipant';
import { Participant } from 'services/auth/interfaces/Participant';
import { setToken } from 'services/api';
import { useToast } from './ToastContext';

interface Credentials {
  cpf: string;
  password: string;
}

interface CredentialsToken {
  token: string;
  isSSOToken?: boolean;
}

interface AuthContextState {
  participant: Participant;
  refreshParticipant(): void;
  signed: boolean;
  shouldShowRegulationsModal: boolean;
  signIn(credentials: Credentials | CredentialsToken): Promise<void>;
  signOut(): void;
  simulating: boolean;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [simulating, setSimulating] = useState(false);
  const [apiToken, setApiToken] = useState<string>('');
  const [participant, setParticipant] = useState<Participant>(
    {} as Participant,
  );
  const [shouldShowRegulationsModal, setShouldShowRegulationsModal] = useState(
    false,
  );

  const refreshParticipant = useCallback(async () => {
    const [data, isThereRegulationsToAccept] = await Promise.all([
      getLoggedParticipant(),
      isThereAnyRegulationToAccept(),
    ]);
    setShouldShowRegulationsModal(isThereRegulationsToAccept);
    setParticipant(data);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@Vendavall:token');
    if (token) {
      setToken(token);
      setApiToken(token);
    }
  }, []);

  useEffect(() => {
    if (!apiToken) return;
    refreshParticipant();
  }, [apiToken, refreshParticipant]);

  const signInWithCredentials = useCallback(
    async (credentials: Credentials): Promise<string> => {
      const { token } = await signInService(credentials);
      return token;
    },
    [],
  );

  const signInWithCredentialsToken = useCallback(
    async (credentials: CredentialsToken): Promise<string> => {
      if (credentials.isSSOToken) return credentials.token;
      const { token } = await signInService(credentials.token);
      return token;
    },
    [],
  );

  const isCredentialsOrCredentialsToken = useCallback(
    (
      data: Credentials | CredentialsToken,
    ): 'credentials' | 'credentialsToken' => {
      if ((data as Credentials).cpf) return 'credentials';
      return 'credentialsToken';
    },
    [],
  );

  const signIn = useCallback(
    async (data: Credentials | CredentialsToken) => {
      let token = '';

      const credentialsType = isCredentialsOrCredentialsToken(data);

      if (credentialsType === 'credentials') {
        token = await signInWithCredentials(data as Credentials);
      }

      if (credentialsType === 'credentialsToken') {
        token = await signInWithCredentialsToken(data as CredentialsToken);
      }

      localStorage.setItem('@Vendavall:token', token);
      setToken(token);
      setApiToken(token);
    },
    [
      isCredentialsOrCredentialsToken,
      signInWithCredentials,
      signInWithCredentialsToken,
    ],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Vendavall:token');

    setToken('');
    setApiToken('');
  }, []);

  const { addToast } = useToast();

  useEffect(() => {
    if (!apiToken) return;
    setToken(apiToken);
    setTimeout(() => {
      isTokenValid().then(isValid => {
        if (!isValid) {
          signOut();
          addToast({
            title: 'Sua Sessão expirou, por favor refaça seu login',
            type: 'error',
          });
        }
      });
    }, 800);
  }, [addToast, signOut, apiToken]);

  return (
    <AuthContext.Provider
      value={{
        participant,
        refreshParticipant,
        signed: !!apiToken,
        signIn,
        signOut,
        shouldShowRegulationsModal,
        simulating,
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
