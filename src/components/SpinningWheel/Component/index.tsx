import React from 'react';

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
  /*


  */
  return (
    <Container>
      <SpinContainer>
        <StopArrow src={stopArrowImg} />
        <BorderLights src={borderLightsImg} />
        <SpinButton src={spinButtonImg} />
        <Pizza>
          <Pie />
        </Pizza>
      </SpinContainer>
      <Base src={baseImg} />
    </Container>
  );
};

export default Component;
