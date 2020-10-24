import React, { useCallback, useState } from 'react';

import baseImg from 'assets/images/spinning-wheel/base.svg';
import borderLightsImg from 'assets/images/spinning-wheel/border-lights.png';
import spinButtonImg from 'assets/images/spinning-wheel/spin-button.png';
import stopArrowImg from 'assets/images/spinning-wheel/stop-arrow.png';

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
} from './styles';

interface Props {
  values: string[];
  spin(): Promise<string>;
}

const fixedSpins = 360 * 7;

const Component: React.FC<Props> = ({ values, spin }) => {
  const [alreadyTried, setAlreadyTried] = useState(false);
  const [degsToRotate, setDegsToRotate] = useState(0);
  const { addToast } = useToast();

  const handleSpinClick = useCallback(async (): Promise<void> => {
    if (alreadyTried) return;
    setDegsToRotate(fixedSpins);

    try {
      const numberOfSlices = values.length;

      const prize = await spin();

      const reverseArrayPositionToStop =
        [...values].reverse().indexOf(prize) + 1;

      if (!prize || reverseArrayPositionToStop === 0) {
        throw new Error();
      }

      const middleOfTheSlice = 360 / numberOfSlices / 2;

      const stopValue =
        (360 / numberOfSlices) * reverseArrayPositionToStop - middleOfTheSlice;

      setDegsToRotate(fixedSpins + stopValue);
      setAlreadyTried(true);
    } catch {
      addToast({
        title:
          'Falha ao obter Prêmio, por favor tente novamente ou contate o suporte!',
        type: 'error',
      });
      setDegsToRotate(0);
    }
  }, [addToast, spin, values, alreadyTried]);

  return (
    <Container>
      <SpinContainer>
        <StopArrow src={stopArrowImg} />
        <BorderLights src={borderLightsImg} />
        <SpinButton src={spinButtonImg} onClick={handleSpinClick} />
        <Pizza degsToRotate={degsToRotate}>
          <Pie values={values} />
        </Pizza>
      </SpinContainer>
      <Base src={baseImg} />
    </Container>
  );
};

export default Component;
