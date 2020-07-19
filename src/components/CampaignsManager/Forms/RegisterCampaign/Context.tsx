import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';

interface RegisterFormContextState {
  test: string;
}

const RegisterFormContext = createContext<RegisterFormContextState>(
  {} as RegisterFormContextState,
);

export const RegisterFormProvider: React.FC = ({ children }) => {
  const [test, setTest] = useState('');

  return (
    <RegisterFormContext.Provider value={{ test }}>
      {children}
    </RegisterFormContext.Provider>
  );
};

export const useRegisterForm = (): RegisterFormContextState => {
  const context = useContext(RegisterFormContext);
  if (!context) {
    throw new Error(
      'useRegisterForm must be used within a RegisterProviderProvider',
    );
  }
  return context;
};
