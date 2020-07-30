import React, { createContext, useState, useContext } from 'react';

interface ComunicationFormContextState {
  test: string;
}

const ComunicationFormContext = createContext<ComunicationFormContextState>(
  {} as ComunicationFormContextState,
);

export const ComunicationFormProvider: React.FC = ({ children }) => {
  const [test] = useState('');

  return (
    <ComunicationFormContext.Provider value={{ test }}>
      {children}
    </ComunicationFormContext.Provider>
  );
};

export const useComunicationForm = (): ComunicationFormContextState => {
  const context = useContext(ComunicationFormContext);
  if (!context) {
    throw new Error(
      'useComunicationForm must be used within a RegulationProviderProvider',
    );
  }
  return context;
};
