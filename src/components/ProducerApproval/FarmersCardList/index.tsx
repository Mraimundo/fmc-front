import React from 'react';
import { Farmer } from 'services/producer-approval/interface';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import ReactLoading from 'react-loading';
import { MdSentimentDissatisfied } from 'react-icons/md';
import Card from './Card';

import { Container } from './styles';

interface FarmersCardListProps {
  farmers: Farmer[];
}

const FarmersCardList: React.FC<FarmersCardListProps> = ({ farmers }) => {
  const { isFetching } = useFarmersContext();

  return (
    <Container>
      {!isFetching &&
        farmers.map(farmer => <Card key={farmer.id} data={farmer} />)}

      {isFetching && (
        <ReactLoading
          className="_loading"
          type="bars"
          height={32}
          width={32}
          color="#2c2b2b"
        />
      )}

      {!isFetching && farmers.length < 1 && (
        <>
          <MdSentimentDissatisfied size={32} />
          <h4>Sem Resultados</h4>
        </>
      )}
    </Container>
  );
};

export default FarmersCardList;
