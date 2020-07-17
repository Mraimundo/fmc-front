import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import startTraining from 'services/training/startTraining';
import history from 'services/history';

import { Training, TRAINING_STATUS } from 'services/training/interfaces';
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

  const handleStartTraining = useCallback((trainingId: number) => {
    startTraining(trainingId);
    history.push(`/training/${trainingId}`);
  }, []);

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
          <button
            type="button"
            onClick={() => handleStartTraining(item.id)}
            disabled={
              item.status === TRAINING_STATUS.INITIATED && item.finished
            }
          >
            Participar
          </button>
        </MiniBox>
      ))}
    </Container>
  );
};

export default Grid;
