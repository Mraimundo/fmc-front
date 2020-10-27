import React, { useCallback, useState } from 'react';

import baseImg from 'assets/images/spinning-wheel/base.svg';
import borderLightsImg from 'assets/images/spinning-wheel/border-lights.png';
import spinButtonImg from 'assets/images/spinning-wheel/spin-button.png';
import stopArrowImg from 'assets/images/spinning-wheel/stop-arrow.png';
import closeButtonImg from 'assets/images/spinning-wheel/close.svg';

import { Spin } from 'services/spinningWheel/interfaces';
import { useToast } from 'context/ToastContext';
import Pie from './Pie';

import {
  Container,
  SpinContainer,
  StopArrow,
  BorderLights,
  SpinButton,
  Base,
  Pizza,
  Instructions,
  InstructionContent,
  CloseButton,
} from './styles';

interface Props {
  spinData: Spin;
  spin(spinId: number): Promise<{ prizeId: number }>;
  close(): void;
  className?: string;
}

const fixedSpins = 360 * 7;

const Component: React.FC<Props> = ({ spinData, spin, className, close }) => {
  const [alreadyTried, setAlreadyTried] = useState(false);
  const [degsToRotate, setDegsToRotate] = useState(0);
  const [winner, setWinner] = useState<{ prizeId: number } | null>(null);
  const { addToast } = useToast();

  const handleSpinClick = useCallback(async (): Promise<void> => {
    if (alreadyTried) return;
    setDegsToRotate(fixedSpins);

    try {
      const numberOfSlices = spinData.prizes.length;

      const prize = await spin(spinData.id);

      const reverseArrayPositionToStop =
        [...spinData.prizes]
          .reverse()
          .findIndex(item => item.id === prize.prizeId) + 1;

      if (!prize || reverseArrayPositionToStop === 0) {
        throw new Error();
      }

      const middleOfTheSlice = 360 / numberOfSlices / 2;

      const stopValue =
        (360 / numberOfSlices) * reverseArrayPositionToStop - middleOfTheSlice;

      setDegsToRotate(fixedSpins + stopValue);
      setWinner(prize);
      setAlreadyTried(true);
    } catch {
      addToast({
        title:
          'Falha ao obter Prêmio, por favor tente novamente ou contate o suporte!',
        type: 'error',
      });
      setDegsToRotate(0);
    }
  }, [addToast, spin, spinData, alreadyTried]);

  return (
    <Container className={className}>
      <SpinContainer>
        <StopArrow src={stopArrowImg} />
        <BorderLights src={borderLightsImg} />
        <SpinButton src={spinButtonImg} onClick={handleSpinClick} />
        <Pizza degsToRotate={degsToRotate}>
          <Pie values={spinData.prizes} winner={winner} />
        </Pizza>
        <Instructions>
          <CloseButton src={closeButtonImg} onClick={close} />
          <InstructionContent>
            <h3>Roleta Premiada</h3>
            <p>
              Você se engajou e demonstrou conhecimentos. Chegou a hora de
              tentar a sorte na Roleta Premiada
            </p>
          </InstructionContent>
        </Instructions>
      </SpinContainer>
      <Base src={baseImg} />
    </Container>
  );
};

export default Component;
