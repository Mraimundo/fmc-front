import React, { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import DefaultHowParticipate from './Default';
import FmcProdutorHowParticipate from './FmcProdutor';


const HowParticipate: React.FC = () => {
  const { participant } = useAuth();

  return participant.profile === 'PRODUTOR' ? <FmcProdutorHowParticipate /> : <DefaultHowParticipate />;
};

export default HowParticipate;
