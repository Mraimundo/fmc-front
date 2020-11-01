import React, { useCallback, useState } from 'react';

import baseImg from 'assets/images/spinning-wheel/base.svg';
import borderLightsImg from 'assets/images/spinning-wheel/border-lights.png';
import spinButtonImg from 'assets/images/spinning-wheel/spin-button.png';
import stopArrowImg from 'assets/images/spinning-wheel/stop-arrow.png';
import closeButtonImg from 'assets/images/spinning-wheel/close.svg';

import { Spin } from 'services/spinning-wheel/interfaces';
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
  const [spinTries, setSpinTries] = useState(1);
  const [degsToRotate, setDegsToRotate] = useState(0);
  const [winner, setWinner] = useState<{ prizeId: number } | null>(null);
  const { addToast } = useToast();

  const handleSpinClick = useCallback(async (): Promise<void> => {
    if (alreadyTried) return;
    setAlreadyTried(true);

    setDegsToRotate(fixedSpins * spinTries);
    setSpinTries(spinTries + 1);

    setWinner(null);

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

      setDegsToRotate(oldValue => oldValue + stopValue);
      setTimeout(() => {
        setWinner(prize);
        const foundPrize = spinData.prizes.find(
          item => item.id === prize.prizeId,
        );
        if (foundPrize?.value?.toLowerCase() === 'tente novamente') {
          setAlreadyTried(false);
        }
      }, 4800);
    } catch {
      addToast({
        title:
          'Falha ao obter Prêmio, por favor tente novamente ou contate o suporte!',
        type: 'error',
      });
      setAlreadyTried(false);
      setDegsToRotate(0);
    }
  }, [addToast, spin, spinData, alreadyTried, spinTries]);

  const getSpinDescription = useCallback(
    (_winner: { prizeId: number } | null): string => {
      if (_winner === null) {
        return 'Você se engajou e demonstrou conhecimentos. Chegou a hora de tentar a sorte na Roleta Premiada';
      }

      const prize = spinData.prizes.find(item => item.id === _winner.prizeId);

      if (prize?.value?.toLowerCase() === 'tente novamente') {
        return 'Quase. Mas vamos lá, mais uma chance de girar e ganhar!';
      }

      if (!prize?.winner) {
        return 'Não foi dessa vez. Continue participando dos treinamentos para garantir novas chances!';
      }

      return 'Você ganhou pontos extras com a Roleta Premiada! Em breve, seu extrato exibirá a pontuação.';
    },
    [spinData.prizes],
  );

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
            <p>{getSpinDescription(winner)}</p>
          </InstructionContent>
        </Instructions>
      </SpinContainer>
      <Base src={baseImg} />
    </Container>
  );
};

export default Component;
