import React from 'react';
import { TrainingProvider } from './Context';
import Main from './Main';

const Training: React.FC = () => {
  return (
    <TrainingProvider>
      <Main />
    </TrainingProvider>
  );
};

export default Training;
