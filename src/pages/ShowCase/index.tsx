import React from 'react';
import { useAuth } from 'context/AuthContext';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

const ShowCase: React.FC = () => {
  const { participant } = useAuth();

  return participant.profile === 'FMC' ? <Layout2 /> : <Layout1 />;
};

export default ShowCase;
