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

interface AuthContextState {
  participant: Participant;
  signed: boolean;
  shouldShowRegulationsModal: boolean;
  signIn(credentials: Credentials | string): Promise<void>;
  signOut(): void;
  updateParticipantData(): void;
  setToken(token: string): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  // const [tries, setTries] = useState(0);
  const [apiToken, setApiToken] = useState<string>('');
  const [participant, setParticipant] = useState<Participant>(
    {} as Participant,
  );
  const [shouldShowRegulationsModal, setShouldShowRegulationsModal] = useState(
    false,
  );

  useEffect(() => {
    console.log(participant);
  }, [participant]);

  const updateParticipantData = useCallback(async () => {
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
    updateParticipantData();
  }, [apiToken, updateParticipantData]);

  const signIn = useCallback(async (data: Credentials | string) => {
    const { token } = await signInService(data);

    localStorage.setItem('@Vendavall:token', token);
    setToken(token);
    setApiToken(token);
  }, []);

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

  const setTokenFn = useCallback(
    (tokenParam: string) => {
      setToken(tokenParam);
      isTokenValid().then(isValid => {
        if (!isValid) {
          signOut();
          addToast({
            title: 'Token inválido',
            type: 'error',
          });
          return;
        }
        localStorage.setItem('@Vendavall:token', tokenParam);
        setApiToken(tokenParam);
      });
    },
    [addToast, signOut],
  );

  return (
    <AuthContext.Provider
      value={{
        participant,
        signed: !!apiToken,
        signIn,
        signOut,
        shouldShowRegulationsModal,
        updateParticipantData,
        setToken: setTokenFn,
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
