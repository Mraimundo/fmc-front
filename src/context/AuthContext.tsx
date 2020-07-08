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
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [participant, setParticipant] = useState<Participant>(
    {} as Participant,
  );

  const [shouldShowRegulationsModal, setShouldShowRegulationsModal] = useState(
    false,
  );

  const updateParticipantData = useCallback(async () => {
    const [data, isThereRegulationsToAccept] = await Promise.all([
      getLoggedParticipant(),
      isThereAnyRegulationToAccept(),
    ]);
    if (!data.id) {
      setTimeout(() => {
        updateParticipantData();
      }, 5000);
      return;
    }
    setShouldShowRegulationsModal(isThereRegulationsToAccept);
    setParticipant(data);
  }, []);

  const [apiToken, setApiToken] = useState<string>(() => {
    const token = localStorage.getItem('@Vendavall:token');

    if (token) {
      setToken(token);
      return token;
    }

    return '';
  });

  useEffect(() => {
    setTimeout(() => {
      if (apiToken) updateParticipantData();
    }, 1000);
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
    isTokenValid().then(isValid => {
      if (!isValid) {
        signOut();
        addToast({
          title: 'Sua Sessão expirou, por favor refaça seu login',
          type: 'error',
        });
      }
    });
  }, [addToast, signOut, apiToken]);

  return (
    <AuthContext.Provider
      value={{
        participant,
        signed: !!apiToken,
        signIn,
        signOut,
        shouldShowRegulationsModal,
        updateParticipantData,
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
