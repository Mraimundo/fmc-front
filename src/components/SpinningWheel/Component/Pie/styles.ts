import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 270px;
  position: relative;
`;

interface PieProps {
  rotate: number;
  size: number;
  index: number;
  length: number;
}

export const PieSlice = styled.div<PieProps>`
  position: absolute;
  width: 270px;
  height: 270px;
  border-radius: 100%;
  clip: rect(0px, 270px, 270px, 135px);
  transform: rotate(${({ rotate }) => `${rotate}deg`});

  > div {
    transition: all 1s;
    position: absolute;
    width: 270px;
    height: 270px;
    border-radius: 100%;
    clip: rect(0px, 135px, 270px, 0px);
    background-color: ${({ index }) =>
      index % 2 === 0 ? '#BEC0C2' : '#FA0014'};
    transform: rotate(${({ size }) => `${size}deg`});

    &::before {
      content: 'test-${({ index }) => `${index}`}';
      position: absolute;
      color: blue;
      font-size: 16px;
      transform: rotate(${({ size }) => `-${size / 2}deg`});

      left: -22px;
      top: 72px;

      /*teste*/
      width: calc(270px / ${({ length }) => length});
      height: calc(270px / ${({ length }) => length});
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      /*FImTEste*/

      ${({ length }) =>
        length > 2 &&
        css`
          left: 40px;
          top: 40px;
        `}

      ${({ length }) =>
        length > 4 &&
        css`
          left: 66px;
          top: 30px;
        `}

      ${({ length }) =>
        length > 6 &&
        css`
          left: 82px;
          top: 32px;
        `}

        ${({ length }) =>
          length > 8 &&
          css`
            left: 91px;
            top: 29px;
          `}
    }
  }
`;
