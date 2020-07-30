import React, { createContext, useState, useContext } from 'react';

interface RegulationFormContextState {
  test: string;
}

const RegulationFormContext = createContext<RegulationFormContextState>(
  {} as RegulationFormContextState,
);

export const RegulationFormProvider: React.FC = ({ children }) => {
  const [test] = useState('');

  return (
    <RegulationFormContext.Provider value={{ test }}>
      {children}
    </RegulationFormContext.Provider>
  );
};

export const useRegulationForm = (): RegulationFormContextState => {
  const context = useContext(RegulationFormContext);
  if (!context) {
    throw new Error(
      'useRegulationForm must be used within a RegulationProviderProvider',
    );
  }
  return context;
};
