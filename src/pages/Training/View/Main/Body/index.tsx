import React from 'react';
import parser from 'html-react-parser';
import { useTraining } from '../../Context';
import { Container, Player } from './styles';

const Body: React.FC = () => {
  const { training, setVideoWatched } = useTraining();

  return (
    <Container>
      <h4>Conteúdo teórico</h4>
      <h3>{training?.summary}</h3>
      <div>
        {training?.videoUrl ? (
          <div>
            <Player
              url={training.videoUrl}
              className="video-player"
              controls
              onEnded={() => setVideoWatched()}
            />
          </div>
        ) : (
          <div>
            <img src={training?.imageUrl} alt="Imagem do treinamento" />
          </div>
        )}
        <p>{parser(training?.body || '')}</p>
      </div>
    </Container>
  );
};

export default Body;
