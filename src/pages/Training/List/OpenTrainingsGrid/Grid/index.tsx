import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Training } from 'services/training/interfaces';
import transformer, {
  Response as Data,
} from 'services/training/transformers/toTrainingsGrid';

import { Container, MiniBox } from './styles';

interface Props {
  data: Training[];
}

const Grid: React.FC<Props> = ({ data }) => {
  const [gridData, setGridData] = useState<Data[]>([]);

  useEffect(() => {
    setGridData(transformer(data));
  }, [data]);

  return (
    <Container>
      {gridData.map(item => (
        <MiniBox key={`key-training-${item.id}`}>
          <img src={item.imageUrl} alt={item.title} />
          <span>{item.category.join(', ')} </span>
          <h3>{item.title}</h3>
          <div>
            <span>{`De ${item.startDate} até ${item.endDate}`} </span>
          </div>
          <Link to="/training/1">Participar</Link>
        </MiniBox>
      ))}
    </Container>
  );
};

export default Grid;
