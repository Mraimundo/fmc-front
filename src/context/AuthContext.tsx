import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import signInService from 'services/auth/signIn';
import isTokenValid from 'services/auth/isTokenValid';
import isThereAnyRegulationToAccept from 'services/register/regulation/isThereAnyRegulationToAccept';
import { getTokenSimulate } from 'services/participant-simulation';
import { fetchMenu } from 'state/modules/header/actions';

import getLoggedParticipant from 'services/auth/getLoggedParticipant';
import { Participant } from 'services/auth/interfaces/Participant';
import { setToken, setApiMode } from 'services/api';
import history from 'services/history';
import routeMap from 'routes/route-map';
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
  loading: boolean | undefined;
  shouldShowRegulationsModal: boolean;
  signIn(credentials: Credentials | CredentialsToken): Promise<void>;
  signOut(): void;
  simulating: boolean;
  simulate(participantId: number): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const [simulating, setSimulating] = useState(false);
  const [apiToken, setApiToken] = useState<string>('');
  const [participant, setParticipant] = useState<Participant>(
    {} as Participant,
  );
  const [shouldShowRegulationsModal, setShouldShowRegulationsModal] = useState(
    false,
  );
  const [loading, setLoading] = useState<boolean | undefined>(undefined);

  const refreshParticipant = useCallback(async () => {
    setLoading(true);
    const [data, isThereRegulationsToAccept] = await Promise.all([
      getLoggedParticipant(),
      isThereAnyRegulationToAccept(),
    ]);
    setShouldShowRegulationsModal(isThereRegulationsToAccept);
    setParticipant(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@Vendavall:token');
    if (token) {
      setApiToken(token);
    }
  }, []);

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
    if (simulating) {
      setApiMode('write');
      const token = localStorage.getItem('@Vendavall:token');
      if (token) {
        setApiToken(token);
        setTimeout(() => {
          setSimulating(false);
          history.push(routeMap.participantSimulation);
        }, 600);
      }
      return;
    }
    localStorage.removeItem('@Vendavall:token');

    setToken('');
    setApiToken('');
  }, [simulating]);

  const simulate = useCallback(async (participantId: number): Promise<void> => {
    const token = await getTokenSimulate(participantId);
    setSimulating(true);
    setApiMode('readonly');
    setApiToken(token);
    setTimeout(() => {
      history.push('/home');
    }, 700);
  }, []);

  const { addToast } = useToast();

  useEffect(() => {
    setLoading(true);
    if (!apiToken) {
      setLoading(false);
      return;
    }
    setToken(apiToken);
    setTimeout(() => {
      isTokenValid()
        .then(isValid => {
          if (!isValid) {
            signOut();
            addToast({
              title: 'Sua Sess??o expirou, por favor refa??a seu login',
              type: 'error',
            });
            return;
          }
          refreshParticipant();
          dispatch(fetchMenu());
        })
        .finally(() => {
          setLoading(false);
        });
    }, 300);
  }, [addToast, signOut, apiToken, refreshParticipant, dispatch]);

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
        simulate,
        loading,
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
