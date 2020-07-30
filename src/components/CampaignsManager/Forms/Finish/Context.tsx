import React, { createContext, useState, useContext } from 'react';

interface FinishFormContextState {
  test: string;
}

const FinishFormContext = createContext<FinishFormContextState>(
  {} as FinishFormContextState,
);

export const FinishFormProvider: React.FC = ({ children }) => {
  const [test] = useState('');

  return (
    <FinishFormContext.Provider value={{ test }}>
      {children}
    </FinishFormContext.Provider>
  );
};

export const useFinishForm = (): FinishFormContextState => {
  const context = useContext(FinishFormContext);
  if (!context) {
    throw new Error(
      'useFinishForm must be used within a ResultsProviderProvider',
    );
  }
  return context;
};
