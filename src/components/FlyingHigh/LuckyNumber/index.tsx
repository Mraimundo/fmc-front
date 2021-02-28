import React from 'react';

import { Container } from './styles';

import ReactLoading from 'react-loading';

interface LuckyNumberProps {
  participantName: string;
  luckyNumber: number;
  loading?: boolean;
};

const LuckyNumber: React.FC<LuckyNumberProps> = ({ participantName, luckyNumber, loading = false}) => {
  return (
    <Container>
      {!loading && (
        <>
          <h3>{participantName}</h3>
          <p>NÚMERO DA SORTE</p>
          <h2>{luckyNumber}</h2>
        </>
      )}
      {loading && <ReactLoading type="bars" color="#3B302A" height={48} width={48} />}
    </Container>
  );
}

export default LuckyNumber;
