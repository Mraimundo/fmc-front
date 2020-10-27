import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import backgroundDescription from 'assets/images/spinning-wheel/background-description.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 372px;
  justify-content: center;

  h3 {
    color: #000;
  }

  position: relative;
`;

export const SpinContainer = styled.div`
  position: relative;
  width: 303px;
  height: 305px;
  margin-top: 20px;
  z-index: 2;

  @media screen and (max-width: 600px) {
    margin-top: 196px;
  }
`;

export const StopArrow = styled.img`
  z-index: 4;
  position: absolute;
  width: 94px;
  position: absolute;
  left: 50%;
  transform: translateX(calc(-50% - 4px));
  top: -20px;
`;

export const StopArrow2 = styled(ReactSVG)`
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  top: -9px;

  #Grupo_3052 {
    stroke: blue;
  }

  path[data-name='Caminho 4721'] {
    fill: yellow;
  }

  path[data-name='Caminho 4722'] {
    fill: transparent;
  }

  path[data-name='Caminho 4723'] {
    fill: transparent;
  }

  path[data-name='Caminho 4725'] {
    fill: transparent;
  }

  path[data-name='Caminho 4724'] {
    stroke: blue;
    fill: transparent;
  }
`;

export const BorderLights = styled.img`
  position: absolute;
  width: 337px;
  top: -9px;
  left: -17px;
  z-index: 3;
`;

export const SpinButton = styled.img`
  position: absolute;
  z-index: 3;
  width: 140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  &:active {
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

export const Base = styled(ReactSVG)`
  position: absolute;
  z-index: 1;
  bottom: -7px;

  @media screen and (max-width: 600px) {
    bottom: -186px;
  }
`;

interface PizzaProps {
  degsToRotate: number;
}
export const Pizza = styled.div<PizzaProps>`
  position: absolute;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  top: 18px;
  left: 16px;
  z-index: 2;

  transition: all 5s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: rotateZ(${({ degsToRotate }) => `${degsToRotate}deg`});
`;

export const Instructions = styled.div`
  position: absolute;
  /*background: linear-gradient(37deg, rgb(246, 0, 19) 0%, rgb(176, 5, 20) 100%);*/
  background: url(${backgroundDescription});

  top: 11px;
  left: -251px;
  height: 260px;
  display: flex;
  width: 400px;
  border-radius: 18px;

  @media screen and (max-width: 600px) {
    transform: rotateZ(90deg);
    left: -49px;
    height: 290px;
    top: -140px;
    background-size: cover;
  }
`;

export const InstructionContent = styled.div`
  height: fit-content;
  margin-top: 70px;
  margin-left: 42px;

  > h3 {
    font-size: 22px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: #fff;
    text-transform: uppercase;
  }

  > p {
    font-family: ${({ theme }) => theme.font.fontFamily.medium};
    font-size: 14px;
    margin-top: 8px;
    max-width: 202px;
  }

  @media screen and (max-width: 600px) {
    transform: rotateZ(-90deg);
    margin-top: 95px;
    margin-left: 0px;

    > p {
      max-width: 234px;
    }
  }
`;

export const CloseButton = styled(ReactSVG)`
  position: absolute;
  top: 21px;
  left: 23px;
  cursor: pointer;
`;
