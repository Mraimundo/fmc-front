import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

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
`;

export const StopArrow = styled.img`
  z-index: 3;
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
  bottom: 0;
`;

interface PizzaProps {
  degsToRotate: number;
}
export const Pizza = styled.div<PizzaProps>`
  /*background: blue;*/
  position: absolute;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  top: 18px;
  left: 16px;
  z-index: 2;

  transition: all 5s cubic-bezier(0.25, 0.1, 0.25, 1);

  // transform: rotateZ(0deg);
  transform: rotateZ(${({ degsToRotate }) => `${degsToRotate}deg`});

  /*animation: spin 8s linear forwards;*/
  /*@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(360deg);
    }
    10% {
      transform: rotate(720deg);
    }
    20% {
      transform: rotate(1080deg);
    }
    30% {
      transform: rotate(1440deg);
    }
    40% {
      transform: rotate(1800deg);
    }
    50% {
      transform: rotate(2000deg);
    }
    60% {
      transform: rotate(2200deg);
    }
    70% {
      transform: rotate(2300deg);
    }
    80% {
      transform: rotate(2380deg);
    }
    90% {
      transform: rotate(2440deg);
    }
    100% {
      transform: rotate(2480deg);
    }
  }*/
`;
