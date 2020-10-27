import React, { useEffect } from 'react';
import { useToast } from 'context/ToastContext';
import { useParams } from 'react-router-dom';

import SpinModal from 'components/SpinningWheel/Modal';
import { useTraining } from '../Context';
import Header from './Header';
import Body from './Body';
import Documents from './Documents';
import Quiz from './Quiz';
import SuccessModal from './SuccessModal';

import { Container, Content, Separator } from './styles';

interface Params {
  id: string;
}

const Main: React.FC = () => {
  const params = useParams<Params>();
  const { addToast } = useToast();

  const {
    loadTraining,
    successModalOpened,
    closeSuccessModal,
    certificate,
    spinData,
    spinModalOpened,
    closeSpinModal,
    spin,
  } = useTraining();

  useEffect(() => {
    if (!params.id) return;
    loadTraining(parseInt(params.id, 0));
  }, [params, addToast, loadTraining]);

  return (
    <Container>
      <Content>
        <h3>Treinamentos</h3>
        <Header />
        <Body />
        <Separator />
        <Documents />
        <Quiz />
        <SuccessModal
          isOpen={successModalOpened}
          onRequestClose={closeSuccessModal}
          certificate={certificate}
        />
        {spinData && (
          <SpinModal
            isOpen={spinModalOpened}
            onRequestClose={closeSpinModal}
            spinData={spinData}
            spin={spin}
          />
        )}
      </Content>
    </Container>
  );
};

export default Main;
