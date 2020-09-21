import React from 'react';

import { useAuth } from 'context/AuthContext';

import DefaultHome from './Default';
import FmcTeamHome from './FmcTeam';

const Home: React.FC = () => {
  const { participant } = useAuth();

  return participant.profile === 'FMC' ? <FmcTeamHome /> : <DefaultHome />;
};

export default Home;
