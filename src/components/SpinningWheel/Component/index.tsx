import React, { useCallback, useState } from 'react';

import { ReactSVG } from 'react-svg';

import baseImg from 'assets/images/spinning-wheel/base.svg';
import borderLightsImg from 'assets/images/spinning-wheel/border-lights.png';
import spinButtonImg from 'assets/images/spinning-wheel/spin-button.png';
import stopArrowImg from 'assets/images/spinning-wheel/stop-arrow.png';

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

const Component: React.FC = () => {
  const [degsToRotate, setDegsToRotate] = useState(0);

  const spin = useCallback((degs: number): void => {
    setDegsToRotate(degs);
  }, []);

  const fixedSpins = 360 * 7;
  const numberOfSlices = 6;
  const reverseArrayPositionToStop = 4;
  const middleOfTheSlice = 360 / numberOfSlices / 2;
  const stopValue =
    (360 / numberOfSlices) * reverseArrayPositionToStop - middleOfTheSlice;

  return (
    <Container>
      <SpinContainer>
        <StopArrow src={stopArrowImg} />
        <BorderLights src={borderLightsImg} />
        <SpinButton
          src={spinButtonImg}
          onClick={() => spin(fixedSpins + stopValue)}
        />
        <Pizza degsToRotate={degsToRotate}>
          <Pie />
        </Pizza>
      </SpinContainer>
      <Base src={baseImg} />
    </Container>
  );
};

export default Component;
