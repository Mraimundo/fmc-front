import React, { createContext, useState, useContext } from 'react';

interface ResultsFormContextState {
  test: string;
}

const ResultsFormContext = createContext<ResultsFormContextState>(
  {} as ResultsFormContextState,
);

export const ResultsFormProvider: React.FC = ({ children }) => {
  const [test, setTest] = useState('');

  return (
    <ResultsFormContext.Provider value={{ test }}>
      {children}
    </ResultsFormContext.Provider>
  );
};

export const useResultsForm = (): ResultsFormContextState => {
  const context = useContext(ResultsFormContext);
  if (!context) {
    throw new Error(
      'useResultsForm must be used within a ResultsProviderProvider',
    );
  }
  return context;
};
