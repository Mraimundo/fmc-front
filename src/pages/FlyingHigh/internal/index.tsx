import React, { useEffect, useState } from 'react';

import FmcLogo from 'components/FyingHigh/FmcLogo';
import Info from 'components/FyingHigh/Info';
import HowToWin from 'components/FyingHigh/HowToWin';
import LuckyNumber from 'components/FyingHigh/LuckyNumber';

import getLuckyNumber from 'services/flying-high/getLuckyNumber';
import { Container, Box, Title } from './styles';

// import getLoggedParticipant from 'services/auth/getLoggedParticipant';

const FlyingHigh: React.FC = () => {
  const [luckyNumber, setLuckyNumber] = useState('');
  // const [participantName, setParticipantName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLuckyNumber = async () => {
      // const participant = await getLoggedParticipant();
      const num = await getLuckyNumber();
      setLuckyNumber(num);
      // setParticipantName(participant.name);
      setLoading(false);
    };
    fetchLuckyNumber();
  }, []);

  return (
    <Container>
      <FmcLogo />
      <Title>Promoção Juntos Voamos Mais Alto</Title>
      <Box>
        <h1>AGUARDANDO KV VOANDO ALTO</h1>
      </Box>
      <Info />
      {/* <LuckyNumber
        participantName={participantName}
        luckyNumber={luckyNumber}
        loading={loading}
      /> */}
      <HowToWin />
    </Container>
  );
};

export default FlyingHigh;
