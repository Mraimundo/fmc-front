import React, { useEffect, useState } from 'react';

import img1 from 'assets/images/fmcProdutor/howParticipate__steps--1.png';
import img2 from 'assets/images/fmcProdutor/howParticipate__steps--2.png';
import img3 from 'assets/images/fmcProdutor/howParticipate__steps--3.png';


import { StepsContainer, StepsContent, StepsTitle, StepsList, StepsListItem } from './styles';

const Steps: React.FC = () => {

  return (
    <StepsContainer>
      <StepsContent>
        <StepsTitle> Veja como é fácil participar </StepsTitle>
        <StepsList>
          <StepsListItem>
            <img src={img1} alt=""/>
            <h3>Upload de NF</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </StepsListItem>
          <StepsListItem>
            <img src={img2} alt=""/>
            <h3> Apuração de dados </h3>
            <p>Lorem ipsum dolor sdadsßsit amet, consectetur adipiscing elit, sed do eiussasod tempor incididunt ut labore et dolore magna aliqua. </p>
          </StepsListItem>
          <StepsListItem>
            <img src={img3} alt=""/>
            <h3> Apuração de dados </h3>
            <p>Lorem ipsum dolor sdadsßsit amet, consectetur adipiscing elit, sed do eiussasod tempor incididunt ut labore et dolore magna aliqua. </p>
          </StepsListItem>
        </StepsList>
      </StepsContent>
    </StepsContainer>
  );
};

export default Steps;
