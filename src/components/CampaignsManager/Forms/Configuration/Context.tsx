import React, { createContext, useState, useContext } from 'react';

interface ConfigurationFormContextState {
  test: string;
}

const ConfigurationFormContext = createContext<ConfigurationFormContextState>(
  {} as ConfigurationFormContextState,
);

export const ConfigurationFormProvider: React.FC = ({ children }) => {
  const [test, setTest] = useState('');

  return (
    <ConfigurationFormContext.Provider value={{ test }}>
      {children}
    </ConfigurationFormContext.Provider>
  );
};

export const useConfigurationForm = (): ConfigurationFormContextState => {
  const context = useContext(ConfigurationFormContext);
  if (!context) {
    throw new Error(
      'useConfigurationForm must be used within a ConfigurationProviderProvider',
    );
  }
  return context;
};
