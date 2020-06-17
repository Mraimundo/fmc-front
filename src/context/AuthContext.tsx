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
import Layout from 'pages/_layouts';
import isThereAnyRegulationToAccept from 'services/register/regulation/isThereAnyRegulationToAccept';

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
  shouldShowRegulationsModal: boolean;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
  updateParticipantData(): void;
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
  const [shouldShowRegulationsModal, setShouldShowRegulationsModal] = useState(
    false,
  );

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
    console.log('opa4');
    const [data, isThereRegulationsToAccept] = await Promise.all([
      getLoggedParticipant(),
      isThereAnyRegulationToAccept(),
    ]);
    if (!data.id) {
      setTimeout(() => {
        updateParticipantData();
      }, 2000);
      return;
    }
    setShouldShowRegulationsModal(isThereRegulationsToAccept);
    setParticipant(data);
  }, []);

  const { addToast } = useToast();

  useEffect(() => {
    isTokenValid().then(isValid => {
      if (!isValid) {
        signOut();
        addToast({
          title: 'Sua Sessão expirou, por favor refaça seu login',
          type: 'error',
        });
      }
    });
  }, [addToast, signOut]);

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
      {apiToken ? <Layout>{children}</Layout> : children}
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
