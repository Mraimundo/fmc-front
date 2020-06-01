import React, { createContext, useCallback, useState, useContext } from 'react';
import signInService, {
  SignInResponse,
  Participant,
} from 'services/auth/signIn';

interface Credentials {
  cpf: string;
  password: string;
}

interface AuthContextState {
  participant: Participant;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<SignInResponse>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const participant = localStorage.getItem('@GoBarber:participant');

    if (token && participant) {
      return { token, participant: JSON.parse(participant) };
    }

    return {} as SignInResponse;
  });

  const signIn = useCallback(async ({ cpf, password }: Credentials) => {
    const { token, participant } = await signInService({ cpf, password });

    localStorage.setItem('@Vendavall:token', token);
    localStorage.setItem('@Vendavall:participant', JSON.stringify(participant));

    setData({ token, participant });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Vendavall:token');
    localStorage.removeItem('@Vendavall:participant');

    setData({} as SignInResponse);
  }, []);

  return (
    <AuthContext.Provider
      value={{ participant: data.participant, signIn, signOut }}
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
